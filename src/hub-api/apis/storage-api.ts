/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0
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
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { StorageLimitsResponse } from '../models';
/**
 * StorageApi - axios parameter creator
 * @export
 */
export const StorageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary FID\'s limits
         * @param {number} fid  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageLimitsResponse>} A promise that resolves to a `StorageLimitsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-limit)
         * 
         */
        lookupUserStorageLimit: async (fid: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('lookupUserStorageLimit', 'fid', fid)
            const localVarPath = `/v1/storageLimitsByFid`;
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
         * 
         * @summary FID\'s limits
         * @param {number} fid  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageLimitsResponse>} A promise that resolves to a `StorageLimitsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-limit)
         * 
         */
        async lookupUserStorageLimit(fid: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageLimitsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupUserStorageLimit(fid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StorageApi.lookupUserStorageLimit']?.[localVarOperationServerIndex]?.url;
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
         * 
         * @summary FID\'s limits
         * @param {StorageApiLookupUserStorageLimitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<StorageLimitsResponse>} A promise that resolves to a `StorageLimitsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-limit)
         * 
         */
        lookupUserStorageLimit(requestParameters: StorageApiLookupUserStorageLimitRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageLimitsResponse> {
            return localVarFp.lookupUserStorageLimit(requestParameters.fid, options).then((request) => request(axios, basePath));
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
     * 
     * @summary FID\'s limits
     * @param {StorageApiLookupUserStorageLimitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     * @returns {Promise<StorageLimitsResponse>} A promise that resolves to a `StorageLimitsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-limit)
     * 
     */
    lookupUserStorageLimit(requestParameters: StorageApiLookupUserStorageLimitRequest, options?: RawAxiosRequestConfig): AxiosPromise<StorageLimitsResponse>;

}

/**
 * Request parameters for lookupUserStorageLimit operation in StorageApi.
 * @export
 * @interface StorageApiLookupUserStorageLimitRequest
 */
export interface StorageApiLookupUserStorageLimitRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {number}
     * @memberof StorageApiLookupUserStorageLimit
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
     * 
     * @summary FID\'s limits
     * @param {StorageApiLookupUserStorageLimitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     * @returns {Promise<StorageLimitsResponse>} A promise that resolves to a `StorageLimitsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-storage-limit)
     * 
     */
    public lookupUserStorageLimit(requestParameters: StorageApiLookupUserStorageLimitRequest, options?: RawAxiosRequestConfig) {
        return StorageApiFp(this.configuration).lookupUserStorageLimit(requestParameters.fid, options).then((request) => request(this.axios, this.basePath));
    }
}

