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
import type { SubscribedToResponse } from '../models';
// @ts-ignore
import type { SubscribersResponse } from '../models';
// @ts-ignore
import type { SubscriptionProvider } from '../models';
// @ts-ignore
import type { SubscriptionProviders } from '../models';
// @ts-ignore
import type { SubscriptionsResponse } from '../models';
/**
 * SubscribersApi - axios parameter creator
 * @export
 */
export const SubscribersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch what FIDs and contracts a FID is subscribed to.
         * @summary Subscribed to
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribedTo: async (apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('subscribedTo', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('subscribedTo', 'fid', fid)
            // verify required parameter 'subscriptionProvider' is not null or undefined
            assertParamExists('subscribedTo', 'subscriptionProvider', subscriptionProvider)
            const localVarPath = `/farcaster/user/subscribed_to`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (subscriptionProvider !== undefined) {
                localVarQueryParameter['subscription_provider'] = subscriptionProvider;
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
         * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
         * @summary Subscribers of a user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProviders} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribers: async (apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('subscribers', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('subscribers', 'fid', fid)
            // verify required parameter 'subscriptionProvider' is not null or undefined
            assertParamExists('subscribers', 'subscriptionProvider', subscriptionProvider)
            const localVarPath = `/farcaster/user/subscribers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (subscriptionProvider !== undefined) {
                localVarQueryParameter['subscription_provider'] = subscriptionProvider;
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
         * Fetch created subscriptions for a given FID\'s.
         * @summary Subscriptions created by FID
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscriptionsCreated: async (apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('subscriptionsCreated', 'apiKey', apiKey)
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('subscriptionsCreated', 'fid', fid)
            // verify required parameter 'subscriptionProvider' is not null or undefined
            assertParamExists('subscriptionsCreated', 'subscriptionProvider', subscriptionProvider)
            const localVarPath = `/farcaster/user/subscriptions_created`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (subscriptionProvider !== undefined) {
                localVarQueryParameter['subscription_provider'] = subscriptionProvider;
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
    }
};

/**
 * SubscribersApi - functional programming interface
 * @export
 */
export const SubscribersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubscribersApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch what FIDs and contracts a FID is subscribed to.
         * @summary Subscribed to
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscribedTo(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscribedToResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscribedTo(apiKey, fid, subscriptionProvider, viewerFid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.subscribedTo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
         * @summary Subscribers of a user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProviders} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscribers(apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscribersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscribers(apiKey, fid, subscriptionProvider, viewerFid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.subscribers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch created subscriptions for a given FID\'s.
         * @summary Subscriptions created by FID
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscriptionsCreated(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscriptionsCreated(apiKey, fid, subscriptionProvider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.subscriptionsCreated']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SubscribersApi - factory interface
 * @export
 */
export const SubscribersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubscribersApiFp(configuration)
    return {
        /**
         * Fetch what FIDs and contracts a FID is subscribed to.
         * @summary Subscribed to
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribedTo(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options?: RawAxiosRequestConfig): AxiosPromise<SubscribedToResponse> {
            return localVarFp.subscribedTo(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
         * @summary Subscribers of a user
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProviders} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribers(apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options?: RawAxiosRequestConfig): AxiosPromise<SubscribersResponse> {
            return localVarFp.subscribers(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch created subscriptions for a given FID\'s.
         * @summary Subscriptions created by FID
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscriptionsCreated(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options?: RawAxiosRequestConfig): AxiosPromise<SubscriptionsResponse> {
            return localVarFp.subscriptionsCreated(apiKey, fid, subscriptionProvider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubscribersApi - object-oriented interface
 * @export
 * @class SubscribersApi
 * @extends {BaseAPI}
 */
export class SubscribersApi extends BaseAPI {
    /**
     * Fetch what FIDs and contracts a FID is subscribed to.
     * @summary Subscribed to
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {SubscriptionProvider} subscriptionProvider 
     * @param {number} [viewerFid] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     */
    public subscribedTo(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).subscribedTo(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
     * @summary Subscribers of a user
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {SubscriptionProviders} subscriptionProvider 
     * @param {number} [viewerFid] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     */
    public subscribers(apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).subscribers(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch created subscriptions for a given FID\'s.
     * @summary Subscriptions created by FID
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {SubscriptionProvider} subscriptionProvider 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     */
    public subscriptionsCreated(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).subscriptionsCreated(apiKey, fid, subscriptionProvider, options).then((request) => request(this.axios, this.basePath));
    }
}

