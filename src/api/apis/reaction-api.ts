/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.20.0
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
import type { ErrorRes } from '../models';
// @ts-ignore
import type { OperationResponse } from '../models';
// @ts-ignore
import type { ReactionReqBody } from '../models';
// @ts-ignore
import type { ReactionsCastResponse } from '../models';
// @ts-ignore
import type { ReactionsResponse } from '../models';
// @ts-ignore
import type { ReactionsType } from '../models';
/**
 * ReactionApi - axios parameter creator
 * @export
 */
export const ReactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 
         * @summary Delete reaction
         * @param {ReactionReqBody} reactionReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
         * 
         */
        deleteReaction: async (reactionReqBody: ReactionReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'reactionReqBody' is not null or undefined
            assertParamExists('deleteReaction', 'reactionReqBody', reactionReqBody)
            const localVarPath = `/farcaster/reaction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reactionReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches reactions for a given cast
         * @summary Reactions for cast
         * @param {string} hash  
         * @param {Array<ReactionsType>} types Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values.  
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ReactionsCastResponse>} A promise that resolves to a `ReactionsCastResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
         * 
         */
        fetchCastReactions: async (hash: string, types: Array<ReactionsType>, viewerFid?: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('fetchCastReactions', 'hash', hash)
            // verify required parameter 'types' is not null or undefined
            assertParamExists('fetchCastReactions', 'types', types)
            const localVarPath = `/farcaster/reactions/cast`;
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

            if (hash !== undefined) {
                localVarQueryParameter['hash'] = hash;
            }

            if (types) {
                localVarQueryParameter['types'] = types.join(COLLECTION_FORMATS.csv);
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
         * Fetches reactions for a given user
         * @summary Reactions for user
         * @param {number} fid  
         * @param {ReactionsType} type Type of reaction to fetch (likes or recasts or all) 
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
         * 
         */
        fetchUserReactions: async (fid: number, type: ReactionsType, viewerFid?: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchUserReactions', 'fid', fid)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('fetchUserReactions', 'type', type)
            const localVarPath = `/farcaster/reactions/user`;
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

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
         * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
         * @summary Post a reaction
         * @param {ReactionReqBody} reactionReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
         * 
         */
        publishReaction: async (reactionReqBody: ReactionReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'reactionReqBody' is not null or undefined
            assertParamExists('publishReaction', 'reactionReqBody', reactionReqBody)
            const localVarPath = `/farcaster/reaction`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(reactionReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReactionApi - functional programming interface
 * @export
 */
export const ReactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReactionApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 
         * @summary Delete reaction
         * @param {ReactionReqBody} reactionReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
         * 
         */
        async deleteReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteReaction(reactionReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.deleteReaction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches reactions for a given cast
         * @summary Reactions for cast
         * @param {string} hash  
         * @param {Array<ReactionsType>} types Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values.  
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ReactionsCastResponse>} A promise that resolves to a `ReactionsCastResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
         * 
         */
        async fetchCastReactions(hash: string, types: Array<ReactionsType>, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReactionsCastResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchCastReactions(hash, types, viewerFid, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.fetchCastReactions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches reactions for a given user
         * @summary Reactions for user
         * @param {number} fid  
         * @param {ReactionsType} type Type of reaction to fetch (likes or recasts or all) 
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
         * 
         */
        async fetchUserReactions(fid: number, type: ReactionsType, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserReactions(fid, type, viewerFid, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.fetchUserReactions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
         * @summary Post a reaction
         * @param {ReactionReqBody} reactionReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
         * 
         */
        async publishReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishReaction(reactionReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.publishReaction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReactionApi - factory interface
 * @export
 */
export const ReactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReactionApiFp(configuration)
    return {
        /**
         * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 
         * @summary Delete reaction
         * @param {ReactionApiDeleteReactionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
         * 
         */
        deleteReaction(requestParameters: ReactionApiDeleteReactionRequest, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.deleteReaction(requestParameters.reactionReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches reactions for a given cast
         * @summary Reactions for cast
         * @param {ReactionApiFetchCastReactionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ReactionsCastResponse>} A promise that resolves to a `ReactionsCastResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
         * 
         */
        fetchCastReactions(requestParameters: ReactionApiFetchCastReactionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReactionsCastResponse> {
            return localVarFp.fetchCastReactions(requestParameters.hash, requestParameters.types, requestParameters.viewerFid, requestParameters.limit, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches reactions for a given user
         * @summary Reactions for user
         * @param {ReactionApiFetchUserReactionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
         * 
         */
        fetchUserReactions(requestParameters: ReactionApiFetchUserReactionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReactionsResponse> {
            return localVarFp.fetchUserReactions(requestParameters.fid, requestParameters.type, requestParameters.viewerFid, requestParameters.limit, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
         * @summary Post a reaction
         * @param {ReactionApiPublishReactionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
         * 
         */
        publishReaction(requestParameters: ReactionApiPublishReactionRequest, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.publishReaction(requestParameters.reactionReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReactionApi - interface
 * @export
 * @interface ReactionApi
 */
export interface ReactionApiInterface {
    /**
     * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 
     * @summary Delete reaction
     * @param {ReactionApiDeleteReactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApiInterface
     * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
     * 
     */
    deleteReaction(requestParameters: ReactionApiDeleteReactionRequest, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse>;

    /**
     * Fetches reactions for a given cast
     * @summary Reactions for cast
     * @param {ReactionApiFetchCastReactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApiInterface
     * @returns {Promise<ReactionsCastResponse>} A promise that resolves to a `ReactionsCastResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
     * 
     */
    fetchCastReactions(requestParameters: ReactionApiFetchCastReactionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReactionsCastResponse>;

    /**
     * Fetches reactions for a given user
     * @summary Reactions for user
     * @param {ReactionApiFetchUserReactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApiInterface
     * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
     * 
     */
    fetchUserReactions(requestParameters: ReactionApiFetchUserReactionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReactionsResponse>;

    /**
     * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
     * @summary Post a reaction
     * @param {ReactionApiPublishReactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApiInterface
     * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
     * 
     */
    publishReaction(requestParameters: ReactionApiPublishReactionRequest, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse>;

}

/**
 * Request parameters for deleteReaction operation in ReactionApi.
 * @export
 * @interface ReactionApiDeleteReactionRequest
 */
export interface ReactionApiDeleteReactionRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {ReactionReqBody}
     * @memberof ReactionApiDeleteReaction
     */
    readonly reactionReqBody: ReactionReqBody
}

/**
 * Request parameters for fetchCastReactions operation in ReactionApi.
 * @export
 * @interface ReactionApiFetchCastReactionsRequest
 */
export interface ReactionApiFetchCastReactionsRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {string}
     * @memberof ReactionApiFetchCastReactions
     */
    readonly hash: string

    /**
     * Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values. 
     * 
     * 
     * 
     * @type {Array<ReactionsType>}
     * @memberof ReactionApiFetchCastReactions
     */
    readonly types: Array<ReactionsType>

    /**
     * Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof ReactionApiFetchCastReactions
     */
    readonly viewerFid?: number

    /**
     * Number of results to fetch (Default: 25, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof ReactionApiFetchCastReactions
     */
    readonly limit?: number

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof ReactionApiFetchCastReactions
     */
    readonly cursor?: string
}

/**
 * Request parameters for fetchUserReactions operation in ReactionApi.
 * @export
 * @interface ReactionApiFetchUserReactionsRequest
 */
export interface ReactionApiFetchUserReactionsRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {number}
     * @memberof ReactionApiFetchUserReactions
     */
    readonly fid: number

    /**
     * Type of reaction to fetch (likes or recasts or all)
     * 
     * 
     * 
     * @type {ReactionsType}
     * @memberof ReactionApiFetchUserReactions
     */
    readonly type: ReactionsType

    /**
     * Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof ReactionApiFetchUserReactions
     */
    readonly viewerFid?: number

    /**
     * Number of results to fetch (Default: 25, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof ReactionApiFetchUserReactions
     */
    readonly limit?: number

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof ReactionApiFetchUserReactions
     */
    readonly cursor?: string
}

/**
 * Request parameters for publishReaction operation in ReactionApi.
 * @export
 * @interface ReactionApiPublishReactionRequest
 */
export interface ReactionApiPublishReactionRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {ReactionReqBody}
     * @memberof ReactionApiPublishReaction
     */
    readonly reactionReqBody: ReactionReqBody
}

/**
 * ReactionApi - object-oriented interface
 * @export
 * @class ReactionApi
 * @extends {BaseAPI}
 */
export class ReactionApi extends BaseAPI implements ReactionApiInterface {
    /**
     * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 
     * @summary Delete reaction
     * @param {ReactionApiDeleteReactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-reaction)
     * 
     */
    public deleteReaction(requestParameters: ReactionApiDeleteReactionRequest, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).deleteReaction(requestParameters.reactionReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches reactions for a given cast
     * @summary Reactions for cast
     * @param {ReactionApiFetchCastReactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     * @returns {Promise<ReactionsCastResponse>} A promise that resolves to a `ReactionsCastResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-reactions)
     * 
     */
    public fetchCastReactions(requestParameters: ReactionApiFetchCastReactionsRequest, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).fetchCastReactions(requestParameters.hash, requestParameters.types, requestParameters.viewerFid, requestParameters.limit, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches reactions for a given user
     * @summary Reactions for user
     * @param {ReactionApiFetchUserReactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     * @returns {Promise<ReactionsResponse>} A promise that resolves to a `ReactionsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-reactions)
     * 
     */
    public fetchUserReactions(requestParameters: ReactionApiFetchUserReactionsRequest, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).fetchUserReactions(requestParameters.fid, requestParameters.type, requestParameters.viewerFid, requestParameters.limit, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
     * @summary Post a reaction
     * @param {ReactionApiPublishReactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-reaction)
     * 
     */
    public publishReaction(requestParameters: ReactionApiPublishReactionRequest, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).publishReaction(requestParameters.reactionReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

