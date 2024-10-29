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
import type { FarcasterActionReqBody } from '../models';
/**
 * ActionApi - axios parameter creator
 * @export
 */
export const ActionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
         * @summary User actions across apps
         * @param {string} apiKey API key required for authentication.
         * @param {FarcasterActionReqBody} farcasterActionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishFarcasterAction: async (apiKey: string, farcasterActionReqBody: FarcasterActionReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('publishFarcasterAction', 'apiKey', apiKey)
            // verify required parameter 'farcasterActionReqBody' is not null or undefined
            assertParamExists('publishFarcasterAction', 'farcasterActionReqBody', farcasterActionReqBody)
            const localVarPath = `/farcaster/action`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(farcasterActionReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActionApi - functional programming interface
 * @export
 */
export const ActionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActionApiAxiosParamCreator(configuration)
    return {
        /**
         * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
         * @summary User actions across apps
         * @param {string} apiKey API key required for authentication.
         * @param {FarcasterActionReqBody} farcasterActionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishFarcasterAction(apiKey: string, farcasterActionReqBody: FarcasterActionReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishFarcasterAction(apiKey, farcasterActionReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ActionApi.publishFarcasterAction']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ActionApi - factory interface
 * @export
 */
export const ActionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActionApiFp(configuration)
    return {
        /**
         * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
         * @summary User actions across apps
         * @param {string} apiKey API key required for authentication.
         * @param {FarcasterActionReqBody} farcasterActionReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishFarcasterAction(apiKey: string, farcasterActionReqBody: FarcasterActionReqBody, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.publishFarcasterAction(apiKey, farcasterActionReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ActionApi - object-oriented interface
 * @export
 * @class ActionApi
 * @extends {BaseAPI}
 */
export class ActionApi extends BaseAPI {
    /**
     * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
     * @summary User actions across apps
     * @param {string} apiKey API key required for authentication.
     * @param {FarcasterActionReqBody} farcasterActionReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public publishFarcasterAction(apiKey: string, farcasterActionReqBody: FarcasterActionReqBody, options?: RawAxiosRequestConfig) {
        return ActionApiFp(this.configuration).publishFarcasterAction(apiKey, farcasterActionReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}

