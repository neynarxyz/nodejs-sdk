import {
  CastApi,
  SignerApi,
  Signer,
  Cast,
  CastParamType,
  PostCastResponseCast,
  DeleteCastReqBody,
  ReactionApi,
  ReactionReqBody,
  ReactionType,
  OperationResponse,
  BulkFollowResponse,
  EmbeddedCast,
  Configuration,
  ErrorRes,
  FeedApi,
  UserApi,
  FeedResponse,
  NotificationsResponse,
  NotificationsApi,
  FollowsApi,
  RelevantFollowersResponse,
  UserSearchResponse,
  CastResponse,
  CastsResponse,
  UserResponse,
  BulkUsersResponse,
  FeedFeedTypeEnum,
  FeedFilterTypeEnum,
  ReactionsType,
  ReactionsResponse,
  StorageApi,
  StorageAllocationsResponse,
  StorageUsageResponse,
} from "./openapi-farcaster";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";
import { NFTApi, RelevantMints } from "./openapi-recommendation";

const BASE_PATH = "https://api.neynar.com/v2";

export class NeynarV2APIClient {
  private readonly logger: Logger;
  private readonly apiKey: string;

  public readonly apis: {
    signer: SignerApi;
    user: UserApi;
    cast: CastApi;
    reaction: ReactionApi;
    feed: FeedApi;
    notifications: NotificationsApi;
    follows: FollowsApi;
    storage: StorageApi;
    nft: NFTApi;
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
        if (NeynarV2APIClient.isApiErrorResponse(error)) {
          const apiErrors = error.response.data;
          this.logger.warn(`API errors: ${JSON.stringify(apiErrors)}`);
        }
        throw error;
      }
    );

    const config: Configuration = new Configuration({
      basePath: basePath ? `${basePath}/v2` : BASE_PATH,
      apiKey: apiKey,
    });

    this.apis = {
      signer: new SignerApi(config, undefined, axiosInstance),
      user: new UserApi(config, undefined, axiosInstance),
      cast: new CastApi(config, undefined, axiosInstance),
      reaction: new ReactionApi(config, undefined, axiosInstance),
      feed: new FeedApi(config, undefined, axiosInstance),
      notifications: new NotificationsApi(config, undefined, axiosInstance),
      follows: new FollowsApi(config, undefined, axiosInstance),
      storage: new StorageApi(config, undefined, axiosInstance),
      nft: new NFTApi(config, undefined, axiosInstance),
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

  // ------------ Signer ------------

  /**
   * Creates a Signer.
   * See [Neynar documentation](https://docs.neynar.com/reference/create-signer)
   *
   */
  public async createSigner(): Promise<Signer> {
    const response = await this.apis.signer.createSigner(this.apiKey);
    return response.data;
  }

  /**
   * Fetches an existing Signer.
   * See [Neynar documentation](https://docs.neynar.com/reference/signer)
   *
   */
  public async lookupSigner(signerUuid: string): Promise<Signer | null> {
    const response = await this.apis.signer.signer(this.apiKey, signerUuid);
    return response.data;
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
    const registerSignerKeyReqBody = {
      signer_uuid: signerUuid,
      app_fid: fid,
      deadline: deadline,
      signature: signature,
    };
    const response = await this.apis.signer.registerSignedKey(
      this.apiKey,
      registerSignerKeyReqBody
    );
    return response.data;
  }

  // ------------ User ------------

  /**
   * Removes verification for an eth address for the user.
   * See [Neynar documentation](https://docs.neynar.com/reference/remove-verification)
   *
   */
  public async deleteVerification(
    signerUuid: string,
    address: string
  ): Promise<OperationResponse> {
    const removeVerificationReqBody = {
      signer_uuid: signerUuid,
      address,
    };

    const response = await this.apis.user.farcasterUserVerificationDelete(
      this.apiKey,
      removeVerificationReqBody
    );
    return response.data;
  }

  /**
   * Adds verification for an eth address for the user
   * See [Neynar documentation](https://docs.neynar.com/reference/add-verification)
   *
   */
  public async publishVerification(
    signerUuid: string,
    address: string,
    blockHash: string,
    ethSignature: string
  ): Promise<OperationResponse> {
    const addVerificationReqBody = {
      signer_uuid: signerUuid,
      address,
      block_hash: blockHash,
      eth_signature: ethSignature,
    };

    const response = await this.apis.user.farcasterUserVerificationPost(
      this.apiKey,
      addVerificationReqBody
    );
    return response.data;
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
    const followReqBody = {
      signer_uuid: signerUuid,
      target_fids: targetFids,
    };

    const response = await this.apis.user.followUser(
      this.apiKey,
      followReqBody
    );
    return response.data;
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
    const followReqBody = {
      signer_uuid: signerUuid,
      target_fids: targetFids,
    };
    const response = await this.apis.user.unfollowUser(
      this.apiKey,
      followReqBody
    );
    return response.data;
  }

  /**
   * Update user profile
   * See [Neynar documentation](https://docs.neynar.com/reference/update-user)
   *
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
    const updateUserReqBody = {
      signer_uuid: signerUuid,
      bio: options?.bio,
      pfp_url: options?.pfpUrl,
      url: options?.url,
      username: options?.username,
      display_name: options?.displayName,
    };
    const response = await this.apis.user.updateUser(
      this.apiKey,
      updateUserReqBody
    );
    return response.data;
  }

  /**
   * Fetches information about multiple users based on FIDs
   * See [Neynar documentation](https://docs.neynar.com/reference/user-bulk)
   *
   */
  public async fetchBulkUsers(
    fids: number[],
    viewerFid?: number
  ): Promise<BulkUsersResponse> {
    const _fids = fids.join(",");
    const response = await this.apis.user.userBulk(
      this.apiKey,
      _fids,
      viewerFid
    );
    return response.data;
  }

  /**
   * Search User
   * See [Neynar documentation](https://docs.neynar.com/reference/user-search)
   */
  public async searchUser(
    q: string,
    viewerFid: number
  ): Promise<UserSearchResponse> {
    const response = await this.apis.user.userSearch(this.apiKey, q, viewerFid);
    return response.data;
  }

  /**
   * Lookup User by Custody Address
   * See [Neynar documentation](https://docs.neynar.com/reference/lookup-user-by-custody-address)
   */
  public async lookupUserByCustodyAddress(
    custodyAddress: string
  ): Promise<UserResponse> {
    const response = await this.apis.user.lookupUserByCustodyAddress(
      this.apiKey,
      custodyAddress
    );
    return response.data;
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
    const response = await this.apis.cast.cast(
      this.apiKey,
      castHashOrUrl,
      type
    );
    return response.data;
  }

  /**
   * Gets information about an array of casts.
   * See [Neynar documentation](https://docs.neynar.com/reference/casts)
   *
   */
  public async fetchBulkCasts(castsHashes: string[]): Promise<CastsResponse> {
    const _castsHashes = castsHashes.join(",");
    const response = await this.apis.cast.casts(this.apiKey, _castsHashes);
    return response.data;
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
    const postCastReqBody = {
      signer_uuid: signerUuid,
      text: text,
      embeds: options?.embeds,
      parent: options?.replyTo,
    };
    const response = await this.apis.cast.postCast(
      this.apiKey,
      postCastReqBody
    );
    return response.data.cast;
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
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }
    const deleteCastReqBody: DeleteCastReqBody = {
      signer_uuid: signerUuid,
      target_hash: castHash,
    };
    const response = await this.apis.cast.deleteCast(
      this.apiKey,
      deleteCastReqBody
    );
    return response.data;
  }

  // ------------ Feed ------------

  /**
   * Get reverse chronological feed page for a user based on their follow graph.
   * See [Neynar documentation](https://docs.neynar.com/reference/feed)
   *
   */
  public async fetchFeed(
    feedType: FeedFeedTypeEnum,
    options?: {
      filterType?: FeedFilterTypeEnum;
      fid?: number;
      fids?: number[];
      parentUrl?: string;
      limit?: number;
      cursor?: string;
      withRecasts?: boolean;
    }
  ): Promise<FeedResponse> {
    const _fids = options?.fids?.join(",");

    const response = await this.apis.feed.feed(
      this.apiKey,
      feedType,
      options?.filterType,
      options?.fid,
      _fids,
      options?.parentUrl,
      options?.withRecasts,
      options?.limit,
      options?.cursor
    );
    return response.data;
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
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }
    const body: ReactionReqBody = {
      signer_uuid: signerUuid,
      reaction_type: reaction,
      target: castHash,
    };
    const response = await this.apis.reaction.postReaction(this.apiKey, body);
    return response.data;
  }

  /**
   * Remove a reaction to a cast. See [Neynar documentation](https://docs.neynar.com/reference/delete-reaction)
   */
  public async deleteReactionFromCast(
    signerUuid: string,
    reaction: ReactionType,
    castOrCastHash: Cast | string
  ): Promise<OperationResponse> {
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }
    const body: ReactionReqBody = {
      signer_uuid: signerUuid,
      reaction_type: reaction,
      target: castHash,
    };
    const response = await this.apis.reaction.deleteReaction(this.apiKey, body);
    return response.data;
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
    const response = await this.apis.reaction.reactionsUser(
      this.apiKey,
      fid,
      type,
      options?.limit,
      options?.cursor
    );
    return response.data;
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
    const response = await this.apis.notifications.notifications(
      this.apiKey,
      fid,
      options?.limit,
      options?.cursor
    );
    return response.data;
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
    const response = await this.apis.follows.relevantFollowers(
      this.apiKey,
      targetFid,
      viewerFid
    );
    return response.data;
  }

  // ------------ Storage ------------

  /**
   * Retrieves storage allocations for a given user.
   * See [Neynar documentation](https://docs.neynar.com/reference/storage-allocations)
   */
  public async lookupUserStorageAllocations(
    fid: number
  ): Promise<StorageAllocationsResponse> {
    const response = await this.apis.storage.storageAllocations(
      this.apiKey,
      fid
    );
    return response.data;
  }

  /**
   * Retrieves storage usage for a given user
   * See [Neynar documentation](https://docs.neynar.com/reference/storage-usage)
   */
  public async lookupUserStorageUsage(
    fid: number
  ): Promise<StorageUsageResponse> {
    const response = await this.apis.storage.storageUsage(this.apiKey, fid);
    return response.data;
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
    const response = await this.apis.nft.fetchRelevantMints(
      this.apiKey,
      address,
      contractAddress,
      tokenId
    );
    return response.data;
  }
}
