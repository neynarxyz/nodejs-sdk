
import { mnemonicToAccount } from "viem/accounts";
import { Logger, silentLogger } from "../common/logger";
import axios, { AxiosError, AxiosInstance, RawAxiosRequestConfig } from "axios";
import type { SetRequired } from "type-fest";
import { Configuration as OpenAPIGeneratedConfiguration } from '../api/configuration';
import { Configuration } from './configuration';

import {SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN, SIGNED_KEY_REQUEST_TYPE} from '../common/constants';
import {isApiErrorResponse} from '../utils';

import { ActionApi } from '../api/apis/action-api';
import { BanApi } from '../api/apis/ban-api';
import { BlockApi } from '../api/apis/block-api';
import { CastApi } from '../api/apis/cast-api';
import { ChannelApi } from '../api/apis/channel-api';
import { FeedApi } from '../api/apis/feed-api';
import { FnameApi } from '../api/apis/fname-api';
import { FollowsApi } from '../api/apis/follows-api';
import { FrameApi } from '../api/apis/frame-api';
import { MuteApi } from '../api/apis/mute-api';
import { NotificationsApi } from '../api/apis/notifications-api';
import { ReactionApi } from '../api/apis/reaction-api';
import { SignerApi } from '../api/apis/signer-api';
import { StorageApi } from '../api/apis/storage-api';
import { StpApi } from '../api/apis/stp-api';
import { SubscribersApi } from '../api/apis/subscribers-api';
import { UserApi } from '../api/apis/user-api';
import { WebhookApi } from '../api/apis/webhook-api';
import type { AddVerificationReqBody, AuthorizationUrlResponse, AuthorizationUrlResponseType, BanListResponse, BanReqBody, BanResponse, BlockListResponse, BlockReqBody, BulkCastsResponse, BulkFollowResponse, BulkUserAddressType, BulkUsersByAddressResponse, BulkUsersResponse, BuyStorageReqBody, CastComposerActionsListResponse, CastComposerType, CastConversationSortType, CastParamType, CastResponse, CastsResponse, CastsSearchResponse, ChannelFollowReqBody, ChannelListResponse, ChannelMemberInviteListResponse, ChannelMemberListResponse, ChannelMemberRole, ChannelResponse, ChannelResponseBulk, ChannelSearchResponse, ChannelType, Conversation, DeleteCastReqBody, DeleteFrameReqBody, DeleteFrameResponse, DeveloperManagedSigner, EmbedType, ErrorRes, FarcasterActionReqBody, FarcasterActionReqBodyAction, FeedResponse, FeedTrendingProvider, FeedType, FetchBulkCastsSortTypeEnum, FetchFrameMetaTagsFromUrl200Response, FetchRepliesAndRecastsForUserFilterEnum, FetchTrendingChannelsTimeWindowEnum, FetchTrendingFeedTimeWindowEnum, FilterType, FnameAvailabilityResponse, FollowReqBody, FollowSortType, FollowersResponse, ForYouProvider, Frame, FrameAction, FrameActionReqBody, FrameDeveloperManagedActionReqBody, FrameSignaturePacket, FrameType, FrameValidateAnalyticsResponse, FrameValidateListResponse, InviteChannelMemberReqBody, LookupCastConversationFoldEnum, MarkNotificationsAsSeenReqBody, MuteListResponse, MuteReqBody, MuteResponse, NeynarFrame, NeynarFrameCreationReqBody, NeynarFramePage, NeynarFrameUpdateReqBody, NotificationType, NotificationsResponse, OperationResponse, PostCastReqBody, PostCastReqBodyEmbeds, PostCastResponse, ReactionReqBody, ReactionType, ReactionsCastResponse, ReactionsResponse, ReactionsType, RegisterDeveloperManagedSignedKeyReqBody, RegisterSignerKeyReqBody, RegisterUserReqBody, RegisterUserResponse, RelevantFollowersResponse, RemoveChannelMemberReqBody, RemoveVerificationReqBody, RespondChannelInviteReqBody, SignedKeyRequestSponsor, Signer, StorageAllocationsResponse, StorageUsageResponse, SubscribedToResponse, SubscribersResponse, SubscriptionCheckResponse, SubscriptionProvider, SubscriptionProviders, SubscriptionsResponse, TrendingChannelResponse, UpdateUserReqBody, UpdateUserReqBodyLocation, UserFIDResponse, UserPowerLiteResponse, UserResponse, UserSearchResponse, UsersActiveChannelsResponse, UsersResponse, ValidateFrameActionReqBody, ValidateFrameActionResponse, ValidateFrameAggregateWindow, ValidateFrameAnalyticsType, VerificationChainId, VerificationType, WebhookDeleteReqBody, WebhookListResponse, WebhookPatchReqBody, WebhookPatchReqBodyActiveEnum, WebhookPostReqBody, WebhookPutReqBody, WebhookResponse, WebhookSubscriptionFilters } from '../api';


export interface NeynarAPIClientOptions {
  logger?: Logger;
  axiosInstance?: AxiosInstance;
}

export class NeynarAPIClient {
  private readonly logger: Logger;
  private config: OpenAPIGeneratedConfiguration;

  public readonly apis: {
    actionApi: ActionApi;
    banApi: BanApi;
    blockApi: BlockApi;
    castApi: CastApi;
    channelApi: ChannelApi;
    feedApi: FeedApi;
    fnameApi: FnameApi;
    followsApi: FollowsApi;
    frameApi: FrameApi;
    muteApi: MuteApi;
    notificationsApi: NotificationsApi;
    reactionApi: ReactionApi;
    signerApi: SignerApi;
    storageApi: StorageApi;
    stpApi: StpApi;
    subscribersApi: SubscribersApi;
    userApi: UserApi;
    webhookApi: WebhookApi;
  };

