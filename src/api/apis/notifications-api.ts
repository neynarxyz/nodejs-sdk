/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.2
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
         * Returns a list of notifications for a specific FID.
         * @summary For user
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. 
         * @param {Array<NotificationType>} [type] Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies. 
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). 
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
         * 
         */
        fetchAllNotifications: async (fid: number, type?: Array<NotificationType>, priorityMode?: boolean, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchAllNotifications', 'fid', fid)
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

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (type) {
                localVarQueryParameter['type'] = type.join(COLLECTION_FORMATS.csv);
            }

            if (priorityMode !== undefined) {
                localVarQueryParameter['priority_mode'] = priorityMode;
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
         * Returns a list of notifications for a user in specific channels
         * @summary For user by channel
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. 
         * @param {string} channelIds Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels) 
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). 
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
         * 
         */
        fetchChannelNotificationsForUser: async (fid: number, channelIds: string, priorityMode?: boolean, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchChannelNotificationsForUser', 'fid', fid)
            // verify required parameter 'channelIds' is not null or undefined
            assertParamExists('fetchChannelNotificationsForUser', 'channelIds', channelIds)
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

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

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
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. 
         * @param {string} parentUrls Comma separated parent_urls 
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). 
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
         * 
         */
        fetchNotificationsByParentUrlForUser: async (fid: number, parentUrls: string, priorityMode?: boolean, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchNotificationsByParentUrlForUser', 'fid', fid)
            // verify required parameter 'parentUrls' is not null or undefined
            assertParamExists('fetchNotificationsByParentUrlForUser', 'parentUrls', parentUrls)
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

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mark notifications as seen
         * @summary Mark as seen
         * @param {MarkNotificationsAsSeenReqBody} markNotificationsAsSeenReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
         * 
         */
        markNotificationsAsSeen: async (markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
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
         * Returns a list of notifications for a specific FID.
         * @summary For user
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. 
         * @param {Array<NotificationType>} [type] Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies. 
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). 
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
         * 
         */
        async fetchAllNotifications(fid: number, type?: Array<NotificationType>, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllNotifications(fid, type, priorityMode, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.fetchAllNotifications']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of notifications for a user in specific channels
         * @summary For user by channel
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. 
         * @param {string} channelIds Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels) 
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). 
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
         * 
         */
        async fetchChannelNotificationsForUser(fid: number, channelIds: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchChannelNotificationsForUser(fid, channelIds, priorityMode, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.fetchChannelNotificationsForUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of notifications for a user in specific parent_urls
         * @summary For user by parent_urls
         * @param {number} fid FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks. 
         * @param {string} parentUrls Comma separated parent_urls 
         * @param {boolean} [priorityMode] When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided). 
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
         * 
         */
        async fetchNotificationsByParentUrlForUser(fid: number, parentUrls: string, priorityMode?: boolean, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchNotificationsByParentUrlForUser(fid, parentUrls, priorityMode, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.fetchNotificationsByParentUrlForUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mark notifications as seen
         * @summary Mark as seen
         * @param {MarkNotificationsAsSeenReqBody} markNotificationsAsSeenReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
         * 
         */
        async markNotificationsAsSeen(markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OperationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markNotificationsAsSeen(markNotificationsAsSeenReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationsApi.markNotificationsAsSeen']?.[localVarOperationServerIndex]?.url;
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
         * Returns a list of notifications for a specific FID.
         * @summary For user
         * @param {NotificationsApiFetchAllNotificationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
         * 
         */
        fetchAllNotifications(requestParameters: NotificationsApiFetchAllNotificationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse> {
            return localVarFp.fetchAllNotifications(requestParameters.fid, requestParameters.type, requestParameters.priorityMode, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of notifications for a user in specific channels
         * @summary For user by channel
         * @param {NotificationsApiFetchChannelNotificationsForUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
         * 
         */
        fetchChannelNotificationsForUser(requestParameters: NotificationsApiFetchChannelNotificationsForUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse> {
            return localVarFp.fetchChannelNotificationsForUser(requestParameters.fid, requestParameters.channelIds, requestParameters.priorityMode, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of notifications for a user in specific parent_urls
         * @summary For user by parent_urls
         * @param {NotificationsApiFetchNotificationsByParentUrlForUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
         * 
         */
        fetchNotificationsByParentUrlForUser(requestParameters: NotificationsApiFetchNotificationsByParentUrlForUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse> {
            return localVarFp.fetchNotificationsByParentUrlForUser(requestParameters.fid, requestParameters.parentUrls, requestParameters.priorityMode, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Mark notifications as seen
         * @summary Mark as seen
         * @param {NotificationsApiMarkNotificationsAsSeenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
         * 
         */
        markNotificationsAsSeen(requestParameters: NotificationsApiMarkNotificationsAsSeenRequest, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse> {
            return localVarFp.markNotificationsAsSeen(requestParameters.markNotificationsAsSeenReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsApi - interface
 * @export
 * @interface NotificationsApi
 */
export interface NotificationsApiInterface {
    /**
     * Returns a list of notifications for a specific FID.
     * @summary For user
     * @param {NotificationsApiFetchAllNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
     * 
     */
    fetchAllNotifications(requestParameters: NotificationsApiFetchAllNotificationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse>;

    /**
     * Returns a list of notifications for a user in specific channels
     * @summary For user by channel
     * @param {NotificationsApiFetchChannelNotificationsForUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
     * 
     */
    fetchChannelNotificationsForUser(requestParameters: NotificationsApiFetchChannelNotificationsForUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse>;

    /**
     * Returns a list of notifications for a user in specific parent_urls
     * @summary For user by parent_urls
     * @param {NotificationsApiFetchNotificationsByParentUrlForUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
     * 
     */
    fetchNotificationsByParentUrlForUser(requestParameters: NotificationsApiFetchNotificationsByParentUrlForUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationsResponse>;

    /**
     * Mark notifications as seen
     * @summary Mark as seen
     * @param {NotificationsApiMarkNotificationsAsSeenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApiInterface
     * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
     * 
     */
    markNotificationsAsSeen(requestParameters: NotificationsApiMarkNotificationsAsSeenRequest, options?: RawAxiosRequestConfig): AxiosPromise<OperationResponse>;

}

/**
 * Request parameters for fetchAllNotifications operation in NotificationsApi.
 * @export
 * @interface NotificationsApiFetchAllNotificationsRequest
 */
export interface NotificationsApiFetchAllNotificationsRequest {
    /**
     * FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
     * 
     * 
     * 
     * @type {number}
     * @memberof NotificationsApiFetchAllNotifications
     */
    readonly fid: number

    /**
     * Notification type to fetch. Comma separated values of follows, recasts, likes, mentions, replies.
     * 
     * 
     * 
     * @type {Array<NotificationType>}
     * @memberof NotificationsApiFetchAllNotifications
     */
    readonly type?: Array<NotificationType>

    /**
     * When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
     * 
     * 
     * 
     * @type {boolean}
     * @memberof NotificationsApiFetchAllNotifications
     */
    readonly priorityMode?: boolean

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof NotificationsApiFetchAllNotifications
     */
    readonly cursor?: string
}

/**
 * Request parameters for fetchChannelNotificationsForUser operation in NotificationsApi.
 * @export
 * @interface NotificationsApiFetchChannelNotificationsForUserRequest
 */
export interface NotificationsApiFetchChannelNotificationsForUserRequest {
    /**
     * FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
     * 
     * 
     * 
     * @type {number}
     * @memberof NotificationsApiFetchChannelNotificationsForUser
     */
    readonly fid: number

    /**
     * Comma separated channel_ids (find list of all channels here - https://docs.neynar.com/reference/list-all-channels)
     * 
     * @commaSeparated
     * 
     * @type {string}
     * @memberof NotificationsApiFetchChannelNotificationsForUser
     */
    readonly channelIds: string

    /**
     * When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
     * 
     * 
     * 
     * @type {boolean}
     * @memberof NotificationsApiFetchChannelNotificationsForUser
     */
    readonly priorityMode?: boolean

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof NotificationsApiFetchChannelNotificationsForUser
     */
    readonly cursor?: string
}

/**
 * Request parameters for fetchNotificationsByParentUrlForUser operation in NotificationsApi.
 * @export
 * @interface NotificationsApiFetchNotificationsByParentUrlForUserRequest
 */
export interface NotificationsApiFetchNotificationsByParentUrlForUserRequest {
    /**
     * FID of the user you you want to fetch notifications for. The response will respect this user\&#39;s mutes and blocks.
     * 
     * 
     * 
     * @type {number}
     * @memberof NotificationsApiFetchNotificationsByParentUrlForUser
     */
    readonly fid: number

    /**
     * Comma separated parent_urls
     * 
     * @commaSeparated
     * 
     * @type {string}
     * @memberof NotificationsApiFetchNotificationsByParentUrlForUser
     */
    readonly parentUrls: string

    /**
     * When true, only returns notifications from power badge users and users that the viewer follows (if viewer_fid is provided).
     * 
     * 
     * 
     * @type {boolean}
     * @memberof NotificationsApiFetchNotificationsByParentUrlForUser
     */
    readonly priorityMode?: boolean

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof NotificationsApiFetchNotificationsByParentUrlForUser
     */
    readonly cursor?: string
}

/**
 * Request parameters for markNotificationsAsSeen operation in NotificationsApi.
 * @export
 * @interface NotificationsApiMarkNotificationsAsSeenRequest
 */
export interface NotificationsApiMarkNotificationsAsSeenRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {MarkNotificationsAsSeenReqBody}
     * @memberof NotificationsApiMarkNotificationsAsSeen
     */
    readonly markNotificationsAsSeenReqBody: MarkNotificationsAsSeenReqBody
}

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI implements NotificationsApiInterface {
    /**
     * Returns a list of notifications for a specific FID.
     * @summary For user
     * @param {NotificationsApiFetchAllNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-all-notifications)
     * 
     */
    public fetchAllNotifications(requestParameters: NotificationsApiFetchAllNotificationsRequest, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).fetchAllNotifications(requestParameters.fid, requestParameters.type, requestParameters.priorityMode, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of notifications for a user in specific channels
     * @summary For user by channel
     * @param {NotificationsApiFetchChannelNotificationsForUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-channel-notifications-for-user)
     * 
     */
    public fetchChannelNotificationsForUser(requestParameters: NotificationsApiFetchChannelNotificationsForUserRequest, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).fetchChannelNotificationsForUser(requestParameters.fid, requestParameters.channelIds, requestParameters.priorityMode, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of notifications for a user in specific parent_urls
     * @summary For user by parent_urls
     * @param {NotificationsApiFetchNotificationsByParentUrlForUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     * @returns {Promise<NotificationsResponse>} A promise that resolves to a `NotificationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-notifications-by-parent-url-for-user)
     * 
     */
    public fetchNotificationsByParentUrlForUser(requestParameters: NotificationsApiFetchNotificationsByParentUrlForUserRequest, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).fetchNotificationsByParentUrlForUser(requestParameters.fid, requestParameters.parentUrls, requestParameters.priorityMode, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mark notifications as seen
     * @summary Mark as seen
     * @param {NotificationsApiMarkNotificationsAsSeenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     * @returns {Promise<OperationResponse>} A promise that resolves to a `OperationResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/mark-notifications-as-seen)
     * 
     */
    public markNotificationsAsSeen(requestParameters: NotificationsApiMarkNotificationsAsSeenRequest, options?: RawAxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).markNotificationsAsSeen(requestParameters.markNotificationsAsSeenReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

