import {
  Signer,
  Cast,
  CastParamType,
  PostCastResponseCast,
  ReactionType,
  OperationResponse,
  BulkFollowResponse,
  EmbeddedCast,
  FeedResponse,
  NotificationsResponse,
  RelevantFollowersResponse,
  UserSearchResponse,
  CastResponse,
  CastsResponse,
  UserResponse,
  BulkUsersResponse,
  FeedType,
  FilterType,
  ReactionsResponse,
  ReactionsType,
  StorageAllocationsResponse,
  StorageUsageResponse,
} from "./v2/openapi-farcaster";

import {
  RecentUsersResponse,
  UserCastLikeResponse,
  Cast as CastV1,
  CastsResponse as CastsResponseV1,
  RecentCastsResponse,
  MentionsAndRepliesResponse,
  ReactionsAndRecastsResponse,
  CastLikesResponse,
  CastReactionsResponse,
  CastRecasterResponse,
  FollowResponse,
  UserResponse as UserResponseV1,
  CustodyAddressResponse,
  CastResponse as CastResponseV1,
  VerificationResponse,
  AllCastsInThreadResponse,
} from "./v1/openapi";

import { RelevantMints } from "./v2/openapi-recommendation";
import { AxiosInstance } from "axios";
import { silentLogger, Logger } from "./common/logger";
import { NeynarV1APIClient } from "./v1";
import { NeynarV2APIClient } from "./v2";

export class NeynarAPIClient {
  private readonly logger: Logger;

  private readonly clients: {
    v1: NeynarV1APIClient;
    v2: NeynarV2APIClient;
  };

