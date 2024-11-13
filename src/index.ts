const semver = require("semver");
const requiredVersion = require("../package.json").engines.node;

// Check Node.js version before requiring/doing anything else
if (!semver.satisfies(process.version, requiredVersion)) {
  console.error(
    `Unsupported Node.js version! Your version: ${process.version}. Required version: ${requiredVersion}.`
  );
  process.exit(1);
}

export * from "./clients";
export * from "./utils";
export * from "./types"
export { Configuration } from "./clients/configuration";
