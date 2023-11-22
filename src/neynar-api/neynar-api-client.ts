import {
  Signer,
  Cast,
  CastParamType,
  PostCastResponseCast,
  ReactionType,
  OperationResponse,
  BulkFollowResponse,
  EmbeddedCast,
  FeedType,
  FilterType,
  FeedResponse,
  NotificationsResponse,
  RelevantFollowersResponse,
  UserBulk200Response,
  UserSearchResponse,
  CastResponse,
  CastsResponse,
  UserResponse,
} from "./v2/openapi-farcaster";

import {
  RecentUsersResponse,
  UserCastLikeResponse,
  User,
  Cast as CastV1,
  CastsResponse as CastsResponseV1,
  RecentCastsResponse,
  VerificationResponseResult,
  MentionsAndRepliesResponse,
  ReactionsAndRecastsResponse,
  CastLikesResponse,
  CastReactionsResponse,
  CastRecasterResponse,
  FollowResponse,
  UserResponse as UserResponseV1,
  CustodyAddressResponse,
  CastResponse as CastResponseV1,
} from "./v1/openapi";

import { FetchRelevantMints200Response } from "./v2/openapi-recommendation";
import { AxiosInstance } from "axios";
import { silentLogger, Logger } from "./common/logger";
import { NeynarV1APIClient } from "./v1";
import { NeynarV2APIClient } from "./v2";

export class NeynarAPIClient {
  private readonly logger: Logger;

