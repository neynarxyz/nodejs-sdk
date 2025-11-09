
import { mnemonicToAccount } from "viem/accounts";
import { Logger, silentLogger } from "../common/logger";
import axios, { AxiosError, AxiosInstance, RawAxiosRequestConfig } from "axios";
import type { SetRequired } from "type-fest";
import { Configuration as OpenAPIGeneratedConfiguration } from '../api/configuration';
import { Configuration } from './configuration';

import {SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN, SIGNED_KEY_REQUEST_TYPE} from '../common/constants';
import {isApiErrorResponse} from '../utils';

import { ActionApi } from '../api/apis/action-api';
import { AgentsApi } from '../api/apis/agents-api';
import { AppHostApi } from '../api/apis/app-host-api';
import { AuthAddressApi } from '../api/apis/auth-address-api';
import { BanApi } from '../api/apis/ban-api';
import { BlockApi } from '../api/apis/block-api';
import { CastApi } from '../api/apis/cast-api';
import { ChannelApi } from '../api/apis/channel-api';
import { FeedApi } from '../api/apis/feed-api';
import { FnameApi } from '../api/apis/fname-api';
import { FollowsApi } from '../api/apis/follows-api';
import { FrameApi } from '../api/apis/frame-api';
import { LoginApi } from '../api/apis/login-api';
import { MetricsApi } from '../api/apis/metrics-api';
import { MuteApi } from '../api/apis/mute-api';
import { NotificationsApi } from '../api/apis/notifications-api';
import { OnchainApi } from '../api/apis/onchain-api';
import { ReactionApi } from '../api/apis/reaction-api';
import { SignerApi } from '../api/apis/signer-api';
import { StorageApi } from '../api/apis/storage-api';
import { StudioApi } from '../api/apis/studio-api';
import { SubscribersApi } from '../api/apis/subscribers-api';
import { UserApi } from '../api/apis/user-api';
import { WebhookApi } from '../api/apis/webhook-api';
import type { AddVerificationReqBody, AppHostGetEventEventEnum, AppHostGetEventResponse, AppHostPostEventReqBody, AppHostPostEventResponse, AppHostUserStateResponse, AssociateDeployment200Response, AssociateDeploymentRequest, AuthorizationUrlResponse, BalanceResponse, BanListResponse, BanReqBody, BanResponse, BestFriendsResponse, BlockListResponse, BlockReqBody, BulkCastsResponse, BulkFollowResponse, BulkUsersByAddressResponse, BulkUsersResponse, BuyStorageReqBody, CastEmbedCrawlResponse, CastResponse, CastsMetricsResponse, CastsResponse, CastsSearchResponse, ChannelFollowReqBody, ChannelListResponse, ChannelMemberInviteListResponse, ChannelMemberListResponse, ChannelMemberRole, ChannelResponse, ChannelResponseBulk, ChannelSearchResponse, Conversation, ConversationSummary, CreateDeploymentRequest, DeleteCastReqBody, DeleteDeployment200Response, DeleteDeploymentRequest, DeployFungibleFactoryEnum, DeployFungibleMetadataNsfwEnum, DeployFungibleNetworkEnum, DeployFungibleResponse, DeveloperManagedSigner, ErrorRes, FarcasterActionReqBody, FarcasterActionReqBodyAction, FeedResponse, FetchAllNotificationsTypeEnum, FetchAuthorizationUrlResponseTypeEnum, FetchBulkCastsSortTypeEnum, FetchBulkChannelsTypeEnum, FetchBulkUsersByEthOrSolAddressAddressTypesEnum, FetchCastMetricsIntervalEnum, FetchCastQuotes200Response, FetchCastQuotesTypeEnum, FetchCastReactionsTypesEnum, FetchFeedEmbedTypesEnum, FetchFeedFeedTypeEnum, FetchFeedFilterTypeEnum, FetchFeedForYouProviderEnum, FetchFrameCatalogCategoriesEnum, FetchFrameCatalogNetworksEnum, FetchFrameCatalogTimeWindowEnum, FetchRelevantFrames200Response, FetchRelevantFramesNetworksEnum, FetchRelevantFramesTimeWindowEnum, FetchRelevantFungibleOwnersNetworkEnum, FetchRepliesAndRecastsForUserFilterEnum, FetchSubscribedToForFidSubscriptionProviderEnum, FetchSubscribersForFidSubscriptionProviderEnum, FetchSubscriptionsForFidSubscriptionProviderEnum, FetchTrendingChannelsTimeWindowEnum, FetchTrendingFeedProviderEnum, FetchTrendingFeedTimeWindowEnum, FetchTrendingFungibles200Response, FetchTrendingFungiblesNetworkEnum, FetchTrendingFungiblesTimeWindowEnum, FetchUserBalanceNetworksEnum, FetchUserFollowersSortTypeEnum, FetchUserFollowingSortTypeEnum, FetchUserInteractions200Response, FetchUserInteractionsTypeEnum, FetchUserReactionsTypeEnum, FetchUserReciprocalFollowers200Response, FetchUserReciprocalFollowersSortTypeEnum, FnameAvailabilityResponse, FollowReqBody, FollowersResponse, FrameCatalogResponse, FrameNotificationTokens, FramePayTransactionReqBody, FramePayTransactionReqBodyTransaction, FungiblesResponseSchema, GetConversationMessages200Response, GetDeploymentFile200Response, GetDeploymentLogs200Response, GetNotificationCampaignStats200Response, InviteChannelMemberReqBody, ListConversations200Response, ListDeploymentFiles200Response, ListDeployments200ResponseInner, LookupCastByHashOrUrlTypeEnum, LookupCastConversationFoldEnum, LookupCastConversationSortTypeEnum, LookupCastConversationTypeEnum, LookupChannelTypeEnum, MarkNotificationsAsSeenReqBody, MintNft200Response, MintNftRequest, MuteListResponse, MuteReqBody, MuteResponse, NonceResponse, NotificationType, NotificationsResponse, OperationResponse, PostCastReqBody, PostCastReqBodyEmbeds, PostCastResponse, PromptDeployment200Response, PromptDeploymentRequest, ReactionReqBody, ReactionType, ReactionsCastResponse, ReactionsResponse, RegisterAuthAddressDeveloperManagedSignedKeyReqBody, RegisterDeveloperManagedSignedKeyReqBody, RegisterSignedKeyForDeveloperManagedAuthAddress200Response, RegisterSignerKeyReqBody, RegisterUserOnChainReqBody, RegisterUserOnChainReqBodyPreRegistrationCallsInner, RegisterUserOnChainReqBodyRegistration, RegisterUserOnChainReqBodySignersInner, RegisterUserOnChainResponse, RegisterUserReqBody, RegisterUserReqBodyMetadata, RegisterUserReqBodySigner, RegisterUserResponse, RelevantFollowersResponse, RelevantFungibleOwnersResponse, RemoveChannelMemberReqBody, RemoveVerificationReqBody, RespondChannelInviteReqBody, SearchCastsModeEnum, SearchCastsSortTypeEnum, SearchFramesNetworksEnum, SendFrameNotificationsReqBody, SendFrameNotificationsReqBodyFilters, SendFrameNotificationsReqBodyNotification, SendFrameNotificationsResponse, SignedKeyRequestSponsor, Signer, SignerListResponse, SimulateNftMintNetworkEnum, SimulateNftMintResponse, StartApp200Response, StartAppRequest, StorageAllocationsResponse, StorageUsageResponse, SubscribedToResponse, SubscribersResponse, SubscriptionCheckResponse, SubscriptionsResponse, TransactionFrameConfig, TransactionFrameResponse, TransactionSendFungiblesRecipient, TransactionSendFungiblesReqBody, TransactionSendFungiblesReqBodyNetworkEnum, TransactionSendFungiblesResponse, TrendingChannelResponse, UpdateUserReqBody, UpdateUserReqBodyLocation, UpdateUserReqBodyVerifiedAccounts, UploadImage200Response, UploadImageUrlRequest, UserFIDResponse, UserResponse, UserSearchResponse, UsersActiveChannelsResponse, UsersResponse, VerificationChainId, VerificationType, WebhookDeleteReqBody, WebhookListResponse, WebhookPatchReqBody, WebhookPatchReqBodyActiveEnum, WebhookPostReqBody, WebhookPutReqBody, WebhookResponse, WebhookSubscriptionFilters } from '../api';

const { version: sdkVersion } = require("../../package.json");


/**
 * Converts a camelCase string to snake_case.
 * If the input string is not in camelCase format, it returns the original string.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The converted string in snake_case, or the original string if not camelCase.
 */
function camelToSnakeCase(str) {
  // Check if the string is camelCase
  if (/^[a-z]+([A-Z][a-z]*)+$/.test(str)) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
  return str; // Return the original string if it's not camelCase
}

/**
 * Converts the top-level keys of an object from camelCase to snake_case.
 * If a key is not in camelCase, it retains its original format.
 * Nested objects or arrays are left unchanged. 
 * This is done to revert the conversion of top-level keys since we accept snake_case keys in the API but convert them to camelCase in the wrapper.
 *
 * @param {object} obj - The object whose top-level keys are to be converted.
 * @returns {object} A new object with top-level keys converted to snake_case.
 */
function camelCaseToSnakeCaseKeys(obj) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    // Convert only the top-level keys
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        camelToSnakeCase(key), // Convert only camelCase keys
        value, // Leave the value untouched
      ])
    );
  }
  return obj; // If not an object, return as is
}



export interface NeynarAPIClientOptions {
  logger?: Logger;
  axiosInstance?: AxiosInstance;
}

export class NeynarAPIClient {
  private readonly logger: Logger;
  private config: OpenAPIGeneratedConfiguration;

  private readonly apis: {
    actionApi: ActionApi;
    agentsApi: AgentsApi;
    appHostApi: AppHostApi;
    authAddressApi: AuthAddressApi;
    banApi: BanApi;
    blockApi: BlockApi;
    castApi: CastApi;
    channelApi: ChannelApi;
    feedApi: FeedApi;
    fnameApi: FnameApi;
    followsApi: FollowsApi;
    frameApi: FrameApi;
    loginApi: LoginApi;
    metricsApi: MetricsApi;
    muteApi: MuteApi;
    notificationsApi: NotificationsApi;
    onchainApi: OnchainApi;
    reactionApi: ReactionApi;
    signerApi: SignerApi;
    storageApi: StorageApi;
    studioApi: StudioApi;
    subscribersApi: SubscribersApi;
    userApi: UserApi;
    webhookApi: WebhookApi;
  };

  constructor(
    config: Configuration,
    options: NeynarAPIClientOptions = {}
  ) {

    if (typeof config === 'string') {
      console.error('Error: config must be of type Configuration');
      console.log(`
Seems, like you are using sdk v2 but the syntax on client instantiation is for sdk v1.
SDK v1 -> v2 migration guide: https://docs.neynar.com/reference/neynar-nodejs-sdk-v1-to-v2-migration-guide

Correct usage way to instantiate the client:

import { NeynarAPIClient, Configuration } from "@neynar/nodejs-sdk";

const config = new Configuration({
  apiKey: "API_KEY",
  baseOptions: {
    headers: {
      "x-neynar-experimental": true,
    },
  },
});

const client = new NeynarAPIClient(config);\n`);
      throw new Error('Invalid configuration type. Expected Configuration object but received string.');
    }

    const { logger = silentLogger, axiosInstance: customAxiosInstance } = options;
    
    this.logger = logger;
    this.config = new OpenAPIGeneratedConfiguration({
      apiKey: config.apiKey,
      basePath: config.basePath,
      baseOptions: config.baseOptions,
    });

    const axiosInstance = customAxiosInstance || axios.create({
      headers: {
        "x-sdk-version": sdkVersion,
        "x-sdk": "node"
      },
    });

    axiosInstance.defaults.decompress = true;
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && [302].includes(error.response.status)) {
          return {
            data: {
              location: error.response.headers.location,
            },
          };
        }
        if (NeynarAPIClient.isApiErrorResponse(error)) {
          const apiErrors = error.response.data;
          this.logger.warn(`API errors: ${JSON.stringify(apiErrors)}`);
        }
        throw error;
      }
    );

    this.apis = {
      actionApi: new ActionApi(this.config, undefined, axiosInstance),
      agentsApi: new AgentsApi(this.config, undefined, axiosInstance),
      appHostApi: new AppHostApi(this.config, undefined, axiosInstance),
      authAddressApi: new AuthAddressApi(this.config, undefined, axiosInstance),
      banApi: new BanApi(this.config, undefined, axiosInstance),
      blockApi: new BlockApi(this.config, undefined, axiosInstance),
      castApi: new CastApi(this.config, undefined, axiosInstance),
      channelApi: new ChannelApi(this.config, undefined, axiosInstance),
      feedApi: new FeedApi(this.config, undefined, axiosInstance),
      fnameApi: new FnameApi(this.config, undefined, axiosInstance),
      followsApi: new FollowsApi(this.config, undefined, axiosInstance),
      frameApi: new FrameApi(this.config, undefined, axiosInstance),
      loginApi: new LoginApi(this.config, undefined, axiosInstance),
      metricsApi: new MetricsApi(this.config, undefined, axiosInstance),
      muteApi: new MuteApi(this.config, undefined, axiosInstance),
      notificationsApi: new NotificationsApi(this.config, undefined, axiosInstance),
      onchainApi: new OnchainApi(this.config, undefined, axiosInstance),
      reactionApi: new ReactionApi(this.config, undefined, axiosInstance),
      signerApi: new SignerApi(this.config, undefined, axiosInstance),
      storageApi: new StorageApi(this.config, undefined, axiosInstance),
      studioApi: new StudioApi(this.config, undefined, axiosInstance),
      subscribersApi: new SubscribersApi(this.config, undefined, axiosInstance),
      userApi: new UserApi(this.config, undefined, axiosInstance),
      webhookApi: new WebhookApi(this.config, undefined, axiosInstance),
    };
  }

  public static isApiErrorResponse(
    error: any
  ): error is SetRequired<AxiosError<ErrorRes>, "response"> {
    if (!(error instanceof AxiosError)) return false;
    return (
      error.response?.data !== undefined && "message" in error.response.data
    );
  }

  
/**
 * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
 *
 * @summary User actions across apps
 *
 * @param {object} params
 * @param {string} params.signerUuid  - The signer_uuid of the user on behalf of whom the action is being performed.
 * @param {string} params.baseUrl  - The base URL of the app on which the action is being performed.
 * @param {FarcasterActionReqBodyAction} params.action 
 *
 * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const baseUrl = 
 * const action = 
 *
 * client.publishFarcasterAction({signerUuid, baseUrl, action}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-farcaster-action)
 *
 */
public async publishFarcasterAction(params: { signerUuid: string, baseUrl: string, action: FarcasterActionReqBodyAction }): Promise<{ [key: string]: any; }> {
  const adjustedParams: any = {};
const _params = { farcasterActionReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.actionApi.publishFarcasterAction(adjustedParams);
  return response.data;
}

/**
 * Creates a new transaction pay mini app that can be used to collect payments through a mini app
 *
 * @summary Create transaction pay mini app
 *
 * @param {object} params
 * @param {FramePayTransactionReqBodyTransaction} params.transaction 
 * @param {TransactionFrameConfig} params.config 
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 *
 * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const transaction = 
 * const config = 
 * const idem = 
 *
 * client.createTransactionPayFrame({transaction, config, idem}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/create-transaction-pay-frame)
 *
 */
public async createTransactionPayFrame(params: { transaction: FramePayTransactionReqBodyTransaction, config: TransactionFrameConfig, idem?: string }): Promise<TransactionFrameResponse> {
  const adjustedParams: any = {};
const _params = { framePayTransactionReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.agentsApi.createTransactionPayFrame(adjustedParams);
  return response.data;
}

/**
 * Returns a list of interactions between two users
 *
 * @summary User interactions
 *
 * @param {object} params
 * @param {number[]} params.fids  - Comma separated list of two FIDs
 * @param {Array<FetchUserInteractionsTypeEnum>} params.type [optional]  - Comma seperated list of Interaction type to fetch
 *
 * @returns {Promise<FetchUserInteractions200Response>} A promise that resolves to a `FetchUserInteractions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fids = 
 * const type = 
 *
 * client.fetchUserInteractions({ fids, type }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-interactions)
 *
 */
public async fetchUserInteractions(params: { fids: number[], type?: Array<FetchUserInteractionsTypeEnum> }): Promise<FetchUserInteractions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.map(value => (String(value)));
}
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.join(",");
}

  const response = await this.apis.agentsApi.fetchUserInteractions(adjustedParams);
  return response.data;
}

