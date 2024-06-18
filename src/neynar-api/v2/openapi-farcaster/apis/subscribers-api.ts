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
import { SubscribedToResponse } from '../models';
// @ts-ignore
import { SubscribersResponse } from '../models';
// @ts-ignore
import { SubscriptionProvider } from '../models';
// @ts-ignore
import { SubscriptionProviders } from '../models';
// @ts-ignore
import { SubscriptionsResponse } from '../models';
/**
 * SubscribersApi - axios parameter creator
 * @export
 */
export const SubscribersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch what fids and contracts a fid is subscribed to.
         * @summary Fetch what a given fid is subscribed to
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribedTo: async (apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Fetch subscribers for a given fid\'s contracts. Doesn\'t return addresses that don\'t have an fid.
         * @summary Fetch subscribers for a given fid
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProviders} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribers: async (apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Fetch created subscriptions for a given fid\'s.
         * @summary Fetch created subscriptions for a given fid
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscriptionsCreated: async (apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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
         * Fetch what fids and contracts a fid is subscribed to.
         * @summary Fetch what a given fid is subscribed to
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscribedTo(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscribedToResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscribedTo(apiKey, fid, subscriptionProvider, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch subscribers for a given fid\'s contracts. Doesn\'t return addresses that don\'t have an fid.
         * @summary Fetch subscribers for a given fid
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProviders} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscribers(apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscribersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscribers(apiKey, fid, subscriptionProvider, viewerFid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch created subscriptions for a given fid\'s.
         * @summary Fetch created subscriptions for a given fid
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscriptionsCreated(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscriptionsCreated(apiKey, fid, subscriptionProvider, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
         * Fetch what fids and contracts a fid is subscribed to.
         * @summary Fetch what a given fid is subscribed to
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribedTo(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options?: any): AxiosPromise<SubscribedToResponse> {
            return localVarFp.subscribedTo(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch subscribers for a given fid\'s contracts. Doesn\'t return addresses that don\'t have an fid.
         * @summary Fetch subscribers for a given fid
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProviders} subscriptionProvider 
         * @param {number} [viewerFid] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribers(apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options?: any): AxiosPromise<SubscribersResponse> {
            return localVarFp.subscribers(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch created subscriptions for a given fid\'s.
         * @summary Fetch created subscriptions for a given fid
         * @param {string} apiKey API key required for authentication.
         * @param {number} fid 
         * @param {SubscriptionProvider} subscriptionProvider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscriptionsCreated(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options?: any): AxiosPromise<SubscriptionsResponse> {
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
     * Fetch what fids and contracts a fid is subscribed to.
     * @summary Fetch what a given fid is subscribed to
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {SubscriptionProvider} subscriptionProvider 
     * @param {number} [viewerFid] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     */
    public subscribedTo(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, viewerFid?: number, options?: AxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).subscribedTo(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch subscribers for a given fid\'s contracts. Doesn\'t return addresses that don\'t have an fid.
     * @summary Fetch subscribers for a given fid
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {SubscriptionProviders} subscriptionProvider 
     * @param {number} [viewerFid] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     */
    public subscribers(apiKey: string, fid: number, subscriptionProvider: SubscriptionProviders, viewerFid?: number, options?: AxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).subscribers(apiKey, fid, subscriptionProvider, viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch created subscriptions for a given fid\'s.
     * @summary Fetch created subscriptions for a given fid
     * @param {string} apiKey API key required for authentication.
     * @param {number} fid 
     * @param {SubscriptionProvider} subscriptionProvider 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     */
    public subscriptionsCreated(apiKey: string, fid: number, subscriptionProvider: SubscriptionProvider, options?: AxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).subscriptionsCreated(apiKey, fid, subscriptionProvider, options).then((request) => request(this.axios, this.basePath));
    }
}
