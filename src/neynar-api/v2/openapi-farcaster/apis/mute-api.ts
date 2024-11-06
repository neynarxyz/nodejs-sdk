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
         * @param {number} [limit] Number of results to fetch
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchMuteList: async (fid: number, limit?: number, cursor?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * @param {number} [limit] Number of results to fetch
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchMuteList(fid: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MuteListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchMuteList(fid, limit, cursor, options);
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
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMute(muteReqBody: MuteReqBody, options?: RawAxiosRequestConfig): AxiosPromise<MuteResponse> {
            return localVarFp.deleteMute(muteReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches all FIDs that a user has muted.
         * @summary Muted FIDs of user
         * @param {number} fid The user\&#39;s FID (identifier)
         * @param {number} [limit] Number of results to fetch
         * @param {string} [cursor] Pagination cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchMuteList(fid: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig): AxiosPromise<MuteListResponse> {
            return localVarFp.fetchMuteList(fid, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
         * @summary Mute FID
         * @param {MuteReqBody} muteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishMute(muteReqBody: MuteReqBody, options?: RawAxiosRequestConfig): AxiosPromise<MuteResponse> {
            return localVarFp.publishMute(muteReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MuteApi - object-oriented interface
 * @export
 * @class MuteApi
 * @extends {BaseAPI}
 */
export class MuteApi extends BaseAPI {
    /**
     * Deletes a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Unmute FID
     * @param {MuteReqBody} muteReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     */
    public deleteMute(muteReqBody: MuteReqBody, options?: RawAxiosRequestConfig) {
        return MuteApiFp(this.configuration).deleteMute(muteReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches all FIDs that a user has muted.
     * @summary Muted FIDs of user
     * @param {number} fid The user\&#39;s FID (identifier)
     * @param {number} [limit] Number of results to fetch
     * @param {string} [cursor] Pagination cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     */
    public fetchMuteList(fid: number, limit?: number, cursor?: string, options?: RawAxiosRequestConfig) {
        return MuteApiFp(this.configuration).fetchMuteList(fid, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a mute for a given FID. This is a whitelisted API, reach out if you want access.
     * @summary Mute FID
     * @param {MuteReqBody} muteReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MuteApi
     */
    public publishMute(muteReqBody: MuteReqBody, options?: RawAxiosRequestConfig) {
        return MuteApiFp(this.configuration).publishMute(muteReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