/**
 * Generates a summary of all casts related to a conversation surrounding a cast by passing in a cast hash or Farcaster URL.  Summary is generated by an LLM and is intended to be passed as a context to AI agents.
 *
 * @summary Cast conversation summary
 *
 * @param {object} params
 * @param {string} params.identifier  - Cast identifier (It's either a URL or a hash))
 * @param {number} params.limit [optional]  - Number of casts to consider in a summary up to a point of target cast (Default: 20, Maximum: 50)
 * @param {string} params.prompt [optional]  - Additional prompt used to generate a summary
 *
 * @returns {Promise<ConversationSummary>} A promise that resolves to a `ConversationSummary` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const identifier = 
 * const limit = 
 * const prompt = 
 *
 * client.lookupCastConversationSummary({ identifier, limit, prompt }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation-summary)
 *
 */
public async lookupCastConversationSummary(params: { identifier: string, limit?: number, prompt?: string }): Promise<ConversationSummary> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.agentsApi.lookupCastConversationSummary(adjustedParams);
  return response.data;
}

/**
 * Returns event object for app host events. Used if the app host intends to sign the event message instead of using Neynar-hosted signers.
 *
 * @summary Generate event
 *
 * @param {object} params
 * @param {string} params.appDomain  - The domain of the mini app
 * @param {number} params.fid  - The FID of the user who initiated the event
 * @param {AppHostGetEventEventEnum} params.event  - The type of event
 *
 * @returns {Promise<AppHostGetEventResponse>} A promise that resolves to a `AppHostGetEventResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const appDomain = 
 * const fid = 
 * const event = 
 *
 * client.appHostGetEvent({ appDomain, fid, event }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/app-host-get-event)
 *
 */
public async appHostGetEvent(params: { appDomain: string, fid: number, event: AppHostGetEventEventEnum }): Promise<AppHostGetEventResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.appHostApi.appHostGetEvent(adjustedParams);
  return response.data;
}

/**
 * Returns the current notification state for a specific user across all mini app domains in this app host. Shows which domains have notifications enabled.
 *
 * @summary Enabled notifications
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the user
 *
 * @returns {Promise<AppHostUserStateResponse>} A promise that resolves to a `AppHostUserStateResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 *
 * client.appHostGetUserState({ fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/app-host-get-user-state)
 *
 */
public async appHostGetUserState(params: { fid: number }): Promise<AppHostUserStateResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.appHostApi.appHostGetUserState(adjustedParams);
  return response.data;
}

/**
 * Post an app_host event to the domain\'s webhook. Events such as enabling or disabling notifications for a user. Provide either a signed message or the signer UUID of an authorized neynar-hosted signers.
 *
 * @summary Send event
 *
 * @param {object} params
 * @param {any} params.appHostPostEventReqBody 
 *
 * @returns {Promise<AppHostPostEventResponse>} A promise that resolves to a `AppHostPostEventResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const appHostPostEventReqBody = 
 *
 * client.appHostPostEvent({appHostPostEventReqBody}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/app-host-post-event)
 *
 */
public async appHostPostEvent(params: { appHostPostEventReqBody }): Promise<AppHostPostEventResponse> {
  const adjustedParams: any = {};
const _params = { appHostPostEventReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.appHostApi.appHostPostEvent(adjustedParams);
  return response.data;
}

/**
 * Fetches the status of a developer managed auth address by auth address
 *
 * @summary Status by auth address
 *
 * @param {object} params
 * @param {string} params.address  - Ethereum address
 *
 * @returns {Promise<RegisterSignedKeyForDeveloperManagedAuthAddress200Response>} A promise that resolves to a `RegisterSignedKeyForDeveloperManagedAuthAddress200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const address = 
 *
 * client.lookupDeveloperManagedAuthAddress({ address }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-developer-managed-auth-address)
 *
 */
public async lookupDeveloperManagedAuthAddress(params: { address: string }): Promise<RegisterSignedKeyForDeveloperManagedAuthAddress200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.authAddressApi.lookupDeveloperManagedAuthAddress(adjustedParams);
  return response.data;
}

/**
 * Allow apps to register an Ethereum addresses as authorized \"auth addresses\" for a user\'s Farcaster account, enabling seamless Sign-In With Farcaster (SIWF) across applications without repeated custody wallet authorizations.
 *
 * @summary Register Signed Key
 *
 * @param {object} params
 * @param {string} params.address  - Ethereum address
 * @param {number} params.appFid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {number} params.deadline  - unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
 * @param {string} params.signature  - Signature generated by the custody address of the app. Signed data includes app_fid, deadline, 32 bytes padded auth address. [Refer guide for more details.](https://docs.neynar.com/docs/auth-address-signature-generation)
 * @param {string} params.redirectUrl [optional]  - Url to redirect to after the signer is approved. **Note** : This should only be used when requesting a signer from a native mobile application.
 * @param {SignedKeyRequestSponsor} params.sponsor [optional] 
 *
 * @returns {Promise<RegisterSignedKeyForDeveloperManagedAuthAddress200Response>} A promise that resolves to a `RegisterSignedKeyForDeveloperManagedAuthAddress200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const address = 
 * const appFid = 
 * const deadline = 
 * const signature = 
 * const redirectUrl = 
 * const sponsor = 
 *
 * client.registerSignedKeyForDeveloperManagedAuthAddress({address, appFid, deadline, signature, redirectUrl, sponsor}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-signed-key-for-developer-managed-auth-address)
 *
 */
public async registerSignedKeyForDeveloperManagedAuthAddress(params: { address: string, appFid: number, deadline: number, signature: string, redirectUrl?: string, sponsor?: SignedKeyRequestSponsor }): Promise<RegisterSignedKeyForDeveloperManagedAuthAddress200Response> {
  const adjustedParams: any = {};
const _params = { registerAuthAddressDeveloperManagedSignedKeyReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.authAddressApi.registerSignedKeyForDeveloperManagedAuthAddress(adjustedParams);
  return response.data;
}

/**
 * Deletes a list of FIDs from the app associated with your API key.
 *
 * @summary Unban FIDs from app
 *
 * @param {object} params
 * @param {Array<number>} params.fids 
 *
 * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fids = 
 *
 * client.deleteBans({fids}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-bans)
 *
 */
public async deleteBans(params: { fids: Array<number> }): Promise<BanResponse> {
  const adjustedParams: any = {};
const _params = { banReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.banApi.deleteBans(adjustedParams);
  return response.data;
}

/**
 * Fetches all FIDs that your app has banned.
 *
 * @summary Banned FIDs of app
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<BanListResponse>} A promise that resolves to a `BanListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 *
 * client.fetchBanList({ limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-ban-list)
 *
 */
public async fetchBanList(params: { limit?: number, cursor?: string }): Promise<BanListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.banApi.fetchBanList(adjustedParams);
  return response.data;
}

/**
 * Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.
 *
 * @summary Ban FIDs from app
 *
 * @param {object} params
 * @param {Array<number>} params.fids 
 *
 * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fids = 
 *
 * client.publishBans({fids}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-bans)
 *
 */
public async publishBans(params: { fids: Array<number> }): Promise<BanResponse> {
  const adjustedParams: any = {};
const _params = { banReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.banApi.publishBans(adjustedParams);
  return response.data;
}

/**
 * Deletes a block for a given FID.
 *
 * @summary Unblock FID
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {number} params.blockedFid  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const blockedFid = 
 *
 * client.deleteBlock({signerUuid, blockedFid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-block)
 *
 */
public async deleteBlock(params: { signerUuid: string, blockedFid: number }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { blockReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.blockApi.deleteBlock(adjustedParams);
  return response.data;
}

/**
 * Fetches all FIDs that a user has blocked or has been blocked by
 *
 * @summary Blocked / Blocked by FIDs
 *
 * @param {object} params
 * @param {number} params.blockerFid [optional]  - Providing this will return the users that this user has blocked
 * @param {number} params.blockedFid [optional]  - Providing this will return the users that have blocked this user
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<BlockListResponse>} A promise that resolves to a `BlockListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const blockerFid = 
 * const blockedFid = 
 * const limit = 
 *
 * client.fetchBlockList({ blockerFid, blockedFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-block-list)
 *
 */
public async fetchBlockList(params: { blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string }): Promise<BlockListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.blockApi.fetchBlockList(adjustedParams);
  return response.data;
}

/**
 * Adds a block for a given FID.
 *
 * @summary Block FID
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {number} params.blockedFid  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const blockedFid = 
 *
 * client.publishBlock({signerUuid, blockedFid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-block)
 *
 */
public async publishBlock(params: { signerUuid: string, blockedFid: number }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { blockReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.blockApi.publishBlock(adjustedParams);
  return response.data;
}

/**
 * Delete an existing cast.  (In order to delete a cast `signer_uuid` must be approved)
 *
 * @summary Delete a cast
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.targetHash 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const targetHash = 
 *
 * client.deleteCast({signerUuid, targetHash}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-cast)
 *
 */
public async deleteCast(params: { signerUuid: string, targetHash: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { deleteCastReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.castApi.deleteCast(adjustedParams);
  return response.data;
}

/**
 * Fetch multiple casts using their respective hashes.
 *
 * @summary Bulk fetch casts
 *
 * @param {object} params
 * @param {string[]} params.casts  - Hashes of the cast to be retrived (Comma separated, no spaces)
 * @param {number} params.viewerFid [optional]  - adds viewer_context to cast object to show whether viewer has liked or recasted the cast.
 * @param {FetchBulkCastsSortTypeEnum} params.sortType [optional]  - Optional parameter to sort the casts based on different criteria
 *
 * @returns {Promise<CastsResponse>} A promise that resolves to a `CastsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const casts = 
 * const viewerFid = 
 * const sortType = 
 *
 * client.fetchBulkCasts({ casts, viewerFid, sortType }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-casts)
 *
 */
public async fetchBulkCasts(params: { casts: string[], viewerFid?: number, sortType?: FetchBulkCastsSortTypeEnum }): Promise<CastsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.casts && Array.isArray(adjustedParams.casts)) {
  adjustedParams.casts = adjustedParams.casts.join(",");
}

  const response = await this.apis.castApi.fetchBulkCasts(adjustedParams);
  return response.data;
}

/**
 * Fetch casts that quote a given cast
 *
 * @summary Cast Quotes
 *
 * @param {object} params
 * @param {string} params.identifier  - Cast identifier (It's either a URL or a hash)
 * @param {FetchCastQuotesTypeEnum} params.type  - The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash
 * @param {number} params.viewerFid [optional] 
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FetchCastQuotes200Response>} A promise that resolves to a `FetchCastQuotes200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const identifier = 
 * const type = 
 * const viewerFid = 
 * const limit = 
 *
 * client.fetchCastQuotes({ identifier, type, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-quotes)
 *
 */
public async fetchCastQuotes(params: { identifier: string, type: FetchCastQuotesTypeEnum, viewerFid?: number, limit?: number, cursor?: string }): Promise<FetchCastQuotes200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.castApi.fetchCastQuotes(adjustedParams);
  return response.data;
}

/**
 * Crawls the given URL and returns metadata useful when embedding the URL in a cast.
 *
 * @summary Embedded URL metadata
 *
 * @param {object} params
 * @param {string} params.url  - URL to crawl metadata of
 *
 * @returns {Promise<CastEmbedCrawlResponse>} A promise that resolves to a `CastEmbedCrawlResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const url = 
 *
 * client.fetchEmbeddedUrlMetadata({ url }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-embedded-url-metadata)
 *
 */
public async fetchEmbeddedUrlMetadata(params: { url: string }): Promise<CastEmbedCrawlResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castApi.fetchEmbeddedUrlMetadata(adjustedParams);
  return response.data;
}

/**
 * Gets information about an individual cast by passing in a Farcaster web URL or cast hash
 *
 * @summary By hash or URL
 *
 * @param {object} params
 * @param {string} params.identifier  - Cast identifier (It's either a URL or a hash)
 * @param {LookupCastByHashOrUrlTypeEnum} params.type  - The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash
 * @param {number} params.viewerFid [optional]  - adds viewer_context to cast object to show whether viewer has liked or recasted the cast.
 *
 * @returns {Promise<CastResponse>} A promise that resolves to a `CastResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const identifier = 
 * const type = 
 * const viewerFid = 
 *
 * client.lookupCastByHashOrUrl({ identifier, type, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-by-hash-or-url)
 *
 */
public async lookupCastByHashOrUrl(params: { identifier: string, type: LookupCastByHashOrUrlTypeEnum, viewerFid?: number }): Promise<CastResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.castApi.lookupCastByHashOrUrl(adjustedParams);
  return response.data;
}

/**
 * Gets all casts related to a conversation surrounding a cast by passing in a cast hash or Farcaster URL. Includes all the ancestors of a cast up to the root parent in a chronological order. Includes all direct_replies to the cast up to the reply_depth specified in the query parameter.
 *
 * @summary Conversation for a cast
 *
 * @param {object} params
 * @param {string} params.identifier  - Cast identifier (It's either a URL or a hash)
 * @param {LookupCastConversationTypeEnum} params.type  - The query param accepted by the API. Sent along with identifier param. url - Cast identifier is a url hash - Cast identifier is a hash
 * @param {number | null} params.replyDepth [optional]  - The depth of replies in the conversation that will be returned (default 2)
 * @param {boolean | null} params.includeChronologicalParentCasts [optional]  - Include all parent casts in chronological order
 * @param {number} params.viewerFid [optional]  - Providing this will return a conversation that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {LookupCastConversationSortTypeEnum} params.sortType [optional]  - Sort type for the ordering of descendants. Default is `chron`
 * @param {LookupCastConversationFoldEnum} params.fold [optional]  - Show conversation above or below the fold. Lower quality responses are hidden below the fold. Not passing in a value shows the full conversation without any folding.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 50)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<Conversation>} A promise that resolves to a `Conversation` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const identifier = 
 * const type = 
 * const replyDepth = 
 * const includeChronologicalParentCasts = 
 * const viewerFid = 
 * const sortType = 
 * const fold = 
 * const limit = 
 *
 * client.lookupCastConversation({ identifier, type, replyDepth, includeChronologicalParentCasts, viewerFid, sortType, fold, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation)
 *
 */
public async lookupCastConversation(params: { identifier: string, type: LookupCastConversationTypeEnum, replyDepth?: number | null, includeChronologicalParentCasts?: boolean | null, viewerFid?: number, sortType?: LookupCastConversationSortTypeEnum, fold?: LookupCastConversationFoldEnum, limit?: number, cursor?: string }): Promise<Conversation> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.castApi.lookupCastConversation(adjustedParams);
  return response.data;
}

/**
 * Posts a cast or cast reply. Works with mentions and embeds.   (In order to post a cast `signer_uuid` must be approved)
 *
 * @summary Post a cast
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.text [optional] 
 * @param {Array<PostCastReqBodyEmbeds>} params.embeds [optional] 
 * @param {string} params.parent [optional]  - parent_url of the channel the cast is in, or hash of the cast
 * @param {string} params.channelId [optional]  - Channel ID of the channel where the cast is to be posted. e.g. neynar, farcaster, warpcast
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 * @param {number} params.parentAuthorFid [optional]  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<PostCastResponse>} A promise that resolves to a `PostCastResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const text = 
 * const embeds = 
 * const parent = 
 * const channelId = 
 * const idem = 
 * const parentAuthorFid = 
 *
 * client.publishCast({signerUuid, text, embeds, parent, channelId, idem, parentAuthorFid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-cast)
 *
 */
