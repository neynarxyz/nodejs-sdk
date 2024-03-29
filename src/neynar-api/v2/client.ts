import {
  CastApi,
  SignerApi,
  SignerDeveloperManagedApi,
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
  ChannelApi,
  ChannelResponse,
  ChannelListResponse,
  User,
  BulkCastsResponse,
  FnameApi,
  FnameAvailabilityResponse,
  FramesApi,
  FrameActionReqBody,
  FrameAction,
  ValidateFrameRequest,
  ValidateFrameActionResponse,
  UsersResponse,
  DeleteNeynarFrameRequest,
  NeynarFrameUpdateRequest,
  NeynarFrameCreationRequest,
  NeynarFramesApi,
  DeveloperManagedSigner,
  WebhookApi,
  WebhookResponse,
  WebhookPostReqBody,
  WebhookSubscriptionFilters,
  WebhookPutReqBody,
  WebhookListResponse,
  WebhookPatchReqBody,
  WebhookPatchReqBodyActiveEnum,
} from "./openapi-farcaster";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";
import { NFTApi, RelevantMints } from "./openapi-recommendation";
import {
  BulkCastsSortType,
  BulkUserAddressTypes,
  TimeWindow,
  TrendingFeedTimeWindow,
} from "../common/constants";

const BASE_PATH = "https://api.neynar.com/v2";

export class NeynarV2APIClient {
  private readonly logger: Logger;
  private readonly apiKey: string;

