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
  CastApiPostCastRequest,
  FeedType,
  FilterType,
  FeedResponse,
  SignerApiRegisterSignedKeyRequest,
  NotificationsResponse,
  NotificationsApi,
  FollowsApi,
  RelevantFollowersResponse,
  UserApiRemoveVerificationRequest,
  UserApiAddVerificationRequest,
  UserApiFollowRequest,
  UserApiUpdateUserRequest,
  UserBulk200Response,
  UserSearchResponse,
  CastResponse,
  CastsResponse,
} from "./openapi-farcaster";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";
import {
  FetchRelevantMints200Response,
  NFTApi,
} from "./openapi-recommendation";

const BASE_PATH = "https://api.neynar.com/v2";

export class NeynarV2APIClient {
  private readonly logger: Logger;

  public readonly apis: {
    signer: SignerApi;
    user: UserApi;
    cast: CastApi;
    reaction: ReactionApi;
    feed: FeedApi;
    notifications: NotificationsApi;
    follows: FollowsApi;
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
    const response = await this.apis.signer.createSigner();
    return response.data;
  }

  /**
   * Fetches an existing Signer.
   * See [Neynar documentation](https://docs.neynar.com/reference/signer)
   *
   */
  public async lookupSigner(signerUuid: string): Promise<Signer | null> {
    const response = await this.apis.signer.signer({ signerUuid });
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
    const request: SignerApiRegisterSignedKeyRequest = {
      registerSignerKeyReqBody: {
        signer_uuid: signerUuid,
        app_fid: fid,
        deadline: deadline,
        signature: signature,
      },
    };
    const response = await this.apis.signer.registerSignedKey(request);
    return response.data;
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
    const request: UserApiRemoveVerificationRequest = {
      removeVerificationReqBody: {
        signer_uuid: signerUuid,
        address,
      },
    };

    const response = await this.apis.user.farcasterUserVerificationDelete(
      request
    );
    return response.data;
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
    const request: UserApiAddVerificationRequest = {
      addVerificationReqBody: {
        signer_uuid: signerUuid,
        address,
        block_hash: blockHash,
        eth_signature: ethSignature,
      },
    };

    const response = await this.apis.user.farcasterUserVerificationPost(
      request
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
    const request: UserApiFollowRequest = {
      followReqBody: {
        signer_uuid: signerUuid,
        target_fids: targetFids,
      },
    };

    const response = await this.apis.user.followUser(request);
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
    const request: UserApiFollowRequest = {
      followReqBody: {
        signer_uuid: signerUuid,
        target_fids: targetFids,
      },
    };
    const response = await this.apis.user.unfollowUser(request);
    return response.data;
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
      pfpUrl?: string;
      url?: string;
      username?: string;
      displayName?: string;
    }
  ): Promise<OperationResponse> {
    const request: UserApiUpdateUserRequest = {
      updateUserReqBody: {
        signer_uuid: signerUuid,
        bio: options?.bio,
        pfp_url: options?.pfpUrl,
        url: options?.url,
        username: options?.username,
        display_name: options?.displayName,
      },
    };

    const response = await this.apis.user.updateUser(request);
    return response.data;
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
    const response = await this.apis.user.userBulk({ fids, viewerFid });
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
    const response = await this.apis.user.userSearch({ q, viewerFid });
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
    const response = await this.apis.cast.cast({
      type,
      identifier: castHashOrUrl,
    });
    return response.data;
  }

  /**
   * Gets information about an array of casts.
   * See [Neynar documentation](https://docs.neynar.com/reference/casts)
   *
   */
  public async fetchBulkCastsByHash(
    castHashes: string[]
  ): Promise<CastsResponse> {
    const response = await this.apis.cast.casts({
      getCastsReqBody: {
        casts: castHashes.map((hash) => ({ hash })),
      },
    });
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
    const request: CastApiPostCastRequest = {
      postCastReqBody: {
        signer_uuid: signerUuid,
        text: text,
        embeds: options?.embeds,
        parent: options?.replyTo,
      },
    };
    const response = await this.apis.cast.postCast(request);
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
    const body: DeleteCastReqBody = {
      signer_uuid: signerUuid,
      target_hash: castHash,
    };
    const response = await this.apis.cast.deleteCast({
      deleteCastReqBody: body,
    });
    return response.data;
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
    const response = await this.apis.feed.feed({
      feedType,
      filterType: options?.filterType,
      fid: options?.fid,
      fids: options?.fids,
      parentUrl: options?.parentUrl,
      cursor: options?.cursor,
      limit: options?.limit,
      withRecasts: options?.withRecasts,
    });
    return response.data;
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
    const response = await this.apis.reaction.postReaction({
      reactionReqBody: body,
    });
    return response.data;
  }

  /**
   * Remove a reaction to a cast. See [Neynar documentation](https://docs.neynar.com/reference/delete-reaction)
   */
  public async removeReactionFromCast(
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
    const response = await this.apis.reaction.deleteReaction({
      reactionReqBody: body,
    });
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
    const response = await this.apis.notifications.notifications({
      fid,
      cursor: options?.cursor,
      limit: options?.limit,
    });
    return response.data;
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
    const response = await this.apis.follows.relevantFollowers({
      targetFid,
      viewerFid,
    });
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
  ): Promise<FetchRelevantMints200Response> {
    const response = await this.apis.nft.fetchRelevantMints({
      address,
      contractAddress,
      tokenId,
    });
    return response.data;
  }
}
