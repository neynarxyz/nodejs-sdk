/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.0
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
import type { FollowSortType } from '../models';
// @ts-ignore
import type { FollowersResponse } from '../models';
// @ts-ignore
import type { RelevantFollowersResponse } from '../models';
// @ts-ignore
import type { UsersResponse } from '../models';
/**
 * FollowsApi - axios parameter creator
 * @export
 */
export const FollowsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch a list of suggested users to follow. Used to help users discover new users to follow
         * @summary Suggest Follows
         * @param {number} fid FID of the user whose following you want to fetch. 
         * @param {number} [viewerFid] Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
         * 
         */
        fetchFollowSuggestions: async (fid: number, viewerFid?: number, limit?: number, xNeynarExperimental?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchFollowSuggestions', 'fid', fid)
            const localVarPath = `/farcaster/following/suggested`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (xNeynarExperimental != null) {
                localVarHeaderParameter['x-neynar-experimental'] = typeof xNeynarExperimental === 'string'
                    ? xNeynarExperimental
                    : JSON.stringify(xNeynarExperimental);
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
         * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
         * @summary Relevant followers
         * @param {number} targetFid User who\&#39;s profile you are looking at 
         * @param {number} viewerFid The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
         * 
         */
        fetchRelevantFollowers: async (targetFid: number, viewerFid: number, xNeynarExperimental?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'targetFid' is not null or undefined
            assertParamExists('fetchRelevantFollowers', 'targetFid', targetFid)
            // verify required parameter 'viewerFid' is not null or undefined
            assertParamExists('fetchRelevantFollowers', 'viewerFid', viewerFid)
            const localVarPath = `/farcaster/followers/relevant`;
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

            if (targetFid !== undefined) {
                localVarQueryParameter['target_fid'] = targetFid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (xNeynarExperimental != null) {
                localVarHeaderParameter['x-neynar-experimental'] = typeof xNeynarExperimental === 'string'
                    ? xNeynarExperimental
                    : JSON.stringify(xNeynarExperimental);
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
         * Returns a list of followers for a specific FID.
         * @summary Followers
         * @param {number} fid User who\&#39;s profile you are looking at 
         * @param {number} [viewerFid] Providing this will return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {FollowSortType} [sortType] Sort type for fetch followers. Default is &#x60;desc_chron&#x60; 
         * @param {number} [limit] Number of results to fetch  (Default: 20, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
         * 
         */
        fetchUserFollowers: async (fid: number, viewerFid?: number, sortType?: FollowSortType, limit?: number, cursor?: string, xNeynarExperimental?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchUserFollowers', 'fid', fid)
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
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (xNeynarExperimental != null) {
                localVarHeaderParameter['x-neynar-experimental'] = typeof xNeynarExperimental === 'string'
                    ? xNeynarExperimental
                    : JSON.stringify(xNeynarExperimental);
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
         * Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.
         * @summary Following
         * @param {number} fid FID of the user whose following you want to fetch. 
         * @param {number} [viewerFid] Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {FollowSortType} [sortType] Optional parameter to sort the users based on different criteria. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
         * 
         */
        fetchUserFollowing: async (fid: number, viewerFid?: number, sortType?: FollowSortType, limit?: number, cursor?: string, xNeynarExperimental?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchUserFollowing', 'fid', fid)
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
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (xNeynarExperimental != null) {
                localVarHeaderParameter['x-neynar-experimental'] = typeof xNeynarExperimental === 'string'
                    ? xNeynarExperimental
                    : JSON.stringify(xNeynarExperimental);
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
         * Fetch a list of suggested users to follow. Used to help users discover new users to follow
         * @summary Suggest Follows
         * @param {number} fid FID of the user whose following you want to fetch. 
         * @param {number} [viewerFid] Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
         * 
         */
        async fetchFollowSuggestions(fid: number, viewerFid?: number, limit?: number, xNeynarExperimental?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchFollowSuggestions(fid, viewerFid, limit, xNeynarExperimental, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FollowsApi.fetchFollowSuggestions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
         * @summary Relevant followers
         * @param {number} targetFid User who\&#39;s profile you are looking at 
         * @param {number} viewerFid The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
         * 
         */
        async fetchRelevantFollowers(targetFid: number, viewerFid: number, xNeynarExperimental?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelevantFollowersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchRelevantFollowers(targetFid, viewerFid, xNeynarExperimental, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FollowsApi.fetchRelevantFollowers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of followers for a specific FID.
         * @summary Followers
         * @param {number} fid User who\&#39;s profile you are looking at 
         * @param {number} [viewerFid] Providing this will return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {FollowSortType} [sortType] Sort type for fetch followers. Default is &#x60;desc_chron&#x60; 
         * @param {number} [limit] Number of results to fetch  (Default: 20, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
         * 
         */
        async fetchUserFollowers(fid: number, viewerFid?: number, sortType?: FollowSortType, limit?: number, cursor?: string, xNeynarExperimental?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FollowersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserFollowers(fid, viewerFid, sortType, limit, cursor, xNeynarExperimental, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FollowsApi.fetchUserFollowers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.
         * @summary Following
         * @param {number} fid FID of the user whose following you want to fetch. 
         * @param {number} [viewerFid] Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {FollowSortType} [sortType] Optional parameter to sort the users based on different criteria. 
         * @param {number} [limit] Number of results to fetch  (Default: 25, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
         * 
         */
        async fetchUserFollowing(fid: number, viewerFid?: number, sortType?: FollowSortType, limit?: number, cursor?: string, xNeynarExperimental?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FollowersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserFollowing(fid, viewerFid, sortType, limit, cursor, xNeynarExperimental, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FollowsApi.fetchUserFollowing']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
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
         * Fetch a list of suggested users to follow. Used to help users discover new users to follow
         * @summary Suggest Follows
         * @param {FollowsApiFetchFollowSuggestionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
         * 
         */
        fetchFollowSuggestions(requestParameters: FollowsApiFetchFollowSuggestionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<UsersResponse> {
            return localVarFp.fetchFollowSuggestions(requestParameters.fid, requestParameters.viewerFid, requestParameters.limit, requestParameters.xNeynarExperimental, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
         * @summary Relevant followers
         * @param {FollowsApiFetchRelevantFollowersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
         * 
         */
        fetchRelevantFollowers(requestParameters: FollowsApiFetchRelevantFollowersRequest, options?: RawAxiosRequestConfig): AxiosPromise<RelevantFollowersResponse> {
            return localVarFp.fetchRelevantFollowers(requestParameters.targetFid, requestParameters.viewerFid, requestParameters.xNeynarExperimental, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of followers for a specific FID.
         * @summary Followers
         * @param {FollowsApiFetchUserFollowersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
         * 
         */
        fetchUserFollowers(requestParameters: FollowsApiFetchUserFollowersRequest, options?: RawAxiosRequestConfig): AxiosPromise<FollowersResponse> {
            return localVarFp.fetchUserFollowers(requestParameters.fid, requestParameters.viewerFid, requestParameters.sortType, requestParameters.limit, requestParameters.cursor, requestParameters.xNeynarExperimental, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.
         * @summary Following
         * @param {FollowsApiFetchUserFollowingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
         * 
         */
        fetchUserFollowing(requestParameters: FollowsApiFetchUserFollowingRequest, options?: RawAxiosRequestConfig): AxiosPromise<FollowersResponse> {
            return localVarFp.fetchUserFollowing(requestParameters.fid, requestParameters.viewerFid, requestParameters.sortType, requestParameters.limit, requestParameters.cursor, requestParameters.xNeynarExperimental, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FollowsApi - interface
 * @export
 * @interface FollowsApi
 */
export interface FollowsApiInterface {
    /**
     * Fetch a list of suggested users to follow. Used to help users discover new users to follow
     * @summary Suggest Follows
     * @param {FollowsApiFetchFollowSuggestionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApiInterface
     * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
     * 
     */
    fetchFollowSuggestions(requestParameters: FollowsApiFetchFollowSuggestionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<UsersResponse>;

    /**
     * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
     * @summary Relevant followers
     * @param {FollowsApiFetchRelevantFollowersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApiInterface
     * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
     * 
     */
    fetchRelevantFollowers(requestParameters: FollowsApiFetchRelevantFollowersRequest, options?: RawAxiosRequestConfig): AxiosPromise<RelevantFollowersResponse>;

    /**
     * Returns a list of followers for a specific FID.
     * @summary Followers
     * @param {FollowsApiFetchUserFollowersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApiInterface
     * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
     * 
     */
    fetchUserFollowers(requestParameters: FollowsApiFetchUserFollowersRequest, options?: RawAxiosRequestConfig): AxiosPromise<FollowersResponse>;

    /**
     * Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.
     * @summary Following
     * @param {FollowsApiFetchUserFollowingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApiInterface
     * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
     * 
     */
    fetchUserFollowing(requestParameters: FollowsApiFetchUserFollowingRequest, options?: RawAxiosRequestConfig): AxiosPromise<FollowersResponse>;

}

/**
 * Request parameters for fetchFollowSuggestions operation in FollowsApi.
 * @export
 * @interface FollowsApiFetchFollowSuggestionsRequest
 */
export interface FollowsApiFetchFollowSuggestionsRequest {
    /**
     * FID of the user whose following you want to fetch.
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchFollowSuggestions
     */
    readonly fid: number

    /**
     * Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchFollowSuggestions
     */
    readonly viewerFid?: number

    /**
     * Number of results to fetch (Default: 25, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchFollowSuggestions
     */
    readonly limit?: number

    /**
     * Enables experimental features
     * 
     * 
     * @globalHeader
     * @type {boolean}
     * @memberof FollowsApiFetchFollowSuggestions
     */
    readonly xNeynarExperimental?: boolean
}

/**
 * Request parameters for fetchRelevantFollowers operation in FollowsApi.
 * @export
 * @interface FollowsApiFetchRelevantFollowersRequest
 */
export interface FollowsApiFetchRelevantFollowersRequest {
    /**
     * User who\&#39;s profile you are looking at
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchRelevantFollowers
     */
    readonly targetFid: number

    /**
     * The FID of the user to customize this response for. Providing this will also return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchRelevantFollowers
     */
    readonly viewerFid: number

    /**
     * Enables experimental features
     * 
     * 
     * @globalHeader
     * @type {boolean}
     * @memberof FollowsApiFetchRelevantFollowers
     */
    readonly xNeynarExperimental?: boolean
}

/**
 * Request parameters for fetchUserFollowers operation in FollowsApi.
 * @export
 * @interface FollowsApiFetchUserFollowersRequest
 */
export interface FollowsApiFetchUserFollowersRequest {
    /**
     * User who\&#39;s profile you are looking at
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchUserFollowers
     */
    readonly fid: number

    /**
     * Providing this will return a list of followers that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchUserFollowers
     */
    readonly viewerFid?: number

    /**
     * Sort type for fetch followers. Default is &#x60;desc_chron&#x60;
     * 
     * 
     * 
     * @type {FollowSortType}
     * @memberof FollowsApiFetchUserFollowers
     */
    readonly sortType?: FollowSortType

    /**
     * Number of results to fetch (Default: 20, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchUserFollowers
     */
    readonly limit?: number

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof FollowsApiFetchUserFollowers
     */
    readonly cursor?: string

    /**
     * Enables experimental features
     * 
     * 
     * @globalHeader
     * @type {boolean}
     * @memberof FollowsApiFetchUserFollowers
     */
    readonly xNeynarExperimental?: boolean
}

/**
 * Request parameters for fetchUserFollowing operation in FollowsApi.
 * @export
 * @interface FollowsApiFetchUserFollowingRequest
 */
export interface FollowsApiFetchUserFollowingRequest {
    /**
     * FID of the user whose following you want to fetch.
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchUserFollowing
     */
    readonly fid: number

    /**
     * Providing this will return a list of users that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchUserFollowing
     */
    readonly viewerFid?: number

    /**
     * Optional parameter to sort the users based on different criteria.
     * 
     * 
     * 
     * @type {FollowSortType}
     * @memberof FollowsApiFetchUserFollowing
     */
    readonly sortType?: FollowSortType

    /**
     * Number of results to fetch (Default: 25, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof FollowsApiFetchUserFollowing
     */
    readonly limit?: number

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof FollowsApiFetchUserFollowing
     */
    readonly cursor?: string

    /**
     * Enables experimental features
     * 
     * 
     * @globalHeader
     * @type {boolean}
     * @memberof FollowsApiFetchUserFollowing
     */
    readonly xNeynarExperimental?: boolean
}

/**
 * FollowsApi - object-oriented interface
 * @export
 * @class FollowsApi
 * @extends {BaseAPI}
 */
export class FollowsApi extends BaseAPI implements FollowsApiInterface {
    /**
     * Fetch a list of suggested users to follow. Used to help users discover new users to follow
     * @summary Suggest Follows
     * @param {FollowsApiFetchFollowSuggestionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     * @returns {Promise<UsersResponse>} A promise that resolves to a `UsersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-follow-suggestions)
     * 
     */
    public fetchFollowSuggestions(requestParameters: FollowsApiFetchFollowSuggestionsRequest, options?: RawAxiosRequestConfig) {
        return FollowsApiFp(this.configuration).fetchFollowSuggestions(requestParameters.fid, requestParameters.viewerFid, requestParameters.limit, requestParameters.xNeynarExperimental, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of relevant followers for a specific FID. This usually shows on a profile as \"X, Y and Z follow this user\".
     * @summary Relevant followers
     * @param {FollowsApiFetchRelevantFollowersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     * @returns {Promise<RelevantFollowersResponse>} A promise that resolves to a `RelevantFollowersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-followers)
     * 
     */
    public fetchRelevantFollowers(requestParameters: FollowsApiFetchRelevantFollowersRequest, options?: RawAxiosRequestConfig) {
        return FollowsApiFp(this.configuration).fetchRelevantFollowers(requestParameters.targetFid, requestParameters.viewerFid, requestParameters.xNeynarExperimental, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of followers for a specific FID.
     * @summary Followers
     * @param {FollowsApiFetchUserFollowersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
     * 
     */
    public fetchUserFollowers(requestParameters: FollowsApiFetchUserFollowersRequest, options?: RawAxiosRequestConfig) {
        return FollowsApiFp(this.configuration).fetchUserFollowers(requestParameters.fid, requestParameters.viewerFid, requestParameters.sortType, requestParameters.limit, requestParameters.cursor, requestParameters.xNeynarExperimental, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of users who a given user is following. Can optionally include a viewer_fid and sort_type.
     * @summary Following
     * @param {FollowsApiFetchUserFollowingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FollowsApi
     * @returns {Promise<FollowersResponse>} A promise that resolves to a `FollowersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
     * 
     */
    public fetchUserFollowing(requestParameters: FollowsApiFetchUserFollowingRequest, options?: RawAxiosRequestConfig) {
        return FollowsApiFp(this.configuration).fetchUserFollowing(requestParameters.fid, requestParameters.viewerFid, requestParameters.sortType, requestParameters.limit, requestParameters.cursor, requestParameters.xNeynarExperimental, options).then((request) => request(this.axios, this.basePath));
    }
}