  public readonly apis: {
    signer: SignerApi;
    developerManagedSigner: SignerDeveloperManagedApi;
    user: UserApi;
    cast: CastApi;
    reaction: ReactionApi;
    feed: FeedApi;
    notifications: NotificationsApi;
    channel: ChannelApi;
    follows: FollowsApi;
    storage: StorageApi;
    nft: NFTApi;
    fname: FnameApi;
    frames: FramesApi;
    neynarFrames: NeynarFramesApi;
    webhook: WebhookApi;
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
      developerManagedSigner: new SignerDeveloperManagedApi(
        config,
        undefined,
        axiosInstance
      ),
      user: new UserApi(config, undefined, axiosInstance),
      cast: new CastApi(config, undefined, axiosInstance),
      reaction: new ReactionApi(config, undefined, axiosInstance),
      feed: new FeedApi(config, undefined, axiosInstance),
      notifications: new NotificationsApi(config, undefined, axiosInstance),
      channel: new ChannelApi(config, undefined, axiosInstance),
      follows: new FollowsApi(config, undefined, axiosInstance),
      storage: new StorageApi(config, undefined, axiosInstance),
      nft: new NFTApi(config, undefined, axiosInstance),
      fname: new FnameApi(config, undefined, axiosInstance),
      frames: new FramesApi(config, undefined, axiosInstance),
      neynarFrames: new NeynarFramesApi(config, undefined, axiosInstance),
      webhook: new WebhookApi(config, undefined, axiosInstance),
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
   * client.registerSignedKey('19d0c5fd-9b33-4a48-a0e2-bc7b0555baec', 18949, 1625097600, '0xe5d95c391e165dac8efea373efe301d3ea823e1f41713f8943713cbe2850566672e33ff3e17e19abb89703f650a2597f62b4fda0ce28ca15d59eb6d4e971ee531b').then(response => {
   *   console.log('Signer Registration:', response); // Outputs the registration status of the signer
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/register-signed-key).
   */
  public async registerSignedKey(
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

  // ------------ Developer Managed Signer ------------

  /**
   * Fetches the status of a developer-managed signer by its public key.
   *
   * @param {string} publicKey - Ed25519 public key
   *
   * @returns {Promise<DeveloperManagedSigner>} A promise that resolves to a `DeveloperManagedSigner` object,
   *   containing the details and status of the queried signer.
   *
   * @example
   * // Example: Fetch the status of a developer-managed signer by its public key
   * const publicKey = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'; // Example public key
   * client.lookupDeveloperManagedSigner(publicKey).then(response => {
   *   console.log('Developer Managed Signer Status:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/developer-managed-signer).
   */
  public async lookupDeveloperManagedSigner(
    publicKey: string
  ): Promise<DeveloperManagedSigner> {
    const response =
      await this.apis.developerManagedSigner.developerManagedSigner(
        this.apiKey,
        publicKey
      );
    return response.data;
  }

  /**
   * Registers an signed key and returns the developer managed signer status with an approval url.
   *
   * @param {string} publicKey - Ed25519 public key
   * @param {string} signature - Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer’s public key
   * @param {number} appFid - Application FID
   * @param {number} deadline - A UNIX timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
   *
   * @returns {Promise<DeveloperManagedSigner>} A promise that resolves to a `DeveloperManagedSigner` object.
   *
   * @example
   * // Example: Register a signed key for a developer-managed signer
   * const publicKey = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
   * const signature = '0xe5d95c391e165dac8efea373efe301d3ea823e1f41713f8943713cbe2850566672e33ff3e17e19abb89703f650a2597f62b4fda0ce28ca15d59eb6d4e971ee531b';
   * const appFid = 12345;
   * const deadline = Math.floor(Date.now() / 1000) + 86400; // 24 hours from now
   * client.registerSignedKeyForDeveloperManagedSigner(publicKey, signature, appFid, deadline)
   * .then(response => {
   *   console.log('Signed Key Registration Response:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/register-signed-key-for-developer-managed-signer).
   */
  public async registerSignedKeyForDeveloperManagedSigner(
    publicKey: string,
    signature: string,
    appFid: number,
    deadline: number
  ): Promise<DeveloperManagedSigner> {
    const registerSignerKeyReqBody = {
      public_key: publicKey,
      app_fid: appFid,
      deadline: deadline,
      signature: signature,
    };
    const response =
      await this.apis.developerManagedSigner.registerSignedKeyForDeveloperManagedSigner(
        this.apiKey,
        registerSignerKeyReqBody
      );
    return response.data;
  }

  /**
   * Publish a message to farcaster.
   * The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message.
   * Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.
   *
   * @param {object} message - The message object to be published to Farcaster.
   *
   * @returns {Promise<object>} A promise that resolves to an `object`.
   *
   * @example
   * // Example: Publish a message to Farcaster
   * const message = {};
   * client.publishMessageToFarcaster(message).then(response => {
   *   console.log('Message Publication Response:', response);
   * });
   *
   * Note: Ensure the message is properly signed using a developer-managed signer before publishing.
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/publish-message).
   */
  public async publishMessageToFarcaster(message: object) {
    const response = await this.apis.developerManagedSigner.publishMessage(
      this.apiKey,
      message
    );
    return response.data;
  }

  // ------------ User ------------

  /**
   * This API is for Enterprise customers only. Please contact us if you want to try this out.
   *
   * Fetches a fresh FID to be assigned to a new user.
   *
   * @returns {Promise<number>} - A promise that resolves to a number representing the fresh FID.
   *
   * @example
   * // Example usage
   * client.getFreshAccountFID().then(fid => {
   *   console.log('Fresh FID for New Account:', fid);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/get-fresh-fid).
   */
  public async getFreshAccountFID() {
    const response = await this.apis.user.getFreshFid(this.apiKey);
    return response.data;
  }

  /**
   * This API is for Enterprise customers only. Please contact us if you want to try this out.
   *
   * Registers a new user account on Farcaster.
   *
   * @param {number} fid - The unique FID assigned to the new user.
   * @param {string} signature - A cryptographic signature proving ownership of the custody address.
   * @param {string} requested_user_custody_address - The Ethereum custody address associated with the new user.
   * @param {number} deadline - A UNIX timestamp indicating the validity period of the registration request.
   * @param {Object} [options] - Optional parameters for the request.
   * @param {string} [options.fname] - The requested username (fname) for the new user account.
   *
   * @returns {Promise<RegisterUserResponse>} A promise that resolves to a `RegisterUserResponse` object,
   *   indicating the success or failure of the account registration process.
   *
   * @example
   * // Example: Register a new user account with a specific FID and custody address
   * client.registerAccount(12345, 'signatureString', '0x123...abc', 1672531200, { fname: 'newUsername' })
   * .then(response => {
   *   console.log('Account Registration Response:', response);
   * });
   *
   * For more information, refer to the [Farcaster documentation](https://docs.neynar.com/reference/register-user).
   */
  public async registerAccount(
    fid: number,
    signature: string,
    requested_user_custody_address: string,
    deadline: number,
    options?: { fname?: string }
  ) {
    const registerUserReqBody = {
      signature,
      fid,
      requested_user_custody_address,
      deadline,
      fname: options?.fname,
    };
    const response = await this.apis.user.registerUser(
      this.apiKey,
      registerUserReqBody
    );
    return response.data;
  }

  /**
   * Fetches a list of "power users" based on Warpcast power badges. This method retrieves users who have been awarded power badges, indicating their significant contribution or influence within the platform.
   *
   * @param {Object} [options] - Optional parameters to tailor the request.
   *   @param {number} [options.limit=25] - The number of power user details to fetch per request. Defaults to a reasonable number with a maximum allowable value of 100. This parameter controls the size of the response, allowing the client to manage data volume and API load.
   *   @param {string} [options.cursor] - Pagination cursor for the next set of results.
   *    Omit this parameter for the initial request to start from the beginning of the list.
   *
   *  @returns {Promise<UsersResponse>} A promise that resolves to a list of power users, each possibly containing detailed information such as user profiles, contribution metrics, and power badges.
   *
   * @example
   * Usage Example:
   * ---------------
   * // Fetch the initial set of power users with a custom limit
   * client.fetchPowerUsers({ limit: 50 })
   *   .then(response => console.log(response))
   *   .catch(error => console.error(error));
   *
   *  For more information, refer to the [Farcaster documentation](https://docs.neynar.com/reference/power-users).
   */
  public async fetchPowerUsers(options?: {
    limit?: number;
    cursor?: string;
  }): Promise<UsersResponse> {
    const response = await this.apis.user.powerUsers(
      this.apiKey,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves a list of active users, where "active" is determined by the Warpcast active algorithm.
   * The information about active users is updated every 12 hours. This method is ideal for identifying
   * users who are currently engaging with the platform.
   *
   * @param {Object} [options] - Optional parameters to customize the request.
   * @param {number} [options.limit] - Number of results to retrieve, with a default of 25 and a maximum of 150.
   * @param {string} [options.cursor] - Pagination cursor for fetching specific subsets of results.
   *  Omit this parameter for the initial request.
   *
   * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object,
   *   containing a list of active users and any relevant pagination information.
   *
   * @example
   * // Example: Fetch a list of active users with a limit and pagination cursor
   * client.fetchActiveUsers({
   *  limit: 50,
   *  // cursor: "nextPageCursor" // Omit this parameter for the initial request
   * }).then(response => {
   *   console.log('Active Users:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/active-users).
   */
  public async fetchActiveUsers(options?: {
    limit?: number;
    cursor?: string;
  }): Promise<UsersResponse> {
    const response = await this.apis.user.activeUsers(
      this.apiKey,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

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
   * @param {Array<number>} fids - An array of FIDs representing the users whose information is being retrieved. Up to 100 at a time.
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
    options?: { viewerFid?: number }
  ): Promise<BulkUsersResponse> {
    if (fids.length > 100)
      throw new Error("Maximum number of fids allowed is 100");
    const _fids = fids.join(",");
    const response = await this.apis.user.userBulk(
      this.apiKey,
      _fids,
      options?.viewerFid
    );
    return response.data;
  }

  /**
   * Fetches bulk user information based on multiple Ethereum addresses. This function is particularly
   * useful for retrieving user details associated with both custody and verified Ethereum addresses.
   * Note that a custody address can be linked to only one Farcaster user at a time, but a verified
   * address can be associated with multiple users. The method enforces a limit of up to 350 addresses
   * per request.
   *
   * @param {Array<string>} addresses - An array of Ethereum addresses.
   * @param {Object} [options] - Optional parameters for the function.
   * @param {BulkUserAddressTypes[]} [options.addressTypes] - An array of address types to filter the users by. Can include 'custody_address', 'verified_address'. If not specified, both address types are considered.
   *  Possible values: 'custody_address', 'verified_address'.
   *
   * @returns {Promise<{[key: string]: User[]}>} A promise that resolves to an object where each key
   *   is an Ethereum address and the value is an array of `User` objects associated with that address.
   *
   * @throws {Error} If the number of provided addresses exceeds the allowed limit of 350.
   *
   * @example
   * // Example: Fetch users associated with multiple Ethereum addresses
   *
   * import { BulkUserAddressTypes } from "@neynar/nodejs-sdk";
   *
   * client.fetchBulkUsersByEthereumAddress(['0xa6a8736f18f383f1cc2d938576933e5ea7df01a1','0x7cac817861e5c3384753403fb6c0c556c204b1ce'], {addressTypes:[BulkUserAddressTypes.CUSTODY_ADDRESS]}).then(response => {
   *   console.log('Users by Ethereum Addresses:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/user-bulk-by-address).
   */
  public async fetchBulkUsersByEthereumAddress(
    addresses: string[],
    options?: {
      addressTypes?: BulkUserAddressTypes[];
    }
  ): Promise<{
    [key: string]: User[];
  }> {
    if (addresses.length > 350)
      throw new Error("Maximum number of addresses allowed is 350");
    const _addresses = addresses.join(",");
    const _addressTypes =
      options?.addressTypes && options?.addressTypes.join(",");
    const response = await this.apis.user.userBulkByAddress(
      this.apiKey,
      _addresses,
      _addressTypes
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
   * for fetching details of several casts at once, identified by their unique hashes. Optional parameters
   * allow for adding viewer context to the cast objects to show whether the viewer has liked or recasted
   * the cast and sorting the casts based on different criteria.
   *
   * @param {Array<string>} castsHashes - An array of strings representing the hashes of the casts
   *   to be retrieved.
   * @param {Object} [options] - Optional parameters for the request.
   * @param {number} [options.viewerFid] - Adds viewer context to cast objects to indicate whether the viewer has liked or recasted the cast.
   * @param {'trending' | 'likes' | 'recasts' | 'replies' | 'recent'} [options.sortType] - Optional parameter to sort the casts based on different criteria such as trending, likes, recasts, replies, or recent.
   *
   * @returns {Promise<CastsResponse>} A promise that resolves to a `CastsResponse` object,
   *   containing information about the requested casts.
   *
   * @example
   * // Example: Fetch information about multiple casts using their hashes with viewer context and sorting by likes
   *
   * import { BulkCastsSortType } from "@neynar/nodejs-sdk";
   *
   * client.fetchBulkCasts(['0xa896906a5e397b4fec247c3ee0e9e4d4990b8004','0x27ff810f7f718afd8c40be236411f017982e0994'], {
   *   viewerFid: 3,
   *   sortType: BulkCastsSortType.LIKES
   * }).then(response => {
   *   console.log('Bulk Casts Information:', response); // Outputs information about the specified casts
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/casts).
   */
  public async fetchBulkCasts(
    castsHashes: string[],
    options?: {
      viewerFid?: number;
      sortType?: BulkCastsSortType;
    }
  ): Promise<CastsResponse> {
    const _castsHashes = castsHashes.join(",");
    const response = await this.apis.cast.casts(
      this.apiKey,
      _castsHashes,
      options?.viewerFid,
      options?.sortType
    );
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
   * @param {string} [options.channelId] - Channel ID of the channel where the cast is to be posted. e.g. neynar, farcaster, warpcast.
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
    options?: { embeds?: EmbeddedCast[]; replyTo?: string; channelId?: string }
  ): Promise<PostCastResponseCast> {
    const postCastReqBody = {
      signer_uuid: signerUuid,
      text: text,
      embeds: options?.embeds,
      parent: options?.replyTo,
      channel_id: options?.channelId,
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
   * @param {FilterType} [options.filterType] - Used when feed_type=filter. Can be set to fids (requires fids) or parent_url (requires parent_url) or channel_id (requires channel_id)
   * @param {number} [options.fid] - FID of the user whose feed is being created. Required unless a 'filterType' is provided.
   * @param {Array<number>} [options.fids] - Used for creating a feed based on a list of FIDs. Requires 'feedType' and 'filterType'.
   * @param {string} [options.parentUrl] - Used for fetching content under a specific parent URL. Requires 'feedType' and 'filterType'.
   * @param {string} [options.channelId] Used when filter_type=channel_id can be used to fetch all casts under a channel. Requires feed_type and filter_type
   * @param {string} [options.embedUrl] - Used when filter_type=embed_url can be used to fetch all casts with an embed url that contains embed_url. Requires feed_type and filter_type
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
      channelId?: string;
      embedUrl?: string;
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
      options?.channelId,
      options?.embedUrl,
      options?.withRecasts,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves a feed based on specific channel IDs. This method allows for fetching casts from
   * selected channels, optionally including recasts and replies.
   *
   * @param {Array<string>} channelIds - An array of channel IDs for which the feed is to be retrieved.
   * @param {Object} [options] - Optional parameters for customizing the feed.
   * @param {boolean} [options.withRecasts] - Whether to include recasts in the response. True by default.
   * @param {boolean} [options.withReplies] - Whether to include replies in the response. False by default.
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 100).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results.
   *
   * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object,
   *   containing the feed for the specified channel IDs.
   *
   * @example
   * // Example: Retrieve feed for specific channels, including recasts and replies
   * client.fetchFeedByChannelIds(['neynar', 'farcaster'], { withRecasts: true, withReplies: true, limit: 30 }).then(response => {
   *   console.log('Channel Feed:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed-channels).
   */
  public async fetchFeedByChannelIds(
    channelIds: string[],
    options?: {
      withRecasts?: boolean;
      withReplies?: boolean;
      limit?: number;
      cursor?: string;
    }
  ): Promise<FeedResponse> {
    const _channelIds = channelIds.join(",");
    const response = await this.apis.feed.feedChannels(
      this.apiKey,
      _channelIds,
      options?.withRecasts,
      options?.withReplies,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieve feed based on who a user is following
   *
   * @param {number} fid - fid of user whose feed you want to create
   * @param {Object} [options] - Optional parameters for customizing the feed.
   * @param {boolean} [options.withRecasts] - Include recasts in the response, true by default
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 100).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *   omit this parameter for the initial request.
   *
   * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object,
   *  containing the requested feed data.
   *
   * @example
   * // Example: Retrieve a user's feed based on who they are following
   * client.fetchUserFollowingFeed(3, {
   *  withRecasts: true,
   *  limit: 30,
   *  // cursor: "nextPageCursor" // Omit this parameter for the initial request.
   * }).then(response => {
   *  console.log('User Feed:', response); // Outputs the user's feed
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed-following).
   */
  public async fetchUserFollowingFeed(
    fid: number,
    options?: {
      withRecasts?: boolean;
      limit?: number;
      cursor?: string;
    }
  ): Promise<FeedResponse> {
    const response = await this.apis.feed.feedFollowing(
      this.apiKey,
      fid,
      options?.withRecasts,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves the 10 most popular casts for a given user based on their FID. Popularity is determined
   * by the number of replies, likes, and recasts each cast receives, and the results are sorted from
   * the most popular cast first.
   *
   * @param {number} fid - The FID of the user whose popular casts are being fetched.
   *
   * @returns {Promise<BulkCastsResponse>} A promise that resolves to a `BulkCastsResponse` object,
   *   containing the top 10 most popular casts for the specified user.
   *
   * @example
   * // Example: Retrieve the 10 most popular casts for a user
   * client.fetchPopularCastsByUser(3).then(response => {
   *   console.log('Popular Casts:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed-user-popular).
   */
  public async fetchPopularCastsByUser(
    fid: number
  ): Promise<BulkCastsResponse> {
    const response = await this.apis.feed.feedUserPopular(this.apiKey, fid);
    return response.data;
  }

  /**
   * Retrieves the most recent replies and recasts for a given user FID. This method is ideal for fetching
   * the latest user interactions in the form of replies and recasts, sorted by the most recent first.
   *
   * @param {number} fid - The FID of the user whose recent replies and recasts are being fetched.
   * @param {Object} [options] - Optional parameters for customizing the response.
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 100).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *  omit this parameter for the initial request.
   *
   * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object,
   *   containing the recent replies and recasts for the specified user.
   *
   * @example
   * // Example: Retrieve the recent replies and recasts for a user
   * client.fetchRepliesAndRecastsForUser(3, { limit: 25 }).then(response => {
   *   console.log('Replies and Recasts:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed-user-replies-recasts).
   */
  public async fetchRepliesAndRecastsForUser(
    fid: number,
    options?: {
      limit?: number;
      cursor?: string;
    }
  ): Promise<FeedResponse> {
    const response = await this.apis.feed.feedUserRepliesRecasts(
      this.apiKey,
      fid,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves a feed consisting only of casts with Frames, presented in reverse chronological order.
   * This method is ideal for users who are interested in viewing a feed of content that exclusively
   * includes casts with frame actions.
   *
   * @param {Object} [options] - Optional parameters to tailor the response.
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 100).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *  omit this parameter for the initial request.
   *
   * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object,
   *   containing a feed of casts with Frames.
   *
   * @example
   * // Example: Retrieve a feed of casts with Frames
   * client.fetchFramesOnlyFeed({ limit: 30 }).then(response => {
   *   console.log('Frames Only Feed:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed-frames).
   */
  public async fetchFramesOnlyFeed(options?: {
    limit?: number;
    cursor?: string;
  }) {
    const response = await this.apis.feed.feedFrames(
      this.apiKey,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves a feed of the most popular cast.
   *
   * @param {Object} [options] - Optional parameters for customizing the response.
   * @param {number} [options.limit] - Number of results to retrieve (default 10, max 10).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *  omit this parameter for the initial request.
   * @param {TrendingFeedTimeWindow} [options.timeWindow] - Time window for the trending feed.
   *
   * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object,
   *   containing the most popular casts on the platform.
   *
   * @example
   * // Example: Retrieve a feed of the most popular casts
   * import { TrendingFeedTimeWindow } from "@neynar/nodejs-sdk";
   *
   * client.fetchTrendingFeed({ limit: 10, timeWindow: TrendingFeedTimeWindow.SIX_HOUR }).then(response => {
   *   console.log('Popular Feed:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/feed-trending).
   */
  public async fetchTrendingFeed(options?: {
    limit?: number;
    cursor?: string;
    timeWindow?: TrendingFeedTimeWindow;
  }) {
    const response = await this.apis.feed.feedTrending(
      this.apiKey,
      options?.limit,
      options?.cursor,
      options?.timeWindow
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

  /**
   * Retrieves a list of notifications for a user within specific channels. This method is useful for
   * obtaining notifications related to user interactions within designated channels, identified by
   * their parent URLs.
   *
   * @param {number} fid - The FID of the user whose channel notifications are being fetched.
   * @param {string} channelIds - channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
   * @param {Object} [options] - Optional parameters for the request.
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 50).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *   omit this parameter for the initial request.
   *
   * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object,
   *   containing the channel-specific notifications for the user.
   *
   * @example
   * // Example: Retrieve channel notifications for a user limit to 30 results
   * client.fetchChannelNotificationsForUser(3, ['neynar', 'farcaster'],
   * {
   *  limit: 30,
   *  // cursor: "nextPageCursor" // Omit this parameter for the initial request.
   * }).then(response => {
   *   console.log('Channel Notifications:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/notifications-channel).
   */
  public async fetchChannelNotificationsForUser(
    fid: number,
    channelIds: string[],
    options?: { cursor?: string; limit?: number }
  ): Promise<NotificationsResponse> {
    const _channelIds = channelIds.join(",");
    const response = await this.apis.notifications.notificationsChannel(
      this.apiKey,
      fid,
      _channelIds,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves a list of notifications for a user based on specific parent URLs. This method is
   * particularly useful for fetching notifications related to user interactions within designated
   * channels or content categories.
   *
   * @param {number} fid - The FID of the user for whom notifications are being fetched.
   * @param {Array<string>} parentUrls - An array of parent URLs to specify the channels.
   * @param {Object} [options] - Optional parameters for customizing the response.
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 50).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *   omit this parameter for the initial request.
   *
   * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object,
   *   containing the notifications for the specified user and parent URLs.
   *
   * @example
   * // Example: Retrieve notifications for a user based on specific parent URLs
   * client.fetchNotificationsByParentUrlForUser(3, ['chain://eip155:1/erc721:0xd4498134211baad5846ce70ce04e7c4da78931cc', 'chain://eip155:1/erc721:0xfd8427165df67df6d7fd689ae67c8ebf56d9ca61'], { limit: 30 }).then(response => {
   *   console.log('User Notifications:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/notifications-parent-url).
   */
  public async fetchNotificationsByParentUrlForUser(
    fid: number,
    parentUrls: string[],
    options?: { cursor?: string; limit?: number }
  ) {
    const _parentUrls = parentUrls.join(",");
    const response = await this.apis.notifications.notificationsParentUrl(
      this.apiKey,
      fid,
      _parentUrls,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  // ------------ Channel ------------

  /**
   * Retrieves details of a specific channel based on its ID. This method is essential for
   * obtaining comprehensive information about a channel, including its attributes and metadata.
   *
   * @param {string} id - The ID of the channel being queried.
   *
   * @returns {Promise<ChannelResponse>} A promise that resolves to a `ChannelResponse` object,
   *   containing detailed information about the specified channel.
   *
   * @example
   * // Example: Retrieve details of a channel by its ID
   * client.lookupChannel('neynar').then(response => {
   *   console.log('Channel Details:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/channel-details).
   */
  public async lookupChannel(id: string): Promise<ChannelResponse> {
    const response = await this.apis.channel.channelDetails(this.apiKey, id);
    return response.data;
  }

  /**
   * Retrieves all channels where a specific user has been active, sorted in reverse chronological order.
   * This method is useful for understanding the various channels a user has interacted with through casting.
   *
   * @param {number} fid - The FID (identifier) of the user whose active channels are being fetched.
   *
   * @returns {Promise<UsersActiveChannelsResponse>} A promise that resolves to an `UsersActiveChannelsResponse` object,
   *   containing a list of channels where the user has been active.
   *
   * @example
   * // Example: Fetch all channels where a user has been active
   * client.fetchUsersActiveChannels(3).then(response => {
   *   console.log('User\'s Active Channels:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/active-channels).
   */
  public async fetchUsersActiveChannels(fid: number) {
    const response = await this.apis.channel.activeChannels(this.apiKey, fid);
    return response.data;
  }

  /**
   * Retrieves a list of users who are active in a given channel, ordered by ascending FIDs
   *
   * @param {string} id - Channel ID for the channel being queried
   * @param {boolean} hasRootCastAuthors - Include users who posted the root cast in the channel
   * @param {Object} [options] - Optional parameters for the request
   * @param {boolean} [options.hasCastLikers] - Include users who liked a cast in the channel
   * @param {boolean} [options.hasCastRecasters] - Include users who recasted a cast in the channel
   * @param {boolean} [options.hasReplyAuthors] - Include users who replied to a cast in the channel
   * @param {number} [options.limit] - Number of results to retrieve (default 25, max 100).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *   omit this parameter for the initial request.
   *
   * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object,
   *  containing the users active in the specified channel.
   *
   * @example
   * // Example: Retrieve active users in a channel
   * client.fetchActiveUsersInSingleChannel('neynar', true, {
   *  hasCastLikers: true,
   *  hasCastRecasters: true,
   *  hasReplyAuthors: true,
   *  limit: 10
   *  // cursor: "nextPageCursor" // Omit this parameter for the initial request.
   * }).then(response => {
   *  console.log('Active Users:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/channel-users).
   */
  public async fetchActiveUsersInSingleChannel(
    id: string,
    hasRootCastAuthors: boolean,
    options?: {
      hasCastLikers?: boolean;
      hasCastRecasters?: boolean;
      hasReplyAuthors?: boolean;
      cursor?: string;
      limit?: number;
    }
  ): Promise<UsersResponse> {
    const response = await this.apis.channel.channelUsers(
      this.apiKey,
      id,
      hasRootCastAuthors,
      options?.hasCastLikers,
      options?.hasCastRecasters,
      options?.hasReplyAuthors,
      options?.cursor,
      options?.limit
    );
    return response.data;
  }

  /**
   * Retrieves a list of all channels, including their details. This method is particularly useful for
   * obtaining a comprehensive overview of all available channels on the platform.
   *
   * @returns {Promise<ChannelListResponse>} A promise that resolves to an `ChannelListResponse` object,
   *   containing a list of all channels along with their respective details.
   *
   * @example
   * // Example: Retrieve a list of all channels
   * client.fetchAllChannels().then(response => {
   *   console.log('All Channels:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/list-all-channels).
   */
  public async fetchAllChannels(): Promise<ChannelListResponse> {
    const response = await this.apis.channel.listAllChannels(this.apiKey);
    return response.data;
  }

  /**
   * Searches for channels based on their ID or name. This method is useful for locating specific
   * channels on the platform using search queries.
   *
   * @param {string} q - The query string used for searching channels, which can be a channel ID or name.
   *
   * @returns {Promise<ChannelListResponse>} A promise that resolves to a `ChannelListResponse` object,
   *   containing a list of channels that match the search criteria.
   *
   * @example
   * // Example: Search for channels using a query string
   * client.searchChannels('ux').then(response => {
   *   console.log('Search Results:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/search-channels).
   */
  public async searchChannels(q: string): Promise<ChannelListResponse> {
    const response = await this.apis.channel.searchChannels(this.apiKey, q);
    return response.data;
  }

  /**
   * Retrieves a list of trending channels based on activity within a specified time window.
   * This method is useful for identifying channels that are currently popular or receiving significant engagement.
   *
   * @param {'1d' | '7d' | '30d'} [timeWindow] - The time window for trending analysis. Options are '1d' (one day),
   *   '7d' (seven days), or '30d' (thirty days).
   * @param {Object} [options] - Optional parameters to tailor the request.
   * @param {number} [options.limit=25] - The number of channel details to fetch per request. Defaults to 25, with a maximum allowable value of 100.
   * @param {string} [options.cursor] - Pagination cursor for the next set of results.
   *  Omit this parameter for the initial request to start from the first page.
   *
   * @returns {Promise<ChannelListResponse>} A promise that resolves to a `ChannelListResponse` object,
   *   containing a list of trending channels based on the specified time window.
   *
   * @example
   * // Example: Retrieve trending channels over the past week
   * import { TimeWindow } from '@neynar/nodejs-sdk'
   *
   * client.fetchTrendingChannels(TimeWindow.SEVEN_DAYS, { limit: 20 }).then(response => {
   *   console.log('Trending Channels:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/trending-channels).
   */
  public async fetchTrendingChannels(
    timeWindow?: TimeWindow,
    options?: {
      limit?: number;
      cursor?: string;
    }
  ): Promise<ChannelListResponse> {
    const response = await this.apis.channel.trendingChannels(
      this.apiKey,
      timeWindow,
      options?.limit,
      options?.cursor
    );
    return response.data;
  }

  /**
   * Retrieves a list of followers for a specific channel. This method is useful for understanding
   * the audience and reach of a channel.
   *
   * @param {string} id - The Channel ID for which followers are being queried.
   * @param {Object} [options] - Optional parameters for customizing the response.
   * @param {number} [options.limit] - Number of followers to retrieve (default 25, max 1000).
   * @param {string} [options.cursor] - Pagination cursor for the next set of results,
   *  omit this parameter for the initial request.
   *
   * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object,
   *   containing a list of followers for the specified channel.
   *
   * @example
   * // Example: Retrieve followers for a channel
   * client.fetchFollowersForAChannel('founders', { limit: 50 }).then(response => {
   *   console.log('Channel Followers:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/channel-followers).
   */
  public async fetchFollowersForAChannel(
    id: string,
    options?: {
      limit?: number;
      cursor?: string;
    }
  ): Promise<UsersResponse> {
    const response = await this.apis.channel.channelFollowers(
      this.apiKey,
      id,
      options?.cursor,
      options?.limit
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

  // ------------ Fname ------------

  /**
   * Checks if a given fname is available.
   *
   * @param {string} fname - The fname to check for availability.
   *
   * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to an `FnameAvailabilityResponse` object,
   *   indicating whether the specified fname is available or already in use.
   *
   * @example
   * // Example: Check if a specific fname is available
   * client.isFnameAvailable('farcaster').then(response => {
   *   console.log('Fname Availability:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/fname-availability).
   */
  public async isFnameAvailable(
    fname: string
  ): Promise<FnameAvailabilityResponse> {
    const response = await this.apis.fname.fnameAvailability(
      this.apiKey,
      fname
    );
    return response.data;
  }

  // ------------ Frame ------------

  /**
   * Retrieves a frame by its UUID, provided it was created by the developer identified by the provided API key.
   * This method is useful for fetching details of a specific frame for review or display purposes.
   *
   * @param {string} uuid - The UUID of the frame to be retrieved.
   *
   * @returns {Promise<NeynarFrame>} A promise that resolves to a `NeynarFrame` object containing the details of the retrieved frame.
   *
   * @example
   * // Example: Retrieve a frame by its UUID
   * const uuid = 'your-frame-uuid';
   * client.lookupNeynarFrame(uuid).then(frame => {
   *   console.log('Retrieved Frame:', frame);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/lookup-neynar-frame).
   */
  public async lookupNeynarFrame(uuid: string) {
    const response = await this.apis.neynarFrames.lookupNeynarFrame(
      this.apiKey,
      uuid
    );
    return response.data;
  }

  /**
   * Creates a new frame with a list of pages. This method enables developers to add new frames
   * to their content offerings, identified by the provided API key.
   *
   * @param {NeynarFrameCreationRequest} neynarFrameCreationRequest - The request object containing the details for the new frame.
   *
   * @returns {Promise<NeynarFrame>} A promise that resolves to the newly created frame object.
   *
   * @example
   * // Example: Create a new frame
   * const creationRequest = {
   *   name: 'Frame name',
   *   pages: [...]
   * };
   * client.publishNeynarFrame(creationRequest).then(response => {
   *   console.log('Newly Created Frame:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/publish-neynar-frame).
   */
  public async publishNeynarFrame(
    neynarFrameCreationRequest: NeynarFrameCreationRequest
  ) {
    const response = await this.apis.neynarFrames.publishNeynarFrame(
      this.apiKey,
      neynarFrameCreationRequest
    );
    return response.data;
  }

  /**
   * Updates an existing frame with new content or properties, assuming the frame was created by the developer,
   * as identified by the provided API key. This method allows for modifying frames post-creation.
   *
   * @param {NeynarFrameUpdateRequest} neynarFrame - The new content or properties for the frame being updated.
   *
   * @returns {Promise<NeynarFrame>} A promise that resolves to a `NeynarFrame` object,
   *   reflecting the updated state of the frame.
   *
   * @example
   * // Example: Update an existing frame with new content
   * const neynarFrame = {
   *   uuid: 'your-frame-uuid', // UUID of the frame to update
   *   pages: [...], // New pages or content for the frame
   * };
   * client.updateNeynarFrame(neynarFrameUpdateRequest).then(response => {
   *   console.log('Frame Update Response:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/update-neynar-frame).
   */
  public async updateNeynarFrame(
    neynarFrameUpdateRequest: NeynarFrameUpdateRequest
  ) {
    const response = await this.apis.neynarFrames.updateNeynarFrame(
      this.apiKey,
      neynarFrameUpdateRequest
    );
    return response.data;
  }

  /**
   * Deletes an existing frame if it was created by the developer, identified through the provided API key.
   * This method allows developers to remove frames that they have previously submitted to the platform.
   *
   * @param {string} uuid - The unique identifier (UUID) of the frame to be deleted.
   *
   * @returns {Promise<DeleteFrameResponse>} A promise that resolves to an `DeleteFrameResponse` object,
   *   indicating the success or failure of the delete operation.
   *
   * @example
   * // Example: Delete a specific frame by its UUID
   * const frameUuid = 'your-frame-uuid'; // Replace with the actual UUID of the frame to be deleted
   * client.deleteNeynarFrame(frameUuid).then(response => {
   *   console.log('Delete Frame Response:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/delete-neynar-frame).
   */
  public async deleteNeynarFrame(uuid: string) {
    const deleteNeynarFrameRequest: DeleteNeynarFrameRequest = {
      uuid,
    };
    const response = await this.apis.neynarFrames.deleteNeynarFrame(
      this.apiKey,
      deleteNeynarFrameRequest
    );
    return response.data;
  }

  /**
   * Retrieves a list of frames created by the developer, identified through the provided API key.
   * This method is essential for developers to review their frames submitted to the platform.
   *
   * @returns {Promise<NeynarFrame[]>} A promise that resolves to a `NeynarFrame[]` object,
   *   containing a list of frames associated with the developer's API key.
   *
   * @example
   * // Example: Retrieve frames created by the developer
   * client.fetchNeynarFrames().then(response => {
   *   console.log('Developer Frames:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/fetch-neynar-frames).
   */
  public async fetchNeynarFrames() {
    const response = await this.apis.neynarFrames.fetchNeynarFrames(
      this.apiKey
    );
    return response.data;
  }

  /**
   * Posts a frame action on a specific cast.
   * Note that the `signer_uuid` must be approved before posting a frame action.
   *
   * @param {string} signerUuid - UUID of the signer who is performing the action.
   * @param {string} castHash - The hash of the cast on which the action is being performed.
   * @param {FrameAction} action - The specific frame action to be posted.
   *
   * @returns {Promise<FrameActionResponse>} A promise that resolves to a `FrameActionResponse` object,
   *   indicating the success or failure of the frame action post.
   *
   * @example
   * // Example: Post a frame action on a cast
   * const signerUuid = 'signerUuid';
   * const castHash = 'castHash';
   * const action = {
   *  button: {
   *    title: 'Button Title',  // Optional
   *    index: 1
   *  },
   *  frames_url: 'frames Url',
   *  post_url: 'Post Url',
   * }; // Example action
   * client.postFrameAction(signerUuid, castHash, action).then(response => {
   *   console.log('Frame Action Response:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/post-frame-action).
   */
  public async postFrameAction(
    signerUuid: string,
    castHash: string,
    action: FrameAction
  ) {
    const body: FrameActionReqBody = {
      signer_uuid: signerUuid,
      cast_hash: castHash,
      action,
    };
    const response = await this.apis.frames.postFrameAction(this.apiKey, body);
    return response.data;
  }

  /**
   * Validates a frame action against the Farcaster Hub. This method is crucial for verifying
   * the authenticity and integrity of a frame action, provided in hexadecimal format. It supports
   * optional contexts for cast reactions and follow actions to enrich validation responses.
   *
   * @param {string} messageBytesInHex - The message bytes from the Frame Action in hexadecimal format.
   * @param {Object} [options] - Optional parameters for the validation request.
   * @param {boolean} [options.castReactionContext] - Adds viewer_context inside the cast object to indicate whether the interactor reacted to the cast housing the frame.
   * @param {boolean} [options.followContext] - Adds viewer_context inside the user (interactor) object to indicate whether the interactor follows or is followed by the cast author.
   * @param {boolean} [options.signerContext] - Adds context about the app used by the user inside `frame.action`.
   *
   * @returns {Promise<ValidateFrameActionResponse>} A promise that resolves to a `ValidateFrameActionResponse` object,
   *   indicating the outcome of the frame action validation, potentially enriched with specified contexts.
   *
   * @example
   * // Example: Validate a frame action with additional context for cast reactions and follow actions
   * const messageBytesInHex = '0a49080d1085940118f6a6a32e20018201390a1a86db69b3ffdf6ab8acb6872b69ccbe7eb6a67af7ab71e95aa69f10021a1908ef011214237025b322fd03a9ddc7ec6c078fb9c56d1a72111214e3d88aeb2d0af356024e0c693f31c11b42c76b721801224043cb2f3fcbfb5dafce110e934b9369267cf3d1aef06f51ce653dc01700fc7b778522eb7873fd60dda4611376200076caf26d40a736d3919ce14e78a684e4d30b280132203a66717c82d728beb3511b05975c6603275c7f6a0600370bf637b9ecd2bd231e';
   * client.validateFrameAction(messageBytesInHex, { castReactionContext: false, followContext: true, signerContext: true }).then(response => {
   *   console.log('Frame Action Validation:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/validate-frame).
   */
  public async validateFrameAction(
    messageBytesInHex: string,
    options?: {
      castReactionContext?: boolean;
      followContext?: boolean;
      signerContext?: boolean;
    }
  ): Promise<ValidateFrameActionResponse> {
    const reqBody: ValidateFrameRequest = {
      message_bytes_in_hex: messageBytesInHex,
      ...(typeof options?.castReactionContext !== "undefined" && {
        cast_reaction_context: options?.castReactionContext,
      }),
      ...(typeof options?.followContext !== "undefined" && {
        follow_context: options?.followContext,
      }),
      ...(typeof options?.signerContext !== "undefined" && {
        signer_context: options?.signerContext,
      }),
    };

    const response = await this.apis.frames.validateFrame(this.apiKey, reqBody);
    return response.data;
  }

  // ------------ Webhook ------------

  /**
   * Retrieves details about a specific webhook by its ID.
   *
   * @param {string} webhookId - The unique identifier of the webhook to be retrieved.
   *
   * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object,
   *   containing detailed information about the requested webhook.
   *
   * @example
   * // Example: Fetch information about a specific webhook by ID
   * const webhookId = 'yourWebhookId';
   * client.lookupWebhook(webhookId).then(response => {
   *   console.log('Webhook Details:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/lookup-webhook).
   */
  public async lookupWebhook(webhookId: string): Promise<WebhookResponse> {
    const response = await this.apis.webhook.lookupWebhook(
      this.apiKey,
      webhookId
    );
    return response.data;
  }

  /**
   * Creates a new webhook with the specified parameters. This method enables developers to
   * programmatically register webhooks for receiving real-time notifications of events that occur
   * within Farcaster.
   *
   * @param {string} name - The name of the webhook.
   * @param {string} url - The URL to which the webhook events will be sent.
   * @param {Object} [options] - Optional parameters for the webhook creation.
   * @param {WebhookSubscriptionFilters} [options.subscription] - A set of filters defining the events the webhook should subscribe to.
   *
   * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object,
   *   containing information about the newly created webhook, including its ID, name, and subscription details.
   *
   * @example
   * // Example: Create a new webhook for user sign-up events
   * const name = 'Cast created Webhook';
   * const url = 'https://example.com/webhook';
   * const subscription = {
            "cast.created": {
                "author_fids": [
                    3,
                    196,
                    194
                ],
                "mentioned_fids": [196],
            },
            "user.created": {}
        }
   * client.publishWebhook(name, url, { subscription }).then(response => {
   *   console.log('Newly Created Webhook:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/publish-webhook).
   */
  public async publishWebhook(
    name: string,
    url: string,
    options?: {
      subscription: WebhookSubscriptionFilters;
    }
  ): Promise<WebhookResponse> {
    const webhookPostReqBody: WebhookPostReqBody = {
      name,
      url,
      ...(typeof options?.subscription !== "undefined" && {
        subscription: options?.subscription,
      }),
    };

    const response = await this.apis.webhook.publishWebhook(
      this.apiKey,
      webhookPostReqBody
    );
    return response.data;
  }

  /**
   * Updates the active status of a specified webhook.
   *
   * @param {string} webhookId - The unique identifier of the webhook whose active status is being toggled.
   * @param {boolean} active - The desired active status of the webhook. Set to `true` to activate the webhook or `false` to deactivate it.
   *
   * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
   *
   * @example
   * // Example: Deactivate a webhook
   * const webhookId = 'yourWebhookId';
   * client.updateWebhookActiveStatus(webhookId, false).then(response => {
   *   console.log('Webhook Active Status Toggled:', response);
   * });
   *
   * // Example: Reactivate a webhook
   * client.updateWebhookActiveStatus(webhookId, true).then(response => {
   *   console.log('Webhook Active Status Toggled:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/toggle-webhook-active-status).
   */
  public async updateWebhookActiveStatus(
    webhookId: string,
    active: boolean
  ): Promise<WebhookResponse> {
    const webhookPatchReqBody: WebhookPatchReqBody = {
      webhook_id: webhookId,
      active: active.toString() as WebhookPatchReqBodyActiveEnum,
    };

    const response = await this.apis.webhook.updateWebhookActiveStatus(
      this.apiKey,
      webhookPatchReqBody
    );
    return response.data;
  }

  /**
   * Updates an existing webhook with new parameters, including its name, URL, and event subscriptions.
   *
   * @param {string} webhookId - The unique identifier of the webhook to be updated.
   * @param {string} name - The new name for the webhook. Useful for identification and management purposes.
   * @param {string} url - The new URL to which the webhook events will be sent.
   * @param {Object} [options] - Optional parameters for updating the webhook.
   * @param {WebhookSubscriptionFilters} [options.subscription] - A set of filters defining the events the webhook should subscribe to after the update.
   *
   * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object,
   *   containing the updated information about the webhook, including its ID, name, subscription details, and more.
   *
   * @example
   * // Example: Update an existing webhook with a new URL and subscription filters
   * const webhookId = 'existingWebhookId';
   * const newName = 'UpdatedWebhookName';
   * const newUrl = 'https://example.com/new-webhook-url';
   * const subscription = {
            "cast.created": {
                "author_fids": [
                    2, 4, 6
                ],
                "mentioned_fids": [194],
            },
            "user.created": {}
        }
   * client.updateWebhook(webhookId, newName, newUrl, { subscription }).then(response => {
   *   console.log('Updated Webhook:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/update-webhook).
   */
  public async updateWebhook(
    webhookId: string,
    name: string,
    url: string,
    options?: {
      subscription: WebhookSubscriptionFilters;
    }
  ): Promise<WebhookResponse> {
    const webhookPutReqBody: WebhookPutReqBody = {
      name,
      url,
      webhook_id: webhookId,
      ...(typeof options?.subscription !== "undefined" && {
        subscription: options?.subscription,
      }),
    };
    const response = await this.apis.webhook.updateWebhook(
      this.apiKey,
      webhookPutReqBody
    );
    return response.data;
  }

  /**
   * Deletes a specified webhook by its unique identifier.
   *
   * @param {string} webhookId - The unique identifier of the webhook to be deleted.
   *
   * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
   *
   * @example
   * // Example: Delete a specific webhook by ID
   * const webhookId = 'yourWebhookId';
   * client.deleteWebhook(webhookId).then(response => {
   *   console.log('Webhook Deletion Response:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/delete-webhook).
   */
  public async deleteWebhook(webhookId: string): Promise<WebhookResponse> {
    const response = await this.apis.webhook.deleteWebhook(this.apiKey, {
      webhook_id: webhookId,
    });
    return response.data;
  }

  /**
   * Retrieves a list of all webhooks currently associated with the user's account.
   *
   * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object.
   *
   * @example
   * // Example: Fetch a list of all webhooks associated with the user's account
   * client.fetchWebhooks().then(response => {
   *   console.log('List of Webhooks:', response);
   * });
   *
   * For more information, refer to the [Neynar documentation](https://docs.neynar.com/reference/fetch-webhooks).
   */
  public async fetchWebhooks(): Promise<WebhookListResponse> {
    const response = await this.apis.webhook.fetchWebhooks(this.apiKey);
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
