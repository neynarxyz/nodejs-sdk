import {
  Cast,
  User,
  CastApi,
  UserApi,
  VerificationApi,
  NotificationsApi,
  ReactionsApi,
  FollowsApi,
  Configuration,
  ErrorRes,
  Reaction,
  ReactionWithCastMeta,
  VerificationResponseResult,
  ReactionsAndRecastsNotification,
  Recaster,
} from "./openapi";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";

const BASE_PATH = "https://api.neynar.com/v1";

export class NeynarV1APIClient {
  private readonly logger: Logger;

  public readonly apis: {
    cast: CastApi;
  };

  /**
   * Instantiates a NeynarV1APIClient
   *
   * Note: A Wallet must be provided if the API client is to mint new AuthTokens
   */
  constructor(
    apiKey: string,
    {
      logger = silentLogger,
      axiosInstance,
    }: { logger?: Logger; axiosInstance?: AxiosInstance } = {}
  ) {
    this.logger = logger;

    if (apiKey === "") {
      throw new Error(
        "Attempt to use an authenticated API method without first providing an api key"
      );
    }

    if (axiosInstance === undefined) {
      axiosInstance = axios.create();
    }
    axiosInstance.defaults.decompress = true;
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (NeynarV1APIClient.isApiErrorResponse(error)) {
          const apiErrors = error.response.data;
          this.logger.warn(`API errors: ${JSON.stringify(apiErrors)}`);
        }
        throw error;
      }
    );

    const config: Configuration = new Configuration({
      basePath: BASE_PATH,
      apiKey: apiKey,
    });
    this.apis = {
      cast: new CastApi(config, undefined, axiosInstance),
    };
  }

  /**
   * Utility for parsing errors returned by the Neynar API servers. Returns true
   * if the given error is caused by an error response from the server, and
   * narrows the type of `error` accordingly.
   */
  public static isApiErrorResponse(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any
  ): error is SetRequired<AxiosError<ErrorRes>, "response"> {
    if (!(error instanceof AxiosError)) return false;
    return (
      error.response?.data !== undefined && "message" in error.response.data
    );
  }

  /**
   * Fetches casts in a given thread. See [Neynar documentation](https://docs.neynar.com/reference/get-all-casts-in-thread)
   * Note that the parent provided by the caller is included in the response.
   */
  public async fetchCastsInThread(
    threadParent: Cast | { hash: string },
    viewerFid?: number
  ): Promise<Cast[] | null> {
    const response = await this.apis.cast.allCastsInThread({
      threadHash: threadParent.hash,
      viewerFid: viewerFid,
    });
    return response.data.result.casts;
  }

  /**
   * Gets all casts (including replies and recasts) created by the specified user. See [Neynar documentation](https://docs.neynar.com/reference/get-all-casts-from-user)
   *
   */
  public async *fetchCastsForUser(
    fid: number,
    options?: { parentUrl?: string; viewerFid?: number; pageSize?: number }
  ): AsyncGenerator<Cast, void, undefined> {
    let cursor: string | undefined;

    while (true) {
      const response = await this.apis.cast.casts({
        fid: fid,
        viewerFid: options?.viewerFid,
        parentUrl: options?.parentUrl,
        cursor: cursor,
        limit: options?.pageSize,
      });

      // yield current page of casts
      yield* response.data.result.casts;

      // prep for next page
      if (response.data.result.next.cursor === null) {
        break;
      }
      cursor = response.data.result.next.cursor;
    }
  }

  /**
   * Gets recent casts created by the specified user. See [Neynar documentation](https://docs.neynar.com/reference/get-recent-casts-from-protocol)
   *
   */
  public async *fetchRecentCasts(options?: {
    viewerFid?: number;
    pageSize?: number;
  }): AsyncGenerator<Cast, void, undefined> {
    let cursor: string | undefined;

    while (true) {
      // fetch one page of casts (with refreshed auth if necessary)
      const response = await this.apis.cast.recentCasts({
        viewerFid: options?.viewerFid,
        cursor: cursor,
        limit: options?.pageSize,
      });

      yield* response.data.result.casts;

      // prep for next page
      if (response.data.result.next.cursor === null) {
        break;
      }
      cursor = response.data.result.next.cursor;
    }
  }
}