  /**
   * Instantiates a NeynarAPIClient
   *
   * Creates NeynarAPIClient
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

    this.clients = {
      v1: new NeynarV1APIClient(apiKey, { basePath, logger, axiosInstance }),
      v2: new NeynarV2APIClient(apiKey, { basePath, logger, axiosInstance }),
    };
  }

  // ============ v1 APIs ============

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
    return await this.clients.v1.fetchRecentUsers(options);
  }

  /**
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
    return await this.clients.v1.fetchAllCastsLikedByUser(fid, options);
  }

  /**
   * Retrieves the specified user via their FID (if found).
   *
   * @param {number} fid - The FID of the user whose information is being retrieved.
   * @param {number} [viewerFid] - Optional. The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<UserResponseV1>} A promise that resolves to a `UserResponseV1` object,
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
  ): Promise<UserResponseV1> {
    return await this.clients.v1.lookupUserByFid(fid, viewerFid);
  }

  /**
   * Retrieves the specified user via their username (if found).
   *
   * @param {string} username - The username of the user whose information is being retrieved.
   * @param {number} [viewerFid] - Optional. The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<UserResponseV1>} A promise that resolves to a `UserResponseV1` object,
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
  ): Promise<UserResponseV1> {
    return await this.clients.v1.lookupUserByUsername(username, viewerFid);
  }

  /**
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
    return await this.clients.v1.lookupCustodyAddressForUser(fid);
  }

  // ------------ Cast ------------

  /**
   * Retrieves information about a single cast using its unique hash identifier.
   *
   * @param {string} hash - The unique hash identifier of the cast to be retrieved.
   * @param {Object} [options] - Optional parameters for the request.
   * @param {number} [options.viewerFid] - Optional. The FID of the user viewing the information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<CastResponseV1>} A promise that resolves to a `CastResponseV1` object,
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
  ): Promise<CastResponseV1> {
    return await this.clients.v1.lookUpCastByHash(hash, options);
  }

  /**
   * Retrieves all casts, including root cast and all replies for a given thread hash. No limit to the depth of replies.
   * **Note :** The parent provided by the caller is included in the response.
   *
   * @param {CastV1 | string} threadParent - The parent cast or the hash of the thread for which
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
    threadParent: CastV1 | string,
    viewerFid?: number
  ): Promise<AllCastsInThreadResponse> {
    return await this.clients.v1.fetchAllCastsInThread(threadParent, viewerFid);
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
   * @returns {Promise<CastsResponseV1>} A promise that resolves to a `CastsResponseV1` object,
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
  ): Promise<CastsResponseV1> {
    return await this.clients.v1.fetchAllCastsCreatedByUser(fid, options);
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
    return await this.clients.v1.fetchRecentCasts(options);
  }

  // ------------ Verification ------------

  /**
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
    return await this.clients.v1.fetchUserVerifications(fid);
  }

  /**
   * Retrieve user information using a verification address
   *
   * Checks if a given Ethereum address has a Farcaster user associated with it.
   * Note: if an address is associated with multiple users, the API will return
   * the user who most recently published a verification with the address
   * (based on when Warpcast received the proof, not a self-reported timestamp).
   *
   * @param {string} address - The Ethereum address that have has a Farcaster user associated with it
   *
   * @returns {Promise<UserResponseV1>} A promise that resolves to a `UserResponseV1` object,
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
  ): Promise<UserResponseV1> {
    return await this.clients.v1.lookupUserByVerification(address);
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
    return await this.clients.v1.fetchMentionAndReplyNotifications(
      fid,
      options
    );
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
   * client.fetchUserLikesAndRecasts(12345, {
   *   viewerFid: 67890, // The FID of the user viewing this information
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
    return await this.clients.v1.fetchUserLikesAndRecasts(fid, options);
  }

  // ------------ Reactions ------------

  /**
   * Retrieves all like reactions for a specific cast in reverse chronological order.
   *
   * @param {CastV1 | string} castOrCastHash - The Cast object or its hash for which likes are being retrieved.
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
    castOrCastHash: CastV1 | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastLikesResponse> {
    return await this.clients.v1.fetchCastLikes(castOrCastHash, options);
  }

  /**
   * Retrieves all reactions (likes and recasts) for a specific cast.
   *
   * @param {CastV1 | string} castOrCastHash - The Cast object or its hash for which reactions are being retrieved.
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
    castOrCastHash: CastV1 | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastReactionsResponse> {
    return await this.clients.v1.fetchCastReactions(castOrCastHash, options);
  }

  /**
   * Retrieves the list of users who have recasted a specific cast.
   *
   * @param {CastV1 | string} castOrCastHash - The Cast object or its hash for which recasters are being retrieved.
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
    castOrCastHash: CastV1 | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastRecasterResponse> {
    return await this.clients.v1.fetchRecasters(castOrCastHash, options);
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
    return await this.clients.v1.fetchUserFollowers(fid, options);
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
    return await this.clients.v1.fetchUserFollowing(fid, options);
  }

  // ============ v2 APIs ============

  // ------------ Signer ------------

  /**
   * Creates a Signer and returns the signer status.
   * **Note**: While testing, please reuse the signer, as it costs money to approve a new signer.
   *
   * @returns {Promise<Signer>} A promise that resolves to a `Signer` object,
   *   representing the newly created signer with its status.
   *
   * @example
   * // Example: Create a new signer
   * client.createSigner().then(response => {
   *   console.log('Signer Status:', response); // Outputs the status of the newly created signer
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/create-signer).
   */
  public async createSigner(): Promise<Signer> {
    return await this.clients.v2.createSigner();
  }

  /**
   * Retrieves information status of a signer by passing in a signer_uuid
   *
   * @param {string} signerUuid - The unique identifier (UUID) of the signer to be fetched.
   *
   * @returns {Promise<Signer>} A promise that resolves to a `Signer` object representing the
   *   requested signer, or null if no signer is found.
   *
   * @example
   * // Example: Fetch an existing signer using its UUID
   * client.lookupSigner('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec').then(response => {
   *   console.log('Signer Details:', response); // Outputs the details of the signer
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/signer).
   */
  public async lookupSigner(signerUuid: string): Promise<Signer> {
    return await this.clients.v2.lookupSigner(signerUuid);
  }

