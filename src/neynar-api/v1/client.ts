import {
  Cast,
  CastApi,
  UserApi,
  VerificationApi,
  NotificationsApi,
  ReactionsApi,
  FollowsApi,
  Configuration,
  ErrorRes,
  RecentUsersResponse,
  RecentCastsResponse,
  UserCastLikeResponse,
  CastsResponse,
  MentionsAndRepliesResponse,
  ReactionsAndRecastsResponse,
  CastLikesResponse,
  CastReactionsResponse,
  CastRecasterResponse,
  FollowResponse,
  UserResponse,
  CustodyAddressResponse,
  CastResponse,
  VerificationResponse,
  AllCastsInThreadResponse,
} from "./openapi";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";
import { getPackageVersion } from "../utils";

const BASE_PATH = "https://api.neynar.com/v1";

export class NeynarV1APIClient {
  private readonly logger: Logger;
  private readonly apiKey: string;

  public readonly apis: {
    user: UserApi;
    cast: CastApi;
    follows: FollowsApi;
    verification: VerificationApi;
    notifications: NotificationsApi;
    reactions: ReactionsApi;
  };

  /**
   * Instantiates a NeynarV1APIClient
   *
   * Note: A Wallet must be provided if the API client is to mint new AuthTokens
   */
  constructor(
    apiKey: string,
    {
      basePath,
      logger = silentLogger,
      axiosInstance,
    }: {
      basePath?: string;
      logger?: Logger;
      axiosInstance?: AxiosInstance;
    } = {}
  ) {
    this.logger = logger;
    if (apiKey === "") {
      throw new Error(
        "Attempt to use an authenticated API method without first providing an api key"
      );
    }

    this.apiKey = apiKey;
    const sdkVersion = getPackageVersion("@neynar/nodejs-sdk")

    if (axiosInstance === undefined) {
      axiosInstance = axios.create({
        headers: {
          'x-sdk-version': sdkVersion
        }
      });
    }
    axiosInstance.defaults.decompress = true;
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (NeynarV1APIClient.isApiErrorResponse(error)) {
          const apiErrors = error.response.data;
          this.logger.warn(`API errors: ${JSON.stringify(apiErrors)}`);
        } else {
          this.logger.warn(
            `Unexpected error: ${JSON.stringify(error, null, 2)}`
          );
        }
        throw error;
      }
    );
    axiosInstance.defaults.headers["x-sdk-version"] = sdkVersion;
    const config: Configuration = new Configuration({
      basePath: basePath ? `${basePath}/v1` : BASE_PATH,
      apiKey: apiKey,
    });

    this.apis = {
      user: new UserApi(config, undefined, axiosInstance),
      cast: new CastApi(config, undefined, axiosInstance),
      follows: new FollowsApi(config, undefined, axiosInstance),
      verification: new VerificationApi(config, undefined, axiosInstance),
      notifications: new NotificationsApi(config, undefined, axiosInstance),
      reactions: new ReactionsApi(config, undefined, axiosInstance),
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
    const data = error.response?.data;
    return typeof data === "object" && data !== null && "message" in data;
  }

  // ------------ User ------------

  /**
   * Retrieves a list of users in reverse chronological order based on sign up.
   *
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID (unique identifier) of the user viewing the data.
   *   This can be used for providing contextual information specific to the viewer.
   * @param {number} [options.limit] - The maximum number of users to be returned in the response.
   *   Defaults to 100, with a maximum allowable value of 1000.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<RecentUsersResponse>} A promise that resolves to a `RecentUsersResponse` object,
   *   containing the list of recent users and any associated metadata.
   *
   * @example
   * // Fetch a specific number of recent users, using viewer FID and a pagination cursor
   * client.fetchRecentUsers({
   *   viewerFid: 3,
   *   limit: 50, // Fetching up to 50 users
   *   // cursor: 'nextPageCursor' // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Recent Users:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/recent-users-v1)
   */
  public async fetchRecentUsers(options?: {
    viewerFid?: number;
    limit?: number;
    cursor?: string;
  }): Promise<RecentUsersResponse> {
    const response = await this.apis.user.recentUsers(
      this.apiKey,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `fetchUserReactions` instead.
   *
   * Retrieves all casts liked by a specific user. This method returns a list of casts that
   * the specified user has liked, with support for pagination through optional parameters.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose liked casts are to be fetched.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of liked casts to be returned in the response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<UserCastLikeResponse>} A promise that resolves to a `UserCastLikeResponse` object,
   *   containing the list of casts liked by the user and any associated metadata.
   *
   * @example
   * // Fetch a specific number of casts liked by a user, using viewer FID and a pagination cursor
   * client.fetchAllCastsLikedByUser(3, {
   *   viewerFid: 2,
   *   limit: 50, // Fetching up to 50 casts
   *   // cursor: 'nextPageCursor' // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Liked Casts:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-cast-likes-v1).
   */
  public async fetchAllCastsLikedByUser(
    fid: number,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<UserCastLikeResponse> {
    const response = await this.apis.user.userCastLikes(
      this.apiKey,
      fid,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `fetchBulkUsers` instead.
   *
   * Retrieves the specified user via their FID (if found).
   *
   * @param {number} fid - The FID of the user whose information is being retrieved.
   * @param {number} [viewerFid] - Optional. The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object,
   *   containing the metadata about the specified user.
   *
   * @example
   * // Example: Retrieve information about a user with FID 19960 as viewed by a user with FID 194
   * client.lookupUserByFid(19960, 194).then(response => {
   *   console.log('User Information:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-v1).
   */
  public async lookupUserByFid(
    fid: number,
    viewerFid?: number
  ): Promise<UserResponse> {
    const response = await this.apis.user.user(this.apiKey, fid, viewerFid);
    return response.data;
  }

  /**
   * Retrieves the specified user via their username (if found).
   *
   * @param {string} username - The username of the user whose information is being retrieved.
   * @param {number} [viewerFid] - Optional. The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object,
   *   containing the metadata about the user associated with the given username.
   *
   * @example
   * // Example: Retrieve information about a user with username 'manan' as viewed by a user with FID 3
   * client.lookupUserByUsername('manan', 3).then(response => {
   *   console.log('User Information:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-by-username-v1).
   */
  public async lookupUserByUsername(
    username: string,
    viewerFid?: number
  ): Promise<UserResponse> {
    const response = await this.apis.user.userByUsername(
      this.apiKey,
      username,
      viewerFid
    );
    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `fetchBulkUsers` instead.
   *
   * Retrieves the custody address for the specified user via their fid (if found).
   *
   * @param {number} fid - The FID (unique identifier) of the user whose custody address is being retrieved.
   *
   * @returns {Promise<CustodyAddressResponse>} A promise that resolves to a `CustodyAddressResponse` object,
   *   containing the custody address associated with the specified user.
   *
   * @example
   * // Example: Retrieve the custody address for a user with FID 194
   * client.lookupCustodyAddressForUser(194).then(response => {
   *   console.log('Custody Address:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/custody-address-v1).
   */
  public async lookupCustodyAddressForUser(
    fid: number
  ): Promise<CustodyAddressResponse> {
    const response = await this.apis.user.custodyAddress(this.apiKey, fid);
    return response.data;
  }

  // ------------ Cast ------------

  /**
   * @deprecated
   * Now deprecated, use `lookUpCastByHashOrWarpcastUrl` instead.
   *
   * Retrieves information about a single cast using its unique hash identifier.
   *
   * @param {string} hash - The unique hash identifier of the cast to be retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - Optional. The FID of the user viewing the information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<CastResponse>} A promise that resolves to a `CastResponse` object,
   *   containing detailed information about the specified cast.
   *
   * @example
   * // Example: Retrieve information about a cast with a specific hash, as viewed by a user with FID 3
   * client.lookUpCastByHash('0xfe90f9de682273e05b201629ad2338bdcd89b6be', { viewerFid: 3 }).then(response => {
   *   console.log('Cast Information:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/cast-v1).
   */
  public async lookUpCastByHash(
    hash: string,
    options?: { viewerFid?: number }
  ): Promise<CastResponse> {
    const response = await this.apis.cast.cast(
      this.apiKey,
      hash,
      options?.viewerFid
    );
    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `lookupCastConversation` instead.
   *
   * Retrieves all casts, including root cast and all replies for a given thread hash. No limit to the depth of replies.
   * **Note :** The parent provided by the caller is included in the response.
   *
   * @param {Cast | string} threadParent - The parent cast or the hash of the thread for which
   *   all related casts are to be fetched. If a Cast object is provided, its hash is used.
   * @param {number} [viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<AllCastsInThreadResponse>} A promise that resolves to an `AllCastsInThreadResponse` object,
   *   containing all casts within the specified thread.
   *
   * @example
   * // Example: Fetch all casts in a thread using a thread hash
   * client.fetchAllCastsInThread('0xfe90f9de682273e05b201629ad2338bdcd89b6be', 3).then(response => {
   *   console.log('Thread Casts:', response); // Outputs all casts in the thread
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/all-casts-in-thread-v1).
   */
  public async fetchAllCastsInThread(
    threadParent: Cast | string,
    viewerFid?: number
  ): Promise<AllCastsInThreadResponse> {
    let threadHash: string;

    if (typeof threadParent === "string") {
      threadHash = threadParent;
    } else {
      threadHash = threadParent.hash;
    }

    const response = await this.apis.cast.allCastsInThread(
      this.apiKey,
      threadHash,
      viewerFid
    );
    return response.data;
  }

  /**
   * Retrieves all casts (including replies and recasts) created by the specified user.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose casts are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {string} [options.parentUrl] - Optional. A URL identifying the channel to which the casts belong.
   *   A cast can be part of a certain channel. The channel is identified by parent_url.
   *   All casts in the channel ladder up to the same parent_url.
   * @param {number} [options.viewerFid] - Optional. The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - Optional. The maximum number of casts to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<CastsResponse>} A promise that resolves to a `CastsResponse` object,
   *   containing the casts created by the specified user along with any associated metadata.
   *
   * @example
   * // Example: Retrieve casts created by a user with FID 3, including contextual information for a viewer
   * client.fetchAllCastsCreatedByUser(3, {
   *   parentUrl: 'https://ethereum.org',
   *   viewerFid: 2,
   *   limit: 50, // Fetching up to 50 casts
   *   // cursor: 'nextPageCursor' // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('User Casts:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/casts-v1).
   */
  public async fetchAllCastsCreatedByUser(
    fid: number,
    options?: {
      parentUrl?: string;
      viewerFid?: number;
      limit?: number;
      cursor?: string;
    }
  ): Promise<CastsResponse> {
    const response = await this.apis.cast.casts(
      this.apiKey,
      fid,
      options?.parentUrl,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * Retrieves a list of casts from the protocol in reverse chronological order based on timestamp
   *
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of casts to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 100.
   * @param {string} [options.cursor] - Pagination cursor for the next set of results.
   *   Omit this parameter for the initial request. Useful for paginated retrieval of subsequent data.
   *
   * @returns {Promise<RecentCastsResponse>} A promise that resolves to a `RecentCastsResponse` object,
   *   containing the recent casts along with any associated metadata.
   *
   * @example
   * // Example: Retrieve recent casts with a limit of 50, as viewed by a user with FID 3
   * client.fetchRecentCasts({
   *   viewerFid: 3,
   *   limit: 50, // Fetching up to 50 casts
   *   // cursor: 'nextPageCursor' // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Recent Casts:', response); // Outputs the recent casts
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/recent-casts-v1).
   */
  public async fetchRecentCasts(options?: {
    viewerFid?: number;
    limit?: number;
    cursor?: string;
  }): Promise<RecentCastsResponse> {
    const response = await this.apis.cast.recentCasts(
      this.apiKey,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  // ------------ Verification ------------

  /**
   * @deprecated
   * Now deprecated, use `fetchBulkUsers` instead.
   *
   * Retrieve all known verifications of a user.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose verifications are being retrieved.
   *
   * @returns {Promise<VerificationResponse>} A promise that resolves to a `VerificationResponse` object
   *
   * @example
   * // Example: Retrieve all verifications for a user with FID 3
   * client.fetchUserVerifications(3).then(response => {
   *   console.log('User Verifications:', response); // Outputs the user's verifications
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/verifications-v1).
   */
  public async fetchUserVerifications(
    fid: number
  ): Promise<VerificationResponse> {
    const response = await this.apis.verification.verifications(
      this.apiKey,
      fid
    );
    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `fetchBulkUsersByEthereumAddress` instead.
   *
   * Retrieve user information using a verification address
   *
   * Checks if a given Ethereum address has a Farcaster user associated with it.
   * Note: if an address is associated with multiple users, the API will return
   * the user who most recently published a verification with the address
   * (based on when Warpcast received the proof, not a self-reported timestamp).
   *
   * @param {string} address - The Ethereum address that have has a Farcaster user associated with it
   *
   * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object,
   *   containing user information linked to the given verification address.
   *
   * @example
   * // Example: Retrieve user information using a verification address
   * client.lookupUserByVerification('0x7ea5dada4021c2c625e73d2a78882e91b93c174c').then(response => {
   *   console.log('User Information:', response); // Outputs the user information associated with the verification address
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-by-verification-v1).
   */
  public async lookupUserByVerification(
    address: string
  ): Promise<UserResponse> {
    const response = await this.apis.verification.userByVerification(
      this.apiKey,
      address
    );
    return response.data;
  }

  // ------------ Notifications ------------

  /**
   * Retrieves a list of mentions and replies to the user’s casts in reverse chronological order.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose mentions and replies are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<MentionsAndRepliesResponse>} A promise that resolves to a `MentionsAndRepliesResponse` object,
   *   containing a list of mentions and replies to the user's casts.
   *
   * @example
   * // Example: Retrieve the first set of mentions and replies for a user with FID 12345, limited to 50
   * client.fetchMentionAndReplyNotifications(3, {
   *   viewerFid: 2, // The FID of the user viewing this information
   *   limit: 50, // Fetching up to 50 mentions and replies
   *   // cursor: 'nextPageCursor' // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Mentions and Replies:', response); // Outputs the mentions and replies
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/mentions-and-replies-v1).
   */
  public async fetchMentionAndReplyNotifications(
    fid: number,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<MentionsAndRepliesResponse> {
    const response = await this.apis.notifications.mentionsAndReplies(
      this.apiKey,
      fid,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * Retrieves a list of likes and recasts to the user’s casts in reverse chronological order.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose likes and recasts are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<ReactionsAndRecastsResponse>} A promise that resolves to a `ReactionsAndRecastsResponse` object,
   *   containing a list of likes and recasts to the user's casts.
   *
   * @example
   * // Example: Retrieve the first set of likes and recasts for a user with FID 12345, limited to 50
   * client.fetchUserLikesAndRecasts(3, {
   *   viewerFid: 2, // The FID of the user viewing this information
   *   limit: 50, // Fetching up to 50 likes and recasts
   *   // cursor: 'nextPageCursor' // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Likes and Recasts:', response); // Outputs the likes and recasts
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/reactions-and-recasts-v1).
   */
  public async fetchUserLikesAndRecasts(
    fid: number,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<ReactionsAndRecastsResponse> {
    const response = await this.apis.notifications.reactionsAndRecasts(
      this.apiKey,
      fid,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  // ------------ Reactions ------------

  /**
   * @deprecated
   * Now deprecated, use `fetchReactionsForCast` instead.
   *
   * Retrieves all like reactions for a specific cast in reverse chronological order.
   *
   * @param {Cast | string} castOrCastHash - The Cast object or its hash for which likes are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<CastLikesResponse>} A promise that resolves to a `CastLikesResponse` object,
   *   containing a list of likes for the given cast.
   *
   * @example
   * // Example: Retrieve the first set of likes for a cast with a specific hash, limited to 2
   * client.fetchCastLikes('0xfe90f9de682273e05b201629ad2338bdcd89b6be', {
   *   viewerFid: 3, // The FID of the user viewing this information
   *   limit: 2, // Fetching up to 2 likes
   *   // cursor: "nextPageCursor", // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Cast Likes:', response); // Outputs the cast likes
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/cast-likes-v1).
   */
  public async fetchCastLikes(
    castOrCastHash: Cast | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastLikesResponse> {
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }

    const response = await this.apis.reactions.castLikes(
      this.apiKey,
      castHash,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `fetchReactionsForCast` instead.
   *
   * Retrieves all reactions (likes and recasts) for a specific cast.
   *
   * @param {Cast | string} castOrCastHash - The Cast object or its hash for which reactions are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<CastReactionsResponse>} A promise that resolves to a `CastReactionsResponse` object,
   *   containing a list of all reactions for the given cast.
   *
   * @example
   * // Example: Retrieve the first set of reactions for a cast with a specific hash, limited to 5
   * client.fetchCastReactions('0xfe90f9de682273e05b201629ad2338bdcd89b6be', {
   *   viewerFid: 3, // The FID of the user viewing this information
   *   limit: 5, // Fetching up to 5 reactions
   *   // cursor: "nextPageCursor", // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Cast Reactions:', response); // Outputs the cast reactions
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/cast-reactions-v1).
   */
  public async fetchCastReactions(
    castOrCastHash: Cast | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastReactionsResponse> {
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }

    const response = await this.apis.reactions.castReactions(
      this.apiKey,
      castHash,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * @deprecated
   * Now deprecated, use `fetchReactionsForCast` instead.
   *
   * Retrieves the list of users who have recasted a specific cast.
   *
   * @param {Cast | string} castOrCastHash - The Cast object or its hash for which recasters are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<CastRecasterResponse>} A promise that resolves to a `CastRecasterResponse` object,
   *   containing a list of recasters for the given cast.
   *
   * @example
   * // Example: Retrieve the first set of recasters for a cast with a specific hash, limited to 3
   * client.fetchRecasters('0xafadc0478ede366e3f5232af3190a82dea20b169', {
   *   viewerFid: 3, // The FID of the user viewing this information
   *   limit: 3, // Fetching up to 3 recasters
   *   // cursor: "nextPageCursor", // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Cast Recasters:', response); // Outputs the cast recasters
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/cast-recasters-v1).
   */
  public async fetchRecasters(
    castOrCastHash: Cast | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastRecasterResponse> {
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }

    const response = await this.apis.reactions.castRecasters(
      this.apiKey,
      castHash,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  // ------------ Follows ------------

  /**
   * Retrieves all users that follow the specified user.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose followers are being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<FollowResponse>} A promise that resolves to a `FollowResponse` object,
   *   containing a list of the user's followers.
   *
   * @example
   * // Example: Retrieve the first set of followers for a user with FID 12345, limited to 50
   * client.fetchUserFollowers(3, {
   *   viewerFid: 2, // The FID of the user viewing this information
   *   limit: 50, // Fetching up to 50 followers
   *   // cursor: "nextPageCursor", // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('User Followers:', response); // Outputs the user's followers
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/followers-v1).
   */
  public async fetchUserFollowers(
    fid: number,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<FollowResponse> {
    const response = await this.apis.follows.followers(
      this.apiKey,
      fid,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }

  /**
   * Retrieves all users the specified user is following.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose following list is being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of results to be returned in a single response.
   *   Defaults to 25, with a maximum allowable value of 150.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results.
   *   Omit this parameter for the initial request. Use it for paginated retrieval of subsequent data.
   *
   * @returns {Promise<FollowResponse>} A promise that resolves to a `FollowResponse` object,
   *   containing a list of users followed by the given user.
   *
   * @example
   * // Example: Retrieve the first set of users followed by a user with FID 12345, limited to 50
   * client.fetchUserFollowing(3, {
   *   viewerFid: 2, // The FID of the user viewing this information
   *   limit: 50, // Fetching up to 50 users
   *   // cursor: "nextPageCursor", // Pagination cursor for the next set of results, Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Following Users:', response); // Outputs the list of users followed by the user
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/following-v1).
   */
  public async fetchUserFollowing(
    fid: number,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<FollowResponse> {
    const response = await this.apis.follows.following(
      this.apiKey,
      fid,
      options?.viewerFid,
      options?.limit,
      options?.cursor
    );

    return response.data;
  }
}
