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
import type { BlockListResponse } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
/**
 * BlockApi - axios parameter creator
 * @export
 */
export const BlockApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches all FIDs that a user has blocked or has been blocked by
         * @summary Blocked / Blocked by FIDs
         * @param {string} apiKey API key required for authentication.
         * @param {number} [blockerFid] Providing this will return the users that this user has blocked
         * @param {number} [blockedFid] Providing this will return the users that have blocked this user
         * @param {number} [limit] Number of results to fetch (default 20, max 100).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockList: async (apiKey: string, blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('blockList', 'apiKey', apiKey)
            const localVarPath = `/farcaster/block/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (blockerFid !== undefined) {
                localVarQueryParameter['blocker_fid'] = blockerFid;
            }

            if (blockedFid !== undefined) {
                localVarQueryParameter['blocked_fid'] = blockedFid;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
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
 * BlockApi - functional programming interface
 * @export
 */
export const BlockApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BlockApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetches all FIDs that a user has blocked or has been blocked by
         * @summary Blocked / Blocked by FIDs
         * @param {string} apiKey API key required for authentication.
         * @param {number} [blockerFid] Providing this will return the users that this user has blocked
         * @param {number} [blockedFid] Providing this will return the users that have blocked this user
         * @param {number} [limit] Number of results to fetch (default 20, max 100).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blockList(apiKey: string, blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blockList(apiKey, blockerFid, blockedFid, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BlockApi.blockList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BlockApi - factory interface
 * @export
 */
export const BlockApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BlockApiFp(configuration)
    return {
        /**
         * Fetches all FIDs that a user has blocked or has been blocked by
         * @summary Blocked / Blocked by FIDs
         * @param {string} apiKey API key required for authentication.
         * @param {number} [blockerFid] Providing this will return the users that this user has blocked
         * @param {number} [blockedFid] Providing this will return the users that have blocked this user
         * @param {number} [limit] Number of results to fetch (default 20, max 100).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockList(apiKey: string, blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<BlockListResponse> {
            return localVarFp.blockList(apiKey, blockerFid, blockedFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BlockApi - object-oriented interface
 * @export
 * @class BlockApi
 * @extends {BaseAPI}
 */
export class BlockApi extends BaseAPI {
    /**
     * Fetches all FIDs that a user has blocked or has been blocked by
     * @summary Blocked / Blocked by FIDs
     * @param {string} apiKey API key required for authentication.
     * @param {number} [blockerFid] Providing this will return the users that this user has blocked
     * @param {number} [blockedFid] Providing this will return the users that have blocked this user
     * @param {number} [limit] Number of results to fetch (default 20, max 100).
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public blockList(apiKey: string, blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig) {
        return BlockApiFp(this.configuration).blockList(apiKey, blockerFid, blockedFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}

