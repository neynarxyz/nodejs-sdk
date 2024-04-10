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
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ChannelListResponse } from '../models';
// @ts-ignore
import { ChannelResponse } from '../models';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { UsersActiveChannelsResponse } from '../models';
// @ts-ignore
import { UsersResponse } from '../models';
/**
 * ChannelApi - axios parameter creator
 * @export
 */
export const ChannelApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches all channels that a user has casted in, in reverse chronological order. Once follows are on the protocol, we will allow choosing for different types of user activity (e.g. casted, followed, etc.).
         * @summary Get channels that a user is active in
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid The user\&#39;s fid (identifier)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        activeChannels: async (apiKey: string, fid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('activeChannels', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('activeChannels', 'fid', fid)
            const localVarPath = `/farcaster/channel/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
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
        /**
         * Returns details of a channel
         * @summary Retrieve channel details by id
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        channelDetails: async (apiKey: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('channelDetails', 'apiKey', apiKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('channelDetails', 'id', id)
            const localVarPath = `/farcaster/channel`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
        /**
         * Returns a list of followers for a specific channel. Max limit is 1000. Use cursor for pagination.
         * @summary Retrieve followers for a given channel
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of followers to retrieve (default 25, max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        channelFollowers: async (apiKey: string, id: string, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('channelFollowers', 'apiKey', apiKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('channelFollowers', 'id', id)
            const localVarPath = `/farcaster/channel/followers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
        /**
         * Returns a list of users who are active in a given channel, ordered by ascending FIDs
         * @summary Retrieve users who are active in a channel
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {boolean} hasRootCastAuthors Include users who posted the root cast in the channel
         * @param {boolean} [hasCastLikers] Include users who liked a cast in the channel
         * @param {boolean} [hasCastRecasters] Include users who recasted a cast in the channel
         * @param {boolean} [hasReplyAuthors] Include users who replied to a cast in the channel
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 100)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        channelUsers: async (apiKey: string, id: string, hasRootCastAuthors: boolean, hasCastLikers?: boolean, hasCastRecasters?: boolean, hasReplyAuthors?: boolean, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('channelUsers', 'apiKey', apiKey)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('channelUsers', 'id', id)
            // verify required parameter 'hasRootCastAuthors' is not null or undefined
            assertParamExists('channelUsers', 'hasRootCastAuthors', hasRootCastAuthors)
            const localVarPath = `/farcaster/channel/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (hasRootCastAuthors !== undefined) {
                localVarQueryParameter['has_root_cast_authors'] = hasRootCastAuthors;
            }

            if (hasCastLikers !== undefined) {
                localVarQueryParameter['has_cast_likers'] = hasCastLikers;
            }

            if (hasCastRecasters !== undefined) {
                localVarQueryParameter['has_cast_recasters'] = hasCastRecasters;
            }

            if (hasReplyAuthors !== undefined) {
                localVarQueryParameter['has_reply_authors'] = hasReplyAuthors;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
        /**
         * Returns a list of all channels with their details
         * @summary Retrieve all channels with their details
         * @param {string} apiKey API key required for authentication.
         * @param {number} [limit] Number of results to retrieve (default 25, max 50)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllChannels: async (apiKey: string, limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('listAllChannels', 'apiKey', apiKey)
            const localVarPath = `/farcaster/channel/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
        /**
         * Returns a list of channels based on id or name
         * @summary Search for channels based on id or name
         * @param {string} apiKey API key required for authentication.
         * @param {string} q Channel ID or name for the channel being queried
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchChannels: async (apiKey: string, q: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('searchChannels', 'apiKey', apiKey)
            // verify required parameter 'q' is not null or undefined
            assertParamExists('searchChannels', 'q', q)
            const localVarPath = `/farcaster/channel/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
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
        /**
         * Returns a list of trending channels based on activity
         * @summary Retrieve trending channels based on activity
         * @param {string} apiKey API key required for authentication.
         * @param {'1d' | '7d' | '30d'} [timeWindow] 
         * @param {number} [limit] Number of results to retrieve (default 10, max 25)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trendingChannels: async (apiKey: string, timeWindow?: '1d' | '7d' | '30d', limit?: number, cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('trendingChannels', 'apiKey', apiKey)
            const localVarPath = `/farcaster/channel/trending`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (timeWindow !== undefined) {
                localVarQueryParameter['time_window'] = timeWindow;
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
 * ChannelApi - functional programming interface
 * @export
 */