  public readonly clients: {
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
   * Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
   * See [Neynar documentation](https://docs.neynar.com/reference/all-casts-in-thread-v1)
   * Note that the parent provided by the caller is included in the response.
   *
   */
  public async fetchAllCastsInThread(
    threadParent: CastV1 | string,
    viewerFid?: number
  ): Promise<CastV1[] | null> {
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
   * Gets all known verifications of a user.
   * See [Neynar documentation](https://docs.neynar.com/reference/verifications-v1)
   *
   */
  public async fetchUserVerifications(
    fid: number
  ): Promise<VerificationResponseResult | null> {
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
   * Creates a Signer.
   * See [Neynar documentation](https://docs.neynar.com/reference/create-signer)
   *
   */
  public async createSigner(): Promise<Signer> {
    return await this.clients.v2.createSigner();
  }

  /**
   * Fetches an existing Signer.
   * See [Neynar documentation](https://docs.neynar.com/reference/signer)
   *
   */
  public async lookupSigner(signerUuid: string): Promise<Signer | null> {
    return await this.clients.v2.lookupSigner(signerUuid);
  }

  /**
   * Registers a Signer with an fid.
   * See [Neynar documentation](https://docs.neynar.com/reference/register-signed-key)
   *
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
   * See [Neynar documentation](https://docs.neynar.com/reference/remove-verification)
   *
   */
  public async removeVerification(
    signerUuid: string,
    address: string
  ): Promise<OperationResponse> {
    return await this.clients.v2.removeVerification(signerUuid, address);
  }

  /**
   * Adds verification for an eth address for the user
   * See [Neynar documentation](https://docs.neynar.com/reference/add-verification)
   *
   */
  public async addVerification(
    signerUuid: string,
    address: string,
    blockHash: string,
    ethSignature: string
  ): Promise<OperationResponse> {
    return await this.clients.v2.addVerification(
      signerUuid,
      address,
      blockHash,
      ethSignature
    );
  }

  /**
   * Follow a user.
   * See [Neynar documentation](https://docs.neynar.com/reference/follow-user)
   *
   */

  public async followUser(
    signerUuid: string,
    targetFids: number[]
  ): Promise<BulkFollowResponse> {
    return await this.clients.v2.followUser(signerUuid, targetFids);
  }

  /**
   * Unfollow a user
   * See [Neynar documentation](https://docs.neynar.com/reference/unfollow-user)
   *
   */
  public async unfollowUser(
    signerUuid: string,
    targetFids: number[]
  ): Promise<BulkFollowResponse> {
    return await this.clients.v2.unfollowUser(signerUuid, targetFids);
  }

  /**
   * Update user profile
   * See [Neynar documentation](https://docs.neynar.com/reference/update-user)
   *
   */
  public async updateUserProfile(
    signerUuid: string,
    options?: {
      bio?: string;
      pfp_url?: string;
      url?: string;
      username?: string;
      display_name?: string;
    }
  ): Promise<OperationResponse> {
    return await this.clients.v2.updateUserProfile(signerUuid, options);
  }

  /**
   * Fetches information about multiple users based on FIDs
   * See [Neynar documentation](https://docs.neynar.com/reference/user-bulk)
   *
   */
  public async fetchUsersInBulk(
    fids: string,
    viewerFid?: number
  ): Promise<UserBulk200Response> {
    return await this.clients.v2.fetchUsersInBulk(fids, viewerFid);
  }

  /**
   * Search User
   * See [Neynar documentation](https://docs.neynar.com/reference/user-search)
   */
  public async searchUser(
    q: string,
    viewerFid: number
  ): Promise<UserSearchResponse> {
    return await this.clients.v2.searchUser(q, viewerFid);
  }

  /**
   * Lookup User by Custody Address
   * See [Neynar documentation](https://docs.neynar.com/reference/lookup-user-by-custody-address)
   */
  public async lookupUserByCustodyAddress(
    custodyAddress: string
  ): Promise<UserResponse> {
    return await this.clients.v2.lookupUserByCustodyAddress(custodyAddress);
  }

  // ------------ Cast ------------

  /**
   * Gets information about an individual cast by passing in a Warpcast web URL or cast hash
   * See [Neynar documentation](https://docs.neynar.com/reference/cast)
   *
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
   * Gets information about an array of casts.
   * See [Neynar documentation](https://docs.neynar.com/reference/casts)
   * @param casts - Cast hashes (Comma Separated)
   *
   */
  public async fetchBulkCastsByHash(casts: string): Promise<CastsResponse> {
    return await this.clients.v2.fetchBulkCastsByHash(casts);
  }

  /**
   * Publishes a cast for the currently authenticated user.
   * See [Neynar documentation](https://docs.neynar.com/reference/post-cast)
   *
   */
  public async publishCast(
    signerUuid: string,
    text: string,
    options?: { embeds?: EmbeddedCast[]; replyTo?: string }
  ): Promise<PostCastResponseCast> {
    return await this.clients.v2.publishCast(signerUuid, text, options);
  }

  /**
   * Delete a cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/delete-cast)
   *
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
  public async fetchFeedPage(
    feedType: FeedType,
    options?: {
      filterType?: FilterType;
      fid?: number;
      fids?: string;
      parentUrl?: string;
      limit?: number;
      cursor?: string;
      withRecasts?: boolean;
    }
  ): Promise<FeedResponse> {
    return await this.clients.v2.fetchFeedPage(feedType, options);
  }

  // ------------ Reaction ------------

  /**
   * React to a cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/post-reaction)
   *
   */
  public async reactToCast(
    signerUuid: string,
    reaction: ReactionType,
    castOrCastHash: Cast | string
  ): Promise<OperationResponse> {
    return await this.clients.v2.reactToCast(
      signerUuid,
      reaction,
      castOrCastHash
    );
  }

  /**
   * Remove a reaction to a cast. See [Neynar documentation](https://docs.neynar.com/reference/delete-reaction)
   */
  public async removeReactionFromCast(
    signerUuid: string,
    reaction: ReactionType,
    castOrCastHash: Cast | string
  ): Promise<OperationResponse> {
    return await this.clients.v2.removeReactionFromCast(
      signerUuid,
      reaction,
      castOrCastHash
    );
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
  public async fetchRelaventFollowers(
    targetFid: number,
    viewerFid: number
  ): Promise<RelevantFollowersResponse> {
    return await this.clients.v2.fetchRelaventFollowers(targetFid, viewerFid);
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
  ): Promise<FetchRelevantMints200Response> {
    return await this.clients.v2.fetchRelevantMints(
      address,
      contractAddress,
      tokenId
    );
  }
}
