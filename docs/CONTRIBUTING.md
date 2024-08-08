# Contributing to Neynar Node.js SDK

We welcome contributions to the Neynar Node.js SDK. This document provides guidelines and instructions for contributing.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- [Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (for OpenAPI Generator)

## Setting Up for Development

1. Fork the SDK repository from [@neynar/nodejs-sdk](https://github.com/neynarxyz/nodejs-sdk) to your GitHub account.
2. Clone your forked repository to your local machine.
3. Inside your local clone, initialize and update submodules, and install dependencies.

```bash
git submodule update --init --recursive
yarn install
```

## Contributing Guidelines

### Updating Auto-Generated Code

Auto-generated code is located in the following directories:

- `src/neynar-api/v1/openapi`
- `src/neynar-api/v2/openapi-farcaster`
- `src/neynar-api/v2/openapi-recommendation`

These are generated using [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli). To make changes, update the OpenAPI Specification (OAS) in the [OAS Repository](https://github.com/neynarxyz/oas). After updating the OAS, synchronize the OAS in your local clone of the SDK repository.

```bash
git submodule update --remote src/oas
```

### Generate code

After updating OAS code needs to be generated. Following command generates the code

- For v1 APIs
```bash
yarn generate:neynar-oas-v1-farcaster
```
-  For v2 APIs
```bash
yarn generate:neynar-oas-v2-farcaster
```
- For recommendation APIs
```bash
yarn generate:neynar-oas-v2-recommendation
```

### Writing Wrapper Code

#### New API defined in OAS

When a new API is added in the OAS, follow these steps:

1. A new API is generated under `src/neynar-api/v{version}/openapi/apis`.
2. If you created a new tag, add it to the `public readonly apis` property in the internal wrappers (`src/neynar-api/v{version}/client`).
3. Instantiate the new API in the constructor.
4. Write wrapper code for the new methods (`src/neynar-api/v{version}/client`).
5. Add corresponding wrapper code in the external wrapper (`src/neynar-api/neynar-api-client`).

#### Method Naming Guidelines

- Be descriptive with method names.
- Prepend `lookup` for GET APIs returning a single entity (e.g., `lookupUserByFid`).
- Use `fetch` for GET APIs returning multiple entities (e.g., `fetchRecentUsers`).
- Use `publish` for POST APIs (e.g., `publishCast`).
- Use `delete` for DELETE APIs (e.g., `deleteReactionFromCast`).
- Use `update` for PUT/PATCH APIs (e.g., `updateUser`).
- For bulk operations, use `fetchBulkX`, `updateBulkX`, etc.

#### Parameters Guidelines

- In methods on the wrapper client, all required parameters must be added first, followed by optional parameters, which should be encapsulated within an options object. For example, use `fetchUser(reqParam1, reqParam2, {optionalParam1, optionalParam2})`.

#### Adding a JS Docstring

When writing JS docstrings, adhere to the following guidelines:

1. **Instance Name**: Use **`client`** as the instance name in examples.
2. **Parameter Inclusion**: Include most parameters in examples, where applicable.
3. **Parameter Descriptions**:
   - Consistently describe **`viewerFid`** as "The FID of the user viewing this information, used for providing contextual data specific to the viewer."
   - For the **`limit`** parameter, include its default and maximum values.
   - For the **`cursor`** parameter, consistently describe it as "Pagination cursor for the next set of results, Omit this parameter for the initial request." In the example, add the cursor as **`// cursor: "nextPageCursor", // Pagination cursor for the next set of results, Omit this parameter for the initial request.`**
4. **[options] Description**: Describe **`[options]`** as "Optional parameters to tailor the request."
5. **Usage Examples**:
   - Provide only one example that demonstrates a practical application of the method with multiple parameters.
   - Include explanatory comments within the example code to clarify the purpose and usage of each line or significant code section.
6. **Neynar Documentation Reference**: Include a link to the Neynar documentation for additional information.

### Semantic Versioning

SemVer comprises three parts, X.Y.Z, where X, Y and Z are non-negative integers. This means that the primary or major version is X, and the minor version is Y. Bug fixes and patches are called version Z. So, it always takes the form of X.Y.Z, or major.minor.patch

Run following script to update the version

```bash
npx ts-node update-sdk-version.ts
```

Choose appropriate version. Script will auto commit the changes.

Note: Updating version is important to publish code to npm registry. If not updated deployment will fail and changes won't reflect in sdk

### Coding Standards

- Ensure code readability and maintainability.
- Comment your code where necessary, especially for complex logic.

### Submitting a Pull Request

- After completing your changes, commit them to your forked repository.
- Push your changes to your GitHub fork.
- Create a pull request from your fork to the main SDK repository.
- Make sure your code adheres to the project's coding standards.
- Provide a clear and detailed description of your changes in the pull request.
- Link any relevant issues in your pull request description.

### Publish a release

After PR gets approved and merged in main, follow following steps

1. Visit [Releases.](https://github.com/neynarxyz/nodejs-sdk/releases)
2. [Draft a new release.](https://github.com/neynarxyz/nodejs-sdk/releases/new)
3. Create a new Tag by clicking on `Choose a tag` dropdown, enter a new version. Make sure it is the exact same version as the updated semantic version of the SDK.
4. Click on `Generate release notes`. This will auto generate notes based on newly generated PR/PRs.
5. If everything looks good to go, click `Publish release`.

### Community Guidelines

- Follow the project's code of conduct.
- Report any issues or concerns to the maintainers.

Thank you for contributing to the Neynar Node.js SDK!
