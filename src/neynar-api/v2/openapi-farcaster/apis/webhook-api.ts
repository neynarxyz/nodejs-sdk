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
import type { WebhookDeleteReqBody } from '../models';
// @ts-ignore
import type { WebhookListResponse } from '../models';
// @ts-ignore
import type { WebhookPatchReqBody } from '../models';
// @ts-ignore
import type { WebhookPostReqBody } from '../models';
// @ts-ignore
import type { WebhookPutReqBody } from '../models';
// @ts-ignore
import type { WebhookResponse } from '../models';
/**
 * WebhookApi - axios parameter creator
 * @export
 */
export const WebhookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a webhook
         * @summary Delete a webhook
         * @param {WebhookDeleteReqBody} webhook_delete_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
         * 
         */
        deleteWebhook: async (webhook_delete_req_body: WebhookDeleteReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhook_delete_req_body' is not null or undefined
            assertParamExists('deleteWebhook', 'webhook_delete_req_body', webhook_delete_req_body)
            const localVarPath = `/farcaster/webhook`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webhook_delete_req_body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a list of webhooks associated to a user
         * @summary Associated webhooks of user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-webhooks)
         * 
         */
        fetchWebhooks: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/farcaster/webhook/list`;
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
        /**
         * Fetch a webhook
         * @summary Fetch a webhook
         * @param {string} webhook_id  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
         * 
         */
        lookupWebhook: async (webhook_id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhook_id' is not null or undefined
            assertParamExists('lookupWebhook', 'webhook_id', webhook_id)
            const localVarPath = `/farcaster/webhook`;
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

            if (webhook_id !== undefined) {
                localVarQueryParameter['webhook_id'] = webhook_id;
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
         * Create a webhook
         * @summary Create a webhook
         * @param {WebhookPostReqBody} webhook_post_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-webhook)
         * 
         */
        publishWebhook: async (webhook_post_req_body: WebhookPostReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhook_post_req_body' is not null or undefined
            assertParamExists('publishWebhook', 'webhook_post_req_body', webhook_post_req_body)
            const localVarPath = `/farcaster/webhook`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(webhook_post_req_body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a webhook
         * @summary Update a webhook
         * @param {WebhookPutReqBody} webhook_put_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
         * 
         */
        updateWebhook: async (webhook_put_req_body: WebhookPutReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhook_put_req_body' is not null or undefined
            assertParamExists('updateWebhook', 'webhook_put_req_body', webhook_put_req_body)
            const localVarPath = `/farcaster/webhook`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhook_put_req_body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update webhook active status
         * @summary Update webhook status
         * @param {WebhookPatchReqBody} webhook_patch_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
         * 
         */
        updateWebhookActiveStatus: async (webhook_patch_req_body: WebhookPatchReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhook_patch_req_body' is not null or undefined
            assertParamExists('updateWebhookActiveStatus', 'webhook_patch_req_body', webhook_patch_req_body)
            const localVarPath = `/farcaster/webhook`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhook_patch_req_body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhookApi - functional programming interface
 * @export
 */
export const WebhookApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhookApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a webhook
         * @summary Delete a webhook
         * @param {WebhookDeleteReqBody} webhook_delete_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
         * 
         */
        async deleteWebhook(webhook_delete_req_body: WebhookDeleteReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(webhook_delete_req_body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.deleteWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch a list of webhooks associated to a user
         * @summary Associated webhooks of user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-webhooks)
         * 
         */
        async fetchWebhooks(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchWebhooks(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.fetchWebhooks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch a webhook
         * @summary Fetch a webhook
         * @param {string} webhook_id  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
         * 
         */
        async lookupWebhook(webhook_id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupWebhook(webhook_id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.lookupWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a webhook
         * @summary Create a webhook
         * @param {WebhookPostReqBody} webhook_post_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-webhook)
         * 
         */
        async publishWebhook(webhook_post_req_body: WebhookPostReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishWebhook(webhook_post_req_body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.publishWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update a webhook
         * @summary Update a webhook
         * @param {WebhookPutReqBody} webhook_put_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
         * 
         */
        async updateWebhook(webhook_put_req_body: WebhookPutReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(webhook_put_req_body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.updateWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update webhook active status
         * @summary Update webhook status
         * @param {WebhookPatchReqBody} webhook_patch_req_body  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
         * 
         */
        async updateWebhookActiveStatus(webhook_patch_req_body: WebhookPatchReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhookActiveStatus(webhook_patch_req_body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebhookApi.updateWebhookActiveStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebhookApi - factory interface
 * @export
 */
export const WebhookApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhookApiFp(configuration)
    return {
        /**
         * Delete a webhook
         * @summary Delete a webhook
         * @param {WebhookApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
         * 
         */
        deleteWebhook(requestParameters: WebhookApiDeleteWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse> {
            return localVarFp.deleteWebhook(requestParameters.webhook_delete_req_body, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of webhooks associated to a user
         * @summary Associated webhooks of user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-webhooks)
         * 
         */
        fetchWebhooks(options?: RawAxiosRequestConfig): AxiosPromise<WebhookListResponse> {
            return localVarFp.fetchWebhooks(options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a webhook
         * @summary Fetch a webhook
         * @param {WebhookApiLookupWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
         * 
         */
        lookupWebhook(requestParameters: WebhookApiLookupWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse> {
            return localVarFp.lookupWebhook(requestParameters.webhook_id, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a webhook
         * @summary Create a webhook
         * @param {WebhookApiPublishWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-webhook)
         * 
         */
        publishWebhook(requestParameters: WebhookApiPublishWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse> {
            return localVarFp.publishWebhook(requestParameters.webhook_post_req_body, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a webhook
         * @summary Update a webhook
         * @param {WebhookApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
         * 
         */
        updateWebhook(requestParameters: WebhookApiUpdateWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse> {
            return localVarFp.updateWebhook(requestParameters.webhook_put_req_body, options).then((request) => request(axios, basePath));
        },
        /**
         * Update webhook active status
         * @summary Update webhook status
         * @param {WebhookApiUpdateWebhookActiveStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
         * 
         */
        updateWebhookActiveStatus(requestParameters: WebhookApiUpdateWebhookActiveStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse> {
            return localVarFp.updateWebhookActiveStatus(requestParameters.webhook_patch_req_body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhookApi - interface
 * @export
 * @interface WebhookApi
 */
export interface WebhookApiInterface {
    /**
     * Delete a webhook
     * @summary Delete a webhook
     * @param {WebhookApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
     * 
     */
    deleteWebhook(requestParameters: WebhookApiDeleteWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse>;

    /**
     * Fetch a list of webhooks associated to a user
     * @summary Associated webhooks of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-webhooks)
     * 
     */
    fetchWebhooks(options?: RawAxiosRequestConfig): AxiosPromise<WebhookListResponse>;

    /**
     * Fetch a webhook
     * @summary Fetch a webhook
     * @param {WebhookApiLookupWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
     * 
     */
    lookupWebhook(requestParameters: WebhookApiLookupWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse>;

    /**
     * Create a webhook
     * @summary Create a webhook
     * @param {WebhookApiPublishWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-webhook)
     * 
     */
    publishWebhook(requestParameters: WebhookApiPublishWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse>;

    /**
     * Update a webhook
     * @summary Update a webhook
     * @param {WebhookApiUpdateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
     * 
     */
    updateWebhook(requestParameters: WebhookApiUpdateWebhookRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse>;

    /**
     * Update webhook active status
     * @summary Update webhook status
     * @param {WebhookApiUpdateWebhookActiveStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApiInterface
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
     * 
     */
    updateWebhookActiveStatus(requestParameters: WebhookApiUpdateWebhookActiveStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<WebhookResponse>;

}

/**
 * Request parameters for deleteWebhook operation in WebhookApi.
 * @export
 * @interface WebhookApiDeleteWebhookRequest
 */
export interface WebhookApiDeleteWebhookRequest {
    /**
     * 
     * 
     * 
     * @type {WebhookDeleteReqBody}
     * @memberof WebhookApiDeleteWebhook
     */
    readonly webhook_delete_req_body: WebhookDeleteReqBody
}

/**
 * Request parameters for lookupWebhook operation in WebhookApi.
 * @export
 * @interface WebhookApiLookupWebhookRequest
 */
export interface WebhookApiLookupWebhookRequest {
    /**
     * 
     * 
     * 
     * @type {string}
     * @memberof WebhookApiLookupWebhook
     */
    readonly webhook_id: string
}

/**
 * Request parameters for publishWebhook operation in WebhookApi.
 * @export
 * @interface WebhookApiPublishWebhookRequest
 */
export interface WebhookApiPublishWebhookRequest {
    /**
     * 
     * 
     * 
     * @type {WebhookPostReqBody}
     * @memberof WebhookApiPublishWebhook
     */
    readonly webhook_post_req_body: WebhookPostReqBody
}

/**
 * Request parameters for updateWebhook operation in WebhookApi.
 * @export
 * @interface WebhookApiUpdateWebhookRequest
 */
export interface WebhookApiUpdateWebhookRequest {
    /**
     * 
     * 
     * 
     * @type {WebhookPutReqBody}
     * @memberof WebhookApiUpdateWebhook
     */
    readonly webhook_put_req_body: WebhookPutReqBody
}

/**
 * Request parameters for updateWebhookActiveStatus operation in WebhookApi.
 * @export
 * @interface WebhookApiUpdateWebhookActiveStatusRequest
 */
export interface WebhookApiUpdateWebhookActiveStatusRequest {
    /**
     * 
     * 
     * 
     * @type {WebhookPatchReqBody}
     * @memberof WebhookApiUpdateWebhookActiveStatus
     */
    readonly webhook_patch_req_body: WebhookPatchReqBody
}

/**
 * WebhookApi - object-oriented interface
 * @export
 * @class WebhookApi
 * @extends {BaseAPI}
 */
export class WebhookApi extends BaseAPI implements WebhookApiInterface {
    /**
     * Delete a webhook
     * @summary Delete a webhook
     * @param {WebhookApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/delete-webhook)
     * 
     */
    public deleteWebhook(requestParameters: WebhookApiDeleteWebhookRequest, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).deleteWebhook(requestParameters.webhook_delete_req_body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of webhooks associated to a user
     * @summary Associated webhooks of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     * @returns {Promise<WebhookListResponse>} A promise that resolves to a `WebhookListResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-webhooks)
     * 
     */
    public fetchWebhooks(options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).fetchWebhooks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a webhook
     * @summary Fetch a webhook
     * @param {WebhookApiLookupWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-webhook)
     * 
     */
    public lookupWebhook(requestParameters: WebhookApiLookupWebhookRequest, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).lookupWebhook(requestParameters.webhook_id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a webhook
     * @summary Create a webhook
     * @param {WebhookApiPublishWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/publish-webhook)
     * 
     */
    public publishWebhook(requestParameters: WebhookApiPublishWebhookRequest, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).publishWebhook(requestParameters.webhook_post_req_body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a webhook
     * @summary Update a webhook
     * @param {WebhookApiUpdateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook)
     * 
     */
    public updateWebhook(requestParameters: WebhookApiUpdateWebhookRequest, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).updateWebhook(requestParameters.webhook_put_req_body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update webhook active status
     * @summary Update webhook status
     * @param {WebhookApiUpdateWebhookActiveStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     * @returns {Promise<WebhookResponse>} A promise that resolves to a `WebhookResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/update-webhook-active-status)
     * 
     */
    public updateWebhookActiveStatus(requestParameters: WebhookApiUpdateWebhookActiveStatusRequest, options?: RawAxiosRequestConfig) {
        return WebhookApiFp(this.configuration).updateWebhookActiveStatus(requestParameters.webhook_patch_req_body, options).then((request) => request(this.axios, this.basePath));
    }
}