public async publishCast(params: { signerUuid: string, text?: string, embeds?: Array<PostCastReqBodyEmbeds>, parent?: string, channelId?: string, idem?: string, parentAuthorFid?: number }): Promise<PostCastResponse> {
  const adjustedParams: any = {};
const _params = { postCastReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.castApi.publishCast(adjustedParams);
  return response.data;
}

/**
 * Search for casts based on a query string, with optional AND filters
 *
 * @summary Search for casts
 *
 * @param {object} params
 * @param {string} params.q  - Query string to search for casts. Supported operators:  | Operator  | Description                                                                                              | | --------- | -------------------------------------------------------------------------------------------------------- | | `+`       | Acts as the AND operator. This is the default operator between terms and can usually be omitted.         | | `|`      | Acts as the OR operator.                                                                                 | | `*`       | When used at the end of a term, signifies a prefix query.                                                  | | `"`       | Wraps several terms into a phrase (for example, `"star wars"`).                                          | | `(`, `)`  | Wrap a clause for precedence (for example, `star + (wars | trek)`).                                     | | `~n`      | When used after a term (for example, `satr~3`), sets `fuzziness`. When used after a phrase, sets `slop`. | | `-`       | Negates the term.                                                                                        | | `before:` | Search for casts before a specific date. (e.g. `before:2025-04-20` or `before:2025-04-20T23:59:59`)      | | `after:`  | Search for casts after a specific date. (e.g. `after:2025-04-20` or `after:2025-04-20T00:00:00`)         |
 * @param {SearchCastsModeEnum} params.mode [optional]  - Choices are: - `literal` - Searches for the words in the query string (default) - `semantic` - Searches for the meaning of the query string - `hybrid` - Combines both literal and semantic results
 * @param {SearchCastsSortTypeEnum} params.sortType [optional]  - Choices are: - `desc_chron` - All casts sorted by time in a descending order (default) - `chron` - All casts sorted by time in ascending order - `algorithmic` - Casts sorted by engagement and time
 * @param {number} params.authorFid [optional]  - Fid of the user whose casts you want to search
 * @param {number} params.viewerFid [optional]  - Providing this will return search results that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {string} params.parentUrl [optional]  - Parent URL of the casts you want to search
 * @param {string} params.channelId [optional]  - Channel ID of the casts you want to search
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 *
 * @returns {Promise<CastsSearchResponse>} A promise that resolves to a `CastsSearchResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const mode = 
 * const sortType = 
 * const authorFid = 
 * const viewerFid = 
 * const parentUrl = 
 * const channelId = 
 * const limit = 
 *
 * client.searchCasts({ q, mode, sortType, authorFid, viewerFid, parentUrl, channelId, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-casts)
 *
 */
public async searchCasts(params: { q: string, mode?: SearchCastsModeEnum, sortType?: SearchCastsSortTypeEnum, authorFid?: number, viewerFid?: number, parentUrl?: string, channelId?: string, limit?: number, cursor?: string }): Promise<CastsSearchResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.castApi.searchCasts(adjustedParams);
  return response.data;
}

/**
 * Returns a list of all channels with their details
 *
 * @summary Fetch all channels with their details
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 200)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelListResponse>} A promise that resolves to a `ChannelListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 *
 * client.fetchAllChannels({ limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-channels)
 *
 */
public async fetchAllChannels(params: { limit?: number, cursor?: string }): Promise<ChannelListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.fetchAllChannels(adjustedParams);
  return response.data;
}

/**
 * Returns details of multiple channels
 *
 * @summary Bulk fetch
 *
 * @param {object} params
 * @param {string[]} params.ids  - Comma separated list of channel IDs or parent_urls, up to 100 at a time
 * @param {FetchBulkChannelsTypeEnum} params.type [optional]  - Type of identifier being used to query the channels. Defaults to ID.
 * @param {number} params.viewerFid [optional]  - FID of the user viewing the channels.
 *
 * @returns {Promise<ChannelResponseBulk>} A promise that resolves to a `ChannelResponseBulk` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const ids = 
 * const type = 
 * const viewerFid = 
 *
 * client.fetchBulkChannels({ ids, type, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-channels)
 *
 */
public async fetchBulkChannels(params: { ids: string[], type?: FetchBulkChannelsTypeEnum, viewerFid?: number }): Promise<ChannelResponseBulk> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.ids && Array.isArray(adjustedParams.ids)) {
  adjustedParams.ids = adjustedParams.ids.join(",");
}

  const response = await this.apis.channelApi.fetchBulkChannels(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of invites, either in a channel or for a user. If both are provided, open channel invite for that user is returned.
 *
 * @summary Open invites
 *
 * @param {object} params
 * @param {string} params.channelId [optional]  - Channel ID for the channel being queried
 * @param {number} params.invitedFid [optional]  - FID of the user being invited
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelMemberInviteListResponse>} A promise that resolves to a `ChannelMemberInviteListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const channelId = 
 * const invitedFid = 
 * const limit = 
 *
 * client.fetchChannelInvites({ channelId, invitedFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-invites)
 *
 */
public async fetchChannelInvites(params: { channelId?: string, invitedFid?: number, limit?: number, cursor?: string }): Promise<ChannelMemberInviteListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.fetchChannelInvites(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of members in a channel
 *
 * @summary Fetch members
 *
 * @param {object} params
 * @param {string} params.channelId  - Channel ID for the channel being queried
 * @param {number} params.fid [optional]  - FID of the user being queried. Specify this to check if a user is a member of the channel without paginating through all members.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelMemberListResponse>} A promise that resolves to a `ChannelMemberListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const channelId = 
 * const fid = 
 * const limit = 
 *
 * client.fetchChannelMembers({ channelId, fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-members)
 *
 */
public async fetchChannelMembers(params: { channelId: string, fid?: number, limit?: number, cursor?: string }): Promise<ChannelMemberListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.channelApi.fetchChannelMembers(adjustedParams);
  return response.data;
}

/**
 * Returns a list of followers for a specific channel. Max limit is 1000. Use cursor for pagination.
 *
 * @summary For channel
 *
 * @param {object} params
 * @param {string} params.id  - Channel ID for the channel being queried
 * @param {number} params.viewerFid [optional]  - Providing this will return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.limit [optional]  - Number of followers to fetch (Default: 25, Maximum: 1000)
 *
 * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 * const viewerFid = 
 * const limit = 
 *
 * client.fetchFollowersForAChannel({ id, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-followers-for-a-channel)
 *
 */
public async fetchFollowersForAChannel(params: { id: string, viewerFid?: number, cursor?: string, limit?: number }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.channelApi.fetchFollowersForAChannel(adjustedParams);
  return response.data;
}

/**
 * Returns a list of relevant channel followers for a specific FID. This usually shows on a channel as \"X, Y, Z follow this channel\".
 *
 * @summary Relevant followers
 *
 * @param {object} params
 * @param {string} params.id  - Channel ID being queried
 * @param {number} params.viewerFid  - The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 * const viewerFid = 
 *
 * client.fetchRelevantFollowersForAChannel({ id, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers-for-a-channel)
 *
 */
public async fetchRelevantFollowersForAChannel(params: { id: string, viewerFid: number }): Promise<RelevantFollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.channelApi.fetchRelevantFollowersForAChannel(adjustedParams);
  return response.data;
}

/**
 * Returns a list of trending channels based on activity
 *
 * @summary Channels by activity
 *
 * @param {object} params
 * @param {FetchTrendingChannelsTimeWindowEnum} params.timeWindow [optional] 
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 10, Maximum: 25)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<TrendingChannelResponse>} A promise that resolves to a `TrendingChannelResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const timeWindow = 
 * const limit = 
 *
 * client.fetchTrendingChannels({ timeWindow, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-trending-channels)
 *
 */
public async fetchTrendingChannels(params: { timeWindow?: FetchTrendingChannelsTimeWindowEnum, limit?: number, cursor?: string }): Promise<TrendingChannelResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.fetchTrendingChannels(adjustedParams);
  return response.data;
}

/**
 * Returns a list of all channels with their details that an FID is a member of. Data may have a delay of up to 1 hour.
 *
 * @summary Member of
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the user.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelMemberListResponse>} A promise that resolves to a `ChannelMemberListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const limit = 
 *
 * client.fetchUserChannelMemberships({ fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-channel-memberships)
 *
 */
public async fetchUserChannelMemberships(params: { fid: number, limit?: number, cursor?: string }): Promise<ChannelMemberListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.fetchUserChannelMemberships(adjustedParams);
  return response.data;
}

/**
 * Returns a list of all channels with their details that a FID follows.
 *
 * @summary Following
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the user.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelListResponse>} A promise that resolves to a `ChannelListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const limit = 
 *
 * client.fetchUserChannels({ fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-channels)
 *
 */
public async fetchUserChannels(params: { fid: number, limit?: number, cursor?: string }): Promise<ChannelListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.fetchUserChannels(adjustedParams);
  return response.data;
}

/**
 * Fetches all channels that a user has casted in, in reverse chronological order.
 *
 * @summary Fetch channels that user is active in
 *
 * @param {object} params
 * @param {number} params.fid  - The user's FID (identifier)
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<UsersActiveChannelsResponse>} A promise that resolves to a `UsersActiveChannelsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const limit = 
 *
 * client.fetchUsersActiveChannels({ fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-users-active-channels)
 *
 */
public async fetchUsersActiveChannels(params: { fid: number, limit?: number, cursor?: string }): Promise<UsersActiveChannelsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.fetchUsersActiveChannels(adjustedParams);
  return response.data;
}

/**
 * Follow a channel
 *
 * @summary Follow a channel
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.channelId  - The unique identifier of a farcaster channel
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const channelId = 
 *
 * client.followChannel({signerUuid, channelId}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/follow-channel)
 *
 */
