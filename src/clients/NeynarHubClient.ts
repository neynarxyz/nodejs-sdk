
import { mnemonicToAccount } from "viem/accounts";
import { Logger, silentLogger } from "../common/logger";
import axios, { AxiosError, AxiosInstance, RawAxiosRequestConfig } from "axios";
import type { SetRequired } from "type-fest";
import { Configuration as OpenAPIGeneratedConfiguration } from '../hub-api/configuration';
import { Configuration } from './configuration';

import {SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN, SIGNED_KEY_REQUEST_TYPE} from '../common/constants';
import {isApiErrorResponse} from '../utils';

import { CastsApi } from '../hub-api/apis/casts-api';
import { FidsApi } from '../hub-api/apis/fids-api';
import { HubEventsApi } from '../hub-api/apis/hub-events-api';
import { InfoApi } from '../hub-api/apis/info-api';
import { LinksApi } from '../hub-api/apis/links-api';
import { MessageApi } from '../hub-api/apis/message-api';
import { OnChainEventsApi } from '../hub-api/apis/on-chain-events-api';
import { ReactionsApi } from '../hub-api/apis/reactions-api';
import { StorageApi } from '../hub-api/apis/storage-api';
import { UserDataApi } from '../hub-api/apis/user-data-api';
import { UsernamesApi } from '../hub-api/apis/usernames-api';
import { VerificationsApi } from '../hub-api/apis/verifications-api';
import type { CastAdd, FetchCastReactions200Response, FetchEvents200Response, FetchUserData200Response, FetchUserFollowing200Response, FetchUserOnChainEvents200Response, FetchUserOnChainSignersEvents200Response, FetchUsersCasts200Response, FetchVerificationsByFid200Response, FidsResponse, HubEvent, HubInfoResponse, LinkAdd, LinkType, Message, OnChainEventIdRegister, OnChainEventType, Reaction, ReactionType, StorageLimitsResponse, UserDataType, UserNameProof, UsernameProofsResponse, ValidateMessageResponse } from '../hub-api';


export interface NeynarHubClientOptions {
  logger?: Logger;
  axiosInstance?: AxiosInstance;
}

export class NeynarHubClient {
  private readonly logger: Logger;
  private config: OpenAPIGeneratedConfiguration;

  public readonly apis: {
    castsApi: CastsApi;
    fidsApi: FidsApi;
    hubEventsApi: HubEventsApi;
    infoApi: InfoApi;
    linksApi: LinksApi;
    messageApi: MessageApi;
    onChainEventsApi: OnChainEventsApi;
    reactionsApi: ReactionsApi;
    storageApi: StorageApi;
    userDataApi: UserDataApi;
    usernamesApi: UsernamesApi;
    verificationsApi: VerificationsApi;
  };

  constructor(
    config: Configuration,
    options: NeynarHubClientOptions = {}
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
        if (NeynarHubClient.isApiErrorResponse(error)) {
          const apiErrors = error.response.data;
          this.logger.warn(`API errors: ${JSON.stringify(apiErrors)}`);
        }
        throw error;
      }
    );

    this.apis = {
      castsApi: new CastsApi(this.config, undefined, axiosInstance),
      fidsApi: new FidsApi(this.config, undefined, axiosInstance),
      hubEventsApi: new HubEventsApi(this.config, undefined, axiosInstance),
      infoApi: new InfoApi(this.config, undefined, axiosInstance),
      linksApi: new LinksApi(this.config, undefined, axiosInstance),
      messageApi: new MessageApi(this.config, undefined, axiosInstance),
      onChainEventsApi: new OnChainEventsApi(this.config, undefined, axiosInstance),
      reactionsApi: new ReactionsApi(this.config, undefined, axiosInstance),
      storageApi: new StorageApi(this.config, undefined, axiosInstance),
      userDataApi: new UserDataApi(this.config, undefined, axiosInstance),
      usernamesApi: new UsernamesApi(this.config, undefined, axiosInstance),
      verificationsApi: new VerificationsApi(this.config, undefined, axiosInstance),
    };
  }

  public static isApiErrorResponse(
    error: any
  ) {
    if (!(error instanceof AxiosError)) return false;
    return (
      error.response?.data !== undefined && "message" in error.response.data
    );
  }

  
