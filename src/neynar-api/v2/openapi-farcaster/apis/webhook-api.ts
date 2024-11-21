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
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorRes } from '../models';
// @ts-ignore
import { WebhookDeleteReqBody } from '../models';
// @ts-ignore
import { WebhookListResponse } from '../models';
// @ts-ignore
import { WebhookPatchReqBody } from '../models';
// @ts-ignore
import { WebhookPostReqBody } from '../models';
// @ts-ignore
import { WebhookPutReqBody } from '../models';
// @ts-ignore
import { WebhookResponse } from '../models';
/**
 * WebhookApi - axios parameter creator
 * @export
 */
export const WebhookApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a webhook
         * @summary Delete a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookDeleteReqBody} webhookDeleteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: async (apiKey: string, webhookDeleteReqBody: WebhookDeleteReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('deleteWebhook', 'apiKey', apiKey)
            // verify required parameter 'webhookDeleteReqBody' is not null or undefined
            assertParamExists('deleteWebhook', 'webhookDeleteReqBody', webhookDeleteReqBody)
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

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhookDeleteReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a list of webhooks associated to a user
         * @summary Associated webhooks of user
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchWebhooks: async (apiKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('fetchWebhooks', 'apiKey', apiKey)
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

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
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
         * Fetch a webhook
         * @summary Fetch a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {string} webhookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lookupWebhook: async (apiKey: string, webhookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('lookupWebhook', 'apiKey', apiKey)
            // verify required parameter 'webhookId' is not null or undefined
            assertParamExists('lookupWebhook', 'webhookId', webhookId)
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

            if (webhookId !== undefined) {
                localVarQueryParameter['webhook_id'] = webhookId;
            }

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
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
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPostReqBody} webhookPostReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishWebhook: async (apiKey: string, webhookPostReqBody: WebhookPostReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('publishWebhook', 'apiKey', apiKey)
            // verify required parameter 'webhookPostReqBody' is not null or undefined
            assertParamExists('publishWebhook', 'webhookPostReqBody', webhookPostReqBody)
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

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhookPostReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a webhook
         * @summary Update a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPutReqBody} webhookPutReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook: async (apiKey: string, webhookPutReqBody: WebhookPutReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('updateWebhook', 'apiKey', apiKey)
            // verify required parameter 'webhookPutReqBody' is not null or undefined
            assertParamExists('updateWebhook', 'webhookPutReqBody', webhookPutReqBody)
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

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhookPutReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update webhook active status
         * @summary Update webhook status
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPatchReqBody} webhookPatchReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhookActiveStatus: async (apiKey: string, webhookPatchReqBody: WebhookPatchReqBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('updateWebhookActiveStatus', 'apiKey', apiKey)
            // verify required parameter 'webhookPatchReqBody' is not null or undefined
            assertParamExists('updateWebhookActiveStatus', 'webhookPatchReqBody', webhookPatchReqBody)
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

            if (apiKey != null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(webhookPatchReqBody, localVarRequestOptions, configuration)

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
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookDeleteReqBody} webhookDeleteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWebhook(apiKey: string, webhookDeleteReqBody: WebhookDeleteReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWebhook(apiKey, webhookDeleteReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a list of webhooks associated to a user
         * @summary Associated webhooks of user
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchWebhooks(apiKey: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchWebhooks(apiKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a webhook
         * @summary Fetch a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {string} webhookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lookupWebhook(apiKey: string, webhookId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupWebhook(apiKey, webhookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a webhook
         * @summary Create a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPostReqBody} webhookPostReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishWebhook(apiKey: string, webhookPostReqBody: WebhookPostReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishWebhook(apiKey, webhookPostReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a webhook
         * @summary Update a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPutReqBody} webhookPutReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhook(apiKey: string, webhookPutReqBody: WebhookPutReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(apiKey, webhookPutReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update webhook active status
         * @summary Update webhook status
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPatchReqBody} webhookPatchReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhookActiveStatus(apiKey: string, webhookPatchReqBody: WebhookPatchReqBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhookActiveStatus(apiKey, webhookPatchReqBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookDeleteReqBody} webhookDeleteReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook(apiKey: string, webhookDeleteReqBody: WebhookDeleteReqBody, options?: any): AxiosPromise<WebhookResponse> {
            return localVarFp.deleteWebhook(apiKey, webhookDeleteReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of webhooks associated to a user
         * @summary Associated webhooks of user
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchWebhooks(apiKey: string, options?: any): AxiosPromise<WebhookListResponse> {
            return localVarFp.fetchWebhooks(apiKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a webhook
         * @summary Fetch a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {string} webhookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lookupWebhook(apiKey: string, webhookId: string, options?: any): AxiosPromise<WebhookResponse> {
            return localVarFp.lookupWebhook(apiKey, webhookId, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a webhook
         * @summary Create a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPostReqBody} webhookPostReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishWebhook(apiKey: string, webhookPostReqBody: WebhookPostReqBody, options?: any): AxiosPromise<WebhookResponse> {
            return localVarFp.publishWebhook(apiKey, webhookPostReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a webhook
         * @summary Update a webhook
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPutReqBody} webhookPutReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook(apiKey: string, webhookPutReqBody: WebhookPutReqBody, options?: any): AxiosPromise<WebhookResponse> {
            return localVarFp.updateWebhook(apiKey, webhookPutReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Update webhook active status
         * @summary Update webhook status
         * @param {string} apiKey API key required for authentication.
         * @param {WebhookPatchReqBody} webhookPatchReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhookActiveStatus(apiKey: string, webhookPatchReqBody: WebhookPatchReqBody, options?: any): AxiosPromise<WebhookResponse> {
            return localVarFp.updateWebhookActiveStatus(apiKey, webhookPatchReqBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhookApi - object-oriented interface
 * @export
 * @class WebhookApi
 * @extends {BaseAPI}
 */
export class WebhookApi extends BaseAPI {
    /**
     * Delete a webhook
     * @summary Delete a webhook
     * @param {string} apiKey API key required for authentication.
     * @param {WebhookDeleteReqBody} webhookDeleteReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public deleteWebhook(apiKey: string, webhookDeleteReqBody: WebhookDeleteReqBody, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).deleteWebhook(apiKey, webhookDeleteReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of webhooks associated to a user
     * @summary Associated webhooks of user
     * @param {string} apiKey API key required for authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public fetchWebhooks(apiKey: string, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).fetchWebhooks(apiKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a webhook
     * @summary Fetch a webhook
     * @param {string} apiKey API key required for authentication.
     * @param {string} webhookId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public lookupWebhook(apiKey: string, webhookId: string, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).lookupWebhook(apiKey, webhookId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a webhook
     * @summary Create a webhook
     * @param {string} apiKey API key required for authentication.
     * @param {WebhookPostReqBody} webhookPostReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public publishWebhook(apiKey: string, webhookPostReqBody: WebhookPostReqBody, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).publishWebhook(apiKey, webhookPostReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a webhook
     * @summary Update a webhook
     * @param {string} apiKey API key required for authentication.
     * @param {WebhookPutReqBody} webhookPutReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public updateWebhook(apiKey: string, webhookPutReqBody: WebhookPutReqBody, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).updateWebhook(apiKey, webhookPutReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update webhook active status
     * @summary Update webhook status
     * @param {string} apiKey API key required for authentication.
     * @param {WebhookPatchReqBody} webhookPatchReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookApi
     */
    public updateWebhookActiveStatus(apiKey: string, webhookPatchReqBody: WebhookPatchReqBody, options?: AxiosRequestConfig) {
        return WebhookApiFp(this.configuration).updateWebhookActiveStatus(apiKey, webhookPatchReqBody, options).then((request) => request(this.axios, this.basePath));
    }
}
