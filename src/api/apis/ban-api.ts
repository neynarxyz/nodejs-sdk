/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.31.0
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
import type { BanListResponse } from '../models';
// @ts-ignore
import type { BanReqBody } from '../models';
// @ts-ignore
import type { BanResponse } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
/**
 * BanApi - axios parameter creator
 * @export
 */
export const BanApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a list of FIDs from the app associated with your API key.
         * @summary Unban FIDs from app
         * @param {BanReqBody} banReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-bans)
         * 
         */
        deleteBans: async (banReqBody: BanReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'banReqBody' is not null or undefined
            assertParamExists('deleteBans', 'banReqBody', banReqBody)
            const localVarPath = `/v2/farcaster/ban/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(banReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches all FIDs that your app has banned.
         * @summary Banned FIDs of app
         * @param {boolean} [xNeynarExperimental] Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. 
         * @param {number} [limit] Number of results to fetch  (Default: 20, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanListResponse>} A promise that resolves to a `BanListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-ban-list)
         * 
         */
        fetchBanList: async (xNeynarExperimental?: boolean, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/farcaster/ban/list/`;
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
         * Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.
         * @summary Ban FIDs from app
         * @param {BanReqBody} banReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-bans)
         * 
         */
        publishBans: async (banReqBody: BanReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'banReqBody' is not null or undefined
            assertParamExists('publishBans', 'banReqBody', banReqBody)
            const localVarPath = `/v2/farcaster/ban/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(banReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BanApi - functional programming interface
 * @export
 */
export const BanApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BanApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes a list of FIDs from the app associated with your API key.
         * @summary Unban FIDs from app
         * @param {BanReqBody} banReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-bans)
         * 
         */
        async deleteBans(banReqBody: BanReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BanResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBans(banReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BanApi.deleteBans']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches all FIDs that your app has banned.
         * @summary Banned FIDs of app
         * @param {boolean} [xNeynarExperimental] Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details. 
         * @param {number} [limit] Number of results to fetch  (Default: 20, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanListResponse>} A promise that resolves to a `BanListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-ban-list)
         * 
         */
        async fetchBanList(xNeynarExperimental?: boolean, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BanListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchBanList(xNeynarExperimental, limit, cursor, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BanApi.fetchBanList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.
         * @summary Ban FIDs from app
         * @param {BanReqBody} banReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-bans)
         * 
         */
        async publishBans(banReqBody: BanReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BanResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishBans(banReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BanApi.publishBans']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BanApi - factory interface
 * @export
 */
export const BanApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BanApiFp(configuration)
    return {
        /**
         * Deletes a list of FIDs from the app associated with your API key.
         * @summary Unban FIDs from app
         * @param {BanApiDeleteBansRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-bans)
         * 
         */
        deleteBans(requestParameters: BanApiDeleteBansRequest, options?: RawAxiosRequestConfig): AxiosPromise<BanResponse> {
            return localVarFp.deleteBans(requestParameters.banReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches all FIDs that your app has banned.
         * @summary Banned FIDs of app
         * @param {BanApiFetchBanListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanListResponse>} A promise that resolves to a `BanListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-ban-list)
         * 
         */
        fetchBanList(requestParameters: BanApiFetchBanListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BanListResponse> {
            return localVarFp.fetchBanList(requestParameters.xNeynarExperimental, requestParameters.limit, requestParameters.cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.
         * @summary Ban FIDs from app
         * @param {BanApiPublishBansRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-bans)
         * 
         */
        publishBans(requestParameters: BanApiPublishBansRequest, options?: RawAxiosRequestConfig): AxiosPromise<BanResponse> {
            return localVarFp.publishBans(requestParameters.banReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BanApi - interface
 * @export
 * @interface BanApi
 */
export interface BanApiInterface {
    /**
     * Deletes a list of FIDs from the app associated with your API key.
     * @summary Unban FIDs from app
     * @param {BanApiDeleteBansRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BanApiInterface
     * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-bans)
     * 
     */
    deleteBans(requestParameters: BanApiDeleteBansRequest, options?: RawAxiosRequestConfig): AxiosPromise<BanResponse>;

    /**
     * Fetches all FIDs that your app has banned.
     * @summary Banned FIDs of app
     * @param {BanApiFetchBanListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BanApiInterface
     * @returns {Promise<BanListResponse>} A promise that resolves to a `BanListResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-ban-list)
     * 
     */
    fetchBanList(requestParameters?: BanApiFetchBanListRequest, options?: RawAxiosRequestConfig): AxiosPromise<BanListResponse>;

    /**
     * Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.
     * @summary Ban FIDs from app
     * @param {BanApiPublishBansRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BanApiInterface
     * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-bans)
     * 
     */
    publishBans(requestParameters: BanApiPublishBansRequest, options?: RawAxiosRequestConfig): AxiosPromise<BanResponse>;

}

/**
 * Request parameters for deleteBans operation in BanApi.
 * @export
 * @interface BanApiDeleteBansRequest
 */
export interface BanApiDeleteBansRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {BanReqBody}
     * @memberof BanApiDeleteBans
     */
    readonly banReqBody: BanReqBody
}

/**
 * Request parameters for fetchBanList operation in BanApi.
 * @export
 * @interface BanApiFetchBanListRequest
 */
export interface BanApiFetchBanListRequest {
    /**
     * Enables experimental features including filtering based on the Neynar score. See [docs](https://neynar.notion.site/Experimental-Features-1d2655195a8b80eb98b4d4ae7b76ae4a) for more details.
     * 
     * 
     * @globalHeader
     * @type {boolean}
     * @memberof BanApiFetchBanList
     */
    readonly xNeynarExperimental?: boolean

    /**
     * Number of results to fetch (Default: 20, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof BanApiFetchBanList
     */
    readonly limit?: number

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof BanApiFetchBanList
     */
    readonly cursor?: string
}

/**
 * Request parameters for publishBans operation in BanApi.
 * @export
 * @interface BanApiPublishBansRequest
 */
export interface BanApiPublishBansRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {BanReqBody}
     * @memberof BanApiPublishBans
     */
    readonly banReqBody: BanReqBody
}

/**
 * BanApi - object-oriented interface
 * @export
 * @class BanApi
 * @extends {BaseAPI}
 */
export class BanApi extends BaseAPI implements BanApiInterface {
    /**
     * Deletes a list of FIDs from the app associated with your API key.
     * @summary Unban FIDs from app
     * @param {BanApiDeleteBansRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BanApi
     * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-bans)
     * 
     */
    public deleteBans(requestParameters: BanApiDeleteBansRequest, options?: RawAxiosRequestConfig) {
        return BanApiFp(this.configuration).deleteBans(requestParameters.banReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches all FIDs that your app has banned.
     * @summary Banned FIDs of app
     * @param {BanApiFetchBanListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BanApi
     * @returns {Promise<BanListResponse>} A promise that resolves to a `BanListResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-ban-list)
     * 
     */
    public fetchBanList(requestParameters: BanApiFetchBanListRequest = {}, options?: RawAxiosRequestConfig) {
        return BanApiFp(this.configuration).fetchBanList(requestParameters.xNeynarExperimental, requestParameters.limit, requestParameters.cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Bans a list of FIDs from the app associated with your API key. Banned users, their casts and reactions will not appear in feeds.
     * @summary Ban FIDs from app
     * @param {BanApiPublishBansRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BanApi
     * @returns {Promise<BanResponse>} A promise that resolves to a `BanResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-bans)
     * 
     */
    public publishBans(requestParameters: BanApiPublishBansRequest, options?: RawAxiosRequestConfig) {
        return BanApiFp(this.configuration).publishBans(requestParameters.banReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

