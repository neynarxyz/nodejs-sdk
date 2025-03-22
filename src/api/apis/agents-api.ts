/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.23.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ConversationSummary } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
// @ts-ignore
import type { FetchUserInteractions200Response } from '../models';
// @ts-ignore
import type { FramePayTransactionRequestBody } from '../models';
// @ts-ignore
import type { NotificationType } from '../models';
// @ts-ignore
import type { TransactionFrameResponse } from '../models';
/**
 * AgentsApi - axios parameter creator
 * @export
 */
export const AgentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new transaction pay frame that can be used to collect payments through a frame
         * @summary Create transaction pay frame
         * @param {FramePayTransactionRequestBody} framePayTransactionRequestBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object
         * 
         */
        createTransactionPayFrame: async (framePayTransactionRequestBody: FramePayTransactionRequestBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'framePayTransactionRequestBody' is not null or undefined
            assertParamExists('createTransactionPayFrame', 'framePayTransactionRequestBody', framePayTransactionRequestBody)
            const localVarPath = `/farcaster/frame/transaction/pay`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(framePayTransactionRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of interactions between two users
         * @summary User interactions
         * @param {string} fids Comma separated list of two FIDs 
         * @param {Array<NotificationType>} [type] Comma seperated list of Interaction type to fetch 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserInteractions200Response>} A promise that resolves to a `FetchUserInteractions200Response` object
         * 
         */
        fetchUserInteractions: async (fids: string, type?: Array<NotificationType>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fids' is not null or undefined
            assertParamExists('fetchUserInteractions', 'fids', fids)
            const localVarPath = `/farcaster/user/interactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (fids !== undefined) {
                localVarQueryParameter['fids'] = fids;
            }

            if (type) {
                localVarQueryParameter['type'] = type.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generates a summary of all casts related to a conversation surrounding a cast by passing in a cast hash or Warpcast URL.  Summary is generated by an LLM and is intended to be passed as a context to AI agents. 
         * @summary Cast conversation summary
         * @param {string} identifier Cast identifier (Its either a url or a hash) 
         * @param {number} [limit] Number of casts to consider in a summary up to a point of target cast  (Default: 20, Maximum: 50)
         * @param {string} [prompt] Additional prompt used to generate a summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ConversationSummary>} A promise that resolves to a `ConversationSummary` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation-summary)
         * 
         */
        lookupCastConversationSummary: async (identifier: string, limit?: number, prompt?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            assertParamExists('lookupCastConversationSummary', 'identifier', identifier)
            const localVarPath = `/farcaster/cast/conversation/summary`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (identifier !== undefined) {
                localVarQueryParameter['identifier'] = identifier;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (prompt !== undefined) {
                localVarQueryParameter['prompt'] = prompt;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AgentsApi - functional programming interface
 * @export
 */
export const AgentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AgentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new transaction pay frame that can be used to collect payments through a frame
         * @summary Create transaction pay frame
         * @param {FramePayTransactionRequestBody} framePayTransactionRequestBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object
         * 
         */
        async createTransactionPayFrame(framePayTransactionRequestBody: FramePayTransactionRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionFrameResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTransactionPayFrame(framePayTransactionRequestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.createTransactionPayFrame']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of interactions between two users
         * @summary User interactions
         * @param {string} fids Comma separated list of two FIDs 
         * @param {Array<NotificationType>} [type] Comma seperated list of Interaction type to fetch 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserInteractions200Response>} A promise that resolves to a `FetchUserInteractions200Response` object
         * 
         */
        async fetchUserInteractions(fids: string, type?: Array<NotificationType>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FetchUserInteractions200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserInteractions(fids, type, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.fetchUserInteractions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Generates a summary of all casts related to a conversation surrounding a cast by passing in a cast hash or Warpcast URL.  Summary is generated by an LLM and is intended to be passed as a context to AI agents. 
         * @summary Cast conversation summary
         * @param {string} identifier Cast identifier (Its either a url or a hash) 
         * @param {number} [limit] Number of casts to consider in a summary up to a point of target cast  (Default: 20, Maximum: 50)
         * @param {string} [prompt] Additional prompt used to generate a summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ConversationSummary>} A promise that resolves to a `ConversationSummary` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation-summary)
         * 
         */
        async lookupCastConversationSummary(identifier: string, limit?: number, prompt?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConversationSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupCastConversationSummary(identifier, limit, prompt, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AgentsApi.lookupCastConversationSummary']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AgentsApi - factory interface
 * @export
 */
export const AgentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AgentsApiFp(configuration)
    return {
        /**
         * Creates a new transaction pay frame that can be used to collect payments through a frame
         * @summary Create transaction pay frame
         * @param {AgentsApiCreateTransactionPayFrameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object
         * 
         */
        createTransactionPayFrame(requestParameters: AgentsApiCreateTransactionPayFrameRequest, options?: RawAxiosRequestConfig): AxiosPromise<TransactionFrameResponse> {
            return localVarFp.createTransactionPayFrame(requestParameters.framePayTransactionRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of interactions between two users
         * @summary User interactions
         * @param {AgentsApiFetchUserInteractionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserInteractions200Response>} A promise that resolves to a `FetchUserInteractions200Response` object
         * 
         */
        fetchUserInteractions(requestParameters: AgentsApiFetchUserInteractionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserInteractions200Response> {
            return localVarFp.fetchUserInteractions(requestParameters.fids, requestParameters.type, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a summary of all casts related to a conversation surrounding a cast by passing in a cast hash or Warpcast URL.  Summary is generated by an LLM and is intended to be passed as a context to AI agents. 
         * @summary Cast conversation summary
         * @param {AgentsApiLookupCastConversationSummaryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ConversationSummary>} A promise that resolves to a `ConversationSummary` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation-summary)
         * 
         */
        lookupCastConversationSummary(requestParameters: AgentsApiLookupCastConversationSummaryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConversationSummary> {
            return localVarFp.lookupCastConversationSummary(requestParameters.identifier, requestParameters.limit, requestParameters.prompt, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AgentsApi - interface
 * @export
 * @interface AgentsApi
 */
export interface AgentsApiInterface {
    /**
     * Creates a new transaction pay frame that can be used to collect payments through a frame
     * @summary Create transaction pay frame
     * @param {AgentsApiCreateTransactionPayFrameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApiInterface
     * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object
     * 
     */
    createTransactionPayFrame(requestParameters: AgentsApiCreateTransactionPayFrameRequest, options?: RawAxiosRequestConfig): AxiosPromise<TransactionFrameResponse>;

    /**
     * Returns a list of interactions between two users
     * @summary User interactions
     * @param {AgentsApiFetchUserInteractionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApiInterface
     * @returns {Promise<FetchUserInteractions200Response>} A promise that resolves to a `FetchUserInteractions200Response` object
     * 
     */
    fetchUserInteractions(requestParameters: AgentsApiFetchUserInteractionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserInteractions200Response>;

    /**
     * Generates a summary of all casts related to a conversation surrounding a cast by passing in a cast hash or Warpcast URL.  Summary is generated by an LLM and is intended to be passed as a context to AI agents. 
     * @summary Cast conversation summary
     * @param {AgentsApiLookupCastConversationSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApiInterface
     * @returns {Promise<ConversationSummary>} A promise that resolves to a `ConversationSummary` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation-summary)
     * 
     */
    lookupCastConversationSummary(requestParameters: AgentsApiLookupCastConversationSummaryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConversationSummary>;

}

/**
 * Request parameters for createTransactionPayFrame operation in AgentsApi.
 * @export
 * @interface AgentsApiCreateTransactionPayFrameRequest
 */
export interface AgentsApiCreateTransactionPayFrameRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {FramePayTransactionRequestBody}
     * @memberof AgentsApiCreateTransactionPayFrame
     */
    readonly framePayTransactionRequestBody: FramePayTransactionRequestBody
}

/**
 * Request parameters for fetchUserInteractions operation in AgentsApi.
 * @export
 * @interface AgentsApiFetchUserInteractionsRequest
 */
export interface AgentsApiFetchUserInteractionsRequest {
    /**
     * Comma separated list of two FIDs
     * @acceptAs integer
     * @commaSeparated
     * 
     * @type {string}
     * @memberof AgentsApiFetchUserInteractions
     */
    readonly fids: string

    /**
     * Comma seperated list of Interaction type to fetch
     * 
     * 
     * 
     * @type {Array<NotificationType>}
     * @memberof AgentsApiFetchUserInteractions
     */
    readonly type?: Array<NotificationType>
}

/**
 * Request parameters for lookupCastConversationSummary operation in AgentsApi.
 * @export
 * @interface AgentsApiLookupCastConversationSummaryRequest
 */
export interface AgentsApiLookupCastConversationSummaryRequest {
    /**
     * Cast identifier (Its either a url or a hash)
     * 
     * 
     * 
     * @type {string}
     * @memberof AgentsApiLookupCastConversationSummary
     */
    readonly identifier: string

    /**
     * Number of casts to consider in a summary up to a point of target cast (Default: 20, Maximum: 50)
     * 
     * 
     * 
     * @type {number}
     * @memberof AgentsApiLookupCastConversationSummary
     */
    readonly limit?: number

    /**
     * Additional prompt used to generate a summary
     * 
     * 
     * 
     * @type {string}
     * @memberof AgentsApiLookupCastConversationSummary
     */
    readonly prompt?: string
}

/**
 * AgentsApi - object-oriented interface
 * @export
 * @class AgentsApi
 * @extends {BaseAPI}
 */
export class AgentsApi extends BaseAPI implements AgentsApiInterface {
    /**
     * Creates a new transaction pay frame that can be used to collect payments through a frame
     * @summary Create transaction pay frame
     * @param {AgentsApiCreateTransactionPayFrameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     * @returns {Promise<TransactionFrameResponse>} A promise that resolves to a `TransactionFrameResponse` object
     * 
     */
    public createTransactionPayFrame(requestParameters: AgentsApiCreateTransactionPayFrameRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).createTransactionPayFrame(requestParameters.framePayTransactionRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of interactions between two users
     * @summary User interactions
     * @param {AgentsApiFetchUserInteractionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     * @returns {Promise<FetchUserInteractions200Response>} A promise that resolves to a `FetchUserInteractions200Response` object
     * 
     */
    public fetchUserInteractions(requestParameters: AgentsApiFetchUserInteractionsRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).fetchUserInteractions(requestParameters.fids, requestParameters.type, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates a summary of all casts related to a conversation surrounding a cast by passing in a cast hash or Warpcast URL.  Summary is generated by an LLM and is intended to be passed as a context to AI agents. 
     * @summary Cast conversation summary
     * @param {AgentsApiLookupCastConversationSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentsApi
     * @returns {Promise<ConversationSummary>} A promise that resolves to a `ConversationSummary` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-cast-conversation-summary)
     * 
     */
    public lookupCastConversationSummary(requestParameters: AgentsApiLookupCastConversationSummaryRequest, options?: RawAxiosRequestConfig) {
        return AgentsApiFp(this.configuration).lookupCastConversationSummary(requestParameters.identifier, requestParameters.limit, requestParameters.prompt, options).then((request) => request(this.axios, this.basePath));
    }
}

