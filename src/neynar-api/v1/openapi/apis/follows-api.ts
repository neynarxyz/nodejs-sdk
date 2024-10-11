/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { FollowResponse } from '../models';
/**
 * FollowsApi - axios parameter creator
 * @export
 */
export const FollowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a list of users who follow a given user in reverse chronological order.
         * @summary Gets all followers for a given FID
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        followers: async (fid: number, viewerFid?: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('followers', 'fid', fid)
            const localVarPath = `/farcaster/followers`;
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
                localVarQueryParameter['viewerFid'] = viewerFid;
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
         * Gets a list of users who is following a given user in reverse chronological order.
         * @summary Gets all following users of a FID
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        following: async (fid: number, viewerFid?: number, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('following', 'fid', fid)
            const localVarPath = `/farcaster/following`;
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
                localVarQueryParameter['viewerFid'] = viewerFid;
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
 * FollowsApi - functional programming interface
 * @export
 */
export const FollowsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FollowsApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a list of users who follow a given user in reverse chronological order.
         * @summary Gets all followers for a given FID
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async followers(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FollowResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.followers(fid, viewerFid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of users who is following a given user in reverse chronological order.
         * @summary Gets all following users of a FID
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async following(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FollowResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.following(fid, viewerFid, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FollowsApi - factory interface
 * @export
 */
export const FollowsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FollowsApiFp(configuration)
    return {
        /**
         * Gets a list of users who follow a given user in reverse chronological order.
         * @summary Gets all followers for a given FID
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        followers(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: any): AxiosPromise<FollowResponse> {
            return localVarFp.followers(fid, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of users who is following a given user in reverse chronological order.
         * @summary Gets all following users of a FID
         * @param {number} fid FID of the user
         * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
         * @param {number} [limit] Number of results to retrieve (default 25, max 150)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        following(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: any): AxiosPromise<FollowResponse> {
            return localVarFp.following(fid, viewerFid, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FollowsApi - object-oriented interface
 * @export
 * @class FollowsApi
 * @extends {BaseAPI}
 */
export class FollowsApi extends BaseAPI {
    /**
     * Gets a list of users who follow a given user in reverse chronological order.
     * @summary Gets all followers for a given FID
     * @param {number} fid FID of the user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     */
    public followers(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return FollowsApiFp(this.configuration).followers(fid, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of users who is following a given user in reverse chronological order.
     * @summary Gets all following users of a FID
     * @param {number} fid FID of the user
     * @param {number} [viewerFid] fid of the user viewing this information, needed for contextual information.
     * @param {number} [limit] Number of results to retrieve (default 25, max 150)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     */
    public following(fid: number, viewerFid?: number, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return FollowsApiFp(this.configuration).following(fid, viewerFid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}
