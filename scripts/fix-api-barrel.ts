import fs from "fs";
import path from "path";
import ts from "typescript";

type ExportFlags = {
  hasType: boolean;
  hasValue: boolean;
};

function getExportedSymbols(filePath: string): Map<string, ExportFlags> {
  const source = ts.createSourceFile(
    filePath,
    fs.readFileSync(filePath, "utf-8"),
    ts.ScriptTarget.Latest,
    true
  );
  const symbols = new Map<string, ExportFlags>();

  const mark = (name: string, kind: keyof ExportFlags) => {
    const current = symbols.get(name) ?? { hasType: false, hasValue: false };
    current[kind] = true;
    symbols.set(name, current);
  };

  for (const statement of source.statements) {
    const modifiers = (
      statement as ts.Statement & { modifiers?: ts.NodeArray<ts.ModifierLike> }
    ).modifiers;
    const isExported = modifiers?.some(
      (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword
    );
    if (!isExported) continue;

    if (ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) {
      mark(statement.name.text, "hasType");
    } else if (
      ts.isClassDeclaration(statement) ||
      ts.isFunctionDeclaration(statement) ||
      ts.isEnumDeclaration(statement)
    ) {
      if (statement.name) mark(statement.name.text, "hasValue");
    } else if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name)) {
          mark(declaration.name.text, "hasValue");
        }
      }
    }
  }

  return symbols;
}

function pascalCase(value: string): string {
  return value
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function uniqueExportName(
  originalName: string,
  moduleSpecifier: string,
  seenNames: Set<string>
): string {
  if (!seenNames.has(originalName)) return originalName;

  const moduleName = pascalCase(path.basename(moduleSpecifier));
  const preferredName = `${moduleName}${originalName}`;
  let candidate = preferredName;
  let suffix = 2;
  while (seenNames.has(candidate)) {
    candidate = `${preferredName}${suffix}`;
    suffix += 1;
  }
  return candidate;
}

function exportLine(
  kind: "type" | "value",
  originalName: string,
  exportedName: string,
  moduleSpecifier: string
): string {
  const exportKeyword = kind === "type" ? "export type" : "export";
  const exportName =
    originalName === exportedName
      ? originalName
      : `${originalName} as ${exportedName}`;
  return `${exportKeyword} { ${exportName} } from '${moduleSpecifier}';`;
}

function main() {
  const generatedRoot = path.resolve(process.cwd(), process.argv[2] ?? "src/api");
  const barrelPath = path.join(generatedRoot, "api.ts");
  const barrel = fs.readFileSync(barrelPath, "utf-8");
  const moduleSpecifiers = Array.from(
    barrel.matchAll(/^export \* from ['"](.+)['"];?$/gm),
    (match) => match[1]
  );

  if (moduleSpecifiers.length === 0) {
    return;
  }

  const firstExportIndex = barrel.search(/^export \* from/m);
  const header = barrel.slice(0, firstExportIndex).trimEnd();
  const seenTypeNames = new Set<string>();
  const seenValueNames = new Set<string>();
  const exportLines: string[] = [];
  let aliasedExportCount = 0;

  for (const moduleSpecifier of moduleSpecifiers) {
    const apiFile = path.join(generatedRoot, `${moduleSpecifier}.ts`);
    const exportedSymbols = getExportedSymbols(apiFile);

    for (const [symbolName, flags] of exportedSymbols) {
      if (flags.hasValue) {
        const exportedName = uniqueExportName(
          symbolName,
          moduleSpecifier,
          seenValueNames
        );
        if (exportedName !== symbolName) aliasedExportCount += 1;
        seenValueNames.add(exportedName);
        exportLines.push(
          exportLine("value", symbolName, exportedName, moduleSpecifier)
        );
      } else if (flags.hasType) {
        const exportedName = uniqueExportName(
          symbolName,
          moduleSpecifier,
          seenTypeNames
        );
        if (exportedName !== symbolName) aliasedExportCount += 1;
        seenTypeNames.add(exportedName);
        exportLines.push(
          exportLine("type", symbolName, exportedName, moduleSpecifier)
        );
      }
    }
  }

  fs.writeFileSync(barrelPath, `${header}\n\n${exportLines.join("\n")}\n`);
  if (aliasedExportCount > 0) {
    console.warn(
      `Aliased ${aliasedExportCount} duplicate exports in ${path.relative(
        process.cwd(),
        barrelPath
      )}.`
    );
  }
}

main();