public async followChannel(params: { signerUuid: string, channelId: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { channelFollowReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.channelApi.followChannel(adjustedParams);
  return response.data;
}

/**
 * Invite a user to a channel
 *
 * @summary Invite
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.channelId  - The unique identifier of a farcaster channel
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {ChannelMemberRole} params.role 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const channelId = 
 * const fid = 
 * const role = 
 *
 * client.inviteChannelMember({signerUuid, channelId, fid, role}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/invite-channel-member)
 *
 */
public async inviteChannelMember(params: { signerUuid: string, channelId: string, fid: number, role: ChannelMemberRole }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { inviteChannelMemberReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.channelApi.inviteChannelMember(adjustedParams);
  return response.data;
}

/**
 * Returns details of a channel
 *
 * @summary By ID or parent_url
 *
 * @param {object} params
 * @param {string} params.id  - Channel ID for the channel being queried
 * @param {LookupChannelTypeEnum} params.type [optional]  - Type of identifier being used to query the channel. Defaults to ID.
 * @param {number} params.viewerFid [optional]  - FID of the user viewing the channel.
 *
 * @returns {Promise<ChannelResponse>} A promise that resolves to a `ChannelResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 * const type = 
 * const viewerFid = 
 *
 * client.lookupChannel({ id, type, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-channel)
 *
 */
public async lookupChannel(params: { id: string, type?: LookupChannelTypeEnum, viewerFid?: number }): Promise<ChannelResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.lookupChannel(adjustedParams);
  return response.data;
}

/**
 * Remove a user from a channel or a user\'s invite to a channel role
 *
 * @summary Remove user
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.channelId  - The unique identifier of a farcaster channel
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {ChannelMemberRole} params.role 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const channelId = 
 * const fid = 
 * const role = 
 *
 * client.removeChannelMember({signerUuid, channelId, fid, role}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/remove-channel-member)
 *
 */
public async removeChannelMember(params: { signerUuid: string, channelId: string, fid: number, role: ChannelMemberRole }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { removeChannelMemberReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.channelApi.removeChannelMember(adjustedParams);
  return response.data;
}

/**
 * Accept or reject a channel invite
 *
 * @summary Accept or reject an invite
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.channelId  - The unique identifier of a farcaster channel
 * @param {ChannelMemberRole} params.role 
 * @param {boolean} params.accept  - Accept or reject the invite
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const channelId = 
 * const role = 
 * const accept = 
 *
 * client.respondChannelInvite({signerUuid, channelId, role, accept}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/respond-channel-invite)
 *
 */
public async respondChannelInvite(params: { signerUuid: string, channelId: string, role: ChannelMemberRole, accept: boolean }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { respondChannelInviteReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.channelApi.respondChannelInvite(adjustedParams);
  return response.data;
}

/**
 * Returns a list of channels based on ID or name
 *
 * @summary Search by ID or name
 *
 * @param {object} params
 * @param {string} params.q  - Channel ID or name for the channel being queried
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 200)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.viewerFid [optional]  - FID of the user viewing the channels.
 *
 * @returns {Promise<ChannelSearchResponse>} A promise that resolves to a `ChannelSearchResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const limit = 
 * const viewerFid = 
 *
 * client.searchChannels({ q, limit, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-channels)
 *
 */
public async searchChannels(params: { q: string, limit?: number, cursor?: string, viewerFid?: number }): Promise<ChannelSearchResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.channelApi.searchChannels(adjustedParams);
  return response.data;
}

/**
 * Unfollow a channel
 *
 * @summary Unfollow a channel
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.channelId  - The unique identifier of a farcaster channel
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const channelId = 
 *
 * client.unfollowChannel({signerUuid, channelId}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/unfollow-channel)
 *
 */
public async unfollowChannel(params: { signerUuid: string, channelId: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { channelFollowReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.channelApi.unfollowChannel(adjustedParams);
  return response.data;
}

/**
 * Fetch casts for a given user FID in reverse chronological order. Also allows filtering by parent_url and channel
 *
 * @summary Chronologically
 *
 * @param {object} params
 * @param {number} params.fid  - FID of user whose recent casts you want to fetch
 * @param {number} params.appFid [optional]  - Optionally filter to casts created via a specific app FID, e.g. 9152 for Warpcast
 * @param {number} params.viewerFid [optional]  - FID of the user viewing the feed
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 150)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {boolean | null} params.includeReplies [optional]  - Include reply casts by the author in the response, true by default
 * @param {string} params.parentUrl [optional]  - Parent URL to filter the feed; mutually exclusive with channel_id
 * @param {string} params.channelId [optional]  - Channel ID to filter the feed; mutually exclusive with parent_url
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const appFid = 
 * const viewerFid = 
 * const limit = 
 * const includeReplies = 
 * const parentUrl = 
 * const channelId = 
 *
 * client.fetchCastsForUser({ fid, appFid, viewerFid, limit, includeReplies, parentUrl, channelId }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-casts-for-user)
 *
 */
public async fetchCastsForUser(params: { fid: number, appFid?: number, viewerFid?: number, limit?: number, cursor?: string, includeReplies?: boolean | null, parentUrl?: string, channelId?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.feedApi.fetchCastsForUser(adjustedParams);
  return response.data;
}

/**
 * Fetch casts based on filters. Ensure setting the correct parameters based on the feed_type and filter_type.
 *
 * @summary By filters
 *
 * @param {object} params
 * @param {FetchFeedFeedTypeEnum} params.feedType [optional]  - Defaults to following (requires FID or address). If set to filter (requires filter_type)
 * @param {FetchFeedFilterTypeEnum} params.filterType [optional]  - Used when feed_type=filter. Can be set to FIDs (requires FIDs) or parent_url (requires parent_url) or channel_id (requires channel_id)
 * @param {number} params.fid [optional]  - (Optional) FID of user whose feed you want to create. By default, the API expects this field, except if you pass a filter_type
 * @param {number[]} params.fids [optional]  - Used when filter_type=FIDs . Create a feed based on a list of FIDs. Max array size is 100. Requires feed_type and filter_type.
 * @param {string} params.parentUrl [optional]  - Used when filter_type=parent_url can be used to fetch content under any parent url e.g. FIP-2 channels on Warpcast. Requires feed_type and filter_type.
 * @param {string} params.channelId [optional]  - Used when filter_type=channel_id can be used to fetch casts under a channel. Requires feed_type and filter_type.
 * @param {boolean | null} params.membersOnly [optional]  - Used when filter_type=channel_id. Only include casts from members of the channel. True by default.
 * @param {string} params.embedUrl [optional]  - Used when filter_type=embed_url. Casts with embedded URLs prefixed by this embed_url param will be returned. We normalize your given URL prefix and prepend 'https://' if no protocol is included. Requires feed_type and filter_type.
 * @param {Array<FetchFeedEmbedTypesEnum>} params.embedTypes [optional]  - Used when filter_type=embed_types can be used to fetch all casts with matching content types. Requires feed_type and filter_type.
 * @param {boolean | null} params.withRecasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const feedType = 
 * const filterType = 
 * const fid = 
 * const fids = 
 * const parentUrl = 
 * const channelId = 
 * const membersOnly = 
 * const embedUrl = 
 * const embedTypes = 
 * const withRecasts = 
 * const limit = 
 * const viewerFid = 
 *
 * client.fetchFeed({ feedType, filterType, fid, fids, parentUrl, channelId, membersOnly, embedUrl, embedTypes, withRecasts, limit, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed)
 *
 */
public async fetchFeed(params: { feedType?: FetchFeedFeedTypeEnum, filterType?: FetchFeedFilterTypeEnum, fid?: number, fids?: number[], parentUrl?: string, channelId?: string, membersOnly?: boolean | null, embedUrl?: string, embedTypes?: Array<FetchFeedEmbedTypesEnum>, withRecasts?: boolean | null, limit?: number, cursor?: string, viewerFid?: number }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.map(value => (String(value)));
}
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.join(",");
}

  const response = await this.apis.feedApi.fetchFeed(adjustedParams);
  return response.data;
}

/**
 * Fetch feed based on channel IDs
 *
 * @summary By channel IDs
 *
 * @param {object} params
 * @param {string[]} params.channelIds  - Comma separated list of up to 10 channel IDs e.g. neynar,farcaster
 * @param {boolean | null} params.withRecasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {boolean | null} params.withReplies [optional]  - Include replies in the response, false by default
 * @param {boolean | null} params.membersOnly [optional]  - Used when filter_type=channel_id. Only include casts from members of the channel. True by default.
 * @param {number[]} params.fids [optional]  - Comma separated list of FIDs to filter the feed by, up to 10 at a time
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {boolean | null} params.shouldModerate [optional]  - If true, only casts that have been liked by the moderator (if one exists) will be returned.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const channelIds = 
 * const withRecasts = 
 * const viewerFid = 
 * const withReplies = 
 * const membersOnly = 
 * const fids = 
 * const limit = 
 * const shouldModerate = 
 *
 * client.fetchFeedByChannelIds({ channelIds, withRecasts, viewerFid, withReplies, membersOnly, fids, limit, shouldModerate }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed-by-channel-ids)
 *
 */
public async fetchFeedByChannelIds(params: { channelIds: string[], withRecasts?: boolean | null, viewerFid?: number, withReplies?: boolean | null, membersOnly?: boolean | null, fids?: number[], limit?: number, cursor?: string, shouldModerate?: boolean | null }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.channelIds && Array.isArray(adjustedParams.channelIds)) {
  adjustedParams.channelIds = adjustedParams.channelIds.join(",");
}
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.map(value => (String(value)));
}
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.join(",");
}

  const response = await this.apis.feedApi.fetchFeedByChannelIds(adjustedParams);
  return response.data;
}

/**
 * Fetch feed based on parent URLs
 *
 * @summary By parent URLs
 *
 * @param {object} params
 * @param {string[]} params.parentUrls  - Comma separated list of parent_urls
 * @param {boolean | null} params.withRecasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {boolean | null} params.withReplies [optional]  - Include replies in the response, false by default
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const parentUrls = 
 * const withRecasts = 
 * const viewerFid = 
 * const withReplies = 
 * const limit = 
 *
 * client.fetchFeedByParentUrls({ parentUrls, withRecasts, viewerFid, withReplies, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed-by-parent-urls)
 *
 */
public async fetchFeedByParentUrls(params: { parentUrls: string[], withRecasts?: boolean | null, viewerFid?: number, withReplies?: boolean | null, limit?: number, cursor?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.parentUrls && Array.isArray(adjustedParams.parentUrls)) {
  adjustedParams.parentUrls = adjustedParams.parentUrls.join(",");
}

  const response = await this.apis.feedApi.fetchFeedByParentUrls(adjustedParams);
  return response.data;
}

/**
 * Fetch a personalized For You feed for a user
 *
 * @summary For you
 *
 * @param {object} params
 * @param {number} params.fid  - FID of user whose feed you want to create
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FetchFeedForYouProviderEnum} params.provider [optional]  - The provider of the For You feed.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 50)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 * const provider = 
 * const limit = 
 *
 * client.fetchFeedForYou({ fid, viewerFid, provider, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed-for-you)
 *
 */
public async fetchFeedForYou(params: { fid: number, viewerFid?: number, provider?: FetchFeedForYouProviderEnum, limit?: number, cursor?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.feedApi.fetchFeedForYou(adjustedParams);
  return response.data;
}

/**
 * Fetch 10 most popular casts for a given user FID; popularity based on replies, likes and recasts; sorted by most popular first
 *
 * @summary 10 most popular casts
 *
 * @param {object} params
 * @param {number} params.fid  - FID of user whose feed you want to create
 * @param {number} params.viewerFid [optional] 
 *
 * @returns {Promise<BulkCastsResponse>} A promise that resolves to a `BulkCastsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 *
 * client.fetchPopularCastsByUser({ fid, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-popular-casts-by-user)
 *
 */
public async fetchPopularCastsByUser(params: { fid: number, viewerFid?: number }): Promise<BulkCastsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchPopularCastsByUser(adjustedParams);
  return response.data;
}

/**
 * Fetch recent replies and recasts for a given user FID; sorted by most recent first
 *
 * @summary Replies and recasts
 *
 * @param {object} params
 * @param {number} params.fid  - FID of user whose replies and recasts you want to fetch
 * @param {FetchRepliesAndRecastsForUserFilterEnum} params.filter [optional]  - Filter to fetch only replies or recasts
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 50)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const filter = 
 * const limit = 
 * const viewerFid = 
 *
 * client.fetchRepliesAndRecastsForUser({ fid, filter, limit, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-replies-and-recasts-for-user)
 *
 */
public async fetchRepliesAndRecastsForUser(params: { fid: number, filter?: FetchRepliesAndRecastsForUserFilterEnum, limit?: number, cursor?: string, viewerFid?: number }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchRepliesAndRecastsForUser(adjustedParams);
  return response.data;
}

/**
 * Fetch trending casts or on the global feed or channels feeds. 7d time window available for channel feeds only.
 *
 * @summary Trending feeds
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 10, Maximum: 10)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FetchTrendingFeedTimeWindowEnum} params.timeWindow [optional]  - Time window for trending casts (7d window for channel feeds only)
 * @param {string} params.channelId [optional]  - Channel ID to filter trending casts. Less active channels might have no casts in the time window selected. Provide either `channel_id` or `parent_url`, not both.
 * @param {string} params.parentUrl [optional]  - Parent URL to filter trending casts. Less active channels might have no casts in the time window selected. Provide either `channel_id` or `parent_url`, not both.
 * @param {FetchTrendingFeedProviderEnum} params.provider [optional]  - The provider of the trending casts feed.
 * @param {string} params.providerMetadata [optional]  - provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 * const viewerFid = 
 * const timeWindow = 
 * const channelId = 
 * const parentUrl = 
 * const provider = 
 * const providerMetadata = 
 *
 * client.fetchTrendingFeed({ limit, viewerFid, timeWindow, channelId, parentUrl, provider, providerMetadata }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-trending-feed)
 *
 */
public async fetchTrendingFeed(params: { limit?: number, cursor?: string, viewerFid?: number, timeWindow?: FetchTrendingFeedTimeWindowEnum, channelId?: string, parentUrl?: string, provider?: FetchTrendingFeedProviderEnum, providerMetadata?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.feedApi.fetchTrendingFeed(adjustedParams);
  return response.data;
}

/**
 * Fetch feed based on who a user is following
 *
 * @summary Following
 *
 * @param {object} params
 * @param {number} params.fid  - FID of user whose feed you want to create
 * @param {number} params.viewerFid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {boolean | null} params.withRecasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 * const withRecasts = 
 * const limit = 
 *
 * client.fetchUserFollowingFeed({ fid, viewerFid, withRecasts, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following-feed)
 *
 */
public async fetchUserFollowingFeed(params: { fid: number, viewerFid?: number, withRecasts?: boolean | null, limit?: number, cursor?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.feedApi.fetchUserFollowingFeed(adjustedParams);
  return response.data;
}

/**
 * Check if a given fname is available
 *
 * @summary Check fname availability
 *
 * @param {object} params
 * @param {string} params.fname 
 *
 * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to a `FnameAvailabilityResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fname = 
 *
 * client.isFnameAvailable({ fname }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/is-fname-available)
 *
 */
public async isFnameAvailable(params: { fname: string }): Promise<FnameAvailabilityResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.fnameApi.isFnameAvailable(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of suggested users to follow. Used to help users discover new users to follow
 *
 * @summary Suggest Follows
 *
 * @param {object} params
 * @param {number | null} params.fid  - FID of the user whose following you want to fetch.
 * @param {number | null} params.viewerFid [optional]  - Providing this will return a list of users that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 *
 * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 * const limit = 
 *
 * client.fetchFollowSuggestions({ fid, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
 *
 */
public async fetchFollowSuggestions(params: { fid: number | null, viewerFid?: number | null, limit?: number }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchFollowSuggestions(adjustedParams);
  return response.data;
}

/**
 * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
 *
 * @summary Relevant followers
 *
 * @param {object} params
 * @param {number} params.targetFid  - User who's profile you are looking at
 * @param {number} params.viewerFid  - The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const targetFid = 
 * const viewerFid = 
 *
 * client.fetchRelevantFollowers({ targetFid, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
 *
 */
public async fetchRelevantFollowers(params: { targetFid: number, viewerFid: number }): Promise<RelevantFollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchRelevantFollowers(adjustedParams);
  return response.data;
}

/**
 * Returns a list of followers for a specific FID.
 *
 * @summary Followers
 *
 * @param {object} params
 * @param {number} params.fid  - User who's profile you are looking at
 * @param {number} params.viewerFid [optional]  - Providing this will return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FetchUserFollowersSortTypeEnum} params.sortType [optional]  - Sort type for fetch followers. Default is `desc_chron`
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 * const sortType = 
 * const limit = 
 *
 * client.fetchUserFollowers({ fid, viewerFid, sortType, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
 *
 */
public async fetchUserFollowers(params: { fid: number, viewerFid?: number, sortType?: FetchUserFollowersSortTypeEnum, limit?: number, cursor?: string }): Promise<FollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchUserFollowers(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.
 *
 * @summary Following
 *
 * @param {object} params
 * @param {number} params.fid  - FID of the user whose following you want to fetch.
 * @param {number} params.viewerFid [optional]  - Providing this will return a list of users that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FetchUserFollowingSortTypeEnum} params.sortType [optional]  - Optional parameter to sort the users based on different criteria.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 * const sortType = 
 * const limit = 
 *
 * client.fetchUserFollowing({ fid, viewerFid, sortType, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
 *
 */
public async fetchUserFollowing(params: { fid: number, viewerFid?: number, sortType?: FetchUserFollowingSortTypeEnum, limit?: number, cursor?: string }): Promise<FollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchUserFollowing(adjustedParams);
  return response.data;
}

/**
 * Returns users who the given FID follows and they follow the FID back (reciprocal following relationship)
 *
 * @summary Reciprocal Followers
 *
 * @param {object} params
 * @param {number} params.fid 
 * @param {number} params.viewerFid [optional] 
 * @param {number} params.limit [optional]  - (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {FetchUserReciprocalFollowersSortTypeEnum} params.sortType [optional] 
 *
 * @returns {Promise<FetchUserReciprocalFollowers200Response>} A promise that resolves to a `FetchUserReciprocalFollowers200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewerFid = 
 * const limit = 
 * const sortType = 
 *
 * client.fetchUserReciprocalFollowers({ fid, viewerFid, limit, sortType }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reciprocal-followers)
 *
 */
public async fetchUserReciprocalFollowers(params: { fid: number, viewerFid?: number, limit?: number, cursor?: string, sortType?: FetchUserReciprocalFollowersSortTypeEnum }): Promise<FetchUserReciprocalFollowers200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchUserReciprocalFollowers(adjustedParams);
  return response.data;
}

/**
 * A curated list of featured mini apps
 *
 * @summary Mini apps catalog
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 100, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {FetchFrameCatalogTimeWindowEnum} params.timeWindow [optional]  - Time window used to calculate the change in trending score for each mini app, used to sort mini app results
 * @param {Array<FetchFrameCatalogCategoriesEnum>} params.categories [optional]  - Comma separated list of categories to include in the results. Includes all if left blank. Example: categories=games,social OR categories=games&categories=social
 * @param {Array<FetchFrameCatalogNetworksEnum>} params.networks [optional]  - List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array.
 *
 * @returns {Promise<FrameCatalogResponse>} A promise that resolves to a `FrameCatalogResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 * const timeWindow = 
 * const categories = 
 * const networks = 
 *
 * client.fetchFrameCatalog({ limit, timeWindow, categories, networks }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-frame-catalog)
 *
 */
public async fetchFrameCatalog(params: { limit?: number, cursor?: string, timeWindow?: FetchFrameCatalogTimeWindowEnum, categories?: Array<FetchFrameCatalogCategoriesEnum>, networks?: Array<FetchFrameCatalogNetworksEnum> }): Promise<FrameCatalogResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.fetchFrameCatalog(adjustedParams);
  return response.data;
}

/**
 * Returns a list of notifications tokens related to a mini app
 *
 * @summary List of mini app notification tokens
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {number[]} params.fids [optional]  - Comma separated list of FIDs, up to 100 at a time. If you pass in FIDs, you will get back the notification tokens for those FIDs. If you don't pass in FIDs, you will get back all the notification tokens for the mini app.
 * @param {string} params.cursor [optional]  - Pagination cursor
 *
 * @returns {Promise<FrameNotificationTokens>} A promise that resolves to a `FrameNotificationTokens` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 * const fids = 
 *
 * client.fetchNotificationTokens({ limit, fids }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notification-tokens)
 *
 */
public async fetchNotificationTokens(params: { limit?: number, fids?: number[], cursor?: string }): Promise<FrameNotificationTokens> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.map(value => (String(value)));
}
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.join(",");
}

  const response = await this.apis.frameApi.fetchNotificationTokens(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of mini apps relevant to the user based on casts by users with strong affinity score for the user
 *
 * @summary Relevant mini apps
 *
 * @param {object} params
 * @param {number} params.viewerFid  - FID of the user to fetch relevant mini apps for
 * @param {FetchRelevantFramesTimeWindowEnum} params.timeWindow [optional]  - Time window used to limit statistics used to calculate mini app relevance
 * @param {Array<FetchRelevantFramesNetworksEnum>} params.networks [optional]  - List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array.
 *
 * @returns {Promise<FetchRelevantFrames200Response>} A promise that resolves to a `FetchRelevantFrames200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const viewerFid = 
 * const timeWindow = 
 * const networks = 
 *
 * client.fetchRelevantFrames({ viewerFid, timeWindow, networks }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-frames)
 *
 */
public async fetchRelevantFrames(params: { viewerFid: number, timeWindow?: FetchRelevantFramesTimeWindowEnum, networks?: Array<FetchRelevantFramesNetworksEnum> }): Promise<FetchRelevantFrames200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.fetchRelevantFrames(adjustedParams);
  return response.data;
}

/**
 * Retrieve notification delivery and opened stats for notification campaigns
 *
 * @summary Get notification campaign stats
 *
 * @param {object} params
 * @param {string} params.campaignId [optional]  - An ID of a specific notification campaign to query
 * @param {number} params.limit [optional]  - The number of results to return (Default: 100, Maximum: 1000)
 * @param {string} params.cursor [optional]  - Pagination cursor
 *
 * @returns {Promise<GetNotificationCampaignStats200Response>} A promise that resolves to a `GetNotificationCampaignStats200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const campaignId = 
 * const limit = 
 *
 * client.getNotificationCampaignStats({ campaignId, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-notification-campaign-stats)
 *
 */
public async getNotificationCampaignStats(params: { campaignId?: string, limit?: number, cursor?: string }): Promise<GetNotificationCampaignStats200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.getNotificationCampaignStats(adjustedParams);
  return response.data;
}

/**
 * Retrieves details about a transaction pay mini app by ID
 *
 * @summary Get transaction pay mini app
 *
 * @param {object} params
 * @param {string} params.id  - ID of the transaction mini app to retrieve
 *
 * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 *
 * client.getTransactionPayFrame({ id }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-transaction-pay-frame)
 *
 */
public async getTransactionPayFrame(params: { id: string }): Promise<TransactionFrameResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.getTransactionPayFrame(adjustedParams);
  return response.data;
}

/**
 * Send notifications to interactors of a mini app
 *
 * @summary Send notifications
 *
 * @param {object} params
 * @param {Array<number>} params.targetFids [optional]  - An array of target FIDs to whom the notifications should be sent. Each FID must be a positive integer. Pass an empty array to send notifications to all FIDs with notifications enabled for the mini app.
 * @param {SendFrameNotificationsReqBodyFilters} params.filters [optional] 
 * @param {SendFrameNotificationsReqBodyNotification} params.notification 
 *
 * @returns {Promise<SendFrameNotificationsResponse>} A promise that resolves to a `SendFrameNotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const targetFids = 
 * const filters = 
 * const notification = 
 *
 * client.publishFrameNotifications({targetFids, filters, notification}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-frame-notifications)
 *
 */
public async publishFrameNotifications(params: { targetFids?: Array<number>, filters?: SendFrameNotificationsReqBodyFilters, notification: SendFrameNotificationsReqBodyNotification }): Promise<SendFrameNotificationsResponse> {
  const adjustedParams: any = {};
const _params = { sendFrameNotificationsReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.publishFrameNotifications(adjustedParams);
  return response.data;
}

/**
 * Search for mini apps based on a query string
 *
 * @summary Search mini apps
 *
 * @param {object} params
 * @param {string} params.q  - Query string to search for mini apps
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {Array<SearchFramesNetworksEnum>} params.networks [optional]  - List of blockchain networks by which to filter results.  Mini apps included in the results will specify at least one of the supplied networks or specify none. The list can be provided as comma-separated string or array.
 *
 * @returns {Promise<FrameCatalogResponse>} A promise that resolves to a `FrameCatalogResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const limit = 
 * const networks = 
 *
 * client.searchFrames({ q, limit, networks }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-frames)
 *
 */
public async searchFrames(params: { q: string, limit?: number, cursor?: string, networks?: Array<SearchFramesNetworksEnum> }): Promise<FrameCatalogResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.searchFrames(adjustedParams);
  return response.data;
}

/**
 * Nonce to sign a message
 *
 * @summary Fetch nonce
 *
 *
 * @returns {Promise<NonceResponse>} A promise that resolves to a `NonceResponse` object.
 *
 * @example
 *
 * client.fetchNonce().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-nonce)
 *
 */
public async fetchNonce(): Promise<NonceResponse> {
  
  const response = await this.apis.loginApi.fetchNonce();
  return response.data;
}

/**
 * Fetches metrics casts matching a query
 *
 * @summary Metrics for casts
 *
 * @param {object} params
 * @param {string} params.q  - Query string to search for casts
 * @param {FetchCastMetricsIntervalEnum} params.interval [optional]  - Interval of time for which to fetch metrics. Default is 30d.
 * @param {number} params.authorFid [optional]  - Fid of the user whose casts you want to search
 * @param {string} params.channelId [optional]  - Channel ID of the casts you want to search
 *
 * @returns {Promise<CastsMetricsResponse>} A promise that resolves to a `CastsMetricsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const interval = 
 * const authorFid = 
 * const channelId = 
 *
 * client.fetchCastMetrics({ q, interval, authorFid, channelId }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-metrics)
 *
 */
public async fetchCastMetrics(params: { q: string, interval?: FetchCastMetricsIntervalEnum, authorFid?: number, channelId?: string }): Promise<CastsMetricsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.metricsApi.fetchCastMetrics(adjustedParams);
  return response.data;
}

/**
 * Deletes a mute for a given FID. This is an allowlisted API, reach out if you want access.
 *
 * @summary Unmute FID
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {number} params.mutedFid  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const mutedFid = 
 *
 * client.deleteMute({fid, mutedFid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
 *
 */
public async deleteMute(params: { fid: number, mutedFid: number }): Promise<MuteResponse> {
  const adjustedParams: any = {};
const _params = { muteReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.muteApi.deleteMute(adjustedParams);
  return response.data;
}

/**
 * Fetches all FIDs that a user has muted.
 *
 * @summary Muted FIDs of user
 *
 * @param {object} params
 * @param {number} params.fid  - The user's FID (identifier)
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<MuteListResponse>} A promise that resolves to a `MuteListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const limit = 
 *
 * client.fetchMuteList({ fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-mute-list)
 *
 */
public async fetchMuteList(params: { fid: number, limit?: number, cursor?: string }): Promise<MuteListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.muteApi.fetchMuteList(adjustedParams);
  return response.data;
}

/**
 * Adds a mute for a given FID. This is an allowlisted API, reach out if you want access.
 *
 * @summary Mute FID
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {number} params.mutedFid  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const mutedFid = 
 *
 * client.publishMute({fid, mutedFid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
 *
 */
public async publishMute(params: { fid: number, mutedFid: number }): Promise<MuteResponse> {
  const adjustedParams: any = {};
const _params = { muteReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.muteApi.publishMute(adjustedParams);
  return response.data;
}

/**
 * Returns a list of notifications for a specific FID.
 *
 * @summary For user
 *
 * @param {object} params
 * @param {number} params.fid  - FID of the user you you want to fetch notifications for. The response will respect this user's mutes and blocks.
 * @param {Array<FetchAllNotificationsTypeEnum>} params.type [optional]  - Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 15, Maximum: 25)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const type = 
 * const limit = 
 *
 * client.fetchAllNotifications({ fid, type, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
 *
 */
public async fetchAllNotifications(params: { fid: number, type?: Array<FetchAllNotificationsTypeEnum>, limit?: number, cursor?: string }): Promise<NotificationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.notificationsApi.fetchAllNotifications(adjustedParams);
  return response.data;
}

/**
 * Returns a list of notifications for a user in specific channels
 *
 * @summary For user by channel
 *
 * @param {object} params
 * @param {number} params.fid  - FID of the user you you want to fetch notifications for. The response will respect this user's mutes and blocks.
 * @param {string[]} params.channelIds  - Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 15, Maximum: 25)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const channelIds = 
 * const limit = 
 *
 * client.fetchChannelNotificationsForUser({ fid, channelIds, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
 *
 */
public async fetchChannelNotificationsForUser(params: { fid: number, channelIds: string[], limit?: number, cursor?: string }): Promise<NotificationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.channelIds && Array.isArray(adjustedParams.channelIds)) {
  adjustedParams.channelIds = adjustedParams.channelIds.join(",");
}

  const response = await this.apis.notificationsApi.fetchChannelNotificationsForUser(adjustedParams);
  return response.data;
}

