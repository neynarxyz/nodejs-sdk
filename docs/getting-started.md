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

#### Install Neynar SDK and other dependencies

<details>
<summary>Install using npm</summary>
  <pre><code>
    npm i @neynar/nodejs-sdk axios
    npm i -D typescript ts-node
    </code></pre>
</details>

<details>
  <summary>Install using Yarn</summary>
  <pre><code>
    yarn add @neynar/nodejs-sdk axios
    yarn add -D typescript ts-node
    </code></pre>
</details>
<!-- Following text is indented with non-breaking spaces. -->
&nbsp;&nbsp;&nbsp;&nbsp;

### Let's use sdk to look up a user by their FID

Create index.ts file at root level

```bash
touch index.ts
```

Add following code in index.ts

```typescript
// index.ts

import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import { AxiosError } from "axios";

// Instantiate the client
const client = new NeynarAPIClient("<YOUR_API_KEY_HERE>"); // Replace with your Neynar API Key.

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

Run the project

```bash
npx ts-node index.ts
```

You should see a response like this. (You might not get beautified/ formated response since we `JSON.stringify` the response in order to log everything)

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

### Congratulation..!! 🎉 You successfully setup @neynar/nodejs-sdk and used it to look up a user by their FID.