  /**
   * Registers an app fid, deadline and a signature.
   *
   * Easiest way to start is to clone our repo that has sign in w/ Farcaster and writes:
   * https://github.com/manan19/example-farcaster-app
   *
   * Read more about how writes to Farcaster work with Neynar managed signers
   * https://docs.neynar.com/docs/write-to-farcaster-with-neynar-managed-signers
   *
   * @param {string} signerUuid - UUID of the signer.
   * @param {number} fid - Application FID.
   * @param {number} deadline - Unix timestamp in seconds that controls how long the signed key
   *   request is valid for. A 24-hour duration from now is recommended.
   * @param {string} signature - Signature generated by the custody address of the app.
   *   Signed data includes app_fid, deadline, and signer’s public key.
   *
   * @returns {Promise<Signer>} A promise that resolves to a `Signer` object,
   *   representing the registered signer with its status and approval URL.
   *
   * @example
   * // Example: Register a signer with a specified FID, deadline, and signature
   * // Following is an example of how to generate a signer, it may not work. Please fill in the correct values here.
   * // Please refer https://github.com/manan19/example-farcaster-app to get started
   *
   * client.registerSigner('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', 18949, 1625097600, '0xe5d95c391e165dac8efea373efe301d3ea823e1f41713f8943713cbe2850566672e33ff3e17e19abb89703f650a2597f62b4fda0ce28ca15d59eb6d4e971ee531b').then(response => {
   *   console.log('Signer Registration:', response); // Outputs the registration status of the signer
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/register-signed-key).
   */
  public async registerSigner(
    signerUuid: string,
    fid: number,
    deadline: number,
    signature: string
  ): Promise<Signer> {
    return await this.clients.v2.registerSigner(
      signerUuid,
      fid,
      deadline,
      signature
    );
  }

  // ------------ User ------------

  /**
   * Removes verification for an eth address for the user.
   * (In order to delete verification signer_uuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer.
   * @param {string} address - Ethereum address for which verification is being removed.
   *
   * @returns {Promise<OperationResponse>} A promise that resolves to an `OperationResponse` object,
   *   indicating the success or failure of the operation.
   *
   * @example
   * // Example: Remove verification for a user's Ethereum address
   * client.deleteVerification('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', '0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f').then(response => {
   *   console.log('Verification Removal Status:', response); // Outputs the status of verification removal
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/remove-verification).
   */
  public async deleteVerification(
    signerUuid: string,
    address: string
  ): Promise<OperationResponse> {
    return await this.clients.v2.deleteVerification(signerUuid, address);
  }

  /**
   * Adds verification for an eth address for the user
   * (In order to add verification signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer.
   * @param {string} address - Ethereum address for which verification is being added.
   * @param {string} blockHash - Block hash associated with the Ethereum transaction.
   * @param {string} ethSignature - Ethereum signature for verification.
   *
   * @returns {Promise<OperationResponse>} A promise that resolves to an `OperationResponse` object,
   *   indicating the success or failure of the operation.
   *
   * @example
   * // Example: Add verification for a user's Ethereum address
   * client.publishVerification('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', '0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f', '0x191905a9201170abb55f4c90a4cc968b44c1b71cdf3db2764b775c93e7e22b29', '0x2fc09da1f4dcb723fefb91f77932c249c418c0af00c66ed92ee1f35002c80d6a1145280c9f361d207d28447f8f7463366840d3a9309036cf6954afd1fd331beb1b').then(response => {
   *   console.log('Verification Addition Status:', response); // Outputs the status of verification addition
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/add-verification).
   */
  public async publishVerification(
    signerUuid: string,
    address: string,
    blockHash: string,
    ethSignature: string
  ): Promise<OperationResponse> {
    return await this.clients.v2.publishVerification(
      signerUuid,
      address,
      blockHash,
      ethSignature
    );
  }

  /**
   * Follows one or more users. This method allows a user, identified by their signer's UUID,
   * to follow other users specified by their FIDs.
   * (In order to follow a user signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer who is following other users.
   * @param {Array<number>} targetFids - An array of FIDs representing the users to be followed.
   *
   * @returns {Promise<BulkFollowResponse>} A promise that resolves to a `BulkFollowResponse` object,
   *   indicating the success or failure of the follow operation.
   *
   * @example
   * // Example: Follow multiple users
   * client.followUser('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', [3, 2, 1]).then(response => {
   *   console.log('Follow opretation status', response); // Outputs the result of the follow operation
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/follow-user).
   */
  public async followUser(
    signerUuid: string,
    targetFids: number[]
  ): Promise<BulkFollowResponse> {
    return await this.clients.v2.followUser(signerUuid, targetFids);
  }

