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
} from "./neynar-v2-api/openapi-farcaster";

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
  User200Response,
} from "./neynar-v1-api/openapi";

import { FetchRelevantMints200Response } from "./neynar-v2-api/openapi-recommendation";
import { AxiosInstance } from "axios";
import { silentLogger, Logger } from "./common/logger";
import { NeynarV1APIClient } from "./neynar-v1-api";
import { NeynarV2APIClient } from "./neynar-v2-api";

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
   * A list of users in reverse chronological order based on sign up.
   * See [Neynar documentation](https://docs.neynar.com/reference/recent-users-v1)
   *
   */
  public async fetchRecentUsers(options?: {
    viewerFid?: number;
    limit?: number;
    cursor?: string;
  }): Promise<RecentUsersResponse> {
    return await this.clients.v1.fetchRecentUsers(options);
  }

  /**
   * Fetch all likes by a given user.
   * See [Neynar documentation](https://docs.neynar.com/reference/user-cast-likes-v1)
   *
   */
  public async fetchAllCastsLikedByUser(
    fid: number,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<UserCastLikeResponse> {
    return await this.clients.v1.fetchAllCastsLikedByUser(fid, options);
  }

  /**
   * Gets the specified user via their FID (if found).
   * See [Neynar documentation](https://docs.neynar.com/reference/user-v1)
   *
   */
  public async lookupUserByFid(
    fid: number,
    viewerFid?: number
  ): Promise<User200Response> {
    return await this.clients.v1.lookupUserByFid(fid, viewerFid);
  }

  /**
   * Gets the specified user via their username (if found).
   * See [Neynar documentation](https://docs.neynar.com/reference/user-by-username-v1)
   *
   */
  public async lookupUserByUsername(
    username: string,
    viewerFid?: number
  ): Promise<User | null> {
    return await this.clients.v1.lookupUserByUsername(username, viewerFid);
  }

  /**
   * Gets the custody address for the specified user via their username (if found).
   * See [Neynar documentation](https://docs.neynar.com/reference/custody-address-v1)
   *
   */
  public async fetchCustodyAddressForUser(fid: number): Promise<string | null> {
    return await this.clients.v1.fetchCustodyAddressForUser(fid);
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
  ): Promise<CastV1 | null> {
    return await this.clients.v1.lookUpCastByHash(hash, options);
  }

  /**
   * Gets all casts, including root cast and all replies for a given thread hash. No limit the depth of replies.
   * See [Neynar documentation](https://docs.neynar.com/reference/all-casts-in-thread-v1)
   * Note that the parent provided by the caller is included in the response.
   *
   */
  public async fetchAllCastsInThread(
    threadParent: CastV1 | { hash: string },
    viewerFid?: number
  ): Promise<CastV1[] | null> {
    return await this.clients.v1.fetchAllCastsInThread(threadParent, viewerFid);
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
  ): Promise<CastsResponseV1> {
    return await this.clients.v1.fetchAllCastsCreatedByUser(fid, options);
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
   * Checks if a given Ethereum address has a Farcaster user associated with it.
   * Note: if an address is associated with multiple users, the API will return
   * the user who most recently published a verification with the address
   * (based on when Warpcast received the proof, not a self-reported timestamp).
   * See [Neynar documentation](https://docs.neynar.com/reference/user-by-verification-v1)
   *
   */
  public async lookupUserByVerification(
    address: string
  ): Promise<User200Response> {
    return await this.clients.v1.lookupUserByVerification(address);
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
    return await this.clients.v1.fetchMentionAndReplyNotifications(
      fid,
      options
    );
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
    return await this.clients.v1.fetchUserLikesAndRecasts(fid, options);
  }

  // ------------ Reactions ------------

  /**
   * Lists a given cast's likes.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-likes-v1)
   *
   */
  public async fetchCastLikes(
    castOrCastHash: CastV1 | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastLikesResponse> {
    return await this.clients.v1.fetchCastLikes(castOrCastHash, options);
  }

  /**
   * Get All Reactions For a Cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-reactions-v1)
   *
   */
  public async fetchCastReactions(
    castOrCastHash: CastV1 | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastReactionsResponse> {
    return await this.clients.v1.fetchCastReactions(castOrCastHash, options);
  }

  /**
   * Get the list of users who have recasted a specific cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast-recasters-v1)
   *
   */
  public async fetchRecasters(
    castOrCastHash: CastV1 | string,
    options?: { viewerFid?: number; limit?: number; cursor?: string }
  ): Promise<CastRecasterResponse> {
    return await this.clients.v1.fetchRecasters(castOrCastHash, options);
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
    return await this.clients.v1.fetchUserFollowers(fid, options);
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