export const ChannelApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChannelApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetches all channels that a user has casted in, in reverse chronological order. Once follows are on the protocol, we will allow choosing for different types of user activity (e.g. casted, followed, etc.).
         * @summary Get channels that a user is active in
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid The user\&#39;s fid (identifier)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async activeChannels(apiKey: string, fid: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersActiveChannelsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.activeChannels(apiKey, fid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns details of a channel
         * @summary Retrieve channel details by id
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async channelDetails(apiKey: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.channelDetails(apiKey, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of followers for a specific channel. Max limit is 1000. Use cursor for pagination.
         * @summary Retrieve followers for a given channel
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of followers to retrieve (default 25, max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async channelFollowers(apiKey: string, id: string, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.channelFollowers(apiKey, id, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of users who are active in a given channel, ordered by ascending FIDs
         * @summary Retrieve users who are active in a channel
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {boolean} hasRootCastAuthors Include users who posted the root cast in the channel
         * @param {boolean} [hasCastLikers] Include users who liked a cast in the channel
         * @param {boolean} [hasCastRecasters] Include users who recasted a cast in the channel
         * @param {boolean} [hasReplyAuthors] Include users who replied to a cast in the channel
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 100)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async channelUsers(apiKey: string, id: string, hasRootCastAuthors: boolean, hasCastLikers?: boolean, hasCastRecasters?: boolean, hasReplyAuthors?: boolean, cursor?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.channelUsers(apiKey, id, hasRootCastAuthors, hasCastLikers, hasCastRecasters, hasReplyAuthors, cursor, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all channels with their details
         * @summary Retrieve all channels with their details
         * @param {string} apiKey API key required for authentication.
         * @param {number} [limit] Number of results to retrieve (default 25, max 50)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllChannels(apiKey: string, limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllChannels(apiKey, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of channels based on id or name
         * @summary Search for channels based on id or name
         * @param {string} apiKey API key required for authentication.
         * @param {string} q Channel ID or name for the channel being queried
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchChannels(apiKey: string, q: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchChannels(apiKey, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of trending channels based on activity
         * @summary Retrieve trending channels based on activity
         * @param {string} apiKey API key required for authentication.
         * @param {'1d' | '7d' | '30d'} [timeWindow] 
         * @param {number} [limit] Number of results to retrieve (default 10, max 25)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trendingChannels(apiKey: string, timeWindow?: '1d' | '7d' | '30d', limit?: number, cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.trendingChannels(apiKey, timeWindow, limit, cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChannelApi - factory interface
 * @export
 */
export const ChannelApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChannelApiFp(configuration)
    return {
        /**
         * Fetches all channels that a user has casted in, in reverse chronological order. Once follows are on the protocol, we will allow choosing for different types of user activity (e.g. casted, followed, etc.).
         * @summary Get channels that a user is active in
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid The user\&#39;s fid (identifier)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        activeChannels(apiKey: string, fid: number, options?: any): AxiosPromise<UsersActiveChannelsResponse> {
            return localVarFp.activeChannels(apiKey, fid, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns details of a channel
         * @summary Retrieve channel details by id
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        channelDetails(apiKey: string, id: string, options?: any): AxiosPromise<ChannelResponse> {
            return localVarFp.channelDetails(apiKey, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of followers for a specific channel. Max limit is 1000. Use cursor for pagination.
         * @summary Retrieve followers for a given channel
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of followers to retrieve (default 25, max 1000)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        channelFollowers(apiKey: string, id: string, cursor?: string, limit?: number, options?: any): AxiosPromise<UsersResponse> {
            return localVarFp.channelFollowers(apiKey, id, cursor, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of users who are active in a given channel, ordered by ascending FIDs
         * @summary Retrieve users who are active in a channel
         * @param {string} apiKey API key required for authentication.
         * @param {string} id Channel ID for the channel being queried
         * @param {boolean} hasRootCastAuthors Include users who posted the root cast in the channel
         * @param {boolean} [hasCastLikers] Include users who liked a cast in the channel
         * @param {boolean} [hasCastRecasters] Include users who recasted a cast in the channel
         * @param {boolean} [hasReplyAuthors] Include users who replied to a cast in the channel
         * @param {string} [cursor] Pagination cursor.
         * @param {number} [limit] Number of results to retrieve (default 25, max 100)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        channelUsers(apiKey: string, id: string, hasRootCastAuthors: boolean, hasCastLikers?: boolean, hasCastRecasters?: boolean, hasReplyAuthors?: boolean, cursor?: string, limit?: number, options?: any): AxiosPromise<UsersResponse> {
            return localVarFp.channelUsers(apiKey, id, hasRootCastAuthors, hasCastLikers, hasCastRecasters, hasReplyAuthors, cursor, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all channels with their details
         * @summary Retrieve all channels with their details
         * @param {string} apiKey API key required for authentication.
         * @param {number} [limit] Number of results to retrieve (default 25, max 50)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllChannels(apiKey: string, limit?: number, cursor?: string, options?: any): AxiosPromise<ChannelListResponse> {
            return localVarFp.listAllChannels(apiKey, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of channels based on id or name
         * @summary Search for channels based on id or name
         * @param {string} apiKey API key required for authentication.
         * @param {string} q Channel ID or name for the channel being queried
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchChannels(apiKey: string, q: string, options?: any): AxiosPromise<ChannelListResponse> {
            return localVarFp.searchChannels(apiKey, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of trending channels based on activity
         * @summary Retrieve trending channels based on activity
         * @param {string} apiKey API key required for authentication.
         * @param {'1d' | '7d' | '30d'} [timeWindow] 
         * @param {number} [limit] Number of results to retrieve (default 10, max 25)
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trendingChannels(apiKey: string, timeWindow?: '1d' | '7d' | '30d', limit?: number, cursor?: string, options?: any): AxiosPromise<ChannelListResponse> {
            return localVarFp.trendingChannels(apiKey, timeWindow, limit, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChannelApi - object-oriented interface
 * @export
 * @class ChannelApi
 * @extends {BaseAPI}
 */
export class ChannelApi extends BaseAPI {
    /**
     * Fetches all channels that a user has casted in, in reverse chronological order. Once follows are on the protocol, we will allow choosing for different types of user activity (e.g. casted, followed, etc.).
     * @summary Get channels that a user is active in
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid The user\&#39;s fid (identifier)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public activeChannels(apiKey: string, fid: number, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).activeChannels(apiKey, fid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details of a channel
     * @summary Retrieve channel details by id
     * @param {string} apiKey API key required for authentication.
     * @param {string} id Channel ID for the channel being queried
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public channelDetails(apiKey: string, id: string, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).channelDetails(apiKey, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of followers for a specific channel. Max limit is 1000. Use cursor for pagination.
     * @summary Retrieve followers for a given channel
     * @param {string} apiKey API key required for authentication.
     * @param {string} id Channel ID for the channel being queried
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of followers to retrieve (default 25, max 1000)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public channelFollowers(apiKey: string, id: string, cursor?: string, limit?: number, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).channelFollowers(apiKey, id, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of users who are active in a given channel, ordered by ascending FIDs
     * @summary Retrieve users who are active in a channel
     * @param {string} apiKey API key required for authentication.
     * @param {string} id Channel ID for the channel being queried
     * @param {boolean} hasRootCastAuthors Include users who posted the root cast in the channel
     * @param {boolean} [hasCastLikers] Include users who liked a cast in the channel
     * @param {boolean} [hasCastRecasters] Include users who recasted a cast in the channel
     * @param {boolean} [hasReplyAuthors] Include users who replied to a cast in the channel
     * @param {string} [cursor] Pagination cursor.
     * @param {number} [limit] Number of results to retrieve (default 25, max 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public channelUsers(apiKey: string, id: string, hasRootCastAuthors: boolean, hasCastLikers?: boolean, hasCastRecasters?: boolean, hasReplyAuthors?: boolean, cursor?: string, limit?: number, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).channelUsers(apiKey, id, hasRootCastAuthors, hasCastLikers, hasCastRecasters, hasReplyAuthors, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all channels with their details
     * @summary Retrieve all channels with their details
     * @param {string} apiKey API key required for authentication.
     * @param {number} [limit] Number of results to retrieve (default 25, max 50)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public listAllChannels(apiKey: string, limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).listAllChannels(apiKey, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of channels based on id or name
     * @summary Search for channels based on id or name
     * @param {string} apiKey API key required for authentication.
     * @param {string} q Channel ID or name for the channel being queried
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public searchChannels(apiKey: string, q: string, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).searchChannels(apiKey, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of trending channels based on activity
     * @summary Retrieve trending channels based on activity
     * @param {string} apiKey API key required for authentication.
     * @param {'1d' | '7d' | '30d'} [timeWindow] 
     * @param {number} [limit] Number of results to retrieve (default 10, max 25)
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    public trendingChannels(apiKey: string, timeWindow?: '1d' | '7d' | '30d', limit?: number, cursor?: string, options?: AxiosRequestConfig) {
        return ChannelApiFp(this.configuration).trendingChannels(apiKey, timeWindow, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}
