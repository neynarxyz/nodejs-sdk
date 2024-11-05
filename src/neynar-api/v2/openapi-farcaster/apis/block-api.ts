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
import type { BlockReqBody } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
// @ts-ignore
import type { OperationResponse } from '../models';
/**
 * BlockApi - axios parameter creator
 * @export
 */
export const BlockApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a block for a given FID.
         * @summary Unblock FID
         * @param {BlockReqBody} blockReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBlock: async (blockReqBody: BlockReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockReqBody' is not null or undefined
            assertParamExists('deleteBlock', 'blockReqBody', blockReqBody)
            const localVarPath = `/farcaster/block`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(blockReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches all FIDs that a user has blocked or has been blocked by
         * @summary Blocked / Blocked by FIDs
         * @param {number} [blockerFid] Providing this will return the users that this user has blocked
         * @param {number} [blockedFid] Providing this will return the users that have blocked this user
         * @param {number} [limit] Number of results to fetch
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchBlockList: async (blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a block for a given FID.
         * @summary Block FID
         * @param {BlockReqBody} blockReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishBlock: async (blockReqBody: BlockReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockReqBody' is not null or undefined
            assertParamExists('publishBlock', 'blockReqBody', blockReqBody)
            const localVarPath = `/farcaster/block`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(blockReqBody, localVarRequestOptions, configuration)

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
         * Deletes a block for a given FID.
         * @summary Unblock FID
         * @param {BlockReqBody} blockReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBlock(blockReqBody: BlockReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBlock(blockReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BlockApi.deleteBlock']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches all FIDs that a user has blocked or has been blocked by
         * @summary Blocked / Blocked by FIDs
         * @param {number} [blockerFid] Providing this will return the users that this user has blocked
         * @param {number} [blockedFid] Providing this will return the users that have blocked this user
         * @param {number} [limit] Number of results to fetch
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchBlockList(blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchBlockList(blockerFid, blockedFid, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BlockApi.fetchBlockList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds a block for a given FID.
         * @summary Block FID
         * @param {BlockReqBody} blockReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishBlock(blockReqBody: BlockReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishBlock(blockReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BlockApi.publishBlock']?.[localVarOperationServerIndex]?.url;
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
         * Deletes a block for a given FID.
         * @summary Unblock FID
         * @param {BlockReqBody} blockReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBlock(blockReqBody: BlockReqBody, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.deleteBlock(blockReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches all FIDs that a user has blocked or has been blocked by
         * @summary Blocked / Blocked by FIDs
         * @param {number} [blockerFid] Providing this will return the users that this user has blocked
         * @param {number} [blockedFid] Providing this will return the users that have blocked this user
         * @param {number} [limit] Number of results to fetch
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchBlockList(blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<BlockListResponse> {
            return localVarFp.fetchBlockList(blockerFid, blockedFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a block for a given FID.
         * @summary Block FID
         * @param {BlockReqBody} blockReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishBlock(blockReqBody: BlockReqBody, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.publishBlock(blockReqBody, options).then((request) => request(axios, basePath));
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
     * Deletes a block for a given FID.
     * @summary Unblock FID
     * @param {BlockReqBody} blockReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public deleteBlock(blockReqBody: BlockReqBody, options?: RawAxiosRequestConfig) {
        return BlockApiFp(this.configuration).deleteBlock(blockReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches all FIDs that a user has blocked or has been blocked by
     * @summary Blocked / Blocked by FIDs
     * @param {number} [blockerFid] Providing this will return the users that this user has blocked
     * @param {number} [blockedFid] Providing this will return the users that have blocked this user
     * @param {number} [limit] Number of results to fetch
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public fetchBlockList(blockerFid?: number, blockedFid?: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig) {
        return BlockApiFp(this.configuration).fetchBlockList(blockerFid, blockedFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a block for a given FID.
     * @summary Block FID
     * @param {BlockReqBody} blockReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApi
     */
    public publishBlock(blockReqBody: BlockReqBody, options?: RawAxiosRequestConfig) {
        return BlockApiFp(this.configuration).publishBlock(blockReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