/**
 * Returns a list of notifications for a user in specific parent_urls
 *
 * @summary For user by parent_urls
 *
 * @param {object} params
 * @param {number} params.fid  - FID of the user you you want to fetch notifications for. The response will respect this user's mutes and blocks.
 * @param {string[]} params.parentUrls  - Comma separated parent_urls
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 15, Maximum: 25)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const parentUrls = 
 * const limit = 
 *
 * client.fetchNotificationsByParentUrlForUser({ fid, parentUrls, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
 *
 */
public async fetchNotificationsByParentUrlForUser(params: { fid: number, parentUrls: string[], limit?: number, cursor?: string }): Promise<NotificationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.parentUrls && Array.isArray(adjustedParams.parentUrls)) {
  adjustedParams.parentUrls = adjustedParams.parentUrls.join(",");
}

  const response = await this.apis.notificationsApi.fetchNotificationsByParentUrlForUser(adjustedParams);
  return response.data;
}

/**
 * Mark notifications as seen. You can choose one of two authorization methods, either:   1. Provide a valid signer_uuid in the request body (Most common)   2. Provide a valid, signed \"Bearer\" token in the request\'s `Authorization` header similar to the      approach described [here](https://docs.farcaster.xyz/reference/warpcast/api#authentication)
 *
 * @summary Mark as seen
 *
 * @param {object} params
 * @param {string} params.signerUuid [optional]  - The UUID of a signer with at least one write permission.  Required unless a valid Authorization Bearer token is provided in the header.
 * @param {NotificationType} params.type [optional] 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const type = 
 *
 * client.markNotificationsAsSeen({signerUuid, type}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
 *
 */
public async markNotificationsAsSeen(params: { signerUuid?: string, type?: NotificationType }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { markNotificationsAsSeenReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);
adjustedParams['authorization'] = this.config.baseOptions?.headers?.['authorization'];

  const response = await this.apis.notificationsApi.markNotificationsAsSeen(adjustedParams);
  return response.data;
}

/**
 * Creates a new token. This is an allowlisted API, reach out if you want access.
 *
 * @summary Deploy fungible
 *
 * @param {object} params
 * @param {string} params.owner  - Ethereum address of the one who is creating the token
 * @param {string} params.symbol  - Symbol/Ticker for the token
 * @param {string} params.name  - Name of the token
 * @param {File | null} params.metadataMedia [optional]  - Media file associated with the token.  Supported formats are image/jpeg, image/gif and image/png
 * @param {string} params.metadataDescription [optional]  - Description of the token
 * @param {DeployFungibleMetadataNsfwEnum} params.metadataNsfw [optional]  - Indicates if the token is NSFW (Not Safe For Work).
 * @param {string} params.metadataWebsiteLink [optional]  - Website link related to the token
 * @param {string} params.metadataTwitter [optional]  - Twitter profile link
 * @param {string} params.metadataDiscord [optional]  - Discord server link
 * @param {string} params.metadataTelegram [optional]  - Telegram link
 * @param {DeployFungibleNetworkEnum} params.network [optional]  - Network/Chain name
 * @param {DeployFungibleFactoryEnum} params.factory [optional]  - Factory name - wow -> [wow.xyz](https://wow.xyz) - clanker -> [clanker.world](https://www.clanker.world)
 *
 * @returns {Promise<DeployFungibleResponse>} A promise that resolves to a `DeployFungibleResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const owner = 
 * const symbol = 
 * const name = 
 * const metadataMedia = 
 * const metadataDescription = 
 * const metadataNsfw = 
 * const metadataWebsiteLink = 
 * const metadataTwitter = 
 * const metadataDiscord = 
 * const metadataTelegram = 
 * const network = 
 * const factory = 
 *
 * client.deployFungible({ owner, symbol, name, metadataMedia, metadataDescription, metadataNsfw, metadataWebsiteLink, metadataTwitter, metadataDiscord, metadataTelegram, network, factory }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/deploy-fungible)
 *
 */
public async deployFungible(params: { owner: string, symbol: string, name: string, metadataMedia?: File | null, metadataDescription?: string, metadataNsfw?: DeployFungibleMetadataNsfwEnum, metadataWebsiteLink?: string, metadataTwitter?: string, metadataDiscord?: string, metadataTelegram?: string, network?: DeployFungibleNetworkEnum, factory?: DeployFungibleFactoryEnum }): Promise<DeployFungibleResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onchainApi.deployFungible(adjustedParams);
  return response.data;
}

/**
 * Fetch details for fungible assets identified by fungible identifiers.
 *
 * @summary Fetch fungibles
 *
 * @param {object} params
 * @param {string} params.fungibles  - Comma-separated fungible identifiers
 * @param {number | null} params.viewerFid [optional]  - Optional FID of the viewer to personalize cast count filtering
 *
 * @returns {Promise<FungiblesResponseSchema>} A promise that resolves to a `FungiblesResponseSchema` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fungibles = 
 * const viewerFid = 
 *
 * client.fetchFungibles({ fungibles, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fungibles)
 *
 */
public async fetchFungibles(params: { fungibles: string, viewerFid?: number | null }): Promise<FungiblesResponseSchema> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.onchainApi.fetchFungibles(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of relevant owners for a on chain asset. If a viewer is provided, only relevant holders will be shown. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".
 *
 * @summary Relevant owners
 *
 * @param {object} params
 * @param {string} params.contractAddress  - Contract address of the fungible asset
 * @param {FetchRelevantFungibleOwnersNetworkEnum} params.network  - Network of the fungible asset.
 * @param {number} params.viewerFid [optional]  - If you provide a viewer_fid, the response will include token holders from the user's network, respecting their mutes and blocks and including viewer_context; if not provided, the response will show top token holders across the network—both sets can be combined to generate a longer list if desired.
 *
 * @returns {Promise<RelevantFungibleOwnersResponse>} A promise that resolves to a `RelevantFungibleOwnersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const contractAddress = 
 * const network = 
 * const viewerFid = 
 *
 * client.fetchRelevantFungibleOwners({ contractAddress, network, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-fungible-owners)
 *
 */
public async fetchRelevantFungibleOwners(params: { contractAddress: string, network: FetchRelevantFungibleOwnersNetworkEnum, viewerFid?: number }): Promise<RelevantFungibleOwnersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onchainApi.fetchRelevantFungibleOwners(adjustedParams);
  return response.data;
}

/**
 * Fetch trending fungibles based on buy activity from watched addresses. Returns fungibles ranked by USD buy volume and buy count within the specified time window.
 *
 * @summary Trending fungibles
 *
 * @param {object} params
 * @param {FetchTrendingFungiblesNetworkEnum} params.network 
 * @param {FetchTrendingFungiblesTimeWindowEnum} params.timeWindow [optional]  - Time window for trending calculations e.g. "1h", "6h", "12h", "24h", "7d"
 *
 * @returns {Promise<FetchTrendingFungibles200Response>} A promise that resolves to a `FetchTrendingFungibles200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const network = 
 * const timeWindow = 
 *
 * client.fetchTrendingFungibles({ network, timeWindow }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-trending-fungibles)
 *
 */
public async fetchTrendingFungibles(params: { network: FetchTrendingFungiblesNetworkEnum, timeWindow?: FetchTrendingFungiblesTimeWindowEnum }): Promise<FetchTrendingFungibles200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onchainApi.fetchTrendingFungibles(adjustedParams);
  return response.data;
}

/**
 * Fetches the token balances of a user given their FID
 *
 * @summary Token balance
 *
 * @param {object} params
 * @param {number} params.fid  - FID of the user to fetch
 * @param {Array<FetchUserBalanceNetworksEnum>} params.networks  - Comma separated list of networks to fetch balances for
 *
 * @returns {Promise<BalanceResponse>} A promise that resolves to a `BalanceResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const networks = 
 *
 * client.fetchUserBalance({ fid, networks }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-balance)
 *
 */
public async fetchUserBalance(params: { fid: number, networks: Array<FetchUserBalanceNetworksEnum> }): Promise<BalanceResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onchainApi.fetchUserBalance(adjustedParams);
  return response.data;
}

/**
 * Mints an NFT to one or more recipients on a specified network and contract, using a configured server wallet. Contact us to set up your wallet configuration if you don\'t have one.
 *
 * @summary Mint NFT(s)
 *
 * @param {object} params
 * @param {MintNftRequest} params.mintNftRequest 
 *
 * @returns {Promise<MintNft200Response>} A promise that resolves to a `MintNft200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const mintNftRequest = 
 *
 * client.mintNft({ mintNftRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mint-nft)
 *
 */