  /**
   * Unfollows one or more users. This method enables a user, identified by their signer's UUID,
   * to unfollow other users specified by their FIDs.
   * (In order to unfollow a user signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer who is unfollowing other users.
   * @param {Array<number>} targetFids - An array of FIDs representing the users to be unfollowed.
   *
   * @returns {Promise<BulkFollowResponse>} A promise that resolves to a `BulkFollowResponse` object,
   *   indicating the success or failure of the unfollow operation.
   *
   * @example
   * // Example: Unfollow multiple users
   * client.unfollowUser('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', [3, 2, 1]).then(response => {
   *   console.log('Unfollow Operation Status:', response); // Outputs the result of the unfollow operation
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/unfollow-user).
   */
  public async unfollowUser(
    signerUuid: string,
    targetFids: number[]
  ): Promise<BulkFollowResponse> {
    return await this.clients.v2.unfollowUser(signerUuid, targetFids);
  }

  /**
   * Updates a user's profile.
   * (In order to update profile signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer associated with the user profile.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {string} [options.bio] - A brief bio or description of the user.
   * @param {string} [options.pfpUrl] - URL of the user's profile picture.
   * @param {string} [options.url] - Personal URL of the user.
   * @param {string} [options.username] - The user's chosen username.
   * @param {string} [options.displayName] - The user's display name.
   *
   * @returns {Promise<OperationResponse>} A promise that resolves to an `OperationResponse` object,
   *   indicating the success or failure of the update operation.
   *
   * @example
   * // Example: Update a user's profile with bio, profile picture URL, username, and display name
   * client.updateUser('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', {
   *   bio: 'New bio here',
   *   pfpUrl: 'https://example.com/pfp.jpg',
   *   username: 'newUsername',
   *   displayName: 'New Display Name'
   * }).then(response => {
   *   console.log('Profile Update Operation Status:', response); // Outputs the result of the profile update operation
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/update-user).
   */
  public async updateUser(
    signerUuid: string,
    options?: {
      bio?: string;
      pfpUrl?: string;
      url?: string;
      username?: string;
      displayName?: string;
    }
  ): Promise<OperationResponse> {
    return await this.clients.v2.updateUser(signerUuid, options);
  }

  /**
   * Retrieves information about one or multiple users based on FIDs. This method allows for retrieving
   * details of several users simultaneously, identified by their FIDs, with the option to provide
   * information contextual to a specified viewer.
   *
   * @param {Array<number>} fids - An array of FIDs representing the users whose information is being retrieved.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.viewerFid] - The FID of the user viewing this information,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<BulkUsersResponse>} A promise that resolves to a `BulkUsersResponse` object,
   *   containing information about the requested users.
   *
   * @example
   * // Example: Fetch information about multiple users with viewer context
   * client.fetchBulkUsers([2, 3], { viewerFid: 19960 }).then(response => {
   *   console.log('Bulk Users Information:', response); // Outputs information about the specified users
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-bulk).
   */
  public async fetchBulkUsers(
    fids: number[],
    options: { viewerFid?: number }
  ): Promise<BulkUsersResponse> {
    return await this.clients.v2.fetchBulkUsers(fids, options);
  }

  /**
   * Searches for users based on a query. This method is used to find users by usernames or other
   * identifiable information. The search can be contextualized to the viewer specified by `viewerFid`.
   *
   * @param {string} q - The query string used for searching users.
   * @param {number} viewerFid - The FID of the user performing the search,
   *   used for providing contextual data specific to the viewer.
   *
   * @returns {Promise<UserSearchResponse>} A promise that resolves to a `UserSearchResponse` object,
   *   containing the results of the user search.
   *
   * @example
   * // Example: Search for users with a specific query
   * client.searchUser('ris', 19960).then(response => {
   *   console.log('User Search Results:', response); // Outputs the results of the user search
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-search).
   */
  public async searchUser(
    q: string,
    viewerFid: number
  ): Promise<UserSearchResponse> {
    return await this.clients.v2.searchUser(q, viewerFid);
  }

  /**
   * Looks up a user by their custody address.
   *
   * @param {string} custodyAddress - Custody Address associated with mnemonic
   *
   * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object,
   *   containing information about the user linked to the given custody address.
   *
   * @example
   * // Example: Look up a user by their custody address
   * client.lookupUserByCustodyAddress('0xd1b702203b1b3b641a699997746bd4a12d157909').then(response => {
   *   console.log('User Information:', response); // Outputs the information of the user associated with the custody address
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/lookup-user-by-custody-address).
   */
  public async lookupUserByCustodyAddress(
    custodyAddress: string
  ): Promise<UserResponse> {
    return await this.clients.v2.lookupUserByCustodyAddress(custodyAddress);
  }