  constructor(
    config: Configuration,
    options: NeynarAPIClientOptions = {}
  ) {
    const { logger = silentLogger, axiosInstance: customAxiosInstance } = options;
    
    this.logger = logger;
    this.config = new OpenAPIGeneratedConfiguration({
      apiKey: config.apiKey,
      basePath: config.basePath,
      baseOptions: config.baseOptions,
    });

    const axiosInstance = customAxiosInstance || axios.create({
      headers: {
        "x-sdk-version": process.env.npm_package_version,
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
      banApi: new BanApi(this.config, undefined, axiosInstance),
      blockApi: new BlockApi(this.config, undefined, axiosInstance),
      castApi: new CastApi(this.config, undefined, axiosInstance),
      channelApi: new ChannelApi(this.config, undefined, axiosInstance),
      feedApi: new FeedApi(this.config, undefined, axiosInstance),
      fnameApi: new FnameApi(this.config, undefined, axiosInstance),
      followsApi: new FollowsApi(this.config, undefined, axiosInstance),
      frameApi: new FrameApi(this.config, undefined, axiosInstance),
      muteApi: new MuteApi(this.config, undefined, axiosInstance),
      notificationsApi: new NotificationsApi(this.config, undefined, axiosInstance),
      reactionApi: new ReactionApi(this.config, undefined, axiosInstance),
      signerApi: new SignerApi(this.config, undefined, axiosInstance),
      storageApi: new StorageApi(this.config, undefined, axiosInstance),
      stpApi: new StpApi(this.config, undefined, axiosInstance),
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
 * @param {string} params.signer_uuid  - The signer_uuid of the user on behalf of whom the action is being performed.
 * @param {string} params.base_url  - The base URL of the app on which the action is being performed.
 * @param {FarcasterActionReqBodyAction} params.action 
 *
 * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const base_url = 
 * const action = 
 *
 * client.publishFarcasterAction({signer_uuid, base_url, action}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/docs/farcaster-actions-spec)
 *
 */
public async publishFarcasterAction(params: { signer_uuid: string, base_url: string, action: FarcasterActionReqBodyAction }): Promise<{ [key: string]: any; }> {
  const adjustedParams: any = {};
const _params = { farcaster_action_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.actionApi.publishFarcasterAction(adjustedParams);
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
const _params = { ban_req_body: params };
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
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

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
const _params = { ban_req_body: params };
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {number} params.blocked_fid  - The unique identifier of a farcaster user (unsigned integer)
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const blocked_fid = 
 *
 * client.deleteBlock({signer_uuid, blocked_fid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-block)
 *
 */
public async deleteBlock(params: { signer_uuid: string, blocked_fid: number }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { block_req_body: params };
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
 * @param {number} params.blocker_fid [optional]  - Providing this will return the users that this user has blocked
 * @param {number} params.blocked_fid [optional]  - Providing this will return the users that have blocked this user
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<BlockListResponse>} A promise that resolves to a `BlockListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const blocker_fid = 
 * const blocked_fid = 
 * const limit = 
 *
 * client.fetchBlockList({ blocker_fid, blocked_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-block-list)
 *
 */
public async fetchBlockList(params: { blocker_fid?: number, blocked_fid?: number, limit?: number, cursor?: string }): Promise<BlockListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.blockApi.fetchBlockList(adjustedParams);
  return response.data;
}

/**
 * Adds a block for a given FID.
 *
 * @summary Block FID
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {number} params.blocked_fid  - The unique identifier of a farcaster user (unsigned integer)
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const blocked_fid = 
 *
 * client.publishBlock({signer_uuid, blocked_fid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-block)
 *
 */
public async publishBlock(params: { signer_uuid: string, blocked_fid: number }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { block_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.blockApi.publishBlock(adjustedParams);
  return response.data;
}

/**
 * Delete an existing cast. \\ (In order to delete a cast `signer_uuid` must be approved)
 *
 * @summary Delete a cast
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.target_hash  - Cast Hash
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const target_hash = 
 *
 * client.deleteCast({signer_uuid, target_hash}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-cast)
 *
 */
public async deleteCast(params: { signer_uuid: string, target_hash: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { delete_cast_req_body: params };
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
 * @param {number} params.viewer_fid [optional]  - adds viewer_context to cast object to show whether viewer has liked or recasted the cast.
 * @param {FetchBulkCastsSortTypeEnum} params.sort_type [optional]  - Optional parameter to sort the casts based on different criteria
 *
 * @returns {Promise<CastsResponse>} A promise that resolves to a `CastsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const casts = 
 * const viewer_fid = 
 * const sort_type = 
 *
 * client.fetchBulkCasts({ casts, viewer_fid, sort_type }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-casts)
 *
 */
public async fetchBulkCasts(params: { casts: string[], viewer_fid?: number, sort_type?: FetchBulkCastsSortTypeEnum }): Promise<CastsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.casts && Array.isArray(adjustedParams.casts)) {
  adjustedParams.casts = adjustedParams.casts.join(",");
}

  const response = await this.apis.castApi.fetchBulkCasts(adjustedParams);
  return response.data;
}

/**
 * Fetches all composer actions on Warpcast. You can filter by top or featured.
 *
 * @summary Fetch composer actions
 *
 * @param {object} params
 * @param {CastComposerType} params.list  - Type of list to fetch.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 25)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<CastComposerActionsListResponse>} A promise that resolves to a `CastComposerActionsListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const list = 
 * const limit = 
 *
 * client.fetchComposerActions({ list, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-composer-actions)
 *
 */
public async fetchComposerActions(params: { list: CastComposerType, limit?: number, cursor?: string }): Promise<CastComposerActionsListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castApi.fetchComposerActions(adjustedParams);
  return response.data;
}

/**
 * Gets information about an individual cast by passing in a Warpcast web URL or cast hash
 *
 * @summary By hash or URL
 *
 * @param {object} params
 * @param {string} params.identifier  - Cast identifier (Its either a url or a hash)
 * @param {CastParamType} params.type 
 * @param {number} params.viewer_fid [optional]  - adds viewer_context to cast object to show whether viewer has liked or recasted the cast.
 *
 * @returns {Promise<CastResponse>} A promise that resolves to a `CastResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const identifier = 
 * const type = 
 * const viewer_fid = 
 *
 * client.lookupCastByHashOrWarpcastUrl({ identifier, type, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-by-hash-or-warpcast-url)
 *
 */
public async lookupCastByHashOrWarpcastUrl(params: { identifier: string, type: CastParamType, viewer_fid?: number }): Promise<CastResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castApi.lookupCastByHashOrWarpcastUrl(adjustedParams);
  return response.data;
}

/**
 * Gets all casts related to a conversation surrounding a cast by passing in a cast hash or Warpcast URL. Includes all the ancestors of a cast up to the root parent in a chronological order. Includes all direct_replies to the cast up to the reply_depth specified in the query parameter.
 *
 * @summary Conversation for a cast
 *
 * @param {object} params
 * @param {string} params.identifier  - Cast identifier (Its either a url or a hash)
 * @param {CastParamType} params.type 
 * @param {number} params.reply_depth [optional]  - The depth of replies in the conversation that will be returned (default 2)
 * @param {boolean} params.include_chronological_parent_casts [optional]  - Include all parent casts in chronological order
 * @param {number} params.viewer_fid [optional]  - Providing this will return a conversation that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {CastConversationSortType} params.sort_type [optional]  - Sort type for the ordering of descendants. Default is `chron`
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
 * const reply_depth = 
 * const include_chronological_parent_casts = 
 * const viewer_fid = 
 * const sort_type = 
 * const fold = 
 * const limit = 
 *
 * client.lookupCastConversation({ identifier, type, reply_depth, include_chronological_parent_casts, viewer_fid, sort_type, fold, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation)
 *
 */
public async lookupCastConversation(params: { identifier: string, type: CastParamType, reply_depth?: number, include_chronological_parent_casts?: boolean, viewer_fid?: number, sort_type?: CastConversationSortType, fold?: LookupCastConversationFoldEnum, limit?: number, cursor?: string }): Promise<Conversation> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castApi.lookupCastConversation(adjustedParams);
  return response.data;
}

/**
 * Posts a cast or cast reply. Works with mentions and embeds.   (In order to post a cast `signer_uuid` must be approved)
 *
 * @summary Post a cast
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.text [optional] 
 * @param {Array<PostCastReqBodyEmbeds>} params.embeds [optional] 
 * @param {string} params.parent [optional]  - parent_url of the channel the cast is in, or hash of the cast
 * @param {string} params.channel_id [optional]  - Channel ID of the channel where the cast is to be posted. e.g. neynar, farcaster, warpcast
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 * @param {number} params.parent_author_fid [optional]  - The unique identifier of a farcaster user (unsigned integer)
 *
 * @returns {Promise<PostCastResponse>} A promise that resolves to a `PostCastResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const text = 
 * const embeds = 
 * const parent = 
 * const channel_id = 
 * const idem = 
 * const parent_author_fid = 
 *
 * client.publishCast({signer_uuid, text, embeds, parent, channel_id, idem, parent_author_fid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-cast)
 *
 */
public async publishCast(params: { signer_uuid: string, text?: string, embeds?: Array<PostCastReqBodyEmbeds>, parent?: string, channel_id?: string, idem?: string, parent_author_fid?: number }): Promise<PostCastResponse> {
  const adjustedParams: any = {};
const _params = { post_cast_req_body: params };
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
 * @param {string} params.q  - Query string to search for casts
 * @param {number} params.author_fid [optional]  - Fid of the user whose casts you want to search
 * @param {number} params.viewer_fid [optional]  - Providing this will return search results that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {string} params.parent_url [optional]  - Parent URL of the casts you want to search
 * @param {string} params.channel_id [optional]  - Channel ID of the casts you want to search
 * @param {boolean} params.priority_mode [optional]  - When true, only returns search results from power badge users and users that the viewer follows (if viewer_fid is provided).
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor
 *
 * @returns {Promise<CastsSearchResponse>} A promise that resolves to a `CastsSearchResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const author_fid = 
 * const viewer_fid = 
 * const parent_url = 
 * const channel_id = 
 * const priority_mode = 
 * const limit = 
 *
 * client.searchCasts({ q, author_fid, viewer_fid, parent_url, channel_id, priority_mode, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-casts)
 *
 */
public async searchCasts(params: { q: string, author_fid?: number, viewer_fid?: number, parent_url?: string, channel_id?: string, priority_mode?: boolean, limit?: number, cursor?: string }): Promise<CastsSearchResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

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
 * @param {ChannelType} params.type [optional]  - Type of identifier being used to query the channels. Defaults to ID.
 * @param {number} params.viewer_fid [optional]  - FID of the user viewing the channels.
 *
 * @returns {Promise<ChannelResponseBulk>} A promise that resolves to a `ChannelResponseBulk` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const ids = 
 * const type = 
 * const viewer_fid = 
 *
 * client.fetchBulkChannels({ ids, type, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-channels)
 *
 */
public async fetchBulkChannels(params: { ids: string[], type?: ChannelType, viewer_fid?: number }): Promise<ChannelResponseBulk> {
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
 * @param {string} params.channel_id [optional]  - Channel ID for the channel being queried
 * @param {number} params.invited_fid [optional]  - FID of the user being invited
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelMemberInviteListResponse>} A promise that resolves to a `ChannelMemberInviteListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const channel_id = 
 * const invited_fid = 
 * const limit = 
 *
 * client.fetchChannelInvites({ channel_id, invited_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-invites)
 *
 */
public async fetchChannelInvites(params: { channel_id?: string, invited_fid?: number, limit?: number, cursor?: string }): Promise<ChannelMemberInviteListResponse> {
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
 * @param {string} params.channel_id  - Channel ID for the channel being queried
 * @param {number} params.fid [optional]  - FID of the user being queried. Specify this to check if a user is a member of the channel without paginating through all members.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<ChannelMemberListResponse>} A promise that resolves to a `ChannelMemberListResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const channel_id = 
 * const fid = 
 * const limit = 
 *
 * client.fetchChannelMembers({ channel_id, fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-members)
 *
 */
public async fetchChannelMembers(params: { channel_id: string, fid?: number, limit?: number, cursor?: string }): Promise<ChannelMemberListResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

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
 * @param {number} params.viewer_fid [optional]  - Providing this will return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.limit [optional]  - Number of followers to fetch (Default: 25, Maximum: 1000)
 *
 * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 * const viewer_fid = 
 * const limit = 
 *
 * client.fetchFollowersForAChannel({ id, viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-followers-for-a-channel)
 *
 */
public async fetchFollowersForAChannel(params: { id: string, viewer_fid?: number, cursor?: string, limit?: number }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

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
 * @param {number} params.viewer_fid  - The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 * const viewer_fid = 
 *
 * client.fetchRelevantFollowersForAChannel({ id, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers-for-a-channel)
 *
 */
public async fetchRelevantFollowersForAChannel(params: { id: string, viewer_fid: number }): Promise<RelevantFollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.channelApi.fetchRelevantFollowersForAChannel(adjustedParams);
  return response.data;
}

/**
 * Returns a list of trending channels based on activity
 *
 * @summary Channels by activity
 *
 * @param {object} params
 * @param {FetchTrendingChannelsTimeWindowEnum} params.time_window [optional] 
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 10, Maximum: 25)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<TrendingChannelResponse>} A promise that resolves to a `TrendingChannelResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const time_window = 
 * const limit = 
 *
 * client.fetchTrendingChannels({ time_window, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-trending-channels)
 *
 */
public async fetchTrendingChannels(params: { time_window?: FetchTrendingChannelsTimeWindowEnum, limit?: number, cursor?: string }): Promise<TrendingChannelResponse> {
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.channel_id  - The unique identifier of a farcaster channel
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const channel_id = 
 *
 * client.followChannel({signer_uuid, channel_id}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/follow-channel)
 *
 */
public async followChannel(params: { signer_uuid: string, channel_id: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { channel_follow_req_body: params };
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.channel_id  - The unique identifier of a farcaster channel
 * @param {number} params.fid  - The unique identifier of a farcaster user (unsigned integer)
 * @param {ChannelMemberRole} params.role 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const channel_id = 
 * const fid = 
 * const role = 
 *
 * client.inviteChannelMember({signer_uuid, channel_id, fid, role}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/invite-channel-member)
 *
 */
public async inviteChannelMember(params: { signer_uuid: string, channel_id: string, fid: number, role: ChannelMemberRole }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { invite_channel_member_req_body: params };
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
 * @param {ChannelType} params.type [optional]  - Type of identifier being used to query the channel. Defaults to ID.
 * @param {number} params.viewer_fid [optional]  - FID of the user viewing the channel.
 *
 * @returns {Promise<ChannelResponse>} A promise that resolves to a `ChannelResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const id = 
 * const type = 
 * const viewer_fid = 
 *
 * client.lookupChannel({ id, type, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-channel)
 *
 */
public async lookupChannel(params: { id: string, type?: ChannelType, viewer_fid?: number }): Promise<ChannelResponse> {
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.channel_id  - The unique identifier of a farcaster channel
 * @param {number} params.fid  - The unique identifier of a farcaster user (unsigned integer)
 * @param {ChannelMemberRole} params.role 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const channel_id = 
 * const fid = 
 * const role = 
 *
 * client.removeChannelMember({signer_uuid, channel_id, fid, role}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/remove-channel-member)
 *
 */
public async removeChannelMember(params: { signer_uuid: string, channel_id: string, fid: number, role: ChannelMemberRole }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { remove_channel_member_req_body: params };
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.channel_id  - The unique identifier of a farcaster channel
 * @param {ChannelMemberRole} params.role 
 * @param {boolean} params.accept  - Accept or reject the invite
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const channel_id = 
 * const role = 
 * const accept = 
 *
 * client.respondChannelInvite({signer_uuid, channel_id, role, accept}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/respond-channel-invite)
 *
 */
public async respondChannelInvite(params: { signer_uuid: string, channel_id: string, role: ChannelMemberRole, accept: boolean }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { respond_channel_invite_req_body: params };
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
 *
 * @returns {Promise<ChannelSearchResponse>} A promise that resolves to a `ChannelSearchResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const limit = 
 *
 * client.searchChannels({ q, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-channels)
 *
 */
public async searchChannels(params: { q: string, limit?: number, cursor?: string }): Promise<ChannelSearchResponse> {
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.channel_id  - The unique identifier of a farcaster channel
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const channel_id = 
 *
 * client.unfollowChannel({signer_uuid, channel_id}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/unfollow-channel)
 *
 */
public async unfollowChannel(params: { signer_uuid: string, channel_id: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { channel_follow_req_body: params };
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
 * @param {number} params.viewer_fid [optional]  - FID of the user viewing the feed
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 150)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {boolean} params.include_replies [optional]  - Include reply casts by the author in the response, true by default
 * @param {string} params.parent_url [optional]  - Parent URL to filter the feed; mutually exclusive with channel_id
 * @param {string} params.channel_id [optional]  - Channel ID to filter the feed; mutually exclusive with parent_url
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 * const limit = 
 * const include_replies = 
 * const parent_url = 
 * const channel_id = 
 *
 * client.fetchCastsForUser({ fid, viewer_fid, limit, include_replies, parent_url, channel_id }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-casts-for-user)
 *
 */
public async fetchCastsForUser(params: { fid: number, viewer_fid?: number, limit?: number, cursor?: string, include_replies?: boolean, parent_url?: string, channel_id?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchCastsForUser(adjustedParams);
  return response.data;
}

/**
 * Fetch casts based on filters. Ensure setting the correct parameters based on the feed_type and filter_type.
 *
 * @summary By filters
 *
 * @param {object} params
 * @param {FeedType} params.feed_type  - Defaults to following (requires FID or address). If set to filter (requires filter_type)
 * @param {FilterType} params.filter_type [optional]  - Used when feed_type=filter. Can be set to FIDs (requires FIDs) or parent_url (requires parent_url) or channel_id (requires channel_id)
 * @param {number} params.fid [optional]  - (Optional) FID of user whose feed you want to create. By default, the API expects this field, except if you pass a filter_type
 * @param {string} params.fids [optional]  - Used when filter_type=FIDs . Create a feed based on a list of FIDs. Max array size is 250. Requires feed_type and filter_type.
 * @param {string} params.parent_url [optional]  - Used when filter_type=parent_url can be used to fetch content under any parent url e.g. FIP-2 channels on Warpcast. Requires feed_type and filter_type
 * @param {string} params.channel_id [optional]  - Used when filter_type=channel_id can be used to fetch casts under a channel. Requires feed_type and filter_type.
 * @param {boolean} params.members_only [optional]  - Used when filter_type=channel_id. Only include casts from members of the channel. True by default.
 * @param {string} params.embed_url [optional]  - Used when filter_type=embed_url can be used to fetch all casts with an embed url that contains embed_url. Requires feed_type and filter_type
 * @param {Array<EmbedType>} params.embed_types [optional]  - Used when filter_type=embed_types can be used to fetch all casts with matching content types. Requires feed_type and filter_type
 * @param {boolean} params.with_recasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const feed_type = 
 * const filter_type = 
 * const fid = 
 * const fids = 
 * const parent_url = 
 * const channel_id = 
 * const members_only = 
 * const embed_url = 
 * const embed_types = 
 * const with_recasts = 
 * const limit = 
 * const viewer_fid = 
 *
 * client.fetchFeed({ feed_type, filter_type, fid, fids, parent_url, channel_id, members_only, embed_url, embed_types, with_recasts, limit, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed)
 *
 */
public async fetchFeed(params: { feed_type: FeedType, filter_type?: FilterType, fid?: number, fids?: string, parent_url?: string, channel_id?: string, members_only?: boolean, embed_url?: string, embed_types?: Array<EmbedType>, with_recasts?: boolean, limit?: number, cursor?: string, viewer_fid?: number }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchFeed(adjustedParams);
  return response.data;
}

/**
 * Fetch feed based on channel IDs
 *
 * @summary By channel IDs
 *
 * @param {object} params
 * @param {string[]} params.channel_ids  - Comma separated list of channel IDs e.g. neynar,farcaster
 * @param {boolean} params.with_recasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {boolean} params.with_replies [optional]  - Include replies in the response, false by default
 * @param {boolean} params.members_only [optional]  - Only include casts from members of the channel. True by default.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {boolean} params.should_moderate [optional]  - If true, only casts that have been liked by the moderator (if one exists) will be returned.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const channel_ids = 
 * const with_recasts = 
 * const viewer_fid = 
 * const with_replies = 
 * const members_only = 
 * const limit = 
 * const should_moderate = 
 *
 * client.fetchFeedByChannelIds({ channel_ids, with_recasts, viewer_fid, with_replies, members_only, limit, should_moderate }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed-by-channel-ids)
 *
 */
public async fetchFeedByChannelIds(params: { channel_ids: string[], with_recasts?: boolean, viewer_fid?: number, with_replies?: boolean, members_only?: boolean, limit?: number, cursor?: string, should_moderate?: boolean }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.channel_ids && Array.isArray(adjustedParams.channel_ids)) {
  adjustedParams.channel_ids = adjustedParams.channel_ids.join(",");
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
 * @param {string[]} params.parent_urls  - Comma separated list of parent_urls
 * @param {boolean} params.with_recasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {boolean} params.with_replies [optional]  - Include replies in the response, false by default
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const parent_urls = 
 * const with_recasts = 
 * const viewer_fid = 
 * const with_replies = 
 * const limit = 
 *
 * client.fetchFeedByParentUrls({ parent_urls, with_recasts, viewer_fid, with_replies, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed-by-parent-urls)
 *
 */
public async fetchFeedByParentUrls(params: { parent_urls: string[], with_recasts?: boolean, viewer_fid?: number, with_replies?: boolean, limit?: number, cursor?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.parent_urls && Array.isArray(adjustedParams.parent_urls)) {
  adjustedParams.parent_urls = adjustedParams.parent_urls.join(",");
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
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {ForYouProvider} params.provider [optional] 
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 50)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {string} params.provider_metadata [optional]  - provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 * const provider = 
 * const limit = 
 * const provider_metadata = 
 *
 * client.fetchFeedForYou({ fid, viewer_fid, provider, limit, provider_metadata }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-feed-for-you)
 *
 */
public async fetchFeedForYou(params: { fid: number, viewer_fid?: number, provider?: ForYouProvider, limit?: number, cursor?: string, provider_metadata?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchFeedForYou(adjustedParams);
  return response.data;
}

/**
 * Fetch feed of casts with Frames, reverse chronological order
 *
 * @summary Casts with Frames
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 * const viewer_fid = 
 *
 * client.fetchFramesOnlyFeed({ limit, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-frames-only-feed)
 *
 */
public async fetchFramesOnlyFeed(params: { limit?: number, viewer_fid?: number, cursor?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchFramesOnlyFeed(adjustedParams);
  return response.data;
}

/**
 * Fetch 10 most popular casts for a given user FID; popularity based on replies, likes and recasts; sorted by most popular first
 *
 * @summary 10 most popular casts
 *
 * @param {object} params
 * @param {number} params.fid  - FID of user whose feed you want to create
 * @param {number} params.viewer_fid [optional] 
 *
 * @returns {Promise<BulkCastsResponse>} A promise that resolves to a `BulkCastsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 *
 * client.fetchPopularCastsByUser({ fid, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-popular-casts-by-user)
 *
 */
public async fetchPopularCastsByUser(params: { fid: number, viewer_fid?: number }): Promise<BulkCastsResponse> {
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
 * @param {FetchRepliesAndRecastsForUserFilterEnum} params.filter [optional]  - filter to fetch only replies or recasts
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 50)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const filter = 
 * const limit = 
 * const viewer_fid = 
 *
 * client.fetchRepliesAndRecastsForUser({ fid, filter, limit, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-replies-and-recasts-for-user)
 *
 */
public async fetchRepliesAndRecastsForUser(params: { fid: number, filter?: FetchRepliesAndRecastsForUserFilterEnum, limit?: number, cursor?: string, viewer_fid?: number }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.feedApi.fetchRepliesAndRecastsForUser(adjustedParams);
  return response.data;
}

/**
 * Fetch trending casts or on the global feed or channels feeds. 7d time window available for channel feeds only.
 *
 * @summary Trending casts
 *
 * @param {object} params
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 10, Maximum: 10)
 * @param {string} params.cursor [optional]  - Pagination cursor
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FetchTrendingFeedTimeWindowEnum} params.time_window [optional]  - Time window for trending casts (7d window for channel feeds only)
 * @param {string} params.channel_id [optional]  - Channel ID to filter trending casts. Less active channels might have no casts in the time window selected.
 * @param {FeedTrendingProvider} params.provider [optional]  - The provider of the trending casts feed.
 * @param {string} params.provider_metadata [optional]  - provider_metadata is a URI-encoded stringified JSON object that can be used to pass additional metadata to the provider. Only available for mbd provider right now. See [here](https://docs.neynar.com/docs/feed-for-you-w-external-providers) on how to use.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const limit = 
 * const viewer_fid = 
 * const time_window = 
 * const channel_id = 
 * const provider = 
 * const provider_metadata = 
 *
 * client.fetchTrendingFeed({ limit, viewer_fid, time_window, channel_id, provider, provider_metadata }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-trending-feed)
 *
 */
public async fetchTrendingFeed(params: { limit?: number, cursor?: string, viewer_fid?: number, time_window?: FetchTrendingFeedTimeWindowEnum, channel_id?: string, provider?: FeedTrendingProvider, provider_metadata?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

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
 * @param {number} params.viewer_fid [optional]  - Providing this will return a feed that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {boolean} params.with_recasts [optional]  - Include recasts in the response, true by default
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FeedResponse>} A promise that resolves to a `FeedResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 * const with_recasts = 
 * const limit = 
 *
 * client.fetchUserFollowingFeed({ fid, viewer_fid, with_recasts, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following-feed)
 *
 */
public async fetchUserFollowingFeed(params: { fid: number, viewer_fid?: number, with_recasts?: boolean, limit?: number, cursor?: string }): Promise<FeedResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

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
 * @param {number} params.fid  - FID of the user whose following you want to fetch.
 * @param {number} params.viewer_fid [optional]  - Providing this will return a list of users that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 *
 * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 * const limit = 
 *
 * client.fetchFollowSuggestions({ fid, viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
 *
 */
public async fetchFollowSuggestions(params: { fid: number, viewer_fid?: number, limit?: number }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchFollowSuggestions(adjustedParams);
  return response.data;
}

/**
 * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
 *
 * @summary Relevant followers
 *
 * @param {object} params
 * @param {number} params.target_fid  - User who's profile you are looking at
 * @param {number} params.viewer_fid  - The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 *
 * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const target_fid = 
 * const viewer_fid = 
 *
 * client.fetchRelevantFollowers({ target_fid, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
 *
 */
public async fetchRelevantFollowers(params: { target_fid: number, viewer_fid: number }): Promise<RelevantFollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

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
 * @param {number} params.viewer_fid [optional]  - Providing this will return a list of followers that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FollowSortType} params.sort_type [optional]  - Sort type for fetch followers. Default is `desc_chron`
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 20, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 * const sort_type = 
 * const limit = 
 *
 * client.fetchUserFollowers({ fid, viewer_fid, sort_type, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
 *
 */
public async fetchUserFollowers(params: { fid: number, viewer_fid?: number, sort_type?: FollowSortType, limit?: number, cursor?: string }): Promise<FollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchUserFollowers(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of users followed by a user. Can optionally include a viewer_fid and sort_type.
 *
 * @summary Followed by
 *
 * @param {object} params
 * @param {number} params.fid  - FID of the user whose following you want to fetch.
 * @param {number} params.viewer_fid [optional]  - Providing this will return a list of users that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {FollowSortType} params.sort_type [optional]  - Optional parameter to sort the users based on different criteria.
 * @param {number} params.limit [optional]  - Number of results to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const viewer_fid = 
 * const sort_type = 
 * const limit = 
 *
 * client.fetchUserFollowing({ fid, viewer_fid, sort_type, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
 *
 */
public async fetchUserFollowing(params: { fid: number, viewer_fid?: number, sort_type?: FollowSortType, limit?: number, cursor?: string }): Promise<FollowersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.followsApi.fetchUserFollowing(adjustedParams);
  return response.data;
}

/**
 * Delete an existing frame, if it was made by the developer (identified by API key)
 *
 * @summary Delete frame
 *
 * @param {object} params
 * @param {string} params.uuid [optional] 
 *
 * @returns {Promise<DeleteFrameResponse>} A promise that resolves to a `DeleteFrameResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const uuid = 
 *
 * client.deleteNeynarFrame({uuid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-neynar-frame)
 *
 */
public async deleteNeynarFrame(params: { uuid?: string }): Promise<DeleteFrameResponse> {
  const adjustedParams: any = {};
const _params = { delete_frame_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.deleteNeynarFrame(adjustedParams);
  return response.data;
}

/**
 * Fetches the frame meta tags from the URL
 *
 * @summary Meta tags from URL
 *
 * @param {object} params
 * @param {string} params.url  - The frame URL to crawl
 *
 * @returns {Promise<FetchFrameMetaTagsFromUrl200Response>} A promise that resolves to a `FetchFrameMetaTagsFromUrl200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const url = 
 *
 * client.fetchFrameMetaTagsFromUrl({ url }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-frame-meta-tags-from-url)
 *
 */
public async fetchFrameMetaTagsFromUrl(params: { url: string }): Promise<FetchFrameMetaTagsFromUrl200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.fetchFrameMetaTagsFromUrl(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of frames made by the developer (identified by API key)
 *
 * @summary List of frames
 *
 *
 * @returns {Promise<Array<NeynarFrame>>} A promise that resolves to a `Array<NeynarFrame>` object.
 *
 * @example
 *
 * client.fetchNeynarFrames().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-neynar-frames)
 *
 */
public async fetchNeynarFrames(): Promise<Array<NeynarFrame>> {
  
  const response = await this.apis.frameApi.fetchNeynarFrames();
  return response.data;
}

/**
 * Fetch analytics for total-interactors, interactors, nteractions-per-cast and input-text.
 *
 * @summary Analytics for the frame
 *
 * @param {object} params
 * @param {string} params.frame_url 
 * @param {ValidateFrameAnalyticsType} params.analytics_type 
 * @param {string} params.start 
 * @param {string} params.stop 
 * @param {ValidateFrameAggregateWindow} params.aggregate_window [optional]  - Required for `analytics_type=interactions-per-cast`
 *
 * @returns {Promise<FrameValidateAnalyticsResponse>} A promise that resolves to a `FrameValidateAnalyticsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const frame_url = 
 * const analytics_type = 
 * const start = 
 * const stop = 
 * const aggregate_window = 
 *
 * client.fetchValidateFrameAnalytics({ frame_url, analytics_type, start, stop, aggregate_window }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-validate-frame-analytics)
 *
 */
public async fetchValidateFrameAnalytics(params: { frame_url: string, analytics_type: ValidateFrameAnalyticsType, start: string, stop: string, aggregate_window?: ValidateFrameAggregateWindow }): Promise<FrameValidateAnalyticsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.fetchValidateFrameAnalytics(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of all the frames validated by a user
 *
 * @summary All frames validated by user
 *
 *
 * @returns {Promise<FrameValidateListResponse>} A promise that resolves to a `FrameValidateListResponse` object.
 *
 * @example
 *
 * client.fetchValidateFrameList().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-validate-frame-list)
 *
 */
public async fetchValidateFrameList(): Promise<FrameValidateListResponse> {
  
  const response = await this.apis.frameApi.fetchValidateFrameList();
  return response.data;
}

/**
 * Fetch a frame either by UUID or Neynar URL
 *
 * @summary Frame by UUID or URL
 *
 * @param {object} params
 * @param {FrameType} params.type 
 * @param {string} params.uuid [optional]  - UUID of the frame to fetch
 * @param {string} params.url [optional]  - URL of the Neynar frame to fetch
 *
 * @returns {Promise<NeynarFrame>} A promise that resolves to a `NeynarFrame` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const type = 
 * const uuid = 
 * const url = 
 *
 * client.lookupNeynarFrame({ type, uuid, url }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-neynar-frame)
 *
 */
public async lookupNeynarFrame(params: { type: FrameType, uuid?: string, url?: string }): Promise<NeynarFrame> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.frameApi.lookupNeynarFrame(adjustedParams);
  return response.data;
}

/**
 * Post frame actions, cast actions or cast composer actions to the server  \\ (In order to post any of these actions, you need to have an approved `signer_uuid`)  The POST request to the post_url has a timeout of 5 seconds for frames.
 *
 * @summary Post a frame action, cast action or a cast composer action
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.cast_hash [optional]  - Cast Hash
 * @param {FrameAction} params.action 
 *
 * @returns {Promise<Frame>} A promise that resolves to a `Frame` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const cast_hash = 
 * const action = 
 *
 * client.postFrameAction({signer_uuid, cast_hash, action}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/post-frame-action)
 *
 */
public async postFrameAction(params: { signer_uuid: string, cast_hash?: string, action: FrameAction }): Promise<Frame> {
  const adjustedParams: any = {};
const _params = { frame_action_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.postFrameAction(adjustedParams);
  return response.data;
}

/**
 * Post a frame action that has been signed with a developer managed signer  The POST request to the post_url has a timeout of 5 seconds.
 *
 * @summary Signature packet
 *
 * @param {object} params
 * @param {string} params.cast_hash [optional]  - Cast Hash
 * @param {FrameAction} params.action 
 * @param {FrameSignaturePacket} params.signature_packet 
 *
 * @returns {Promise<Frame>} A promise that resolves to a `Frame` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const cast_hash = 
 * const action = 
 * const signature_packet = 
 *
 * client.postFrameActionDeveloperManaged({cast_hash, action, signature_packet}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/post-frame-action-developer-managed)
 *
 */
public async postFrameActionDeveloperManaged(params: { cast_hash?: string, action: FrameAction, signature_packet: FrameSignaturePacket }): Promise<Frame> {
  const adjustedParams: any = {};
const _params = { frame_developer_managed_action_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.postFrameActionDeveloperManaged(adjustedParams);
  return response.data;
}

/**
 * Create a new frame with a list of pages.
 *
 * @summary Create frame
 *
 * @param {object} params
 * @param {string} params.name  - The name of the frame.
 * @param {Array<NeynarFramePage>} params.pages 
 *
 * @returns {Promise<NeynarFrame>} A promise that resolves to a `NeynarFrame` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const name = 
 * const pages = 
 *
 * client.publishNeynarFrame({name, pages}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-neynar-frame)
 *
 */
public async publishNeynarFrame(params: { name: string, pages: Array<NeynarFramePage> }): Promise<NeynarFrame> {
  const adjustedParams: any = {};
const _params = { neynar_frame_creation_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.publishNeynarFrame(adjustedParams);
  return response.data;
}

/**
 * Update an existing frame with a list of pages, if it was made by the developer (identified by API key)
 *
 * @summary Update frame
 *
 * @param {object} params
 * @param {string} params.uuid  - The UUID of the frame to update.
 * @param {string} params.name [optional]  - The name of the frame.
 * @param {Array<NeynarFramePage>} params.pages 
 *
 * @returns {Promise<NeynarFrame>} A promise that resolves to a `NeynarFrame` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const uuid = 
 * const name = 
 * const pages = 
 *
 * client.updateNeynarFrame({uuid, name, pages}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-neynar-frame)
 *
 */
public async updateNeynarFrame(params: { uuid: string, name?: string, pages: Array<NeynarFramePage> }): Promise<NeynarFrame> {
  const adjustedParams: any = {};
const _params = { neynar_frame_update_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.updateNeynarFrame(adjustedParams);
  return response.data;
}

/**
 * Validates a frame against by an interacting user against a Farcaster Hub \\ (In order to validate a frame, message bytes from Frame Action must be provided in hex)
 *
 * @summary Validate frame action
 *
 * @param {object} params
 * @param {string} params.message_bytes_in_hex  - Hexadecimal string of message bytes.
 * @param {boolean} params.cast_reaction_context [optional]  - Adds viewer_context inside the cast object to indicate whether the interactor reacted to the cast housing the frame.
 * @param {boolean} params.follow_context [optional]  - Adds viewer_context inside the user (interactor) object to indicate whether the interactor follows or is followed by the cast author.
 * @param {boolean} params.signer_context [optional]  - Adds context about the app used by the user inside `frame.action`.
 * @param {boolean} params.channel_follow_context [optional]  - Adds context about the channel that the cast belongs to inside of the cast object.
 *
 * @returns {Promise<ValidateFrameActionResponse>} A promise that resolves to a `ValidateFrameActionResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const message_bytes_in_hex = 
 * const cast_reaction_context = 
 * const follow_context = 
 * const signer_context = 
 * const channel_follow_context = 
 *
 * client.validateFrameAction({message_bytes_in_hex, cast_reaction_context, follow_context, signer_context, channel_follow_context}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-frame-action)
 *
 */
public async validateFrameAction(params: { message_bytes_in_hex: string, cast_reaction_context?: boolean, follow_context?: boolean, signer_context?: boolean, channel_follow_context?: boolean }): Promise<ValidateFrameActionResponse> {
  const adjustedParams: any = {};
const _params = { validate_frame_action_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.frameApi.validateFrameAction(adjustedParams);
  return response.data;
}

/**
 * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
 *
 * @summary Unmute FID
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user (unsigned integer)
 * @param {number} params.muted_fid  - The unique identifier of a farcaster user (unsigned integer)
 *
 * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const muted_fid = 
 *
 * client.deleteMute({fid, muted_fid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
 *
 */
public async deleteMute(params: { fid: number, muted_fid: number }): Promise<MuteResponse> {
  const adjustedParams: any = {};
const _params = { mute_req_body: params };
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
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.muteApi.fetchMuteList(adjustedParams);
  return response.data;
}

/**
 * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
 *
 * @summary Mute FID
 *
 * @param {object} params
 * @param {number} params.fid  - The unique identifier of a farcaster user (unsigned integer)
 * @param {number} params.muted_fid  - The unique identifier of a farcaster user (unsigned integer)
 *
 * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const muted_fid = 
 *
 * client.publishMute({fid, muted_fid}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
 *
 */
public async publishMute(params: { fid: number, muted_fid: number }): Promise<MuteResponse> {
  const adjustedParams: any = {};
const _params = { mute_req_body: params };
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
 * @param {Array<NotificationType>} params.type [optional]  - Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies.
 * @param {boolean} params.priority_mode [optional]  - When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const type = 
 * const priority_mode = 
 *
 * client.fetchAllNotifications({ fid, type, priority_mode }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
 *
 */
public async fetchAllNotifications(params: { fid: number, type?: Array<NotificationType>, priority_mode?: boolean, cursor?: string }): Promise<NotificationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

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
 * @param {string[]} params.channel_ids  - Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
 * @param {boolean} params.priority_mode [optional]  - When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const channel_ids = 
 * const priority_mode = 
 *
 * client.fetchChannelNotificationsForUser({ fid, channel_ids, priority_mode }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
 *
 */
public async fetchChannelNotificationsForUser(params: { fid: number, channel_ids: string[], priority_mode?: boolean, cursor?: string }): Promise<NotificationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.channel_ids && Array.isArray(adjustedParams.channel_ids)) {
  adjustedParams.channel_ids = adjustedParams.channel_ids.join(",");
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
 * @param {string[]} params.parent_urls  - Comma separated parent_urls
 * @param {boolean} params.priority_mode [optional]  - When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const parent_urls = 
 * const priority_mode = 
 *
 * client.fetchNotificationsByParentUrlForUser({ fid, parent_urls, priority_mode }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
 *
 */
public async fetchNotificationsByParentUrlForUser(params: { fid: number, parent_urls: string[], priority_mode?: boolean, cursor?: string }): Promise<NotificationsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
if (adjustedParams.parent_urls && Array.isArray(adjustedParams.parent_urls)) {
  adjustedParams.parent_urls = adjustedParams.parent_urls.join(",");
}

  const response = await this.apis.notificationsApi.fetchNotificationsByParentUrlForUser(adjustedParams);
  return response.data;
}

/**
 * Mark notifications as seen
 *
 * @summary Mark as seen
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - The UUID of the signer. Signer should have atleast one write permission
 * @param {NotificationType} params.type [optional] 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const type = 
 *
 * client.markNotificationsAsSeen({signer_uuid, type}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
 *
 */
public async markNotificationsAsSeen(params: { signer_uuid: string, type?: NotificationType }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { mark_notifications_as_seen_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.notificationsApi.markNotificationsAsSeen(adjustedParams);
  return response.data;
}

/**
 * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved)
 *
 * @summary Delete reaction
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {ReactionType} params.reaction_type 
 * @param {string} params.target 
 * @param {number} params.target_author_fid [optional]  - The unique identifier of a farcaster user (unsigned integer)
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const reaction_type = 
 * const target = 
 * const target_author_fid = 
 * const idem = 
 *
 * client.deleteReaction({signer_uuid, reaction_type, target, target_author_fid, idem}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
 *
 */
public async deleteReaction(params: { signer_uuid: string, reaction_type: ReactionType, target: string, target_author_fid?: number, idem?: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { reaction_req_body: params };
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
 * @param {Array<ReactionsType>} params.types  - Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: 'likes' and 'recasts'. By default api returns both. To select multiple types, use a comma-separated list of these values.
 * @param {number} params.viewer_fid [optional]  - Providing this will return a list of reactions that respects this user's mutes and blocks and includes `viewer_context`.
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
 * const viewer_fid = 
 * const limit = 
 *
 * client.fetchCastReactions({ hash, types, viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
 *
 */
public async fetchCastReactions(params: { hash: string, types: Array<ReactionsType>, viewer_fid?: number, limit?: number, cursor?: string }): Promise<ReactionsCastResponse> {
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
 * @param {number} params.fid 
 * @param {ReactionsType} params.type  - Type of reaction to fetch (likes or recasts or all)
 * @param {number} params.viewer_fid [optional]  - Providing this will return a list of reactions that respects this user's mutes and blocks and includes `viewer_context`.
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
 * const viewer_fid = 
 * const limit = 
 *
 * client.fetchUserReactions({ fid, type, viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
 *
 */
public async fetchUserReactions(params: { fid: number, type: ReactionsType, viewer_fid?: number, limit?: number, cursor?: string }): Promise<ReactionsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionApi.fetchUserReactions(adjustedParams);
  return response.data;
}

/**
 * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved)
 *
 * @summary Post a reaction
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {ReactionType} params.reaction_type 
 * @param {string} params.target 
 * @param {number} params.target_author_fid [optional]  - The unique identifier of a farcaster user (unsigned integer)
 * @param {string} params.idem [optional]  - An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request.
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const reaction_type = 
 * const target = 
 * const target_author_fid = 
 * const idem = 
 *
 * client.publishReaction({signer_uuid, reaction_type, target, target_author_fid, idem}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
 *
 */
public async publishReaction(params: { signer_uuid: string, reaction_type: ReactionType, target: string, target_author_fid?: number, idem?: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { reaction_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.reactionApi.publishReaction(adjustedParams);
  return response.data;
}

/**
 * Creates a signer and returns the signer status. \\ **Note**: While tesing please reuse the signer, it costs money to approve a signer.
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
 * @param {string} params.client_id 
 * @param {AuthorizationUrlResponseType} params.response_type 
 *
 * @returns {Promise<AuthorizationUrlResponse>} A promise that resolves to a `AuthorizationUrlResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const client_id = 
 * const response_type = 
 *
 * client.fetchAuthorizationUrl({ client_id, response_type }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-authorization-url)
 *
 */
public async fetchAuthorizationUrl(params: { client_id: string, response_type: AuthorizationUrlResponseType }): Promise<AuthorizationUrlResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.signerApi.fetchAuthorizationUrl(adjustedParams);
  return response.data;
}

/**
 * Fetches the status of a developer managed signer by public key
 *
 * @summary Status by public key
 *
 * @param {object} params
 * @param {string} params.public_key 
 *
 * @returns {Promise<DeveloperManagedSigner>} A promise that resolves to a `DeveloperManagedSigner` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const public_key = 
 *
 * client.lookupDeveloperManagedSigner({ public_key }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-developer-managed-signer)
 *
 */
public async lookupDeveloperManagedSigner(params: { public_key: string }): Promise<DeveloperManagedSigner> {
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
 * @param {string} params.signer_uuid 
 *
 * @returns {Promise<Signer>} A promise that resolves to a `Signer` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 *
 * client.lookupSigner({ signer_uuid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-signer)
 *
 */
public async lookupSigner(params: { signer_uuid: string }): Promise<Signer> {
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
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.signature  - Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer’s public key
 * @param {number} params.app_fid  - The unique identifier of a farcaster user (unsigned integer)
 * @param {number} params.deadline  - unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
 * @param {string} params.redirect_url [optional]  - Url to redirect to after the signer is approved.  **Note** : This should only be used when requesting a signer from a native mobile application.
 * @param {SignedKeyRequestSponsor} params.sponsor [optional] 
 *
 * @returns {Promise<Signer>} A promise that resolves to a `Signer` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const signature = 
 * const app_fid = 
 * const deadline = 
 * const redirect_url = 
 * const sponsor = 
 *
 * client.registerSignedKey({signer_uuid, signature, app_fid, deadline, redirect_url, sponsor}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-signed-key)
 *
 */
public async registerSignedKey(params: { signer_uuid: string, signature: string, app_fid: number, deadline: number, redirect_url?: string, sponsor?: SignedKeyRequestSponsor }): Promise<Signer> {
  const adjustedParams: any = {};
const _params = { register_signer_key_req_body: params };
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
 * @param {string} params.public_key  - Ed25519 public key
 * @param {string} params.signature  - Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer’s public key
 * @param {number} params.app_fid  - The unique identifier of a farcaster user (unsigned integer)
 * @param {number} params.deadline  - unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended)
 * @param {string} params.redirect_url [optional]  - Url to redirect to after the signer is approved.  **Note** : This should only be used when requesting a signer from a native mobile application.
 * @param {SignedKeyRequestSponsor} params.sponsor [optional] 
 *
 * @returns {Promise<DeveloperManagedSigner>} A promise that resolves to a `DeveloperManagedSigner` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const public_key = 
 * const signature = 
 * const app_fid = 
 * const deadline = 
 * const redirect_url = 
 * const sponsor = 
 *
 * client.registerSignedKeyForDeveloperManagedSigner({public_key, signature, app_fid, deadline, redirect_url, sponsor}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-signed-key-for-developer-managed-signer)
 *
 */
public async registerSignedKeyForDeveloperManagedSigner(params: { public_key: string, signature: string, app_fid: number, deadline: number, redirect_url?: string, sponsor?: SignedKeyRequestSponsor }): Promise<DeveloperManagedSigner> {
  const adjustedParams: any = {};
const _params = { register_developer_managed_signed_key_req_body: params };
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
const _params = { buy_storage_req_body: params };
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
 * @param {number} params.fid 
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
 * @param {number} params.fid 
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
 * Check if a wallet address is subscribed to a given STP contract.
 *
 * @summary Subscription check by wallet address
 *
 * @param {object} params
 * @param {string} params.addresses  - Comma separated list of Ethereum addresses, up to 350 at a time
 * @param {string} params.contract_address  - Ethereum address of the STP contract
 * @param {string} params.chain_id  - Chain ID of the STP contract
 *
 * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const addresses = 
 * const contract_address = 
 * const chain_id = 
 *
 * client.fetchSubscriptionCheck({ addresses, contract_address, chain_id }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
 *
 */
public async fetchSubscriptionCheck(params: { addresses: string, contract_address: string, chain_id: string }): Promise<SubscriptionCheckResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.stpApi.fetchSubscriptionCheck(adjustedParams);
  return response.data;
}

/**
 * Fetch what FIDs and contracts a FID is subscribed to.
 *
 * @summary Subscribed to
 *
 * @param {object} params
 * @param {number} params.fid 
 * @param {SubscriptionProvider} params.subscription_provider 
 * @param {number} params.viewer_fid [optional] 
 *
 * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const subscription_provider = 
 * const viewer_fid = 
 *
 * client.fetchSubscribedToForFid({ fid, subscription_provider, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
 *
 */
public async fetchSubscribedToForFid(params: { fid: number, subscription_provider: SubscriptionProvider, viewer_fid?: number }): Promise<SubscribedToResponse> {
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
 * @param {number} params.fid 
 * @param {SubscriptionProviders} params.subscription_provider 
 * @param {number} params.viewer_fid [optional] 
 *
 * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const subscription_provider = 
 * const viewer_fid = 
 *
 * client.fetchSubscribersForFid({ fid, subscription_provider, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
 *
 */
public async fetchSubscribersForFid(params: { fid: number, subscription_provider: SubscriptionProviders, viewer_fid?: number }): Promise<SubscribersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.subscribersApi.fetchSubscribersForFid(adjustedParams);
  return response.data;
}

/**
 * Fetch created subscriptions for a given FID\'s.
 *
 * @summary Subscriptions created by FID
 *
 * @param {object} params
 * @param {number} params.fid 
 * @param {SubscriptionProvider} params.subscription_provider 
 *
 * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const subscription_provider = 
 *
 * client.fetchSubscriptionsForFid({ fid, subscription_provider }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
 *
 */
public async fetchSubscriptionsForFid(params: { fid: number, subscription_provider: SubscriptionProvider }): Promise<SubscriptionsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.subscribersApi.fetchSubscriptionsForFid(adjustedParams);
  return response.data;
}

/**
 * Removes verification for an eth address for the user \\ (In order to delete verification `signer_uuid` must be approved)
 *
 * @summary Delete verification
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.address  - Ethereum address
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const address = 
 *
 * client.deleteVerification({signer_uuid, address}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-verification)
 *
 */
public async deleteVerification(params: { signer_uuid: string, address: string }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { remove_verification_req_body: params };
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
 * @param {number} params.viewer_fid [optional] 
 *
 * @returns {Promise<BulkUsersResponse>} A promise that resolves to a `BulkUsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fids = 
 * const viewer_fid = 
 *
 * client.fetchBulkUsers({ fids, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-users)
 *
 */
public async fetchBulkUsers(params: { fids: number[], viewer_fid?: number }): Promise<BulkUsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
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
 * @param {Array<BulkUserAddressType>} params.address_types [optional]  - Customize which address types the request should search for. This is a comma-separated string that can include the following values: 'custody_address' and 'verified_address'. By default api returns both. To select multiple types, use a comma-separated list of these values.
 * @param {number} params.viewer_fid [optional] 
 *
 * @returns {Promise<BulkUsersByAddressResponse>} A promise that resolves to a `BulkUsersByAddressResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const addresses = 
 * const address_types = 
 * const viewer_fid = 
 *
 * client.fetchBulkUsersByEthereumAddress({ addresses, address_types, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-bulk-users-by-ethereum-address)
 *
 */
public async fetchBulkUsersByEthereumAddress(params: { addresses: string[], address_types?: Array<BulkUserAddressType>, viewer_fid?: number }): Promise<BulkUsersByAddressResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];
if (adjustedParams.addresses && Array.isArray(adjustedParams.addresses)) {
  adjustedParams.addresses = adjustedParams.addresses.join(",");
}

  const response = await this.apis.userApi.fetchBulkUsersByEthereumAddress(adjustedParams);
  return response.data;
}

/**
 * Fetches power users based on Warpcast power badges. Information is updated once a day.
 *
 * @summary Power users
 *
 * @param {object} params
 * @param {number} params.viewer_fid [optional] 
 * @param {number} params.limit [optional]  - Number of power users to fetch (Default: 25, Maximum: 100)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const viewer_fid = 
 * const limit = 
 *
 * client.fetchPowerUsers({ viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-power-users)
 *
 */
public async fetchPowerUsers(params: { viewer_fid?: number, limit?: number, cursor?: string }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.fetchPowerUsers(adjustedParams);
  return response.data;
}

/**
 * Fetches power users and respond in a backwards compatible format to Warpcast\'s deprecated power badge endpoint.
 *
 * @summary Power user FIDs
 *
 * @param {object} params
 *
 * @returns {Promise<UserPowerLiteResponse>} A promise that resolves to a `UserPowerLiteResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 *
 * client.fetchPowerUsersLite().then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-power-users-lite)
 *
 */
public async fetchPowerUsersLite(): Promise<UserPowerLiteResponse> {
  const adjustedParams: any = {};
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.fetchPowerUsersLite(adjustedParams);
  return response.data;
}

/**
 * Fetches a list of users given a location
 *
 * @summary By location
 *
 * @param {object} params
 * @param {number} params.latitude  - Latitude of the location
 * @param {number} params.longitude  - Longitude of the location
 * @param {number} params.viewer_fid [optional]  - FID of the user viewing the feed. Providing this will return a list of users that respects this user's mutes and blocks and includes `viewer_context`.
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
 * const viewer_fid = 
 * const limit = 
 *
 * client.fetchUsersByLocation({ latitude, longitude, viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-users-by-location)
 *
 */
public async fetchUsersByLocation(params: { latitude: number, longitude: number, viewer_fid?: number, limit?: number, cursor?: string }): Promise<UsersResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.fetchUsersByLocation(adjustedParams);
  return response.data;
}

/**
 * Follow a user \\ (In order to follow a user `signer_uuid` must be approved)
 *
 * @summary Follow user
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {Array<number>} params.target_fids 
 *
 * @returns {Promise<BulkFollowResponse>} A promise that resolves to a `BulkFollowResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const target_fids = 
 *
 * client.followUser({signer_uuid, target_fids}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/follow-user)
 *
 */
public async followUser(params: { signer_uuid: string, target_fids: Array<number> }): Promise<BulkFollowResponse> {
  const adjustedParams: any = {};
const _params = { follow_req_body: params };
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
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.getFreshAccountFID(adjustedParams);
  return response.data;
}

/**
 * Lookup a user by custody-address
 *
 * @summary By custody-address
 *
 * @param {object} params
 * @param {string} params.custody_address  - Custody Address associated with mnemonic
 *
 * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const custody_address = 
 *
 * client.lookupUserByCustodyAddress({ custody_address }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-by-custody-address)
 *
 */
public async lookupUserByCustodyAddress(params: { custody_address: string }): Promise<UserResponse> {
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
 * @param {number} params.viewer_fid [optional] 
 *
 * @returns {Promise<UserResponse>} A promise that resolves to a `UserResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const username = 
 * const viewer_fid = 
 *
 * client.lookupUserByUsername({ username, viewer_fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-by-username)
 *
 */
public async lookupUserByUsername(params: { username: string, viewer_fid?: number }): Promise<UserResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.lookupUserByUsername(adjustedParams);
  return response.data;
}

/**
 * Adds verification for an eth address or contract for the user \\ (In order to add verification `signer_uuid` must be approved)
 *
 * @summary Add verification
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.address  - Ethereum address
 * @param {string} params.block_hash 
 * @param {string} params.eth_signature 
 * @param {VerificationType} params.verification_type [optional] 
 * @param {VerificationChainId} params.chain_id [optional] 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const address = 
 * const block_hash = 
 * const eth_signature = 
 * const verification_type = 
 * const chain_id = 
 *
 * client.publishVerification({signer_uuid, address, block_hash, eth_signature, verification_type, chain_id}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-verification)
 *
 */
public async publishVerification(params: { signer_uuid: string, address: string, block_hash: string, eth_signature: string, verification_type?: VerificationType, chain_id?: VerificationChainId }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { add_verification_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.publishVerification(adjustedParams);
  return response.data;
}

/**
 * Register account on farcaster.  **Note:** This API must be called within 10 minutes of the fetch FID API call (i.e., /v2/farcaster/user/fid). Otherwise, Neynar will assign this FID to another available user.
 *
 * @summary Register new account
 *
 * @param {object} params
 * @param {string} params.signature 
 * @param {number} params.fid 
 * @param {string} params.requested_user_custody_address 
 * @param {number} params.deadline 
 * @param {string} params.fname [optional] 
 *
 * @returns {Promise<RegisterUserResponse>} A promise that resolves to a `RegisterUserResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signature = 
 * const fid = 
 * const requested_user_custody_address = 
 * const deadline = 
 * const fname = 
 *
 * client.registerAccount({signature, fid, requested_user_custody_address, deadline, fname}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/register-account)
 *
 */
public async registerAccount(params: { signature: string, fid: number, requested_user_custody_address: string, deadline: number, fname?: string }): Promise<RegisterUserResponse> {
  const adjustedParams: any = {};
const _params = { register_user_req_body: params };
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
 * @param {number} params.viewer_fid [optional]  - Providing this will return search results that respects this user's mutes and blocks and includes `viewer_context`.
 * @param {number} params.limit [optional]  - Number of users to fetch (Default: 5, Maximum: 10)
 * @param {string} params.cursor [optional]  - Pagination cursor.
 *
 * @returns {Promise<UserSearchResponse>} A promise that resolves to a `UserSearchResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const q = 
 * const viewer_fid = 
 * const limit = 
 *
 * client.searchUser({ q, viewer_fid, limit }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/search-user)
 *
 */
public async searchUser(params: { q: string, viewer_fid?: number, limit?: number, cursor?: string }): Promise<UserSearchResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);
adjustedParams['x_neynar_experimental'] = this.config.baseOptions?.headers?.['x-neynar-experimental'];

  const response = await this.apis.userApi.searchUser(adjustedParams);
  return response.data;
}

/**
 * Unfollow a user \\ (In order to unfollow a user `signer_uuid` must be approved)
 *
 * @summary Unfollow user
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {Array<number>} params.target_fids 
 *
 * @returns {Promise<BulkFollowResponse>} A promise that resolves to a `BulkFollowResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const target_fids = 
 *
 * client.unfollowUser({signer_uuid, target_fids}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/unfollow-user)
 *
 */
public async unfollowUser(params: { signer_uuid: string, target_fids: Array<number> }): Promise<BulkFollowResponse> {
  const adjustedParams: any = {};
const _params = { follow_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.userApi.unfollowUser(adjustedParams);
  return response.data;
}

/**
 * Update user profile \\ (In order to update user\'s profile `signer_uuid` must be approved)
 *
 * @summary Update user profile
 *
 * @param {object} params
 * @param {string} params.signer_uuid  - UUID of the signer
 * @param {string} params.bio [optional] 
 * @param {string} params.pfp_url [optional] 
 * @param {string} params.url [optional] 
 * @param {string} params.username [optional] 
 * @param {string} params.display_name [optional] 
 * @param {UpdateUserReqBodyLocation} params.location [optional] 
 *
 * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const signer_uuid = 
 * const bio = 
 * const pfp_url = 
 * const url = 
 * const username = 
 * const display_name = 
 * const location = 
 *
 * client.updateUser({signer_uuid, bio, pfp_url, url, username, display_name, location}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-user)
 *
 */
public async updateUser(params: { signer_uuid: string, bio?: string, pfp_url?: string, url?: string, username?: string, display_name?: string, location?: UpdateUserReqBodyLocation }): Promise<OperationResponse> {
  const adjustedParams: any = {};
const _params = { update_user_req_body: params };
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
 * @param {string} params.webhook_id 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const webhook_id = 
 *
 * client.deleteWebhook({webhook_id}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
 *
 */
public async deleteWebhook(params: { webhook_id: string }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhook_delete_req_body: params };
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
 * @param {string} params.webhook_id 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const webhook_id = 
 *
 * client.lookupWebhook({ webhook_id }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
 *
 */
public async lookupWebhook(params: { webhook_id: string }): Promise<WebhookResponse> {
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
const _params = { webhook_post_req_body: params };
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
 * @param {string} params.webhook_id 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const name = 
 * const url = 
 * const subscription = 
 * const webhook_id = 
 *
 * client.updateWebhook({name, url, subscription, webhook_id}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
 *
 */
public async updateWebhook(params: { name: string, url: string, subscription?: WebhookSubscriptionFilters, webhook_id: string }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhook_put_req_body: params };
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
 * @param {string} params.webhook_id 
 * @param {WebhookPatchReqBodyActiveEnum} params.active 
 *
 * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const webhook_id = 
 * const active = 
 *
 * client.updateWebhookActiveStatus({webhook_id, active}).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
 *
 */
public async updateWebhookActiveStatus(params: { webhook_id: string, active: WebhookPatchReqBodyActiveEnum }): Promise<WebhookResponse> {
  const adjustedParams: any = {};
const _params = { webhook_patch_req_body: params };
Object.assign(adjustedParams, _params);

  const response = await this.apis.webhookApi.updateWebhookActiveStatus(adjustedParams);
  return response.data;
}

  
  /**
     * Creates a signer and registers a signed key for the signer.
     * It returns a Signer which includes `signer_approval_url` that can be used to create a QR Code for the user to scan and approve the signer.
     *
     * @param {Object} [options] - Optional parameters for the request.
     * @param {string} [options.farcaster_developer_mnemonic] - mnemonic of the farcaster developer account
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
     * const farcaster_developer_mnemonic = 
     * const deadline = 
     * 
     * client.createSignerAndRegisterSignedKey({ farcaster_developer_mnemonic, deadline: 1693927665 }).then(response => {
     *   console.log('Signer', response);
     * });
     */
    public async createSignerAndRegisterSignedKey(
      params: {
        farcaster_developer_mnemonic: string;
        deadline?: number;
      }
    ) {
      const { farcaster_developer_mnemonic, deadline } = params;
      try {
        const { public_key: signerPublicKey, signer_uuid } =
          await this.createSigner();
  
        const account = mnemonicToAccount(farcaster_developer_mnemonic);
        const { user: farcasterDeveloper } =
          await this.lookupUserByCustodyAddress({
            custody_address: account.address,
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
          signer_uuid,
          app_fid: farcasterDeveloper.fid,
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