public async mintNft(params: { mintNftRequest: MintNftRequest }): Promise<MintNft200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xWalletId'] = this.config.baseOptions?.headers?.['x-wallet-id'];

  const response = await this.apis.onchainApi.mintNft(adjustedParams);
  return response.data;
}

/**
 * Register a new farcaster account onchain. Optionally you can pass in signers to register a new account and create multiple signers in a single transaction
 *
 * @summary Register Farcaster account onchain
 *
 * @param {object} params
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) Pre-registration calls must be idempotent when using idempotency keys. 2) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 3) This should be a unique identifier for each request. 4) Recommended format is a 16-character string generated by the developer at the time of making this request.
 * @param {Array<RegisterUserOnChainReqBodyPreRegistrationCallsInner>} params.preRegistrationCalls [optional] 
 * @param {RegisterUserOnChainReqBodyRegistration} params.registration 
 * @param {number} params.storageUnits [optional] 
 * @param {Array<RegisterUserOnChainReqBodySignersInner>} params.signers [optional] 
 *
 * @returns {Promise<RegisterUserOnChainResponse>} A promise that resolves to a `RegisterUserOnChainResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const idem = 
 * const preRegistrationCalls = 
 * const registration = 
 * const storageUnits = 
 * const signers = 
 *
 * client.registerAccountOnchain({idem, preRegistrationCalls, registration, storageUnits, signers}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-account-onchain)
 *
 */
public async registerAccountOnchain(params: { idem?: string, preRegistrationCalls?: Array<RegisterUserOnChainReqBodyPreRegistrationCallsInner>, registration: RegisterUserOnChainReqBodyRegistration, storageUnits?: number, signers?: Array<RegisterUserOnChainReqBodySignersInner> }): Promise<RegisterUserOnChainResponse> {
  const adjustedParams: any = {};
const _params = { registerUserOnChainReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.onchainApi.registerAccountOnchain(adjustedParams);
  return response.data;
}

/**
 * Send fungibles in bulk to several farcaster users. A funded wallet is to required use this API. React out to us on the Neynar channel on farcaster to get your wallet address.
 *
 * @summary Send fungibles
 *
 * @param {object} params
 * @param {TransactionSendFungiblesReqBodyNetworkEnum} params.network 
 * @param {string} params.fungibleContractAddress [optional]  - Contract address of the fungible token to send. If not provided, the default is the native token of the network.
 * @param {Array<TransactionSendFungiblesRecipient>} params.recipients 
 *
 * @returns {Promise<TransactionSendFungiblesResponse>} A promise that resolves to a `TransactionSendFungiblesResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const network = 
 * const fungibleContractAddress = 
 * const recipients = 
 *
 * client.sendFungiblesToUsers({network, fungibleContractAddress, recipients}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/send-fungibles-to-users)
 *
 */
public async sendFungiblesToUsers(params: { network: TransactionSendFungiblesReqBodyNetworkEnum, fungibleContractAddress?: string, recipients: Array<TransactionSendFungiblesRecipient> }): Promise<TransactionSendFungiblesResponse> {
  const adjustedParams: any = {};
const _params = { transactionSendFungiblesReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);
adjustedParams['xWalletId'] = this.config.baseOptions?.headers?.['x-wallet-id'];

  const response = await this.apis.onchainApi.sendFungiblesToUsers(adjustedParams);
  return response.data;
}

/**
 * Simulates mint calldata for the given recipients, contract, and network. Useful for previewing calldata and ABI before minting.
 *
 * @summary Simulate NFT mint calldata
 *
 * @param {object} params
 * @param {string} params.recipients  - JSON array of recipients (same structure as POST).
 * @param {string} params.nftContractAddress  - Ethereum address
 * @param {SimulateNftMintNetworkEnum} params.network  - Network to mint on.
 *
 * @returns {Promise<SimulateNftMintResponse>} A promise that resolves to a `SimulateNftMintResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const recipients = 
 * const nftContractAddress = 
 * const network = 
 *
 * client.simulateNftMint({ recipients, nftContractAddress, network }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/simulate-nft-mint)
 *
 */
public async simulateNftMint(params: { recipients: string, nftContractAddress: string, network: SimulateNftMintNetworkEnum }): Promise<SimulateNftMintResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onchainApi.simulateNftMint(adjustedParams);
  return response.data;
}

/**
 * Delete a reaction (like or recast) to a cast  (In order to delete a reaction `signer_uuid` must be approved)
 *
 * @summary Delete reaction
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {ReactionType} params.reactionType 
 * @param {string} params.target  - Target cast hash (hex string starting with 0x) OR a valid URL.
 * @param {number} params.targetAuthorFid [optional]  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const reactionType = 
 * const target = 
 * const targetAuthorFid = 
 * const idem = 
 *
 * client.deleteReaction({signerUuid, reactionType, target, targetAuthorFid, idem}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
 *
 */
public async deleteReaction(params: { signerUuid: string, reactionType: ReactionType, target: string, targetAuthorFid?: number, idem?: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { reactionReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.reactionApi.deleteReaction(adjustedParams);
  return response.data;
}

/**
 * Fetches reactions for a given cast
 *
 * @summary Reactions for cast
 *
 * @param {object} params
 * @param {string} params.hash 
 * @param {Array<FetchCastReactionsTypesEnum>} params.types  - Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: 'likes' and 'recasts'. By default api returns both. To select multiple types, use a comma-separated list of these values.
 * @param {number} params.viewerFid [optional]  - Providing this will return a list of reactions that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ReactionsCastResponse>} A promise that resolves to a `ReactionsCastResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const hash = 
 * const types = 
 * const viewerFid = 
 * const limit = 
 *
 * client.fetchCastReactions({ hash, types, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
 *
 */
public async fetchCastReactions(params: { hash: string, types: Array<FetchCastReactionsTypesEnum>, viewerFid?: number, limit?: number, cursor?: string }): Promise<ReactionsCastResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionApi.fetchCastReactions(adjustedParams);
  return response.data;
}

/**
 * Fetches reactions for a given user
 *
 * @summary Reactions for user
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {FetchUserReactionsTypeEnum} params.type  - Type of reaction to fetch (likes or recasts or all)
 * @param {number} params.viewerFid [optional]  - Providing this will return a list of reactions that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const type = 
 * const viewerFid = 
 * const limit = 
 *
 * client.fetchUserReactions({ fid, type, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
 *
 */
public async fetchUserReactions(params: { fid: number, type: FetchUserReactionsTypeEnum, viewerFid?: number, limit?: number, cursor?: string }): Promise<ReactionsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionApi.fetchUserReactions(adjustedParams);
  return response.data;
}

/**
 * Post a reaction (like or recast) to a given cast  (In order to post a reaction `signer_uuid` must be approved)
 *
 * @summary Post a reaction
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {ReactionType} params.reactionType 
 * @param {string} params.target  - Target cast hash (hex string starting with 0x) OR a valid URL.
 * @param {number} params.targetAuthorFid [optional]  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const reactionType = 
 * const target = 
 * const targetAuthorFid = 
 * const idem = 
 *
 * client.publishReaction({signerUuid, reactionType, target, targetAuthorFid, idem}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
 *
 */
public async publishReaction(params: { signerUuid: string, reactionType: ReactionType, target: string, targetAuthorFid?: number, idem?: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { reactionReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.reactionApi.publishReaction(adjustedParams);
  return response.data;
}

/**
 * Creates a signer and returns the signer status.   **Note**: While tesing please reuse the signer, it costs money to approve a signer.
 *
 * @summary Create signer
 *
 *
 * @returns {Promise<Signer>} A promise that resolves to a `Signer` object.
 *
 * @example
 *
 * client.createSigner().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/create-signer)
 *
 */
public async createSigner(): Promise<Signer> {
  
  const response = await this.apis.signerApi.createSigner();
  return response.data;
}

/**
 * Fetch authorization url (Fetched authorized url useful for SIWN login operation)
 *
 * @summary Fetch authorization url
 *
 * @param {object} params
 * @param {string} params.clientId 
 * @param {FetchAuthorizationUrlResponseTypeEnum} params.responseType 
 *
 * @returns {Promise<AuthorizationUrlResponse>} A promise that resolves to a `AuthorizationUrlResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const clientId = 
 * const responseType = 
 *
 * client.fetchAuthorizationUrl({ clientId, responseType }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-authorization-url)
 *
 */
public async fetchAuthorizationUrl(params: { clientId: string, responseType: FetchAuthorizationUrlResponseTypeEnum }): Promise<AuthorizationUrlResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.signerApi.fetchAuthorizationUrl(adjustedParams);
  return response.data;
}

/**
 * Fetches a list of signers for a custody address
 *
 * @summary List signers
 *
 * @param {object} params
 * @param {string} params.message  - A Sign-In with Ethereum (SIWE) message that the user's Ethereum wallet signs. This message includes details such as the domain, address, statement, URI, nonce, and other relevant information following the EIP-4361 standard. It should be structured and URL-encoded.
 * @param {string} params.signature  - The digital signature produced by signing the provided SIWE message with the user's Ethereum private key. This signature is used to verify the authenticity of the message and the identity of the signer.
 *
 * @returns {Promise<SignerListResponse>} A promise that resolves to a `SignerListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const message = 
 * const signature = 
 *
 * client.fetchSigners({ message, signature }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-signers)
 *
 */
public async fetchSigners(params: { message: string, signature: string }): Promise<SignerListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.signerApi.fetchSigners(adjustedParams);
  return response.data;
}

/**
 * Fetches the status of a developer managed signer by public key
 *
 * @summary Status by public key
 *
 * @param {object} params
 * @param {string} params.publicKey  - Ed25519 public key
 *
 * @returns {Promise<DeveloperManagedSigner>} A promise that resolves to a `DeveloperManagedSigner` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const publicKey = 
 *
 * client.lookupDeveloperManagedSigner({ publicKey }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-developer-managed-signer)
 *
 */
public async lookupDeveloperManagedSigner(params: { publicKey: string }): Promise<DeveloperManagedSigner> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.signerApi.lookupDeveloperManagedSigner(adjustedParams);
  return response.data;
}

/**
 * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
 *
 * @summary Status
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 *
 * @returns {Promise<Signer>} A promise that resolves to a `Signer` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 *
 * client.lookupSigner({ signerUuid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-signer)
 *
 */
public async lookupSigner(params: { signerUuid: string }): Promise<Signer> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.signerApi.lookupSigner(adjustedParams);
  return response.data;
}

/**
 * Publish a message to farcaster. The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message. Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.
 *
 * @summary Publish message
 *
 * @param {object} params
 * @param {object} params.body 
 *
 * @returns {Promise<object>} A promise that resolves to a `object` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const body = 
 *
 * client.publishMessageToFarcaster({ body }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-message-to-farcaster)
 *
 */
public async publishMessageToFarcaster(params: { body: object }): Promise<object> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.signerApi.publishMessageToFarcaster(adjustedParams);
  return response.data;
}

/**
 * Registers an app FID, deadline and a signature. Returns the signer status with an approval url.
 *
 * @summary Register Signed Key
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.signature  - Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer's public key
 * @param {number} params.appFid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {number} params.deadline  - unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
 * @param {string} params.redirectUrl [optional]  - Url to redirect to after the signer is approved. **Note** : This should only be used when requesting a signer from a native mobile application.
 * @param {SignedKeyRequestSponsor} params.sponsor [optional] 
 *
 * @returns {Promise<Signer>} A promise that resolves to a `Signer` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const signature = 
 * const appFid = 
 * const deadline = 
 * const redirectUrl = 
 * const sponsor = 
 *
 * client.registerSignedKey({signerUuid, signature, appFid, deadline, redirectUrl, sponsor}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-signed-key)
 *
 */
public async registerSignedKey(params: { signerUuid: string, signature: string, appFid: number, deadline: number, redirectUrl?: string, sponsor?: SignedKeyRequestSponsor }): Promise<Signer> {
  const adjustedParams: any = {};
const _params = { registerSignerKeyReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.signerApi.registerSignedKey(adjustedParams);
  return response.data;
}

/**
 * Registers an signed key and returns the developer managed signer status with an approval url.
 *
 * @summary Register Signed Key
 *
 * @param {object} params
 * @param {string} params.publicKey  - Ed25519 public key
 * @param {string} params.signature  - Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer's public key
 * @param {number} params.appFid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {number} params.deadline  - unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
 * @param {string} params.redirectUrl [optional]  - Url to redirect to after the signer is approved. **Note** : This should only be used when requesting a signer from a native mobile application.
 * @param {SignedKeyRequestSponsor} params.sponsor [optional] 
 *
 * @returns {Promise<DeveloperManagedSigner>} A promise that resolves to a `DeveloperManagedSigner` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const publicKey = 
 * const signature = 
 * const appFid = 
 * const deadline = 
 * const redirectUrl = 
 * const sponsor = 
 *
 * client.registerSignedKeyForDeveloperManagedSigner({publicKey, signature, appFid, deadline, redirectUrl, sponsor}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-signed-key-for-developer-managed-signer)
 *
 */
public async registerSignedKeyForDeveloperManagedSigner(params: { publicKey: string, signature: string, appFid: number, deadline: number, redirectUrl?: string, sponsor?: SignedKeyRequestSponsor }): Promise<DeveloperManagedSigner> {
  const adjustedParams: any = {};
const _params = { registerDeveloperManagedSignedKeyReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.signerApi.registerSignedKeyForDeveloperManagedSigner(adjustedParams);
  return response.data;
}

/**
 * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links.
 *
 * @summary Buy storage
 *
 * @param {object} params
 * @param {number} params.fid 
 * @param {number} params.units [optional]  - Number of storage units to buy. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links.
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 *
 * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const units = 
 * const idem = 
 *
 * client.buyStorage({fid, units, idem}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/buy-storage)
 *
 */
public async buyStorage(params: { fid: number, units?: number, idem?: string }): Promise<StorageAllocationsResponse> {
  const adjustedParams: any = {};
const _params = { buyStorageReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.storageApi.buyStorage(adjustedParams);
  return response.data;
}

/**
 * Fetches storage allocations for a given user
 *
 * @summary Allocation of user
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 *
 * client.lookupUserStorageAllocations({ fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-allocations)
 *
 */
public async lookupUserStorageAllocations(params: { fid: number }): Promise<StorageAllocationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.storageApi.lookupUserStorageAllocations(adjustedParams);
  return response.data;
}

/**
 * Fetches storage usage for a given user
 *
 * @summary Usage of user
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 *
 * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 *
 * client.lookupUserStorageUsage({ fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-usage)
 *
 */
public async lookupUserStorageUsage(params: { fid: number }): Promise<StorageUsageResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.storageApi.lookupUserStorageUsage(adjustedParams);
  return response.data;
}

/**
 * Associates a generated miniapp with a Farcaster account using a JFS-signed domain association. Requires API key authentication.
 *
 * @summary Set account association
 *
 * @param {object} params
 * @param {AssociateDeploymentRequest} params.associateDeploymentRequest 
 *
 * @returns {Promise<AssociateDeployment200Response>} A promise that resolves to a `AssociateDeployment200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const associateDeploymentRequest = 
 *
 * client.associateDeployment({ associateDeploymentRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/associate-deployment)
 *
 */
public async associateDeployment(params: { associateDeploymentRequest: AssociateDeploymentRequest }): Promise<AssociateDeployment200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.associateDeployment(adjustedParams);
  return response.data;
}

/**
 * Creates and deploys an instance of the miniapp generator for a user. Requires authentication via API key in the request header.
 *
 * @summary Create a miniapp generator deployment
 *
 * @param {object} params
 * @param {CreateDeploymentRequest} params.createDeploymentRequest 
 *
 * @returns {Promise<ListDeployments200ResponseInner>} A promise that resolves to a `ListDeployments200ResponseInner` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const createDeploymentRequest = 
 *
 * client.createDeployment({ createDeploymentRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/create-deployment)
 *
 */
