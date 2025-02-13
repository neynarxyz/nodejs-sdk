/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.12.1
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
         * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/buy-storage)
         * 
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
         * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-allocations)
         * 
         */
        lookupUserStorageAllocations: async (fid: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('lookupUserStorageAllocations', 'fid', fid)
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
         * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-usage)
         * 
         */
        lookupUserStorageUsage: async (fid: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('lookupUserStorageUsage', 'fid', fid)
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
         * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/buy-storage)
         * 
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
         * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-allocations)
         * 
         */
        async lookupUserStorageAllocations(fid: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageAllocationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupUserStorageAllocations(fid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.lookupUserStorageAllocations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches storage usage for a given user
         * @summary Usage of user
         * @param {number} fid  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-usage)
         * 
         */
        async lookupUserStorageUsage(fid: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageUsageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupUserStorageUsage(fid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.lookupUserStorageUsage']?.[localVarOperationServerIndex]?.url;
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
         * @param {StorageApiBuyStorageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/buy-storage)
         * 
         */
        buyStorage(requestParameters: StorageApiBuyStorageRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageAllocationsResponse> {
            return localVarFp.buyStorage(requestParameters.buyStorageReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches storage allocations for a given user
         * @summary Allocation of user
         * @param {StorageApiLookupUserStorageAllocationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-allocations)
         * 
         */
        lookupUserStorageAllocations(requestParameters: StorageApiLookupUserStorageAllocationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageAllocationsResponse> {
            return localVarFp.lookupUserStorageAllocations(requestParameters.fid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches storage usage for a given user
         * @summary Usage of user
         * @param {StorageApiLookupUserStorageUsageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-usage)
         * 
         */
        lookupUserStorageUsage(requestParameters: StorageApiLookupUserStorageUsageRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageUsageResponse> {
            return localVarFp.lookupUserStorageUsage(requestParameters.fid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StorageApi - interface
 * @export
 * @interface StorageApi
 */
export interface StorageApiInterface {
    /**
     * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
     * @summary Buy storage
     * @param {StorageApiBuyStorageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/buy-storage)
     * 
     */
    buyStorage(requestParameters: StorageApiBuyStorageRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageAllocationsResponse>;

    /**
     * Fetches storage allocations for a given user
     * @summary Allocation of user
     * @param {StorageApiLookupUserStorageAllocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-allocations)
     * 
     */
    lookupUserStorageAllocations(requestParameters: StorageApiLookupUserStorageAllocationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageAllocationsResponse>;

    /**
     * Fetches storage usage for a given user
     * @summary Usage of user
     * @param {StorageApiLookupUserStorageUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-usage)
     * 
     */
    lookupUserStorageUsage(requestParameters: StorageApiLookupUserStorageUsageRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageUsageResponse>;

}

/**
 * Request parameters for buyStorage operation in StorageApi.
 * @export
 * @interface StorageApiBuyStorageRequest
 */
export interface StorageApiBuyStorageRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {BuyStorageReqBody}
     * @memberof StorageApiBuyStorage
     */
    readonly buyStorageReqBody: BuyStorageReqBody
}

/**
 * Request parameters for lookupUserStorageAllocations operation in StorageApi.
 * @export
 * @interface StorageApiLookupUserStorageAllocationsRequest
 */
export interface StorageApiLookupUserStorageAllocationsRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {number}
     * @memberof StorageApiLookupUserStorageAllocations
     */
    readonly fid: number
}

/**
 * Request parameters for lookupUserStorageUsage operation in StorageApi.
 * @export
 * @interface StorageApiLookupUserStorageUsageRequest
 */
export interface StorageApiLookupUserStorageUsageRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {number}
     * @memberof StorageApiLookupUserStorageUsage
     */
    readonly fid: number
}

/**
 * StorageApi - object-oriented interface
 * @export
 * @class StorageApi
 * @extends {BaseAPI}
 */
export class StorageApi extends BaseAPI implements StorageApiInterface {
    /**
     * This api will help you rent units of storage for an year for a specific FID. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
     * @summary Buy storage
     * @param {StorageApiBuyStorageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/buy-storage)
     * 
     */
    public buyStorage(requestParameters: StorageApiBuyStorageRequest, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).buyStorage(requestParameters.buyStorageReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches storage allocations for a given user
     * @summary Allocation of user
     * @param {StorageApiLookupUserStorageAllocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     * @returns {Promise<StorageAllocationsResponse>} A promise that resolves to a `StorageAllocationsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-allocations)
     * 
     */
    public lookupUserStorageAllocations(requestParameters: StorageApiLookupUserStorageAllocationsRequest, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).lookupUserStorageAllocations(requestParameters.fid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches storage usage for a given user
     * @summary Usage of user
     * @param {StorageApiLookupUserStorageUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     * @returns {Promise<StorageUsageResponse>} A promise that resolves to a `StorageUsageResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-usage)
     * 
     */
    public lookupUserStorageUsage(requestParameters: StorageApiLookupUserStorageUsageRequest, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).lookupUserStorageUsage(requestParameters.fid, options).then((request) => request(this.axios, this.basePath));
    }
}

