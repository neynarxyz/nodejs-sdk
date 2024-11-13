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
         * @param {FarcasterActionReqBody} farcaster_action_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/docs/farcaster-actions-spec)
         * 
         */
        publishFarcasterAction: async (farcaster_action_req_body: FarcasterActionReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'farcaster_action_req_body' is not null or undefined
            assertParamExists('publishFarcasterAction', 'farcaster_action_req_body', farcaster_action_req_body)
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

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(farcaster_action_req_body, localVarRequestOptions, configuration)

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
         * @param {FarcasterActionReqBody} farcaster_action_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/docs/farcaster-actions-spec)
         * 
         */
        async publishFarcasterAction(farcaster_action_req_body: FarcasterActionReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishFarcasterAction(farcaster_action_req_body, options);
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
         * @param {ActionApiPublishFarcasterActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/docs/farcaster-actions-spec)
         * 
         */
        publishFarcasterAction(requestParameters: ActionApiPublishFarcasterActionRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.publishFarcasterAction(requestParameters.farcaster_action_req_body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ActionApi - interface
 * @export
 * @interface ActionApi
 */
export interface ActionApiInterface {
    /**
     * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
     * @summary User actions across apps
     * @param {ActionApiPublishFarcasterActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApiInterface
     * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/docs/farcaster-actions-spec)
     * 
     */
    publishFarcasterAction(requestParameters: ActionApiPublishFarcasterActionRequest, options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: any; }>;

}

/**
 * Request parameters for publishFarcasterAction operation in ActionApi.
 * @export
 * @interface ActionApiPublishFarcasterActionRequest
 */
export interface ActionApiPublishFarcasterActionRequest {
    /**
     * 
     * 
     * 
     * 
     * @type {FarcasterActionReqBody}
     * @memberof ActionApiPublishFarcasterAction
     */
    readonly farcaster_action_req_body: FarcasterActionReqBody
}

/**
 * ActionApi - object-oriented interface
 * @export
 * @class ActionApi
 * @extends {BaseAPI}
 */
export class ActionApi extends BaseAPI implements ActionApiInterface {
    /**
     * Securely communicate and perform actions on behalf of users across different apps. It enables an app to send data or trigger actions in another app on behalf of a mutual user by signing messages using the user\'s Farcaster signer.
     * @summary User actions across apps
     * @param {ActionApiPublishFarcasterActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     * @returns {Promise<{ [key: string]: any; }>} A promise that resolves to a `{ [key: string]: any; }` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/docs/farcaster-actions-spec)
     * 
     */
    public publishFarcasterAction(requestParameters: ActionApiPublishFarcasterActionRequest, options?: RawAxiosRequestConfig) {
        return ActionApiFp(this.configuration).publishFarcasterAction(requestParameters.farcaster_action_req_body, options).then((request) => request(this.axios, this.basePath));
    }
}

