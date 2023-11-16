## Getting Started

Checkout the full github repo here:
https://github.com/neynarxyz/nodejs-sdk

### Installation

Install [ Nodejs](https://nodejs.org/en/download/package-manager), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (Optional, you can also use npm)

#### Initiallize project

```bash
mkdir get-started-with-neynar
cd get-started-with-neynar
npm init -y
npm install -g typescript
tsc --init
```

<details>
<summary>Install using npm</summary>
  <pre><code>
    npm i @neynar/nodejs-sdk dotenv axios
    npm i -D typescript ts-node @types/node
    </code></pre>
</details>

<details>
  <summary>Install using Yarn</summary>
  <pre><code>
    yarn add @neynar/nodejs-sdk dotenv axios
    yarn add -D typescript ts-node @types/node
    </code></pre>
</details>
<!-- Following text is indented with non-breaking spaces. -->
&nbsp;&nbsp;&nbsp;&nbsp;

After these steps you can see 3 files and 1 directory being generated

1. package.json (Feel free to update package details like description, author etc)
2. tsconfig.json
3. yarn.lock

#### Update tsconfig.json with following values (Feel free to set additional values)

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

#### Setup Environment

```bash
touch .env
vim .env
```

Either use vim or your favourite editor to add NEYNAR_API_KEY in .env file as shown in .env.example file

You can get the NEYNAR_API_KEY from our official site: https://neynar.com/

```ini
# .env.example file

NEYNAR_API_KEY= #add your api key here
```

Access the environment variables in the project

```bash
touch config.ts
```

Add following code in config.ts

```typescript
import { config } from "dotenv";
config();

export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
```

Congratulations..!! You have successfully done your installations and are ready to use environment variables in your project

### Let use sdk to look up a user by their fid

```bash
mkdir src
cd src
touch index.ts
```

Add following code in src/index.ts

```typescript
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import { AxiosError } from "axios";

import { NEYNAR_API_KEY } from "../config";

// Check if API key exists if not throw error
if (!NEYNAR_API_KEY) {
  throw new Error("NEYNAR_API_KEY must be defined");
}

// Instantiate the client
const client = new NeynarAPIClient(NEYNAR_API_KEY);

(async () => {
  try {
    // here 19960 (Required*) => User we are looking for.
    // 191 (Optional) => is viewer looking for the user.
    // Get more info @ https://docs.neynar.com/reference/user-v1
    const user = await client.lookupUserByFid(19960, 191);

    // Stringify and log the response
    console.log(JSON.stringify(user));
  } catch (error) {
    // Log the error
    console.log((error as AxiosError).response?.data);
  }
})();
```

#### Update script section in package.json

```json
{
  "scripts": {
    "start": "npx ts-node src/index.ts"
  }
}
```

Navigate back at root directory and run the script

```bash
cd ..
yarn start
```

You should see a response like this. (You might not get beautified/ formated response since we JSON.stringify the response in order to log everything)

```json
{
  "result": {
    "user": {
      "fid": 19960,
      "custodyAddress": "0xd1b702203b1b3b641a699997746bd4a12d157909",
      "username": "shreyas-chorge",
      "displayName": "Shreyas",
      "pfp": {
        "url": "https://i.imgur.com/LPzRlQl.jpg"
      },
      "profile": {
        "bio": {
          "text": "Everyday regular normal guy | 👨‍💻 @neynar",
          "mentionedProfiles": []
        }
      },
      "followerCount": 13,
      "followingCount": 55,
      "verifications": ["0xd1b702203b1b3b641a699997746bd4a12d157909"],
      "activeStatus": "inactive",
      "viewerContext": {
        "following": true,
        "followedBy": false
      }
    }
  }
}
```

### Congratulation..!! 🎉 You successfully setup @neynar/nodejs-sdk and used it to look up a user by their fid.
