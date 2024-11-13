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
import type { HubInfoResponse } from '../models';
/**
 * InfoApi - axios parameter creator
 * @export
 */
export const InfoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sync Methods
         * @param {boolean} dbstats Whether to return DB stats 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<HubInfoResponse>} A promise that resolves to a `HubInfoResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-hub-info)
         * 
         */
        lookupHubInfo: async (dbstats: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dbstats' is not null or undefined
            assertParamExists('lookupHubInfo', 'dbstats', dbstats)
            const localVarPath = `/v1/info`;
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

            if (dbstats !== undefined) {
                localVarQueryParameter['dbstats'] = dbstats;
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
 * InfoApi - functional programming interface
 * @export
 */
export const InfoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InfoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sync Methods
         * @param {boolean} dbstats Whether to return DB stats 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<HubInfoResponse>} A promise that resolves to a `HubInfoResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-hub-info)
         * 
         */
        async lookupHubInfo(dbstats: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HubInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupHubInfo(dbstats, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InfoApi.lookupHubInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * InfoApi - factory interface
 * @export
 */
export const InfoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InfoApiFp(configuration)
    return {
        /**
         * 
         * @summary Sync Methods
         * @param {InfoApiLookupHubInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<HubInfoResponse>} A promise that resolves to a `HubInfoResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-hub-info)
         * 
         */
        lookupHubInfo(requestParameters: InfoApiLookupHubInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<HubInfoResponse> {
            return localVarFp.lookupHubInfo(requestParameters.dbstats, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InfoApi - interface
 * @export
 * @interface InfoApi
 */
export interface InfoApiInterface {
    /**
     * 
     * @summary Sync Methods
     * @param {InfoApiLookupHubInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InfoApiInterface
     * @returns {Promise<HubInfoResponse>} A promise that resolves to a `HubInfoResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-hub-info)
     * 
     */
    lookupHubInfo(requestParameters: InfoApiLookupHubInfoRequest, options?: RawAxiosRequestConfig): AxiosPromise<HubInfoResponse>;

}

/**
 * Request parameters for lookupHubInfo operation in InfoApi.
 * @export
 * @interface InfoApiLookupHubInfoRequest
 */
export interface InfoApiLookupHubInfoRequest {
    /**
     * Whether to return DB stats
     * 
     * 
     * 
     * @type {boolean}
     * @memberof InfoApiLookupHubInfo
     */
    readonly dbstats: boolean
}

/**
 * InfoApi - object-oriented interface
 * @export
 * @class InfoApi
 * @extends {BaseAPI}
 */
export class InfoApi extends BaseAPI implements InfoApiInterface {
    /**
     * 
     * @summary Sync Methods
     * @param {InfoApiLookupHubInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InfoApi
     * @returns {Promise<HubInfoResponse>} A promise that resolves to a `HubInfoResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-hub-info)
     * 
     */
    public lookupHubInfo(requestParameters: InfoApiLookupHubInfoRequest, options?: RawAxiosRequestConfig) {
        return InfoApiFp(this.configuration).lookupHubInfo(requestParameters.dbstats, options).then((request) => request(this.axios, this.basePath));
    }
}

