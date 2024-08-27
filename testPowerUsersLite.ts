import { NeynarAPIClient } from "./src/neynar-api/neynar-api-client";
import { isApiErrorResponse } from "./src/neynar-api/utils";

// Instantiate the client
const client = new NeynarAPIClient("YOUR_API_KEY"); // Replace with your Neynar API Key.

(async () => {
  try {
    const user = await client.fetchPowerUsersLite();

    // Stringify and log the response
    console.log(JSON.stringify(user));
  } catch (error) {
    // isApiErrorResponse can be used to check for Neynar API errors
    if (isApiErrorResponse(error)) {
      console.log("API Error", error.response.data);
    } else {
      console.log("Generic Error", error);
    }
  }
})();
