export const getPackageVersion = (packageName: string) => {
    try {
        const packageJson = require(`${packageName}/package.json`);
        return packageJson.version;
    } catch (error) {
        console.error(`Could not retrieve version for package '${packageName}': ${error}`);
        return null;
    }
};
