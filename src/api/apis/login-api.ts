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
import type { ErrorRes } from '../models';
// @ts-ignore
import type { NonceResponse } from '../models';
/**
 * LoginApi - axios parameter creator
 * @export
 */
export const LoginApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Nonce to sign a message
         * @summary Fetch nonce
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NonceResponse>} A promise that resolves to a `NonceResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-nonce)
         * 
         */
        fetchNonce: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/farcaster/login/nonce/`;
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
 * LoginApi - functional programming interface
 * @export
 */
export const LoginApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginApiAxiosParamCreator(configuration)
    return {
        /**
         * Nonce to sign a message
         * @summary Fetch nonce
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NonceResponse>} A promise that resolves to a `NonceResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-nonce)
         * 
         */
        async fetchNonce(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NonceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchNonce(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginApi.fetchNonce']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LoginApi - factory interface
 * @export
 */
export const LoginApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginApiFp(configuration)
    return {
        /**
         * Nonce to sign a message
         * @summary Fetch nonce
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<NonceResponse>} A promise that resolves to a `NonceResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-nonce)
         * 
         */
        fetchNonce(options?: RawAxiosRequestConfig): AxiosPromise<NonceResponse> {
            return localVarFp.fetchNonce(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginApi - interface
 * @export
 * @interface LoginApi
 */
export interface LoginApiInterface {
    /**
     * Nonce to sign a message
     * @summary Fetch nonce
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApiInterface
     * @returns {Promise<NonceResponse>} A promise that resolves to a `NonceResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-nonce)
     * 
     */
    fetchNonce(options?: RawAxiosRequestConfig): AxiosPromise<NonceResponse>;

}

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export class LoginApi extends BaseAPI implements LoginApiInterface {
    /**
     * Nonce to sign a message
     * @summary Fetch nonce
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     * @returns {Promise<NonceResponse>} A promise that resolves to a `NonceResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-nonce)
     * 
     */
    public fetchNonce(options?: RawAxiosRequestConfig) {
        return LoginApiFp(this.configuration).fetchNonce(options).then((request) => request(this.axios, this.basePath));
    }
}

