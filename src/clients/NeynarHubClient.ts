
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



export interface NeynarHubClientOptions {
  logger?: Logger;
  axiosInstance?: AxiosInstance;
}

export class NeynarHubClient {
  private readonly logger: Logger;
  private config: OpenAPIGeneratedConfiguration;

  private readonly apis: {
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

    if (typeof config === 'string') {
      console.error('Error: config must be of type Configuration');
      console.log(`
Seems, like you are using sdk v2 but the syntax on client instantiation is for sdk v1.
SDK v1 -> v2 migration guide: https://docs.neynar.com/reference/neynar-nodejs-sdk-v1-to-v2-migration-guide

Correct usage way to instantiate the client:

import { NeynarHubClient, Configuration } from "@neynar/nodejs-sdk";

const config = new Configuration({
  apiKey: "API_KEY",
  baseOptions: {
    headers: {
      "x-neynar-experimental": true,
    },
  },
});

const client = new NeynarHubClient(config);\n`);
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
 * Fetch casts by parent.
 *
 * @summary By parent cast
 *
 * @param {object} params
 * @param {number} params.fid [optional]  - The FID of the parent cast
 * @param {string} params.hash [optional]  - The parent cast's hash
 * @param {string} params.url [optional] 
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUsersCasts200Response>} A promise that resolves to a `FetchUsersCasts200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const hash = 
 * const url = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchCastsByParent({ fid, hash, url, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-casts-by-parent)
 *
 */
public async fetchCastsByParent(params: { fid?: number, hash?: string, url?: string, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchUsersCasts200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.fetchCastsByParent(adjustedParams);
  return response.data;
}

/**
 * Fetch casts mentioning a user.
 *
 * @summary Mentioning an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID that is mentioned in a cast
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUsersCasts200Response>} A promise that resolves to a `FetchUsersCasts200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchCastsMentioningUser({ fid, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-casts-mentioning-user)
 *
 */
public async fetchCastsMentioningUser(params: { fid: number, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchUsersCasts200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.fetchCastsMentioningUser(adjustedParams);
  return response.data;
}

/**
 * Fetch user\'s casts.
 *
 * @summary By FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the casts' creator
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUsersCasts200Response>} A promise that resolves to a `FetchUsersCasts200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchUsersCasts({ fid, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-users-casts)
 *
 */
public async fetchUsersCasts(params: { fid: number, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchUsersCasts200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.castsApi.fetchUsersCasts(adjustedParams);
  return response.data;
}

/**
 * Lookup a cast by its FID and hash.
 *
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
 * Fetch a list of all the FIDs.
 *
 * @summary Fetch a list of all the FIDs
 *
 * @param {object} params
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchFids({ pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
 *
 */
public async fetchFids(params: { pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FidsResponse> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.fidsApi.fetchFids(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of events.
 *
 * @summary Page of events
 *
 * @param {object} params
 * @param {number} params.fromEventId [optional]  - An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event.
 *
 * @returns {Promise<FetchEvents200Response>} A promise that resolves to a `FetchEvents200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fromEventId = 
 *
 * client.fetchEvents({ fromEventId }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-events)
 *
 */
public async fetchEvents(params: { fromEventId?: number }): Promise<FetchEvents200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.hubEventsApi.fetchEvents(adjustedParams);
  return response.data;
}

/**
 * Lookup an event by its ID.
 *
 * @summary Event by ID
 *
 * @param {object} params
 * @param {number} params.eventId  - The Hub Id of the event
 *
 * @returns {Promise<HubEvent>} A promise that resolves to a `HubEvent` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const eventId = 
 *
 * client.lookupEvent({ eventId }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-event)
 *
 */
public async lookupEvent(params: { eventId: number }): Promise<HubEvent> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.hubEventsApi.lookupEvent(adjustedParams);
  return response.data;
}

/**
 * Retrieve hub information.
 *
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
 * Fetch a list of users that are following a user.
 *
 * @summary To target FID
 *
 * @param {object} params
 * @param {number} params.targetFid  - The FID of the target of the link
 * @param {LinkType} params.linkType [optional]  - The type of link, as a string value
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const targetFid = 
 * const linkType = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchUserFollowers({ targetFid, linkType, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
 *
 */
public async fetchUserFollowers(params: { targetFid: number, linkType?: LinkType, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchUserFollowing200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.linksApi.fetchUserFollowers(adjustedParams);
  return response.data;
}

/**
 * Fetch a list of users that a user is following.
 *
 * @summary From source FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the link's originator
 * @param {LinkType} params.linkType [optional]  - The type of link, as a string value
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const linkType = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchUserFollowing({ fid, linkType, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
 *
 */
public async fetchUserFollowing(params: { fid: number, linkType?: LinkType, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchUserFollowing200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.linksApi.fetchUserFollowing(adjustedParams);
  return response.data;
}

/**
 * Lookup a link by its FID and target FID.
 *
 * @summary By its FID and target FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the link's originator
 * @param {number} params.targetFid  - The FID of the target of the link
 * @param {LinkType} params.linkType  - The type of link, as a string value
 *
 * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const targetFid = 
 * const linkType = 
 *
 * client.lookupUserRelation({ fid, targetFid, linkType }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
 *
 */
public async lookupUserRelation(params: { fid: number, targetFid: number, linkType: LinkType }): Promise<LinkAdd> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.linksApi.lookupUserRelation(adjustedParams);
  return response.data;
}

/**
 * Submit a message to the Farcaster network.
 *
 * @summary Submit signed message
 *
 * @param {object} params
 * @param {File} params.body  - A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
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
 * Validate a message on the Farcaster network.
 *
 * @summary Validate signed message
 *
 * @param {object} params
 * @param {File} params.body  - A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
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
 * Fetch on-chain events provided by a user.
 *
 * @summary Fetch a list of on-chain events provided by an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID being requested
 * @param {OnChainEventType} params.eventType  - The numeric or string value of the event type being requested
 *
 * @returns {Promise<FetchUserOnChainEvents200Response>} A promise that resolves to a `FetchUserOnChainEvents200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const eventType = 
 *
 * client.fetchUserOnChainEvents({ fid, eventType }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-on-chain-events)
 *
 */
public async fetchUserOnChainEvents(params: { fid: number, eventType: OnChainEventType }): Promise<FetchUserOnChainEvents200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.onChainEventsApi.fetchUserOnChainEvents(adjustedParams);
  return response.data;
}

/**
 * **Note:** one of two different response schemas is returned based on whether the caller provides the `signer` parameter. If included, a single `OnChainEventSigner` message is returned (or a `not_found` error). If omitted, a non-paginated list of `OnChainEventSigner` messages is returned instead.
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
 * Fetch an on-chain ID Registry Event for a given Address.
 *
 * @summary Fetch an on-chain ID Registry Event for a given Address
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
 * Fetch reactions on a cast.
 *
 * @summary On cast
 *
 * @param {object} params
 * @param {number} params.targetFid  - The FID of the cast's creator
 * @param {string} params.targetHash  - The hash of the cast
 * @param {ReactionType} params.reactionType  - The type of reaction, either as a numerical enum value or string representation
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchCastReactions200Response>} A promise that resolves to a `FetchCastReactions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const targetFid = 
 * const targetHash = 
 * const reactionType = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchCastReactions({ targetFid, targetHash, reactionType, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
 *
 */
public async fetchCastReactions(params: { targetFid: number, targetHash: string, reactionType: ReactionType, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchCastReactions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.fetchCastReactions(adjustedParams);
  return response.data;
}

/**
 * Fetch reactions by a target URL.
 *
 * @summary To a target URL
 *
 * @param {object} params
 * @param {string} params.url  - The URL of the parent cast
 * @param {ReactionType} params.reactionType  - The type of reaction, either as a numerical enum value or string representation
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchCastReactions200Response>} A promise that resolves to a `FetchCastReactions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const url = 
 * const reactionType = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchReactionsByTarget({ url, reactionType, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-reactions-by-target)
 *
 */
public async fetchReactionsByTarget(params: { url: string, reactionType: ReactionType, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchCastReactions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.fetchReactionsByTarget(adjustedParams);
  return response.data;
}

/**
 * Fetch reactions by a user.
 *
 * @summary By FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the reaction's creator
 * @param {ReactionType} params.reactionType  - The type of reaction, either as a numerical enum value or string representation
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchCastReactions200Response>} A promise that resolves to a `FetchCastReactions200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const reactionType = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchUserReactions({ fid, reactionType, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
 *
 */
public async fetchUserReactions(params: { fid: number, reactionType: ReactionType, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchCastReactions200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.fetchUserReactions(adjustedParams);
  return response.data;
}

/**
 * Lookup a reaction by its FID or cast.
 *
 * @summary By FID or cast
 *
 * @param {object} params
 * @param {number} params.fid  - The FID of the reaction's creator
 * @param {number} params.targetFid  - The FID of the cast's creator
 * @param {string} params.targetHash  - The cast's hash
 * @param {ReactionType} params.reactionType  - The type of reaction, either as a numerical enum value or string representation
 *
 * @returns {Promise<Reaction>} A promise that resolves to a `Reaction` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const targetFid = 
 * const targetHash = 
 * const reactionType = 
 *
 * client.lookupReactionById({ fid, targetFid, targetHash, reactionType }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-reaction-by-id)
 *
 */
public async lookupReactionById(params: { fid: number, targetFid: number, targetHash: string, reactionType: ReactionType }): Promise<Reaction> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.reactionsApi.lookupReactionById(adjustedParams);
  return response.data;
}

/**
 * Fetch a user\'s storage limits.
 *
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
 * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead.
 *
 * @summary Fetch UserData for a FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID that's being requested
 * @param {UserDataType} params.userDataType [optional]  - The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const userDataType = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchUserData({ fid, userDataType, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
 *
 */
public async fetchUserData(params: { fid: number, userDataType?: UserDataType, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchUserData200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.userDataApi.fetchUserData(adjustedParams);
  return response.data;
}

/**
 * Fetch a proof for a username.
 *
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
 * Fetch proofs provided by a user.
 *
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
 * Fetch verifications provided by a user.
 *
 * @summary Provided by an FID
 *
 * @param {object} params
 * @param {number} params.fid  - The FID being requested
 * @param {string} params.address [optional]  - The optional ETH address to filter by
 * @param {number} params.pageSize [optional]  - Maximum number of messages to return in a single response
 * @param {boolean} params.reverse [optional]  - Reverse the sort order, returning latest messages first
 * @param {string} params.pageToken [optional]  - The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
 *
 * @returns {Promise<FetchVerificationsByFid200Response>} A promise that resolves to a `FetchVerificationsByFid200Response` object.
 *
 * @example
 *
 * // Fill in the appropriate values
 * const fid = 
 * const address = 
 * const pageSize = 
 * const reverse = 
 * const pageToken = 
 *
 * client.fetchVerificationsByFid({ fid, address, pageSize, reverse, pageToken }).then(response => {
 *   console.log('response:', response);
 * });
 *
 * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-verifications-by-fid)
 *
 */
public async fetchVerificationsByFid(params: { fid: number, address?: string, pageSize?: number, reverse?: boolean, pageToken?: string }): Promise<FetchVerificationsByFid200Response> {
  const adjustedParams: any = {};
Object.assign(adjustedParams, params);

  const response = await this.apis.verificationsApi.fetchVerificationsByFid(adjustedParams);
  return response.data;
}

  
}
