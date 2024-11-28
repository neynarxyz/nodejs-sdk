/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.5
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
import type { MuteListResponse } from '../models';
// @ts-ignore
import type { MuteReqBody } from '../models';
// @ts-ignore
import type { MuteResponse } from '../models';
/**
 * MuteApi - axios parameter creator
 * @export
 */
export const MuteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Unmute FID
         * @param {MuteReqBody} muteReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
         * 
         */
        deleteMute: async (muteReqBody: MuteReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'muteReqBody' is not null or undefined
            assertParamExists('deleteMute', 'muteReqBody', muteReqBody)
            const localVarPath = `/farcaster/mute`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(muteReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {number} fid The user\&#39;s FID (identifier) 
         * @param {number} [limit] Number of results to fetch  (Default: 20, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteListResponse>} A promise that resolves to a `MuteListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-mute-list)
         * 
         */
        fetchMuteList: async (fid: number, limit?: number, cursor?: string, xNeynarExperimental?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchMuteList', 'fid', fid)
            const localVarPath = `/farcaster/mute/list`;
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
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {MuteReqBody} muteReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
         * 
         */
        publishMute: async (muteReqBody: MuteReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'muteReqBody' is not null or undefined
            assertParamExists('publishMute', 'muteReqBody', muteReqBody)
            const localVarPath = `/farcaster/mute`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(muteReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MuteApi - functional programming interface
 * @export
 */
export const MuteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MuteApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Unmute FID
         * @param {MuteReqBody} muteReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
         * 
         */
        async deleteMute(muteReqBody: MuteReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMute(muteReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MuteApi.deleteMute']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {number} fid The user\&#39;s FID (identifier) 
         * @param {number} [limit] Number of results to fetch  (Default: 20, Maximum: 100)
         * @param {string} [cursor] Pagination cursor. 
         * @param {boolean} [xNeynarExperimental] Enables experimental features 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteListResponse>} A promise that resolves to a `MuteListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-mute-list)
         * 
         */
        async fetchMuteList(fid: number, limit?: number, cursor?: string, xNeynarExperimental?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchMuteList(fid, limit, cursor, xNeynarExperimental, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MuteApi.fetchMuteList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {MuteReqBody} muteReqBody  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
         * 
         */
        async publishMute(muteReqBody: MuteReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishMute(muteReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MuteApi.publishMute']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MuteApi - factory interface
 * @export
 */
export const MuteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MuteApiFp(configuration)
    return {
        /**
         * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Unmute FID
         * @param {MuteApiDeleteMuteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
         * 
         */
        deleteMute(requestParameters: MuteApiDeleteMuteRequest, options?: RawAxiosRequestConfig): AxiosPromise<MuteResponse> {
            return localVarFp.deleteMute(requestParameters.muteReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {MuteApiFetchMuteListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteListResponse>} A promise that resolves to a `MuteListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-mute-list)
         * 
         */
        fetchMuteList(requestParameters: MuteApiFetchMuteListRequest, options?: RawAxiosRequestConfig): AxiosPromise<MuteListResponse> {
            return localVarFp.fetchMuteList(requestParameters.fid, requestParameters.limit, requestParameters.cursor, requestParameters.xNeynarExperimental, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {MuteApiPublishMuteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
         * 
         */
        publishMute(requestParameters: MuteApiPublishMuteRequest, options?: RawAxiosRequestConfig): AxiosPromise<MuteResponse> {
            return localVarFp.publishMute(requestParameters.muteReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MuteApi - interface
 * @export
 * @interface MuteApi
 */
export interface MuteApiInterface {
    /**
     * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Unmute FID
     * @param {MuteApiDeleteMuteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApiInterface
     * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
     * 
     */
    deleteMute(requestParameters: MuteApiDeleteMuteRequest, options?: RawAxiosRequestConfig): AxiosPromise<MuteResponse>;

    /**
     * Fetches all FIDs that a user has muted.
     * @summary Muted FIDs of user
     * @param {MuteApiFetchMuteListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApiInterface
     * @returns {Promise<MuteListResponse>} A promise that resolves to a `MuteListResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-mute-list)
     * 
     */
    fetchMuteList(requestParameters: MuteApiFetchMuteListRequest, options?: RawAxiosRequestConfig): AxiosPromise<MuteListResponse>;

    /**
     * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Mute FID
     * @param {MuteApiPublishMuteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApiInterface
     * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
     * 
     */
    publishMute(requestParameters: MuteApiPublishMuteRequest, options?: RawAxiosRequestConfig): AxiosPromise<MuteResponse>;

}

/**
 * Request parameters for deleteMute operation in MuteApi.
 * @export
 * @interface MuteApiDeleteMuteRequest
 */
export interface MuteApiDeleteMuteRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {MuteReqBody}
     * @memberof MuteApiDeleteMute
     */
    readonly muteReqBody: MuteReqBody
}

/**
 * Request parameters for fetchMuteList operation in MuteApi.
 * @export
 * @interface MuteApiFetchMuteListRequest
 */
export interface MuteApiFetchMuteListRequest {
    /**
     * The user\&#39;s FID (identifier)
     * 
     * 
     * 
     * @type {number}
     * @memberof MuteApiFetchMuteList
     */
    readonly fid: number

    /**
     * Number of results to fetch (Default: 20, Maximum: 100)
     * 
     * 
     * 
     * @type {number}
     * @memberof MuteApiFetchMuteList
     */
    readonly limit?: number

    /**
     * Pagination cursor.
     * 
     * 
     * 
     * @type {string}
     * @memberof MuteApiFetchMuteList
     */
    readonly cursor?: string

    /**
     * Enables experimental features
     * 
     * 
     * @globalHeader
     * @type {boolean}
     * @memberof MuteApiFetchMuteList
     */
    readonly xNeynarExperimental?: boolean
}

/**
 * Request parameters for publishMute operation in MuteApi.
 * @export
 * @interface MuteApiPublishMuteRequest
 */
export interface MuteApiPublishMuteRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {MuteReqBody}
     * @memberof MuteApiPublishMute
     */
    readonly muteReqBody: MuteReqBody
}

/**
 * MuteApi - object-oriented interface
 * @export
 * @class MuteApi
 * @extends {BaseAPI}
 */
export class MuteApi extends BaseAPI implements MuteApiInterface {
    /**
     * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Unmute FID
     * @param {MuteApiDeleteMuteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-mute)
     * 
     */
    public deleteMute(requestParameters: MuteApiDeleteMuteRequest, options?: RawAxiosRequestConfig) {
        return MuteApiFp(this.configuration).deleteMute(requestParameters.muteReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches all FIDs that a user has muted.
     * @summary Muted FIDs of user
     * @param {MuteApiFetchMuteListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     * @returns {Promise<MuteListResponse>} A promise that resolves to a `MuteListResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-mute-list)
     * 
     */
    public fetchMuteList(requestParameters: MuteApiFetchMuteListRequest, options?: RawAxiosRequestConfig) {
        return MuteApiFp(this.configuration).fetchMuteList(requestParameters.fid, requestParameters.limit, requestParameters.cursor, requestParameters.xNeynarExperimental, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Mute FID
     * @param {MuteApiPublishMuteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     * @returns {Promise<MuteResponse>} A promise that resolves to a `MuteResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-mute)
     * 
     */
    public publishMute(requestParameters: MuteApiPublishMuteRequest, options?: RawAxiosRequestConfig) {
        return MuteApiFp(this.configuration).publishMute(requestParameters.muteReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