/**
 * @summary By parent cast
 *
 * @param {object} params
 * @param {number} params.fid [optional]  - The FID of the parent cast
 * @param {string} params.hash [optional]  - The parent cast's hash
 * @param {string} params.url [optional] 
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUsersCasts200Response>} A promise that resolves to a `FetchUsersCasts200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const hash = 
 * const url = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchCastsByParent({ fid, hash, url, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-casts-by-parent)
 *
 */
public async fetchCastsByParent(params: { fid?: number, hash?: string, url?: string, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchUsersCasts200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.fetchCastsByParent(adjustedParams);
  return response.data;
}

/**
 * @summary Mentioning an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID that is mentioned in a cast
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUsersCasts200Response>} A promise that resolves to a `FetchUsersCasts200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchCastsMentioningUser({ fid, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-casts-mentioning-user)
 *
 */
public async fetchCastsMentioningUser(params: { fid: number, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchUsersCasts200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.fetchCastsMentioningUser(adjustedParams);
  return response.data;
}

/**
 * @summary By FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the casts' creator
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUsersCasts200Response>} A promise that resolves to a `FetchUsersCasts200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchUsersCasts({ fid, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-users-casts)
 *
 */
public async fetchUsersCasts(params: { fid: number, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchUsersCasts200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.fetchUsersCasts(adjustedParams);
  return response.data;
}

/**
 * @summary By FID and Hash
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the cast's creator
 * @param {string} params.hash  - The cast's hash
 *
 * @returns {Promise<CastAdd>} A promise that resolves to a `CastAdd` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const hash = 
 *
 * client.lookupCastByHashAndFid({ fid, hash }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-by-hash-and-fid)
 *
 */
public async lookupCastByHashAndFid(params: { fid: number, hash: string }): Promise<CastAdd> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.lookupCastByHashAndFid(adjustedParams);
  return response.data;
}

/**
 * @summary Fetch a list of all the FIDs
 *
 * @param {object} params
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchFids({ page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
 *
 */
public async fetchFids(params: { page_size?: number, reverse?: boolean, page_token?: string }): Promise<FidsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.fidsApi.fetchFids(adjustedParams);
  return response.data;
}

/**
 * @summary Page of events
 *
 * @param {object} params
 * @param {number} params.from_event_id [optional]  - An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event
 *
 * @returns {Promise<FetchEvents200Response>} A promise that resolves to a `FetchEvents200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const from_event_id = 
 *
 * client.fetchEvents({ from_event_id }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-events)
 *
 */
public async fetchEvents(params: { from_event_id?: number }): Promise<FetchEvents200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.hubEventsApi.fetchEvents(adjustedParams);
  return response.data;
}

/**
 * @summary Event by ID
 *
 * @param {object} params
 * @param {number} params.event_id  - The Hub Id of the event
 *
 * @returns {Promise<HubEvent>} A promise that resolves to a `HubEvent` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const event_id = 
 *
 * client.lookupEvent({ event_id }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-event)
 *
 */
public async lookupEvent(params: { event_id: number }): Promise<HubEvent> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.hubEventsApi.lookupEvent(adjustedParams);
  return response.data;
}

/**
 * @summary Sync Methods
 *
 * @param {object} params
 * @param {boolean} params.dbstats  - Whether to return DB stats
 *
 * @returns {Promise<HubInfoResponse>} A promise that resolves to a `HubInfoResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const dbstats = 
 *
 * client.lookupHubInfo({ dbstats }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-hub-info)
 *
 */
public async lookupHubInfo(params: { dbstats: boolean }): Promise<HubInfoResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.infoApi.lookupHubInfo(adjustedParams);
  return response.data;
}

/**
 * @summary To target FID
 *
 * @param {object} params
 * @param {number} params.target_fid  - The FID of the target of the link
 * @param {LinkType} params.link_type [optional]  - The type of link, as a string value
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const target_fid = 
 * const link_type = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchUserFollowers({ target_fid, link_type, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
 *
 */
