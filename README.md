# [@neynar/nodejs-sdk](https://www.npmjs.com/package/@neynar/nodejs-sdk)

@neynar/nodejs-sdk typescript-based, easy-to-use SDK built to interact with [Neynar API's](https://docs.neynar.com/).

## Instantiate Client

Just set the NEYNAR_API_KEY while instantiating a client and you are good to go.

```
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const neynarClient = new NeynarAPIClient(process.env.NEYNAR_API_KEY);

export default neynarClient;
```

## Use Client

Errors are propagated, so the user can handle them as they please, so use try/catch or .catch() and handle errors accordingly

```
try {
    const recentCasts = await neynarClient.fetchRecentCasts();
    console.log("Recent Casts", recentCasts);
} catch (error) {
    console.log((error as AxiosError).response?.data || (error as Error));
}
```
