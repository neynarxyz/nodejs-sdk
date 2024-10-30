/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
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
         * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
         * @summary Post a reaction
         * @param {ReactionReqBody} reactionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postReaction: async (reactionReqBody: ReactionReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'reactionReqBody' is not null or undefined
            assertParamExists('postReaction', 'reactionReqBody', reactionReqBody)
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
        /**
         * Fetches reactions for a given cast
         * @summary Reactions for cast
         * @param {string} hash 
         * @param {string} types Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values. 
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
         * @param {number} [limit] Number of results to fetch (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reactionsCast: async (hash: string, types: string, viewerFid?: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('reactionsCast', 'hash', hash)
            // verify required parameter 'types' is not null or undefined
            assertParamExists('reactionsCast', 'types', types)
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

            if (types !== undefined) {
                localVarQueryParameter['types'] = types;
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
         * @param {number} [limit] Number of results to fetch (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reactionsUser: async (fid: number, type: ReactionsType, viewerFid?: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('reactionsUser', 'fid', fid)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('reactionsUser', 'type', type)
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
         */
        async deleteReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteReaction(reactionReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.deleteReaction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
         * @summary Post a reaction
         * @param {ReactionReqBody} reactionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postReaction(reactionReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.postReaction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches reactions for a given cast
         * @summary Reactions for cast
         * @param {string} hash 
         * @param {string} types Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values. 
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
         * @param {number} [limit] Number of results to fetch (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reactionsCast(hash: string, types: string, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReactionsCastResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reactionsCast(hash, types, viewerFid, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.reactionsCast']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches reactions for a given user
         * @summary Reactions for user
         * @param {number} fid 
         * @param {ReactionsType} type Type of reaction to fetch (likes or recasts or all)
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
         * @param {number} [limit] Number of results to fetch (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reactionsUser(fid: number, type: ReactionsType, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reactionsUser(fid, type, viewerFid, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReactionApi.reactionsUser']?.[localVarOperationServerIndex]?.url;
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
         * @param {ReactionReqBody} reactionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.deleteReaction(reactionReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
         * @summary Post a reaction
         * @param {ReactionReqBody} reactionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.postReaction(reactionReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches reactions for a given cast
         * @summary Reactions for cast
         * @param {string} hash 
         * @param {string} types Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values. 
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
         * @param {number} [limit] Number of results to fetch (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reactionsCast(hash: string, types: string, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<ReactionsCastResponse> {
            return localVarFp.reactionsCast(hash, types, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches reactions for a given user
         * @summary Reactions for user
         * @param {number} fid 
         * @param {ReactionsType} type Type of reaction to fetch (likes or recasts or all)
         * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
         * @param {number} [limit] Number of results to fetch (default 25, max 100)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reactionsUser(fid: number, type: ReactionsType, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<ReactionsResponse> {
            return localVarFp.reactionsUser(fid, type, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReactionApi - object-oriented interface
 * @export
 * @class ReactionApi
 * @extends {BaseAPI}
 */
export class ReactionApi extends BaseAPI {
    /**
     * Delete a reaction (like or recast) to a cast \\ (In order to delete a reaction `signer_uuid` must be approved) 
     * @summary Delete reaction
     * @param {ReactionReqBody} reactionReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     */
    public deleteReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).deleteReaction(reactionReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Post a reaction (like or recast) to a given cast \\ (In order to post a reaction `signer_uuid` must be approved) 
     * @summary Post a reaction
     * @param {ReactionReqBody} reactionReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     */
    public postReaction(reactionReqBody: ReactionReqBody, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).postReaction(reactionReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches reactions for a given cast
     * @summary Reactions for cast
     * @param {string} hash 
     * @param {string} types Customize which reaction types the request should search for. This is a comma-separated string that can include the following values: \&#39;likes\&#39; and \&#39;recasts\&#39;. By default api returns both. To select multiple types, use a comma-separated list of these values. 
     * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * @param {number} [limit] Number of results to fetch (default 25, max 100)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     */
    public reactionsCast(hash: string, types: string, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).reactionsCast(hash, types, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches reactions for a given user
     * @summary Reactions for user
     * @param {number} fid 
     * @param {ReactionsType} type Type of reaction to fetch (likes or recasts or all)
     * @param {number} [viewerFid] Providing this will return a list of reactions that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * @param {number} [limit] Number of results to fetch (default 25, max 100)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionApi
     */
    public reactionsUser(fid: number, type: ReactionsType, viewerFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig) {
        return ReactionApiFp(this.configuration).reactionsUser(fid, type, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}

