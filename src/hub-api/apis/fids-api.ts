/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.35.0
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
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { FidsResponse } from '../models';
/**
 * FidsApi - axios parameter creator
 * @export
 */
export const FidsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch a list of all the FIDs.
         * @summary Fetch a list of all the FIDs
         * @param {number} shardId The shard ID to filter by 
         * @param {number} [pageSize] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
         * 
         */
        fetchFids: async (shardId: number, pageSize?: number, reverse?: boolean, pageToken?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'shardId' is not null or undefined
            assertParamExists('fetchFids', 'shardId', shardId)
            const localVarPath = `/v1/fids`;
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

            if (shardId !== undefined) {
                localVarQueryParameter['shard_id'] = shardId;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
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
 * FidsApi - functional programming interface
 * @export
 */
export const FidsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FidsApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch a list of all the FIDs.
         * @summary Fetch a list of all the FIDs
         * @param {number} shardId The shard ID to filter by 
         * @param {number} [pageSize] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
         * 
         */
        async fetchFids(shardId: number, pageSize?: number, reverse?: boolean, pageToken?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FidsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchFids(shardId, pageSize, reverse, pageToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FidsApi.fetchFids']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FidsApi - factory interface
 * @export
 */
export const FidsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FidsApiFp(configuration)
    return {
        /**
         * Fetch a list of all the FIDs.
         * @summary Fetch a list of all the FIDs
         * @param {FidsApiFetchFidsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
         * 
         */
        fetchFids(requestParameters: FidsApiFetchFidsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FidsResponse> {
            return localVarFp.fetchFids(requestParameters.shardId, requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FidsApi - interface
 * @export
 * @interface FidsApi
 */
export interface FidsApiInterface {
    /**
     * Fetch a list of all the FIDs.
     * @summary Fetch a list of all the FIDs
     * @param {FidsApiFetchFidsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FidsApiInterface
     * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
     * 
     */
    fetchFids(requestParameters: FidsApiFetchFidsRequest, options?: RawAxiosRequestConfig): AxiosPromise<FidsResponse>;

}

/**
 * Request parameters for fetchFids operation in FidsApi.
 * @export
 * @interface FidsApiFetchFidsRequest
 */
export interface FidsApiFetchFidsRequest {
    /**
     * The shard ID to filter by
     * 
     * 
     * 
     * @type {number}
     * @memberof FidsApiFetchFids
     */
    readonly shardId: number

    /**
     * Maximum number of messages to return in a single response
     * 
     * 
     * 
     * @type {number}
     * @memberof FidsApiFetchFids
     */
    readonly pageSize?: number

    /**
     * Reverse the sort order, returning latest messages first
     * 
     * 
     * 
     * @type {boolean}
     * @memberof FidsApiFetchFids
     */
    readonly reverse?: boolean

    /**
     * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * 
     * 
     * 
     * @type {string}
     * @memberof FidsApiFetchFids
     */
    readonly pageToken?: string
}

/**
 * FidsApi - object-oriented interface
 * @export
 * @class FidsApi
 * @extends {BaseAPI}
 */
export class FidsApi extends BaseAPI implements FidsApiInterface {
    /**
     * Fetch a list of all the FIDs.
     * @summary Fetch a list of all the FIDs
     * @param {FidsApiFetchFidsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FidsApi
     * @returns {Promise<FidsResponse>} A promise that resolves to a `FidsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-fids)
     * 
     */
    public fetchFids(requestParameters: FidsApiFetchFidsRequest, options?: RawAxiosRequestConfig) {
        return FidsApiFp(this.configuration).fetchFids(requestParameters.shardId, requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(this.axios, this.basePath));
    }
}

