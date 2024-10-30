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
import type { BuyStorageReqBody } from '../models';
// @ts-ignore
import type { ConflictErrorRes } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
// @ts-ignore
import type { StorageAllocationsResponse } from '../models';
// @ts-ignore
import type { StorageUsageResponse } from '../models';
// @ts-ignore
import type { ZodError } from '../models';
/**
 * StorageApi - axios parameter creator
 * @export
 */
export const StorageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
         * @summary Buy storage
         * @param {BuyStorageReqBody} buyStorageReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        buyStorage: async (buyStorageReqBody: BuyStorageReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'buyStorageReqBody' is not null or undefined
            assertParamExists('buyStorage', 'buyStorageReqBody', buyStorageReqBody)
            const localVarPath = `/farcaster/storage/buy`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(buyStorageReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches storage allocations for a given user
         * @summary Allocation of user
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageAllocations: async (fid: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('storageAllocations', 'fid', fid)
            const localVarPath = `/farcaster/storage/allocations`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches storage usage for a given user
         * @summary Usage of user
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageUsage: async (fid: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('storageUsage', 'fid', fid)
            const localVarPath = `/farcaster/storage/usage`;
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
 * StorageApi - functional programming interface
 * @export
 */
export const StorageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StorageApiAxiosParamCreator(configuration)
    return {
        /**
         * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
         * @summary Buy storage
         * @param {BuyStorageReqBody} buyStorageReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async buyStorage(buyStorageReqBody: BuyStorageReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageAllocationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.buyStorage(buyStorageReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.buyStorage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches storage allocations for a given user
         * @summary Allocation of user
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storageAllocations(fid: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageAllocationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storageAllocations(fid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.storageAllocations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches storage usage for a given user
         * @summary Usage of user
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storageUsage(fid: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageUsageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storageUsage(fid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.storageUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * StorageApi - factory interface
 * @export
 */
export const StorageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StorageApiFp(configuration)
    return {
        /**
         * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
         * @summary Buy storage
         * @param {BuyStorageReqBody} buyStorageReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        buyStorage(buyStorageReqBody: BuyStorageReqBody, options?: RawAxiosRequestConfig): AxiosPromise<StorageAllocationsResponse> {
            return localVarFp.buyStorage(buyStorageReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches storage allocations for a given user
         * @summary Allocation of user
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageAllocations(fid: number, options?: RawAxiosRequestConfig): AxiosPromise<StorageAllocationsResponse> {
            return localVarFp.storageAllocations(fid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches storage usage for a given user
         * @summary Usage of user
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storageUsage(fid: number, options?: RawAxiosRequestConfig): AxiosPromise<StorageUsageResponse> {
            return localVarFp.storageUsage(fid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StorageApi - object-oriented interface
 * @export
 * @class StorageApi
 * @extends {BaseAPI}
 */
export class StorageApi extends BaseAPI {
    /**
     * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
     * @summary Buy storage
     * @param {BuyStorageReqBody} buyStorageReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public buyStorage(buyStorageReqBody: BuyStorageReqBody, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).buyStorage(buyStorageReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches storage allocations for a given user
     * @summary Allocation of user
     * @param {number} fid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public storageAllocations(fid: number, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).storageAllocations(fid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches storage usage for a given user
     * @summary Usage of user
     * @param {number} fid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public storageUsage(fid: number, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).storageUsage(fid, options).then((request) => request(this.axios, this.basePath));
    }
}

