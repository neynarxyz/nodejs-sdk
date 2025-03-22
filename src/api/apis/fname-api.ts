/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.23.0
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
import type { FnameAvailabilityResponse } from '../models';
/**
 * FnameApi - axios parameter creator
 * @export
 */
export const FnameApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check if a given fname is available
         * @summary Check fname availability
         * @param {string} fname  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to a `FnameAvailabilityResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/is-fname-available)
         * 
         */
        isFnameAvailable: async (fname: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fname' is not null or undefined
            assertParamExists('isFnameAvailable', 'fname', fname)
            const localVarPath = `/farcaster/fname/availability`;
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

            if (fname !== undefined) {
                localVarQueryParameter['fname'] = fname;
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
 * FnameApi - functional programming interface
 * @export
 */
export const FnameApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FnameApiAxiosParamCreator(configuration)
    return {
        /**
         * Check if a given fname is available
         * @summary Check fname availability
         * @param {string} fname  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to a `FnameAvailabilityResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/is-fname-available)
         * 
         */
        async isFnameAvailable(fname: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FnameAvailabilityResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isFnameAvailable(fname, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FnameApi.isFnameAvailable']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FnameApi - factory interface
 * @export
 */
export const FnameApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FnameApiFp(configuration)
    return {
        /**
         * Check if a given fname is available
         * @summary Check fname availability
         * @param {FnameApiIsFnameAvailableRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to a `FnameAvailabilityResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/is-fname-available)
         * 
         */
        isFnameAvailable(requestParameters: FnameApiIsFnameAvailableRequest, options?: RawAxiosRequestConfig): AxiosPromise<FnameAvailabilityResponse> {
            return localVarFp.isFnameAvailable(requestParameters.fname, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FnameApi - interface
 * @export
 * @interface FnameApi
 */
export interface FnameApiInterface {
    /**
     * Check if a given fname is available
     * @summary Check fname availability
     * @param {FnameApiIsFnameAvailableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FnameApiInterface
     * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to a `FnameAvailabilityResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/is-fname-available)
     * 
     */
    isFnameAvailable(requestParameters: FnameApiIsFnameAvailableRequest, options?: RawAxiosRequestConfig): AxiosPromise<FnameAvailabilityResponse>;

}

/**
 * Request parameters for isFnameAvailable operation in FnameApi.
 * @export
 * @interface FnameApiIsFnameAvailableRequest
 */
export interface FnameApiIsFnameAvailableRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {string}
     * @memberof FnameApiIsFnameAvailable
     */
    readonly fname: string
}

/**
 * FnameApi - object-oriented interface
 * @export
 * @class FnameApi
 * @extends {BaseAPI}
 */
export class FnameApi extends BaseAPI implements FnameApiInterface {
    /**
     * Check if a given fname is available
     * @summary Check fname availability
     * @param {FnameApiIsFnameAvailableRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FnameApi
     * @returns {Promise<FnameAvailabilityResponse>} A promise that resolves to a `FnameAvailabilityResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/is-fname-available)
     * 
     */
    public isFnameAvailable(requestParameters: FnameApiIsFnameAvailableRequest, options?: RawAxiosRequestConfig) {
        return FnameApiFp(this.configuration).isFnameAvailable(requestParameters.fname, options).then((request) => request(this.axios, this.basePath));
    }
}

