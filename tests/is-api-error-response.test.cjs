const assert = require("node:assert/strict");
const { test } = require("node:test");
const axios = require("axios");
const { AxiosError, AxiosHeaders } = axios;
const { isApiErrorResponse } = require("../src/utils/is-api-error-response");
const { NeynarAPIClient } = require("../src/clients/NeynarAPIClient");
const { NeynarHubClient } = require("../src/clients/NeynarHubClient");
const { Configuration } = require("../src/clients/configuration");

function responseError(data) {
  const config = { headers: new AxiosHeaders() };
  return new AxiosError("Request failed with status code 502", "ERR_BAD_RESPONSE", config, undefined, {
    data,
    status: 502,
    statusText: "Bad Gateway",
    headers: {},
    config,
  });
}

const malformedBodies = [
  undefined, null, "", "<html>Bad Gateway</html>", 0, 42, false, true, [], {},
  { message: null }, { message: 42 },
];

for (const [name, guard] of [
  ["utility", isApiErrorResponse],
  ["API client", NeynarAPIClient.isApiErrorResponse],
  ["Hub client", NeynarHubClient.isApiErrorResponse],
]) {
  test(`${name} rejects non-API response bodies without throwing`, () => {
    for (const body of malformedBodies) {
      assert.equal(guard(responseError(body)), false, JSON.stringify(body));
    }
  });

  test(`${name} accepts an API error with a string message`, () => {
    for (const message of ["Invalid API key", ""]) {
      assert.equal(guard(responseError({ message })), true);
    }
  });

  test(`${name} rejects errors without an Axios response`, () => {
    for (const error of [undefined, null, new Error("offline"), new AxiosError("offline")]) {
      assert.equal(guard(error), false);
    }
  });
}

for (const Client of [NeynarAPIClient, NeynarHubClient]) {
  test(`${Client.name} preserves the original rejected HTTP error`, async () => {
    for (const body of [null, "<html>Bad Gateway</html>", 42, { message: "API error" }]) {
      const original = responseError(body);
      const http = axios.create({ adapter: async () => { throw original; } });
      new Client(new Configuration({ apiKey: "offline-test-key" }), { axiosInstance: http });
      await assert.rejects(http.get("/offline"), (error) => error === original);
    }
  });
}
