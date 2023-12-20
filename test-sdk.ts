import { NeynarAPIClient } from './build'

const client = new NeynarAPIClient('ntest')

client.searchChannels("ux").then((response) => {
  console.log("Search Results:", response);
});