public async fetchUserFollowers(params: { target_fid: number, link_type?: LinkType, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchUserFollowing200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.linksApi.fetchUserFollowers(adjustedParams);
  return response.data;
}

/**
 * @summary From source FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the link's originator
 * @param {LinkType} params.link_type [optional]  - The type of link, as a string value
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const link_type = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchUserFollowing({ fid, link_type, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
 *
 */
public async fetchUserFollowing(params: { fid: number, link_type?: LinkType, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchUserFollowing200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.linksApi.fetchUserFollowing(adjustedParams);
  return response.data;
}

/**
 * @summary By its FID and target FID.
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the link's originator
 * @param {number} params.target_fid  - The FID of the target of the link
 * @param {LinkType} params.link_type  - The type of link, as a string value
 *
 * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const target_fid = 
 * const link_type = 
 *
 * client.lookupUserRelation({ fid, target_fid, link_type }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
 *
 */
public async lookupUserRelation(params: { fid: number, target_fid: number, link_type: LinkType }): Promise<LinkAdd> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.linksApi.lookupUserRelation(adjustedParams);
  return response.data;
}

/**
 * @summary Submit signed message
 *
 * @param {object} params
 * @param {File} params.body  - *  A Message is a delta operation on the Farcaster network. The message protobuf is an envelope  that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
 *
 * @returns {Promise<Message>} A promise that resolves to a `Message` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const body = 
 *
 * client.publishMessage({ body }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/submit-signed-message)
 *
 */
public async publishMessage(params: { body: File }): Promise<Message> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.messageApi.publishMessage(adjustedParams);
  return response.data;
}

/**
 * @summary Validate signed message
 *
 * @param {object} params
 * @param {File} params.body  - *  A Message is a delta operation on the Farcaster network. The message protobuf is an envelope  that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
 *
 * @returns {Promise<ValidateMessageResponse>} A promise that resolves to a `ValidateMessageResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const body = 
 *
 * client.validateMessage({ body }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-message)
 *
 */
public async validateMessage(params: { body: File }): Promise<ValidateMessageResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.messageApi.validateMessage(adjustedParams);
  return response.data;
}

/**
 * @summary Fetch a list of on-chain events provided by an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID being requested
 * @param {OnChainEventType} params.event_type  - The numeric of string value of the event type being requested.
 *
 * @returns {Promise<FetchUserOnChainEvents200Response>} A promise that resolves to a `FetchUserOnChainEvents200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const event_type = 
 *
 * client.fetchUserOnChainEvents({ fid, event_type }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-on-chain-events)
 *
 */
public async fetchUserOnChainEvents(params: { fid: number, event_type: OnChainEventType }): Promise<FetchUserOnChainEvents200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onChainEventsApi.fetchUserOnChainEvents(adjustedParams);
  return response.data;
}

/**
 * **Note:** one of two different response schemas is returned based on whether the caller provides the `signer` parameter. If included, a single `OnChainEventSigner` message is returned (or a `not_found` error). If omitted, a non-paginated list of `OnChainEventSigner` messages is returned instead
 *
 * @summary Fetch a list of signers provided by an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID being requested
 * @param {string} params.signer [optional]  - The optional key of signer
 *
 * @returns {Promise<FetchUserOnChainSignersEvents200Response>} A promise that resolves to a `FetchUserOnChainSignersEvents200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const signer = 
 *
 * client.fetchUserOnChainSignersEvents({ fid, signer }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-on-chain-signers)
 *
 */
public async fetchUserOnChainSignersEvents(params: { fid: number, signer?: string }): Promise<FetchUserOnChainSignersEvents200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onChainEventsApi.fetchUserOnChainSignersEvents(adjustedParams);
  return response.data;
}

/**
 * @summary Fetch an on chain ID Registry Event for a given Address
 *
 * @param {object} params
 * @param {string} params.address  - The ETH address being requested
 *
 * @returns {Promise<OnChainEventIdRegister>} A promise that resolves to a `OnChainEventIdRegister` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const address = 
 *
 * client.lookupOnChainIdRegistryEventByAddress({ address }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-on-chain-id-registry-event-by-address)
 *
 */
public async lookupOnChainIdRegistryEventByAddress(params: { address: string }): Promise<OnChainEventIdRegister> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onChainEventsApi.lookupOnChainIdRegistryEventByAddress(adjustedParams);
  return response.data;
}

/**
 * @summary On cast
 *
 * @param {object} params
 * @param {number} params.target_fid  - The FID of the cast's creator
 * @param {string} params.target_hash  - The hash of the cast
 * @param {ReactionType} params.reaction_type  - The type of reaction, either as a numerical enum value or string representation
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchCastReactions200Response>} A promise that resolves to a `FetchCastReactions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const target_fid = 
 * const target_hash = 
 * const reaction_type = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchCastReactions({ target_fid, target_hash, reaction_type, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
 *
 */