  // ------------ Cast ------------

  /**
   * Retrieves information about an individual cast by passing in a Warpcast web URL or cast hash.
   *
   * @param {string} castHashOrUrl - The identifier for the cast, which can be either a cast hash or a Warpcast web URL.
   * @param {CastParamType} type - The parameter type indicating whether the identifier is a hash or a URL.
   *
   * @returns {Promise<CastResponse>} A promise that resolves to a `CastResponse` object,
   *   containing information about the specified cast.
   *
   * @example
   * import { CastParamType } from "@neynar/nodejs-sdk/build/neynar-api/neynar-v2-api";
   *
   * // Example: Retrieve information for a cast using its hash
   * client.lookUpCastByHashOrWarpcastUrl('0xfe90f9de682273e05b201629ad2338bdcd89b6be', CastParamType.Hash).then(response => {
   *   console.log('Cast Information:', response); // Outputs information about the cast
   * });
   *
   * // Example: Retrieve information for a cast using its Warpcast URL
   * client.lookUpCastByHashOrWarpcastUrl('https://warpcast.com/rish/0x9288c1', CastParamType.Url).then(response => {
   *   console.log('Cast Information:', response); // Outputs information about the cast
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/cast).
   */
  public async lookUpCastByHashOrWarpcastUrl(
    castHashOrUrl: string,
    type: CastParamType
  ): Promise<CastResponse> {
    return await this.clients.v2.lookUpCastByHashOrWarpcastUrl(
      castHashOrUrl,
      type
    );
  }

  /**
   * Retrieves information about multiple casts using an array of their hashes. This method is useful
   * for fetching details of several casts at once, identified by their unique hashes.
   *
   * @param {Array<string>} castsHashes - An array of strings representing the hashes of the casts
   *   to be retrieved.
   *
   * @returns {Promise<CastsResponse>} A promise that resolves to a `CastsResponse` object,
   *   containing information about the requested casts.
   *
   * @example
   * // Example: Fetch information about multiple casts using their hashes
   * client.fetchBulkCasts(['0xa896906a5e397b4fec247c3ee0e9e4d4990b8004','0x27ff810f7f718afd8c40be236411f017982e0994']).then(response => {
   *   console.log('Bulk Casts Information:', response); // Outputs information about the specified casts
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/casts).
   */
  public async fetchBulkCasts(castsHashes: string[]): Promise<CastsResponse> {
    return await this.clients.v2.fetchBulkCasts(castsHashes);
  }

  /**
   * Publishes a cast for the currently authenticated user. This method allows users to post
   * content, including text and embeds, and can also be used to reply to existing casts.
   * (In order to publish a cast signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer associated with the user posting the cast.
   * @param {string} text - The text content of the cast.
   * @param {Object} [options] - Optional parameters for the cast.
   * @param {Array<EmbeddedCast>} [options.embeds] - An array of embeds to be included in the cast.
   * @param {string} [options.replyTo] - The URL or hash of the parent cast if this is a reply.
   *
   * @returns {Promise<PostCastResponseCast>} A promise that resolves to a `PostCastResponseCast` object,
   *   representing the published cast.
   *
   * @example
   * // Example: Publish a simple cast
   * client.publishCast('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', 'Testing publishCast() method').then(response => {
   *   console.log('Published Cast:', response); // Outputs the published cast
   * });
   * // Example: Reply to a Cast
   * client.publishCast('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', 'Testing publishCast() method', {
   *   replyTo: '0x9e95c380791fce11ffbb14b2ea458b233161bafd',
   * }).then(response => {
   *   console.log('Published Cast:', response); // Outputs the published reply cast with embeds
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/post-cast).
   */
  public async publishCast(
    signerUuid: string,
    text: string,
    options?: { embeds?: EmbeddedCast[]; replyTo?: string }
  ): Promise<PostCastResponseCast> {
    return await this.clients.v2.publishCast(signerUuid, text, options);
  }

