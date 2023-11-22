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
  VerificationResponseResult,
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
} from "./openapi";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";

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
    return (
      error.response?.data !== undefined && "message" in error.response.data
    );
  }

  // ------------ User ------------

  /**
   * A list of users in reverse chronological order based on sign up.
   *
   * @param {Object} [options] - Optional parameters for the request.
   * @param {number} [options.viewerFid] - The FID (unique identifier) of the user viewing the data.
   *   This can be used for providing contextual information specific to the viewer.
   * @param {number} [options.limit] - The maximum number of users to be returned in the response.
   *   Can be adjusted up to a maximum of 1000.
   * @param {string} [options.cursor] - A pagination cursor to fetch a specific set of results.
   *   This is useful for implementing paginated retrieval of the data.
   *
   * @returns {Promise<RecentUsersResponse>} A promise that resolves to a `RecentUsersResponse` object,
   *   containing the list of recent users and any associated metadata.
   *
   * @example
   * // Fetch a specific number of recent users, using viewer FID and a pagination cursor
   * client.fetchRecentUsers({
   *   viewerFid: 3,
   *   limit: 50,
   *   cursor: 'nextPageCursor'
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
   * Fetches all casts liked by a specific user. This method returns a list of casts that
   * the specified user has liked, with support for pagination through optional parameters.
   *
   * @param {number} fid - The FID (unique identifier) of the user whose liked casts are to be fetched.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   * @param {number} [options.limit] - The maximum number of liked casts to be returned in the response.
   *   This can be adjusted, with a sensible maximum to ensure performance.
   * @param {string} [options.cursor] - A pagination cursor for fetching specific subsets of results,
   *   useful for implementing paginated data retrieval.
   *
   * @returns {Promise<UserCastLikeResponse>} A promise that resolves to a `UserCastLikeResponse` object,
   *   containing the list of casts liked by the user and any associated metadata.
   *
   * @example
   * // Fetch a specific number of casts liked by a user, using viewer FID and a pagination cursor
   * client.fetchAllCastsLikedByUser(3, {
   *   viewerFid: 2,
   *   limit: 50,
   *   cursor: 'nextPageCursor'
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
   * Gets the specified user via their FID (if found).
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
   * Gets the custody address for the specified user via their fid (if found).
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
   * Fetches a single cast by its hash.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-v1)
   *
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
   * Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
   * See [Neynar documentation](https://docs.neynar.com/reference/all-casts-in-thread-v1)
   * Note that the parent provided by the caller is included in the response.
   *
   */
  public async fetchAllCastsInThread(
    threadParent: Cast | string,
    viewerFid?: number
  ): Promise<Cast[] | null> {
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
    return response.data.result.casts;
  }

  /**
   * Gets all casts (including replies and recasts) created by the specified user.
   * See [Neynar documentation](https://docs.neynar.com/reference/casts-v1)
   *
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
   * Gets recent casts created by the specified user.
   * See [Neynar documentation](https://docs.neynar.com/reference/recent-casts-v1)
   *
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
   * Gets all known verifications of a user.
   * See [Neynar documentation](https://docs.neynar.com/reference/verifications-v1)
   *
   */
  public async fetchUserVerifications(
    fid: number
  ): Promise<VerificationResponseResult | null> {
    const response = await this.apis.verification.verifications(
      this.apiKey,
      fid
    );
    return response.data.result;
  }

  /**
   * Checks if a given Ethereum address has a Farcaster user associated with it.
   * Note: if an address is associated with multiple users, the API will return
   * the user who most recently published a verification with the address
   * (based on when Warpcast received the proof, not a self-reported timestamp).
   * See [Neynar documentation](https://docs.neynar.com/reference/user-by-verification-v1)
   *
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
   * Gets a list of mentions and replies to the user’s casts in reverse chronological order.
   * See [Neynar documentation](https://docs.neynar.com/reference/mentions-and-replies-v1)
   *
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
   * Get a list of likes and recasts to the users’s casts in reverse chronological order.
   * See [Neynar documentation](https://docs.neynar.com/reference/reactions-and-recasts-v1)
   *
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
   * Lists a given cast's likes.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-likes-v1)
   *
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
   * Get All Reactions For a Cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-reactions-v1)
   *
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
   * Get the list of users who have recasted a specific cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-recasters-v1)
   *
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
   * Get all users that follow the specified user.
   * See [Neynar documentation](https://docs.neynar.com/reference/followers-v1)
   *
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
   * Get all users the specified user is following.
   * See [Neynar documentation](https://docs.neynar.com/reference/following-v1)
   *
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