public async fetchCastReactions(params: { target_fid: number, target_hash: string, reaction_type: ReactionType, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchCastReactions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.fetchCastReactions(adjustedParams);
  return response.data;
}

/**
 * @summary To a target URL
 *
 * @param {object} params
 * @param {string} params.url  - The URL of the parent cast
 * @param {ReactionType} params.reaction_type  - The type of reaction, either as a numerical enum value or string representation
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchCastReactions200Response>} A promise that resolves to a `FetchCastReactions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const url = 
 * const reaction_type = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchReactionsByTarget({ url, reaction_type, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-reactions-by-target)
 *
 */
public async fetchReactionsByTarget(params: { url: string, reaction_type: ReactionType, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchCastReactions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.fetchReactionsByTarget(adjustedParams);
  return response.data;
}

/**
 * @summary By FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the reaction's creator
 * @param {ReactionType} params.reaction_type  - The type of reaction, either as a numerical enum value or string representation
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchCastReactions200Response>} A promise that resolves to a `FetchCastReactions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const reaction_type = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchUserReactions({ fid, reaction_type, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
 *
 */
public async fetchUserReactions(params: { fid: number, reaction_type: ReactionType, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchCastReactions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.fetchUserReactions(adjustedParams);
  return response.data;
}

/**
 * @summary By FID or cast
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the reaction's creator
 * @param {number} params.target_fid  - The FID of the cast's creator
 * @param {string} params.target_hash  - The cast's hash
 * @param {ReactionType} params.reaction_type  - The type of reaction, either as a numerical enum value or string representation
 *
 * @returns {Promise<Reaction>} A promise that resolves to a `Reaction` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const target_fid = 
 * const target_hash = 
 * const reaction_type = 
 *
 * client.lookupReactionById({ fid, target_fid, target_hash, reaction_type }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-reaction-by-id)
 *
 */
public async lookupReactionById(params: { fid: number, target_fid: number, target_hash: string, reaction_type: ReactionType }): Promise<Reaction> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.lookupReactionById(adjustedParams);
  return response.data;
}

/**
 * @summary FID\'s limits
 *
 * @param {object} params
 * @param {number} params.fid 
 *
 * @returns {Promise<StorageLimitsResponse>} A promise that resolves to a `StorageLimitsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 *
 * client.lookupUserStorageLimit({ fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-limit)
 *
 */
public async lookupUserStorageLimit(params: { fid: number }): Promise<StorageLimitsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.storageApi.lookupUserStorageLimit(adjustedParams);
  return response.data;
}

/**
 * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
 *
 * @summary Fetch UserData for a FID.
 *
 * @param {object} params
 * @param {number} params.fid  - The FID that's being requested
 * @param {UserDataType} params.user_data_type [optional]  - The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const user_data_type = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchUserData({ fid, user_data_type, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
 *
 */
public async fetchUserData(params: { fid: number, user_data_type?: UserDataType, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchUserData200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.userDataApi.fetchUserData(adjustedParams);
  return response.data;
}

/**
 * @summary Proof for a username
 *
 * @param {object} params
 * @param {string} params.name  - The Farcaster username or ENS address
 *
 * @returns {Promise<UserNameProof>} A promise that resolves to a `UserNameProof` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const name = 
 *
 * client.fetchUsernameProofByName({ name }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-username-proof-by-name)
 *
 */
public async fetchUsernameProofByName(params: { name: string }): Promise<UserNameProof> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.usernamesApi.fetchUsernameProofByName(adjustedParams);
  return response.data;
}

/**
 * @summary Proofs provided by an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID being requested
 *
 * @returns {Promise<UsernameProofsResponse>} A promise that resolves to a `UsernameProofsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 *
 * client.fetchUsernameProofsByFid({ fid }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-username-proofs-by-fid)
 *
 */
public async fetchUsernameProofsByFid(params: { fid: number }): Promise<UsernameProofsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.usernamesApi.fetchUsernameProofsByFid(adjustedParams);
  return response.data;
}

/**
 * @summary Provided by an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID being requested
 * @param {string} params.address [optional]  - The optional ETH address to filter by
 * @param {number} params.page_size [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.page_token [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchVerificationsByFid200Response>} A promise that resolves to a `FetchVerificationsByFid200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const address = 
 * const page_size = 
 * const reverse = 
 * const page_token = 
 *
 * client.fetchVerificationsByFid({ fid, address, page_size, reverse, page_token }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-verifications-by-fid)
 *
 */
public async fetchVerificationsByFid(params: { fid: number, address?: string, page_size?: number, reverse?: boolean, page_token?: string }): Promise<FetchVerificationsByFid200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.verificationsApi.fetchVerificationsByFid(adjustedParams);
  return response.data;
}

  
}