  /**
   * Deletes an existing cast. This method is used to remove a cast, identified by its hash,
   * from the system.
   * (In order to delete a cast signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer associated with the user who is deleting the cast.
   * @param {Cast | string} castOrCastHash - The Cast object or its hash that is to be deleted.
   *
   * @returns {Promise<OperationResponse>} A promise that resolves to an `OperationResponse` object,
   *   indicating the success or failure of the deletion operation.
   *
   * @example
   * // Example: Delete a cast using its hash
   * client.deleteCast('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', '0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f').then(response => {
   *   console.log('Cast Deletion:', response); // Outputs the result of the cast deletion operation
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/delete-cast).
   */
  public async deleteCast(
    signerUuid: string,
    castOrCastHash: Cast | string
  ): Promise<OperationResponse> {
    return await this.clients.v2.deleteCast(signerUuid, castOrCastHash);
  }

  // ------------ Feed ------------

  /**
   * Get reverse chronological feed page for a user based on their follow graph.
   * See [Neynar documentation](https://docs.neynar.com/reference/feed)
   *
   */
  public async fetchFeed(
    feedType: FeedType,
    options?: {
      filterType?: FilterType;
      fid?: number;
      fids?: number[];
      parentUrl?: string;
      limit?: number;
      cursor?: string;
      withRecasts?: boolean;
    }
  ): Promise<FeedResponse> {
    return await this.clients.v2.fetchFeed(feedType, options);
  }

  // ------------ Reaction ------------

  /**
   * React to a cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/post-reaction)
   *
   */
  public async publishReactionToCast(
    signerUuid: string,
    reaction: ReactionType,
    castOrCastHash: Cast | string
  ): Promise<OperationResponse> {
    return await this.clients.v2.publishReactionToCast(
      signerUuid,
      reaction,
      castOrCastHash
    );
  }

  /**
   * Remove a reaction to a cast. See [Neynar documentation](https://docs.neynar.com/reference/delete-reaction)
   */
  public async deleteReactionFromCast(
    signerUuid: string,
    reaction: ReactionType,
    castOrCastHash: Cast | string
  ): Promise<OperationResponse> {
    return await this.clients.v2.deleteReactionFromCast(
      signerUuid,
      reaction,
      castOrCastHash
    );
  }

  /**
   * Fetches reactions for a given user
   * See [Neynar documentation](https://docs.neynar.com/reference/reactions-user)
   */
  public async fetchUserReactions(
    fid: number,
    type: ReactionsType,
    options?: { limit?: number; cursor?: string }
  ): Promise<ReactionsResponse> {
    return await this.clients.v2.fetchUserReactions(fid, type, options);
  }

  // ------------ Notifications ------------

  /**
   * Returns a list of notifications for a specific FID in reverse chronological order.
   * See [Neynar documentation](https://docs.neynar.com/reference/notifications)
   *
   */
  public async fetchAllNotifications(
    fid: number,
    options?: { cursor?: string; limit?: number }
  ): Promise<NotificationsResponse> {
    return await this.clients.v2.fetchAllNotifications(fid, options);
  }

  // ------------ Follows ------------

  /**
   * Returns a list of relevant followers for a specific FID.
   * See [Neynar documentation](https://docs.neynar.com/reference/relevant-followers)
   *
   */
  public async fetchRelevantFollowers(
    targetFid: number,
    viewerFid: number
  ): Promise<RelevantFollowersResponse> {
    return await this.clients.v2.fetchRelevantFollowers(targetFid, viewerFid);
  }

  // ------------ Storage ------------

  /**
   * Retrieves storage allocations for a given user.
   * See [Neynar documentation](https://docs.neynar.com/reference/storage-allocations)
   */
  public async lookupUserStorageAllocations(
    fid: number
  ): Promise<StorageAllocationsResponse> {
    return await this.clients.v2.lookupUserStorageAllocations(fid);
  }

  /**
   * Retrieves storage usage for a given user
   * See [Neynar documentation](https://docs.neynar.com/reference/storage-usage)
   */
  public async lookupUserStorageUsage(
    fid: number
  ): Promise<StorageUsageResponse> {
    return await this.clients.v2.lookupUserStorageUsage(fid);
  }

  // ------------ Recommendation ------------

  /**
   * Fetches all mint actions relevant for a contract address (and optionally tokenId for ERC1155s) given a user's ethereum address
   * See [Neynar documentation](https://docs.neynar.com/reference/fetch-relevant-mints)
   *
   */
  public async fetchRelevantMints(
    address: string,
    contractAddress: string,
    tokenId?: string
  ): Promise<RelevantMints> {
    return await this.clients.v2.fetchRelevantMints(
      address,
      contractAddress,
      tokenId
    );
  }
}
