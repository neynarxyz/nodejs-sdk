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
import type { MarkNotificationsAsSeenReqBody } from '../models';
// @ts-ignore
import type { NotificationType } from '../models';
// @ts-ignore
import type { NotificationsResponse } from '../models';
// @ts-ignore
import type { OperationResponse } from '../models';
/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Mark notifications as seen
         * @summary Mark as seen
         * @param {string} apiKey API key required for authentication.
         * @param {MarkNotificationsAsSeenReqBody} markNotificationsAsSeenReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationsAsSeen: async (apiKey: string, markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('markNotificationsAsSeen', 'apiKey', apiKey)
            // verify required parameter 'markNotificationsAsSeenReqBody' is not null or undefined
            assertParamExists('markNotificationsAsSeen', 'markNotificationsAsSeenReqBody', markNotificationsAsSeenReqBody)
            const localVarPath = `/farcaster/notifications/seen`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(markNotificationsAsSeenReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of notifications for a specific FID.
         * @summary For user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {NotificationType} [type] Notification type to fetch.
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notifications: async (apiKey: string, fid: number, type?: NotificationType, priorityMode?: boolean, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('notifications', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('notifications', 'fid', fid)
            const localVarPath = `/farcaster/notifications`;
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

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (priorityMode !== undefined) {
                localVarQueryParameter['priority_mode'] = priorityMode;
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
         * Returns a list of notifications for a user in specific channels
         * @summary For user by channel
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {string} channelIds Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationsChannel: async (apiKey: string, fid: number, channelIds: string, priorityMode?: boolean, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('notificationsChannel', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('notificationsChannel', 'fid', fid)
            // verify required parameter 'channelIds' is not null or undefined
            assertParamExists('notificationsChannel', 'channelIds', channelIds)
            const localVarPath = `/farcaster/notifications/channel`;
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

            if (channelIds !== undefined) {
                localVarQueryParameter['channel_ids'] = channelIds;
            }

            if (priorityMode !== undefined) {
                localVarQueryParameter['priority_mode'] = priorityMode;
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
         * Returns a list of notifications for a user in specific parent_urls
         * @summary For user by parent_urls
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {string} parentUrls Comma separated parent_urls
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationsParentUrl: async (apiKey: string, fid: number, parentUrls: string, priorityMode?: boolean, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('notificationsParentUrl', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('notificationsParentUrl', 'fid', fid)
            // verify required parameter 'parentUrls' is not null or undefined
            assertParamExists('notificationsParentUrl', 'parentUrls', parentUrls)
            const localVarPath = `/farcaster/notifications/parent_url`;
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

            if (parentUrls !== undefined) {
                localVarQueryParameter['parent_urls'] = parentUrls;
            }

            if (priorityMode !== undefined) {
                localVarQueryParameter['priority_mode'] = priorityMode;
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
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Mark notifications as seen
         * @summary Mark as seen
         * @param {string} apiKey API key required for authentication.
         * @param {MarkNotificationsAsSeenReqBody} markNotificationsAsSeenReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markNotificationsAsSeen(apiKey: string, markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markNotificationsAsSeen(apiKey, markNotificationsAsSeenReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.markNotificationsAsSeen']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of notifications for a specific FID.
         * @summary For user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {NotificationType} [type] Notification type to fetch.
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notifications(apiKey: string, fid: number, type?: NotificationType, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.notifications(apiKey, fid, type, priorityMode, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.notifications']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of notifications for a user in specific channels
         * @summary For user by channel
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {string} channelIds Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationsChannel(apiKey: string, fid: number, channelIds: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.notificationsChannel(apiKey, fid, channelIds, priorityMode, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.notificationsChannel']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of notifications for a user in specific parent_urls
         * @summary For user by parent_urls
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {string} parentUrls Comma separated parent_urls
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationsParentUrl(apiKey: string, fid: number, parentUrls: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.notificationsParentUrl(apiKey, fid, parentUrls, priorityMode, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.notificationsParentUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * Mark notifications as seen
         * @summary Mark as seen
         * @param {string} apiKey API key required for authentication.
         * @param {MarkNotificationsAsSeenReqBody} markNotificationsAsSeenReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationsAsSeen(apiKey: string, markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.markNotificationsAsSeen(apiKey, markNotificationsAsSeenReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of notifications for a specific FID.
         * @summary For user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {NotificationType} [type] Notification type to fetch.
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notifications(apiKey: string, fid: number, type?: NotificationType, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse> {
            return localVarFp.notifications(apiKey, fid, type, priorityMode, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of notifications for a user in specific channels
         * @summary For user by channel
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {string} channelIds Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationsChannel(apiKey: string, fid: number, channelIds: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse> {
            return localVarFp.notificationsChannel(apiKey, fid, channelIds, priorityMode, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of notifications for a user in specific parent_urls
         * @summary For user by parent_urls
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
         * @param {string} parentUrls Comma separated parent_urls
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationsParentUrl(apiKey: string, fid: number, parentUrls: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse> {
            return localVarFp.notificationsParentUrl(apiKey, fid, parentUrls, priorityMode, cursor, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
    /**
     * Mark notifications as seen
     * @summary Mark as seen
     * @param {string} apiKey API key required for authentication.
     * @param {MarkNotificationsAsSeenReqBody} markNotificationsAsSeenReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public markNotificationsAsSeen(apiKey: string, markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).markNotificationsAsSeen(apiKey, markNotificationsAsSeenReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of notifications for a specific FID.
     * @summary For user
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
     * @param {NotificationType} [type] Notification type to fetch.
     * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public notifications(apiKey: string, fid: number, type?: NotificationType, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).notifications(apiKey, fid, type, priorityMode, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of notifications for a user in specific channels
     * @summary For user by channel
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
     * @param {string} channelIds Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
     * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public notificationsChannel(apiKey: string, fid: number, channelIds: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).notificationsChannel(apiKey, fid, channelIds, priorityMode, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of notifications for a user in specific parent_urls
     * @summary For user by parent_urls
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
     * @param {string} parentUrls Comma separated parent_urls
     * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public notificationsParentUrl(apiKey: string, fid: number, parentUrls: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).notificationsParentUrl(apiKey, fid, parentUrls, priorityMode, cursor, options).then((request) => request(this.axios, this.basePath));
    }
}

