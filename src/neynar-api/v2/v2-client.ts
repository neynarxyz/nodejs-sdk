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
  FeedType,
  FilterType,
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
    const response = await this.apis.signer.createSigner(this.apiKey);
    return response.data;
  }

  /**
   * Retrieves information status of a signer by passing in a signerUuid
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
    const response = await this.apis.signer.signer(this.apiKey, signerUuid);
    return response.data;
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
   * (In order to delete verification signerUuid must be approved)
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
   *   console.log('Follow Opretation Status', response); // Outputs the result of the follow operation
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/follow-user).
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
    const _fids = fids.join(",");
    const response = await this.apis.user.userBulk(
      this.apiKey,
      _fids,
      options?.viewerFid
    );
    return response.data;
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
    const response = await this.apis.user.userSearch(this.apiKey, q, viewerFid);
    return response.data;
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
    const response = await this.apis.user.lookupUserByCustodyAddress(
      this.apiKey,
      custodyAddress
    );
    return response.data;
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
   * import { CastParamType } from "@neynar/nodejs-sdk/build/neynar-api/v2";
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
    const response = await this.apis.cast.cast(
      this.apiKey,
      castHashOrUrl,
      type
    );
    return response.data;
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
    const _castsHashes = castsHashes.join(",");
    const response = await this.apis.cast.casts(this.apiKey, _castsHashes);
    return response.data;
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
   * Retrieves a reverse chronological feed for a user based on their follow graph.
   * This method allows users to fetch casts in their feed based on various filters, such as
   * following a specific user, a list of users, or content under a specific parent URL.
   *
   * @param {FeedType} feedType - Type of the feed, defaults to 'following' but can be set to 'filter' for specific filtering.
   * @param {Object} [options] - Optional parameters for customizing the feed.
   * @param {FilterType} [options.filterType] - Used when feedType is 'filter'. Determines the filter criteria (e.g., 'fids' or 'parent_url').
   * @param {number} [options.fid] - FID of the user whose feed is being created. Required unless a 'filterType' is provided.
   * @param {Array<number>} [options.fids] - Used for creating a feed based on a list of FIDs. Requires 'feedType' and 'filterType'.
   * @param {string} [options.parentUrl] - Used for fetching content under a specific parent URL. Requires 'feedType' and 'filterType'.
   * @param {boolean} [options.withRecasts] - Whether to include recasts in the response. True by default.
   * @param {number} [options.limit] - Number of results to retrieve, with a default of 25 and a maximum of 100.
   * @param {string} [options.cursor] - Pagination cursor for fetching specific subsets of results.
   *
   * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object,
   *   containing the requested feed data.
   *
   * @example
   * // Example: Retrieve a user's feed based on their following graph with specific limits
   * client.fetchFeed('following', { fid: 3, limit: 50, withRecasts: true }).then(response => {
   *   console.log('User Feed:', response); // Outputs the user's feed
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed).
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
   * Posts a reaction (like or recast) to a given cast.
   * (In order to post a reaction signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer expressing the reaction.
   * @param {ReactionType} reaction - The type of reaction being expressed (like or recast).
   * @param {Cast | string} castOrCastHash - The Cast object or its hash to which the reaction is targeted.
   *
   * @returns {Promise<OperationResponse>} A promise that resolves to an `OperationResponse` object,
   *   indicating the success or failure of the reaction post.
   *
   * @example
   *
   * import { ReactionType } from "@neynar/nodejs-sdk/build/neynar-api/v2";
   *
   * // Example: Post a 'like' reaction to a cast
   * client.publishReactionToCast('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', ReactionType.Like, '0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f').then(response => {
   *   console.log('Publish Reaction Operation Status:', response); // Outputs the status of the reaction post
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/post-reaction).
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
   * Removes a reaction (like or recast) from a given cast.
   *
   * (In order to delete a reaction signerUuid must be approved)
   *
   * @param {string} signerUuid - UUID of the signer who is removing the reaction.
   * @param {ReactionType} reaction - The type of reaction being removed.
   * @param {Cast | string} castOrCastHash - The Cast object or its hash from which the reaction is to be removed.
   *
   * @returns {Promise<OperationResponse>} A promise that resolves to an `OperationResponse` object,
   *   indicating the success or failure of the reaction removal.
   *
   * @example
   *
   * import { ReactionType } from "@neynar/nodejs-sdk/build/neynar-api/v2";
   *
   * // Example: Remove a 'like' reaction from a cast
   * client.deleteReactionFromCast('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', ReactionType.Like, '0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f').then(response => {
   *   console.log('Delete Reaction Operation Status:', response); // Outputs the status of the reaction removal operation
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/delete-reaction).
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
   * Fetches reactions (likes, recasts, or all) for a given user. This method allows retrieving
   * the reactions associated with a user's casts, specified by the user's FID.
   *
   * @param {number} fid - The FID of the user whose reactions are being fetched.
   * @param {ReactionsType} type - The type of reaction to fetch (likes, recasts, or all).
   * @param {Object} [options] - Optional parameters for customizing the response.
   * @param {number} [options.limit] - Limits the number of results. Default is 25, with a maximum of 100.
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *   omit this parameter for the initial request.
   *
   * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object,
   *   containing the reactions associated with the user's casts.
   *
   * @example
   *
   * import { ReactionsType } from "@neynar/nodejs-sdk/build/neynar-api/v2";
   *
   * // Example: Fetch a user's reactions
   * client.fetchUserReactions(3, ReactionsType.All, {
   * limit: 50,
   * // cursor: "nextPageCursor" // Omit this parameter for the initial request
   *  }).then(response => {
   *   console.log('User Reactions:', response); // Outputs the user's reactions
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/reactions-user).
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
   * Retrieves a list of notifications for a specific FID in reverse chronological order.
   * This method is useful for obtaining a user's notifications, keeping them updated on various interactions and updates.
   *
   * @param {number} fid - The FID of the user whose notifications are being fetched.
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 50).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *   omit this parameter for the initial request.
   *
   * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object,
   *   containing the user's notifications.
   *
   * @example
   * // Example: Fetch the first 30 notifications for a user
   * client.fetchAllNotifications(3, {
   * limit: 30,
   * // cursor: "nextPageCursor" // Omit this parameter for the initial request
   *  }).then(response => {
   *   console.log('User Notifications:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/notifications).
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
   * Retrieves a list of relevant followers for a specific FID.
   *
   * @param {number} targetFid - The FID of the user whose relevant followers are being fetched.
   * @param {number} viewerFid - The FID of the viewer who is looking at the target user's profile.
   *
   * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object,
   *   containing a list of relevant followers for the specified user.
   *
   * @example
   * // Example: Retrieve relevant followers for a user from the perspective of another user
   * client.fetchRelevantFollowers(3, 19960).then(response => {
   *   console.log('Relevant Followers:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/relevant-followers).
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
   *
   * @param {number} fid - The FID of the user whose storage allocations are being retrieved.
   *
   * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object,
   *   containing information about the user's storage allocations.
   *
   * @example
   * // Example: Retrieve storage allocations for a user
   * client.lookupUserStorageAllocations(3).then(response => {
   *   console.log('User Storage Allocations:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/storage-allocations).
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
   * Retrieves storage usage for a given user.
   *
   * @param {number} fid - The FID of the user whose storage usage is being queried.
   *
   * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object,
   *   containing details about the user's storage usage.
   *
   * @example
   * // Example: Retrieve storage usage for a user
   * client.lookupUserStorageUsage(3).then(response => {
   *   console.log('User Storage Usage:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/storage-usage).
   */
  public async lookupUserStorageUsage(
    fid: number
  ): Promise<StorageUsageResponse> {
    const response = await this.apis.storage.storageUsage(this.apiKey, fid);
    return response.data;
  }
  // ------------ Recommendation ------------

  /**
   * Fetches all mint actions relevant for a given contract address and user's Ethereum address,
   * with an optional focus on a specific tokenId for ERC1155 contracts. This method is useful for
   * tracking NFT minting activities linked to specific contracts and user addresses.
   *
   * @param {string} address - The Ethereum address of the user.
   * @param {string} contractAddress - The contract address associated with the NFTs.
   * @param {Object} [options] - Optional parameters for the request.
   * @param {string} [options.tokenId] - (Optional) The tokenId, particularly for ERC1155 contract types.
   *
   * @returns {Promise<RelevantMints>} A promise that resolves to a `RelevantMints` object,
   *   containing information about mint actions relevant to the user and contract.
   *
   * @example
   * // Example: Fetch mint actions for a contract address with a specific tokenId
   * client.fetchRelevantMints('0x5a927ac639636e534b678e81768ca19e2c6280b7', '0xe8e0e543a3dd32d366cb756fa4d112f30172bcb1', { tokenId: '1' }).then(response => {
   *   console.log('Relevant Mint Actions:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/fetch-relevant-mints).
   */
  public async fetchRelevantMints(
    address: string,
    contractAddress: string,
    options?: { tokenId?: string }
  ): Promise<RelevantMints> {
    const response = await this.apis.nft.fetchRelevantMints(
      this.apiKey,
      address,
      contractAddress,
      options?.tokenId
    );
    return response.data;
  }
}