public async createDeployment(params: { createDeploymentRequest: CreateDeploymentRequest }): Promise<ListDeployments200ResponseInner> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.createDeployment(adjustedParams);
  return response.data;
}

/**
 * Deletes a specific miniapp generator deployment or all deployments for a FID. If name is provided, deletes single deployment. If only FID is provided, deletes all deployments for that FID. Requires API key authentication.
 *
 * @summary Delete deployment(s)
 *
 * @param {object} params
 * @param {DeleteDeploymentRequest} params.deleteDeploymentRequest 
 *
 * @returns {Promise<DeleteDeployment200Response>} A promise that resolves to a `DeleteDeployment200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const deleteDeploymentRequest = 
 *
 * client.deleteDeployment({ deleteDeploymentRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-deployment)
 *
 */
public async deleteDeployment(params: { deleteDeploymentRequest: DeleteDeploymentRequest }): Promise<DeleteDeployment200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.deleteDeployment(adjustedParams);
  return response.data;
}

/**
 * Retrieves all messages in a specific conversation. Requires API key authentication.
 *
 * @summary Get messages in a conversation
 *
 * @param {object} params
 * @param {number | null} params.fid  - Farcaster ID of the user
 * @param {string} params.name  - Kubernetes deployment name
 * @param {string} params.conversationId  - Conversation ID
 * @param {boolean | null} params.includeDeleted [optional]  - Include deleted messages in the response. Defaults to false.
 *
 * @returns {Promise<GetConversationMessages200Response>} A promise that resolves to a `GetConversationMessages200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const name = 
 * const conversationId = 
 * const includeDeleted = 
 *
 * client.getConversationMessages({ fid, name, conversationId, includeDeleted }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-conversation-messages)
 *
 */
public async getConversationMessages(params: { fid: number | null, name: string, conversationId: string, includeDeleted?: boolean | null }): Promise<GetConversationMessages200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.getConversationMessages(adjustedParams);
  return response.data;
}

/**
 * Fetches info about a miniapp generator deployment by its name and creator\'s Farcaster ID. Requires API key authentication.
 *
 * @summary Get deployment info
 *
 * @param {object} params
 * @param {number | null} params.fid  - Farcaster ID of the user
 * @param {string} params.name  - Kubernetes deployment name
 *
 * @returns {Promise<ListDeployments200ResponseInner>} A promise that resolves to a `ListDeployments200ResponseInner` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const name = 
 *
 * client.getDeployment({ fid, name }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-deployment)
 *
 */
public async getDeployment(params: { fid: number | null, name: string }): Promise<ListDeployments200ResponseInner> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.getDeployment(adjustedParams);
  return response.data;
}

/**
 * Retrieves the contents of a specific file from the generated app. Requires Studio admin authentication.
 *
 * @summary Get deployment file contents
 *
 * @param {object} params
 * @param {number | null} params.fid  - Farcaster ID of the user
 * @param {string} params.name  - Kubernetes deployment name
 * @param {string} params.filePath  - File path relative to gen/
 *
 * @returns {Promise<GetDeploymentFile200Response>} A promise that resolves to a `GetDeploymentFile200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const name = 
 * const filePath = 
 *
 * client.getDeploymentFile({ fid, name, filePath }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-deployment-file)
 *
 */
public async getDeploymentFile(params: { fid: number | null, name: string, filePath: string }): Promise<GetDeploymentFile200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.getDeploymentFile(adjustedParams);
  return response.data;
}

/**
 * Retrieves the server.log file from a miniapp-generator deployment. Requires Studio admin authentication.
 *
 * @summary Get deployment logs
 *
 * @param {object} params
 * @param {number | null} params.fid  - Farcaster ID of the user
 * @param {string} params.name  - Kubernetes deployment name
 *
 * @returns {Promise<GetDeploymentLogs200Response>} A promise that resolves to a `GetDeploymentLogs200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const name = 
 *
 * client.getDeploymentLogs({ fid, name }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-deployment-logs)
 *
 */
public async getDeploymentLogs(params: { fid: number | null, name: string }): Promise<GetDeploymentLogs200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.getDeploymentLogs(adjustedParams);
  return response.data;
}

/**
 * Lists all conversations for a specific deployment. Requires API key authentication.
 *
 * @summary List conversations for a deployment
 *
 * @param {object} params
 * @param {number | null} params.fid [optional]  - Farcaster ID of the user. Required for non-admin users. Studio admins can omit to query all conversations.
 * @param {string} params.name [optional]  - Kubernetes deployment name. If provided, filters conversations to this deployment only.
 * @param {boolean | null} params.includeDeleted [optional]  - Include deleted conversations in the response. Defaults to false.
 *
 * @returns {Promise<ListConversations200Response>} A promise that resolves to a `ListConversations200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const name = 
 * const includeDeleted = 
 *
 * client.listConversations({ fid, name, includeDeleted }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/list-conversations)
 *
 */
public async listConversations(params: { fid?: number | null, name?: string, includeDeleted?: boolean | null }): Promise<ListConversations200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.listConversations(adjustedParams);
  return response.data;
}

/**
 * Lists files in a directory of the generated app. Requires Studio admin authentication.
 *
 * @summary List deployment files
 *
 * @param {object} params
 * @param {number | null} params.fid  - Farcaster ID of the user
 * @param {string} params.name  - Kubernetes deployment name
 * @param {string} params.directory [optional]  - Directory path relative to gen/ (defaults to root)
 *
 * @returns {Promise<ListDeploymentFiles200Response>} A promise that resolves to a `ListDeploymentFiles200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const name = 
 * const directory = 
 *
 * client.listDeploymentFiles({ fid, name, directory }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/list-deployment-files)
 *
 */
public async listDeploymentFiles(params: { fid: number | null, name: string, directory?: string }): Promise<ListDeploymentFiles200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.listDeploymentFiles(adjustedParams);
  return response.data;
}

/**
 * Lists all miniapp generator deployments for a user. Requires API key authentication.
 *
 * @summary List deployments
 *
 * @param {object} params
 * @param {number | null} params.fid [optional]  - Farcaster ID of the user. Required for non-admin users. Studio admins can omit to query all deployments.
 * @param {number} params.limit [optional]  - Maximum number of deployments to return. Defaults to 50, max 1000. (Default: 50, Maximum: 1000)
 * @param {number | null} params.offset [optional]  - Number of deployments to skip for pagination. Defaults to 0.
 * @param {boolean | null} params.includeDeleted [optional]  - Include deleted deployments in the response. Defaults to false.
 *
 * @returns {Promise<Array<ListDeployments200ResponseInner>>} A promise that resolves to a `Array<ListDeployments200ResponseInner>` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const limit = 
 * const offset = 
 * const includeDeleted = 
 *
 * client.listDeployments({ fid, limit, offset, includeDeleted }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/list-deployments)
 *
 */
public async listDeployments(params: { fid?: number | null, limit?: number, offset?: number | null, includeDeleted?: boolean | null }): Promise<Array<ListDeployments200ResponseInner>> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.listDeployments(adjustedParams);
  return response.data;
}

/**
 * Sends a prompt to a specific miniapp generator deployment. Requires authentication via API key in the request header.
 *
 * @summary Prompt a deployment
 *
 * @param {object} params
 * @param {PromptDeploymentRequest} params.promptDeploymentRequest 
 *
 * @returns {Promise<PromptDeployment200Response>} A promise that resolves to a `PromptDeployment200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const promptDeploymentRequest = 
 *
 * client.promptDeployment({ promptDeploymentRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/prompt-deployment)
 *
 */
public async promptDeployment(params: { promptDeploymentRequest: PromptDeploymentRequest }): Promise<PromptDeployment200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.promptDeployment(adjustedParams);
  return response.data;
}

/**
 * Sends a prompt to a specific miniapp generator deployment and returns a streaming response using Server-Sent Events. The response is a continuous stream of Server-Sent Events, not a single JSON payload. Each event contains a JSON object with type, message, and other fields specific to the message type. Requires authentication via API key in the request header.
 *
 * @summary Prompt a deployment with streaming response
 *
 * @param {object} params
 * @param {PromptDeploymentRequest} params.promptDeploymentRequest 
 *
 * @returns {Promise<void>} A promise that resolves to a `void` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const promptDeploymentRequest = 
 *
 * client.promptDeploymentStream({ promptDeploymentRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/prompt-deployment-stream)
 *
 */
public async promptDeploymentStream(params: { promptDeploymentRequest: PromptDeploymentRequest }): Promise<void> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.promptDeploymentStream(adjustedParams);
  return response.data;
}

/**
 * Starts the Next.js development server for the generated miniapp. Requires Studio admin authentication.
 *
 * @summary Start generated miniapp
 *
 * @param {object} params
 * @param {StartAppRequest} params.startAppRequest 
 *
 * @returns {Promise<StartApp200Response>} A promise that resolves to a `StartApp200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const startAppRequest = 
 *
 * client.startApp({ startAppRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/start-app)
 *
 */
public async startApp(params: { startAppRequest: StartAppRequest }): Promise<StartApp200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.startApp(adjustedParams);
  return response.data;
}

/**
 * Stops the Next.js development server for the generated miniapp. Requires Studio admin authentication.
 *
 * @summary Stop generated miniapp
 *
 * @param {object} params
 * @param {StartAppRequest} params.startAppRequest 
 *
 * @returns {Promise<StartApp200Response>} A promise that resolves to a `StartApp200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const startAppRequest = 
 *
 * client.stopApp({ startAppRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/stop-app)
 *
 */
public async stopApp(params: { startAppRequest: StartAppRequest }): Promise<StartApp200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.stopApp(adjustedParams);
  return response.data;
}

/**
 * Uploads an image file to the generated miniapp public folder. The image will be accessible as a static asset on the deployed miniapp. Requires API key authentication.
 *
 * @summary Upload image to deployment
 *
 * @param {object} params
 * @param {UploadImageUrlRequest} params.uploadImageUrlRequest 
 *
 * @returns {Promise<UploadImage200Response>} A promise that resolves to a `UploadImage200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const uploadImageUrlRequest = 
 *
 * client.uploadImage({ uploadImageUrlRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/upload-image)
 *
 */
public async uploadImage(params: { uploadImageUrlRequest: UploadImageUrlRequest }): Promise<UploadImage200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.uploadImage(adjustedParams);
  return response.data;
}

/**
 * Downloads an image from the provided URL and saves it to the generated miniapp public folder. The image will be accessible as a static asset on the deployed miniapp. Requires API key authentication.
 *
 * @summary Upload image from URL to deployment
 *
 * @param {object} params
 * @param {UploadImageUrlRequest} params.uploadImageUrlRequest 
 *
 * @returns {Promise<UploadImage200Response>} A promise that resolves to a `UploadImage200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const uploadImageUrlRequest = 
 *
 * client.uploadImageUrl({ uploadImageUrlRequest }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/upload-image-url)
 *
 */
public async uploadImageUrl(params: { uploadImageUrlRequest: UploadImageUrlRequest }): Promise<UploadImage200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.studioApi.uploadImageUrl(adjustedParams);
  return response.data;
}

/**
 * Fetch what FIDs and contracts a FID is subscribed to.
 *
 * @summary Subscribed to
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {FetchSubscribedToForFidSubscriptionProviderEnum} params.subscriptionProvider  - The provider of the subscription.
 * @param {number} params.viewerFid [optional] 
 *
 * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const subscriptionProvider = 
 * const viewerFid = 
 *
 * client.fetchSubscribedToForFid({ fid, subscriptionProvider, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
 *
 */
public async fetchSubscribedToForFid(params: { fid: number, subscriptionProvider: FetchSubscribedToForFidSubscriptionProviderEnum, viewerFid?: number }): Promise<SubscribedToResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.subscribersApi.fetchSubscribedToForFid(adjustedParams);
  return response.data;
}

/**
 * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
 *
 * @summary Subscribers of a user
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {FetchSubscribersForFidSubscriptionProviderEnum} params.subscriptionProvider  - The provider of the subscription.
 * @param {number} params.viewerFid [optional] 
 *
 * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const subscriptionProvider = 
 * const viewerFid = 
 *
 * client.fetchSubscribersForFid({ fid, subscriptionProvider, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
 *
 */
public async fetchSubscribersForFid(params: { fid: number, subscriptionProvider: FetchSubscribersForFidSubscriptionProviderEnum, viewerFid?: number }): Promise<SubscribersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.subscribersApi.fetchSubscribersForFid(adjustedParams);
  return response.data;
}

/**
 * Check if a wallet address is subscribed to a given STP (Hypersub) contract.
 *
 * @summary Hypersub subscription check
 *
 * @param {object} params
 * @param {string[]} params.addresses  - Comma separated list of Ethereum addresses, up to 350 at a time
 * @param {string} params.contractAddress  - Ethereum address of the STP contract
 * @param {string} params.chainId  - Chain ID of the STP contract
 *
 * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const addresses = 
 * const contractAddress = 
 * const chainId = 
 *
 * client.fetchSubscriptionCheck({ addresses, contractAddress, chainId }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
 *
 */
public async fetchSubscriptionCheck(params: { addresses: string[], contractAddress: string, chainId: string }): Promise<SubscriptionCheckResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.addresses && Array.isArray(adjustedParams.addresses)) {
  adjustedParams.addresses = adjustedParams.addresses.join(",");
}

  const response = await this.apis.subscribersApi.fetchSubscriptionCheck(adjustedParams);
  return response.data;
}

/**
 * Fetch created subscriptions for a given FID\'s.
 *
 * @summary Subscriptions created by FID
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user or app (unsigned integer)
 * @param {FetchSubscriptionsForFidSubscriptionProviderEnum} params.subscriptionProvider  - The provider of the subscription.
 *
 * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const subscriptionProvider = 
 *
 * client.fetchSubscriptionsForFid({ fid, subscriptionProvider }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
 *
 */
public async fetchSubscriptionsForFid(params: { fid: number, subscriptionProvider: FetchSubscriptionsForFidSubscriptionProviderEnum }): Promise<SubscriptionsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.subscribersApi.fetchSubscriptionsForFid(adjustedParams);
  return response.data;
}

/**
 * Removes verification for an eth address for the user  (In order to delete verification `signer_uuid` must be approved)
 *
 * @summary Delete verification
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.address  - Ethereum address
 * @param {string} params.blockHash 
 * @param {string} params.ethSignature 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const address = 
 * const blockHash = 
 * const ethSignature = 
 *
 * client.deleteVerification({signerUuid, address, blockHash, ethSignature}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-verification)
 *
 */
public async deleteVerification(params: { signerUuid: string, address: string, blockHash: string, ethSignature: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { removeVerificationReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.deleteVerification(adjustedParams);
  return response.data;
}

/**
 * Fetches information about multiple users based on FIDs
 *
 * @summary By FIDs
 *
 * @param {object} params
 * @param {number[]} params.fids  - Comma separated list of FIDs, up to 100 at a time
 * @param {number} params.viewerFid [optional] 
 *
 * @returns {Promise<BulkUsersResponse>} A promise that resolves to a `BulkUsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fids = 
 * const viewerFid = 
 *
 * client.fetchBulkUsers({ fids, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-users)
 *
 */
public async fetchBulkUsers(params: { fids: number[], viewerFid?: number }): Promise<BulkUsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.map(value => (String(value)));
}
if (adjustedParams.fids && Array.isArray(adjustedParams.fids)) {
  adjustedParams.fids = adjustedParams.fids.join(",");
}

  const response = await this.apis.userApi.fetchBulkUsers(adjustedParams);
  return response.data;
}

/**
 * Fetches all users based on multiple Ethereum or Solana addresses.  Each farcaster user has a custody Ethereum address and optionally verified Ethereum or Solana addresses. This endpoint returns all users that have any of the given addresses as their custody or verified Ethereum or Solana addresses.  A custody address can be associated with only 1 farcaster user at a time but a verified address can be associated with multiple users. You can pass in Ethereum and Solana addresses, comma separated, in the same request. The response will contain users associated with the given addresses.
 *
 * @summary By Eth or Sol addresses
 *
 * @param {object} params
 * @param {string[]} params.addresses  - Comma separated list of Ethereum addresses, up to 350 at a time
 * @param {Array<FetchBulkUsersByEthOrSolAddressAddressTypesEnum>} params.addressTypes [optional]  - Customize which address types the request should search for. This is a comma-separated string that can include the following values: 'custody_address' and 'verified_address'. By default api returns both. To select multiple types, use a comma-separated list of these values.
 * @param {number} params.viewerFid [optional] 
 *
 * @returns {Promise<BulkUsersByAddressResponse>} A promise that resolves to a `BulkUsersByAddressResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const addresses = 
 * const addressTypes = 
 * const viewerFid = 
 *
 * client.fetchBulkUsersByEthOrSolAddress({ addresses, addressTypes, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-users-by-eth-or-sol-address)
 *
 */
public async fetchBulkUsersByEthOrSolAddress(params: { addresses: string[], addressTypes?: Array<FetchBulkUsersByEthOrSolAddressAddressTypesEnum>, viewerFid?: number }): Promise<BulkUsersByAddressResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.addresses && Array.isArray(adjustedParams.addresses)) {
  adjustedParams.addresses = adjustedParams.addresses.join(",");
}

  const response = await this.apis.userApi.fetchBulkUsersByEthOrSolAddress(adjustedParams);
  return response.data;
}

/**
 * Fetches a list of users given a location
 *
 * @summary By location
 *
 * @param {object} params
 * @param {number | null} params.latitude  - Latitude of the location
 * @param {number | null} params.longitude  - Longitude of the location
 * @param {number} params.viewerFid [optional]  - FID of the user viewing the feed. Providing this will return a list of users that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 *
 * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const latitude = 
 * const longitude = 
 * const viewerFid = 
 * const limit = 
 *
 * client.fetchUsersByLocation({ latitude, longitude, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-users-by-location)
 *
 */
public async fetchUsersByLocation(params: { latitude: number | null, longitude: number | null, viewerFid?: number, limit?: number, cursor?: string }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.fetchUsersByLocation(adjustedParams);
  return response.data;
}

/**
 * Follow a user  (In order to follow a user `signer_uuid` must be approved)
 *
 * @summary Follow user
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {Array<number>} params.targetFids 
 *
 * @returns {Promise<BulkFollowResponse>} A promise that resolves to a `BulkFollowResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const targetFids = 
 *
 * client.followUser({signerUuid, targetFids}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/follow-user)
 *
 */
public async followUser(params: { signerUuid: string, targetFids: Array<number> }): Promise<BulkFollowResponse> {
  const adjustedParams: any = {};
const _params = { followReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.followUser(adjustedParams);
  return response.data;
}

/**
 * Fetches FID to [assign it to new user](https://docs.neynar.com/reference/register-account)
 *
 * @summary Fetch fresh FID
 *
 * @param {object} params
 *
 * @returns {Promise<UserFIDResponse>} A promise that resolves to a `UserFIDResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 *
 * client.getFreshAccountFID().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-fresh-account-fid)
 *
 */
public async getFreshAccountFID(): Promise<UserFIDResponse> {
  const adjustedParams: any = {};
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.getFreshAccountFID(adjustedParams);
  return response.data;
}

/**
 * Returns the best friends of a user ranked by mutual affinity score based on interactions with each other.
 *
 * @summary Best friends
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the user
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 3, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 *
 * @returns {Promise<BestFriendsResponse>} A promise that resolves to a `BestFriendsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const limit = 
 *
 * client.getUserBestFriends({ fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/get-user-best-friends)
 *
 */
public async getUserBestFriends(params: { fid: number, limit?: number, cursor?: string }): Promise<BestFriendsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.userApi.getUserBestFriends(adjustedParams);
  return response.data;
}

/**
 * Lookup a user by custody-address
 *
 * @summary By custody-address
 *
 * @param {object} params
 * @param {string} params.custodyAddress  - Custody Address associated with mnemonic
 *
 * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const custodyAddress = 
 *
 * client.lookupUserByCustodyAddress({ custodyAddress }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-by-custody-address)
 *
 */
public async lookupUserByCustodyAddress(params: { custodyAddress: string }): Promise<UserResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.userApi.lookupUserByCustodyAddress(adjustedParams);
  return response.data;
}

/**
 * Fetches a single hydrated user object given a username
 *
 * @summary By username
 *
 * @param {object} params
 * @param {string} params.username  - Username of the user to fetch
 * @param {number} params.viewerFid [optional] 
 *
 * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const username = 
 * const viewerFid = 
 *
 * client.lookupUserByUsername({ username, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-by-username)
 *
 */
public async lookupUserByUsername(params: { username: string, viewerFid?: number }): Promise<UserResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.lookupUserByUsername(adjustedParams);
  return response.data;
}

/**
 * Fetches the users who have verified the specified X (Twitter) username
 *
 * @summary By X username
 *
 * @param {object} params
 * @param {string} params.xUsername  - X (Twitter) username to search for, without the @ symbol
 * @param {number} params.viewerFid [optional]  - FID of the viewer for contextual information like follows and blocks
 *
 * @returns {Promise<BulkUsersResponse>} A promise that resolves to a `BulkUsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const xUsername = 
 * const viewerFid = 
 *
 * client.lookupUsersByXUsername({ xUsername, viewerFid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-users-by-x-username)
 *
 */
public async lookupUsersByXUsername(params: { xUsername: string, viewerFid?: number }): Promise<BulkUsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.lookupUsersByXUsername(adjustedParams);
  return response.data;
}

/**
 * Adds verification for an eth address or contract for the user  (In order to add verification `signer_uuid` must be approved)
 *
 * @summary Add verification
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.address  - Ethereum address
 * @param {string} params.blockHash 
 * @param {string} params.ethSignature 
 * @param {VerificationType} params.verificationType [optional] 
 * @param {VerificationChainId} params.chainId [optional] 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const address = 
 * const blockHash = 
 * const ethSignature = 
 * const verificationType = 
 * const chainId = 
 *
 * client.publishVerification({signerUuid, address, blockHash, ethSignature, verificationType, chainId}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-verification)
 *
 */
public async publishVerification(params: { signerUuid: string, address: string, blockHash: string, ethSignature: string, verificationType?: VerificationType, chainId?: VerificationChainId }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { addVerificationReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.publishVerification(adjustedParams);
  return response.data;
}

/**
 * Register account on farcaster.   **Note:** This API must be called within 10 minutes of the fetch FID API call (i.e., /v2/farcaster/user/fid). Otherwise, Neynar will assign this FID to another available user.
 *
 * @summary Register new account
 *
 * @param {object} params
 * @param {RegisterUserReqBodySigner} params.signer [optional] 
 * @param {string} params.signature 
 * @param {number} params.fid 
 * @param {string} params.requestedUserCustodyAddress 
 * @param {number} params.deadline 
 * @param {string} params.fname [optional] 
 * @param {RegisterUserReqBodyMetadata} params.metadata [optional] 
 *
 * @returns {Promise<RegisterUserResponse>} A promise that resolves to a `RegisterUserResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer = 
 * const signature = 
 * const fid = 
 * const requestedUserCustodyAddress = 
 * const deadline = 
 * const fname = 
 * const metadata = 
 *
 * client.registerAccount({signer, signature, fid, requestedUserCustodyAddress, deadline, fname, metadata}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-account)
 *
 */
public async registerAccount(params: { signer?: RegisterUserReqBodySigner, signature: string, fid: number, requestedUserCustodyAddress: string, deadline: number, fname?: string, metadata?: RegisterUserReqBodyMetadata }): Promise<RegisterUserResponse> {
  const adjustedParams: any = {};
const _params = { registerUserReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.registerAccount(adjustedParams);
  return response.data;
}

/**
 * Search for Usernames
 *
 * @summary Search for Usernames
 *
 * @param {object} params
 * @param {string} params.q 
 * @param {number} params.viewerFid [optional]  - Providing this will return search results that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of users to fetch (Default: 5, Maximum: 10)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<UserSearchResponse>} A promise that resolves to a `UserSearchResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const viewerFid = 
 * const limit = 
 *
 * client.searchUser({ q, viewerFid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-user)
 *
 */
public async searchUser(params: { q: string, viewerFid?: number, limit?: number, cursor?: string }): Promise<UserSearchResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['xNeynarExperimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.searchUser(adjustedParams);
  return response.data;
}

/**
 * Unfollow a user  (In order to unfollow a user `signer_uuid` must be approved)
 *
 * @summary Unfollow user
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {Array<number>} params.targetFids 
 *
 * @returns {Promise<BulkFollowResponse>} A promise that resolves to a `BulkFollowResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const targetFids = 
 *
 * client.unfollowUser({signerUuid, targetFids}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/unfollow-user)
 *
 */
public async unfollowUser(params: { signerUuid: string, targetFids: Array<number> }): Promise<BulkFollowResponse> {
  const adjustedParams: any = {};
const _params = { followReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.unfollowUser(adjustedParams);
  return response.data;
}

/**
 * Update user profile  (In order to update user\'s profile `signer_uuid` must be approved)
 *
 * @summary Update user profile
 *
 * @param {object} params
 * @param {string} params.signerUuid  - UUID of the signer. `signer_uuid` is paired with API key, can't use a `uuid` made with a different API key.
 * @param {string} params.bio [optional] 
 * @param {string} params.pfpUrl [optional] 
 * @param {string} params.url [optional] 
 * @param {string} params.username [optional] 
 * @param {string} params.displayName [optional] 
 * @param {UpdateUserReqBodyLocation} params.location [optional] 
 * @param {string} params.banner [optional]  - Requires pro subscription.
 * @param {string} params.primaryEthAddress [optional]  - Must be one of the verified addresses.
 * @param {string} params.primarySolAddress [optional]  - Must be one of the verified addresses.
 * @param {UpdateUserReqBodyVerifiedAccounts} params.verifiedAccounts [optional] 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signerUuid = 
 * const bio = 
 * const pfpUrl = 
 * const url = 
 * const username = 
 * const displayName = 
 * const location = 
 * const banner = 
 * const primaryEthAddress = 
 * const primarySolAddress = 
 * const verifiedAccounts = 
 *
 * client.updateUser({signerUuid, bio, pfpUrl, url, username, displayName, location, banner, primaryEthAddress, primarySolAddress, verifiedAccounts}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-user)
 *
 */
public async updateUser(params: { signerUuid: string, bio?: string, pfpUrl?: string, url?: string, username?: string, displayName?: string, location?: UpdateUserReqBodyLocation, banner?: string, primaryEthAddress?: string, primarySolAddress?: string, verifiedAccounts?: UpdateUserReqBodyVerifiedAccounts }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { updateUserReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.updateUser(adjustedParams);
  return response.data;
}

/**
 * Delete a webhook
 *
 * @summary Delete a webhook
 *
 * @param {object} params
 * @param {string} params.webhookId 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const webhookId = 
 *
 * client.deleteWebhook({webhookId}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
 *
 */
public async deleteWebhook(params: { webhookId: string }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhookDeleteReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.webhookApi.deleteWebhook(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of webhooks associated to a user
 *
 * @summary Associated webhooks of user
 *
 *
 * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object.
 *
 * @example
 *
 * client.fetchWebhooks().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-webhooks)
 *
 */
public async fetchWebhooks(): Promise<WebhookListResponse> {
  
  const response = await this.apis.webhookApi.fetchWebhooks();
  return response.data;
}

/**
 * Fetch a webhook
 *
 * @summary Fetch a webhook
 *
 * @param {object} params
 * @param {string} params.webhookId 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const webhookId = 
 *
 * client.lookupWebhook({ webhookId }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
 *
 */
public async lookupWebhook(params: { webhookId: string }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.webhookApi.lookupWebhook(adjustedParams);
  return response.data;
}

/**
 * Create a webhook
 *
 * @summary Create a webhook
 *
 * @param {object} params
 * @param {string} params.name 
 * @param {string} params.url 
 * @param {WebhookSubscriptionFilters} params.subscription [optional] 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const name = 
 * const url = 
 * const subscription = 
 *
 * client.publishWebhook({name, url, subscription}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-webhook)
 *
 */
public async publishWebhook(params: { name: string, url: string, subscription?: WebhookSubscriptionFilters }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhookPostReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.webhookApi.publishWebhook(adjustedParams);
  return response.data;
}

/**
 * Update a webhook
 *
 * @summary Update a webhook
 *
 * @param {object} params
 * @param {string} params.name 
 * @param {string} params.url 
 * @param {WebhookSubscriptionFilters} params.subscription [optional] 
 * @param {string} params.webhookId 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const name = 
 * const url = 
 * const subscription = 
 * const webhookId = 
 *
 * client.updateWebhook({name, url, subscription, webhookId}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
 *
 */
public async updateWebhook(params: { name: string, url: string, subscription?: WebhookSubscriptionFilters, webhookId: string }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhookPutReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.webhookApi.updateWebhook(adjustedParams);
  return response.data;
}

/**
 * Update webhook active status
 *
 * @summary Update webhook status
 *
 * @param {object} params
 * @param {string} params.webhookId 
 * @param {WebhookPatchReqBodyActiveEnum} params.active 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const webhookId = 
 * const active = 
 *
 * client.updateWebhookActiveStatus({webhookId, active}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
 *
 */
public async updateWebhookActiveStatus(params: { webhookId: string, active: WebhookPatchReqBodyActiveEnum }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhookPatchReqBody: camelCaseToSnakeCaseKeys(params) };
Object.assign(adjustedParams, _params);

  const response = await this.apis.webhookApi.updateWebhookActiveStatus(adjustedParams);
  return response.data;
}

  
  /**
     * Creates a signer and registers a signed key for the signer.
     * It returns a Signer which includes `signer_approval_url` that can be used to create a QR Code for the user to scan and approve the signer.
     *
     * @param {Object} [options] - Optional parameters for the request.
     * @param {string} [options.farcasterDeveloperMnemonic] - mnemonic of the farcaster developer account
     * @param {number} [options.deadline] - (Optional) Unix timestamp in seconds that controls how long the signed key
     *   request is valid for. A 24-hour duration from now is recommended.
     *
     * @returns {Promise<Signer>} A promise that resolves to a `Signer` object,
     *   that includes signer_approval_url.
     *
     * @example
     * 
     * // Fill in the appropriate values
     * 
     * const farcasterDeveloperMnemonic = 
     * const deadline = 
     * 
     * client.createSignerAndRegisterSignedKey({ farcasterDeveloperMnemonic, deadline: 1693927665 }).then(response => {
     *   console.log('Signer', response);
     * });
     */
    public async createSignerAndRegisterSignedKey(
      params: {
        farcasterDeveloperMnemonic: string;
        deadline?: number;
      }
    ) {
      const { farcasterDeveloperMnemonic, deadline } = params;
      try {
        const { public_key: signerPublicKey, signer_uuid } =
          await this.createSigner();
  
        const account = mnemonicToAccount(farcasterDeveloperMnemonic);
        const { user: farcasterDeveloper } =
          await this.lookupUserByCustodyAddress({
            custodyAddress: account.address,
          });
  
        // Generates an expiration date for the signature
        // e.g. 1693927665
        const signed_key_deadline =
          deadline ?? Math.floor(Date.now() / 1000) + 86400; // signature is valid for 1 day from now
  
        let signature = await account.signTypedData({
          domain: SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN,
          types: {
            SignedKeyRequest: SIGNED_KEY_REQUEST_TYPE,
          },
          primaryType: "SignedKeyRequest",
          message: {
            requestFid: BigInt(farcasterDeveloper.fid),
            key: signerPublicKey,
            deadline: BigInt(signed_key_deadline),
          },
        });
  
        let signer_pending = await this.registerSignedKey({
          signerUuid: signer_uuid,
          appFid: farcasterDeveloper.fid,
          deadline: signed_key_deadline,
          signature,
        });
        return signer_pending;
      } catch (err) {
        if (isApiErrorResponse(err)) {
          console.log(err.response.data);
        } else console.log(err);
      }
    }
  
}
