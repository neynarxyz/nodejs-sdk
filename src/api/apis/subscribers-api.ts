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
import type { SubscribedToResponse } from '../models';
// @ts-ignore
import type { SubscribersResponse } from '../models';
// @ts-ignore
import type { SubscriptionCheckResponse } from '../models';
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
         * @param {number} fid The unique identifier of a farcaster user or app (unsigned integer) 
         * @param {FetchSubscribedToForFidSubscriptionProviderEnum} subscriptionProvider The provider of the subscription. 
         * @param {number} [viewerFid]  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
         * 
         */
        fetchSubscribedToForFid: async (fid: number, subscriptionProvider: FetchSubscribedToForFidSubscriptionProviderEnum, viewerFid?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchSubscribedToForFid', 'fid', fid)
            // verify required parameter 'subscriptionProvider' is not null or undefined
            assertParamExists('fetchSubscribedToForFid', 'subscriptionProvider', subscriptionProvider)
            const localVarPath = `/v2/farcaster/user/subscribed_to/`;
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

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (subscriptionProvider !== undefined) {
                localVarQueryParameter['subscription_provider'] = subscriptionProvider;
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
         * @param {number} fid The unique identifier of a farcaster user or app (unsigned integer) 
         * @param {FetchSubscribersForFidSubscriptionProviderEnum} subscriptionProvider The provider of the subscription. 
         * @param {number} [viewerFid]  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
         * 
         */
        fetchSubscribersForFid: async (fid: number, subscriptionProvider: FetchSubscribersForFidSubscriptionProviderEnum, viewerFid?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchSubscribersForFid', 'fid', fid)
            // verify required parameter 'subscriptionProvider' is not null or undefined
            assertParamExists('fetchSubscribersForFid', 'subscriptionProvider', subscriptionProvider)
            const localVarPath = `/v2/farcaster/user/subscribers/`;
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

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
            }

            if (subscriptionProvider !== undefined) {
                localVarQueryParameter['subscription_provider'] = subscriptionProvider;
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
         * Check if a wallet address is subscribed to a given STP (Hypersub) contract.
         * @summary Hypersub subscription check
         * @param {string} addresses Comma separated list of Ethereum addresses, up to 350 at a time 
         * @param {string} contractAddress Ethereum address of the STP contract 
         * @param {string} chainId Chain ID of the STP contract 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
         * 
         */
        fetchSubscriptionCheck: async (addresses: string, contractAddress: string, chainId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addresses' is not null or undefined
            assertParamExists('fetchSubscriptionCheck', 'addresses', addresses)
            // verify required parameter 'contractAddress' is not null or undefined
            assertParamExists('fetchSubscriptionCheck', 'contractAddress', contractAddress)
            // verify required parameter 'chainId' is not null or undefined
            assertParamExists('fetchSubscriptionCheck', 'chainId', chainId)
            const localVarPath = `/v2/stp/subscription_check/`;
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

            if (addresses !== undefined) {
                localVarQueryParameter['addresses'] = addresses;
            }

            if (contractAddress !== undefined) {
                localVarQueryParameter['contract_address'] = contractAddress;
            }

            if (chainId !== undefined) {
                localVarQueryParameter['chain_id'] = chainId;
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
         * @param {number} fid The unique identifier of a farcaster user or app (unsigned integer) 
         * @param {FetchSubscriptionsForFidSubscriptionProviderEnum} subscriptionProvider The provider of the subscription. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
         * 
         */
        fetchSubscriptionsForFid: async (fid: number, subscriptionProvider: FetchSubscriptionsForFidSubscriptionProviderEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchSubscriptionsForFid', 'fid', fid)
            // verify required parameter 'subscriptionProvider' is not null or undefined
            assertParamExists('fetchSubscriptionsForFid', 'subscriptionProvider', subscriptionProvider)
            const localVarPath = `/v2/farcaster/user/subscriptions_created/`;
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

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
            }

            if (subscriptionProvider !== undefined) {
                localVarQueryParameter['subscription_provider'] = subscriptionProvider;
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
         * @param {number} fid The unique identifier of a farcaster user or app (unsigned integer) 
         * @param {FetchSubscribedToForFidSubscriptionProviderEnum} subscriptionProvider The provider of the subscription. 
         * @param {number} [viewerFid]  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
         * 
         */
        async fetchSubscribedToForFid(fid: number, subscriptionProvider: FetchSubscribedToForFidSubscriptionProviderEnum, viewerFid?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscribedToResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchSubscribedToForFid(fid, subscriptionProvider, viewerFid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.fetchSubscribedToForFid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
         * @summary Subscribers of a user
         * @param {number} fid The unique identifier of a farcaster user or app (unsigned integer) 
         * @param {FetchSubscribersForFidSubscriptionProviderEnum} subscriptionProvider The provider of the subscription. 
         * @param {number} [viewerFid]  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
         * 
         */
        async fetchSubscribersForFid(fid: number, subscriptionProvider: FetchSubscribersForFidSubscriptionProviderEnum, viewerFid?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscribersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchSubscribersForFid(fid, subscriptionProvider, viewerFid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.fetchSubscribersForFid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Check if a wallet address is subscribed to a given STP (Hypersub) contract.
         * @summary Hypersub subscription check
         * @param {string} addresses Comma separated list of Ethereum addresses, up to 350 at a time 
         * @param {string} contractAddress Ethereum address of the STP contract 
         * @param {string} chainId Chain ID of the STP contract 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
         * 
         */
        async fetchSubscriptionCheck(addresses: string, contractAddress: string, chainId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionCheckResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchSubscriptionCheck(addresses, contractAddress, chainId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.fetchSubscriptionCheck']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch created subscriptions for a given FID\'s.
         * @summary Subscriptions created by FID
         * @param {number} fid The unique identifier of a farcaster user or app (unsigned integer) 
         * @param {FetchSubscriptionsForFidSubscriptionProviderEnum} subscriptionProvider The provider of the subscription. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
         * 
         */
        async fetchSubscriptionsForFid(fid: number, subscriptionProvider: FetchSubscriptionsForFidSubscriptionProviderEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchSubscriptionsForFid(fid, subscriptionProvider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubscribersApi.fetchSubscriptionsForFid']?.[localVarOperationServerIndex]?.url;
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
         * @param {SubscribersApiFetchSubscribedToForFidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
         * 
         */
        fetchSubscribedToForFid(requestParameters: SubscribersApiFetchSubscribedToForFidRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscribedToResponse> {
            return localVarFp.fetchSubscribedToForFid(requestParameters.fid, requestParameters.subscriptionProvider, requestParameters.viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
         * @summary Subscribers of a user
         * @param {SubscribersApiFetchSubscribersForFidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
         * 
         */
        fetchSubscribersForFid(requestParameters: SubscribersApiFetchSubscribersForFidRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscribersResponse> {
            return localVarFp.fetchSubscribersForFid(requestParameters.fid, requestParameters.subscriptionProvider, requestParameters.viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Check if a wallet address is subscribed to a given STP (Hypersub) contract.
         * @summary Hypersub subscription check
         * @param {SubscribersApiFetchSubscriptionCheckRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
         * 
         */
        fetchSubscriptionCheck(requestParameters: SubscribersApiFetchSubscriptionCheckRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscriptionCheckResponse> {
            return localVarFp.fetchSubscriptionCheck(requestParameters.addresses, requestParameters.contractAddress, requestParameters.chainId, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch created subscriptions for a given FID\'s.
         * @summary Subscriptions created by FID
         * @param {SubscribersApiFetchSubscriptionsForFidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
         * 
         */
        fetchSubscriptionsForFid(requestParameters: SubscribersApiFetchSubscriptionsForFidRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscriptionsResponse> {
            return localVarFp.fetchSubscriptionsForFid(requestParameters.fid, requestParameters.subscriptionProvider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubscribersApi - interface
 * @export
 * @interface SubscribersApi
 */
export interface SubscribersApiInterface {
    /**
     * Fetch what FIDs and contracts a FID is subscribed to.
     * @summary Subscribed to
     * @param {SubscribersApiFetchSubscribedToForFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApiInterface
     * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
     * 
     */
    fetchSubscribedToForFid(requestParameters: SubscribersApiFetchSubscribedToForFidRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscribedToResponse>;

    /**
     * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
     * @summary Subscribers of a user
     * @param {SubscribersApiFetchSubscribersForFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApiInterface
     * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
     * 
     */
    fetchSubscribersForFid(requestParameters: SubscribersApiFetchSubscribersForFidRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscribersResponse>;

    /**
     * Check if a wallet address is subscribed to a given STP (Hypersub) contract.
     * @summary Hypersub subscription check
     * @param {SubscribersApiFetchSubscriptionCheckRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApiInterface
     * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
     * 
     */
    fetchSubscriptionCheck(requestParameters: SubscribersApiFetchSubscriptionCheckRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscriptionCheckResponse>;

    /**
     * Fetch created subscriptions for a given FID\'s.
     * @summary Subscriptions created by FID
     * @param {SubscribersApiFetchSubscriptionsForFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApiInterface
     * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
     * 
     */
    fetchSubscriptionsForFid(requestParameters: SubscribersApiFetchSubscriptionsForFidRequest, options?: RawAxiosRequestConfig): AxiosPromise<SubscriptionsResponse>;

}

/**
 * Request parameters for fetchSubscribedToForFid operation in SubscribersApi.
 * @export
 * @interface SubscribersApiFetchSubscribedToForFidRequest
 */
export interface SubscribersApiFetchSubscribedToForFidRequest {
    /**
     * The unique identifier of a farcaster user or app (unsigned integer)
     * 
     * 
     * 
     * @type {number}
     * @memberof SubscribersApiFetchSubscribedToForFid
     */
    readonly fid: number

    /**
     * The provider of the subscription.
     * 
     * 
     * 
     * @type {'fabric_stp'}
     * @memberof SubscribersApiFetchSubscribedToForFid
     */
    readonly subscriptionProvider: FetchSubscribedToForFidSubscriptionProviderEnum

    /**
     * 
     * 
     * 
     * 
     * @type {number}
     * @memberof SubscribersApiFetchSubscribedToForFid
     */
    readonly viewerFid?: number
}

/**
 * Request parameters for fetchSubscribersForFid operation in SubscribersApi.
 * @export
 * @interface SubscribersApiFetchSubscribersForFidRequest
 */
export interface SubscribersApiFetchSubscribersForFidRequest {
    /**
     * The unique identifier of a farcaster user or app (unsigned integer)
     * 
     * 
     * 
     * @type {number}
     * @memberof SubscribersApiFetchSubscribersForFid
     */
    readonly fid: number

    /**
     * The provider of the subscription.
     * 
     * 
     * 
     * @type {'fabric_stp' | 'paragraph'}
     * @memberof SubscribersApiFetchSubscribersForFid
     */
    readonly subscriptionProvider: FetchSubscribersForFidSubscriptionProviderEnum

    /**
     * 
     * 
     * 
     * 
     * @type {number}
     * @memberof SubscribersApiFetchSubscribersForFid
     */
    readonly viewerFid?: number
}

/**
 * Request parameters for fetchSubscriptionCheck operation in SubscribersApi.
 * @export
 * @interface SubscribersApiFetchSubscriptionCheckRequest
 */
export interface SubscribersApiFetchSubscriptionCheckRequest {
    /**
     * Comma separated list of Ethereum addresses, up to 350 at a time
     * 
     * @commaSeparated
     * 
     * @type {string}
     * @memberof SubscribersApiFetchSubscriptionCheck
     */
    readonly addresses: string

    /**
     * Ethereum address of the STP contract
     * 
     * 
     * 
     * @type {string}
     * @memberof SubscribersApiFetchSubscriptionCheck
     */
    readonly contractAddress: string

    /**
     * Chain ID of the STP contract
     * 
     * 
     * 
     * @type {string}
     * @memberof SubscribersApiFetchSubscriptionCheck
     */
    readonly chainId: string
}

/**
 * Request parameters for fetchSubscriptionsForFid operation in SubscribersApi.
 * @export
 * @interface SubscribersApiFetchSubscriptionsForFidRequest
 */
export interface SubscribersApiFetchSubscriptionsForFidRequest {
    /**
     * The unique identifier of a farcaster user or app (unsigned integer)
     * 
     * 
     * 
     * @type {number}
     * @memberof SubscribersApiFetchSubscriptionsForFid
     */
    readonly fid: number

    /**
     * The provider of the subscription.
     * 
     * 
     * 
     * @type {'fabric_stp'}
     * @memberof SubscribersApiFetchSubscriptionsForFid
     */
    readonly subscriptionProvider: FetchSubscriptionsForFidSubscriptionProviderEnum
}

/**
 * SubscribersApi - object-oriented interface
 * @export
 * @class SubscribersApi
 * @extends {BaseAPI}
 */
export class SubscribersApi extends BaseAPI implements SubscribersApiInterface {
    /**
     * Fetch what FIDs and contracts a FID is subscribed to.
     * @summary Subscribed to
     * @param {SubscribersApiFetchSubscribedToForFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     * @returns {Promise<SubscribedToResponse>} A promise that resolves to a `SubscribedToResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribed-to-for-fid)
     * 
     */
    public fetchSubscribedToForFid(requestParameters: SubscribersApiFetchSubscribedToForFidRequest, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).fetchSubscribedToForFid(requestParameters.fid, requestParameters.subscriptionProvider, requestParameters.viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch subscribers for a given FID\'s contracts. Doesn\'t return addresses that don\'t have an FID.
     * @summary Subscribers of a user
     * @param {SubscribersApiFetchSubscribersForFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     * @returns {Promise<SubscribersResponse>} A promise that resolves to a `SubscribersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscribers-for-fid)
     * 
     */
    public fetchSubscribersForFid(requestParameters: SubscribersApiFetchSubscribersForFidRequest, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).fetchSubscribersForFid(requestParameters.fid, requestParameters.subscriptionProvider, requestParameters.viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Check if a wallet address is subscribed to a given STP (Hypersub) contract.
     * @summary Hypersub subscription check
     * @param {SubscribersApiFetchSubscriptionCheckRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     * @returns {Promise<SubscriptionCheckResponse>} A promise that resolves to a `SubscriptionCheckResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscription-check)
     * 
     */
    public fetchSubscriptionCheck(requestParameters: SubscribersApiFetchSubscriptionCheckRequest, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).fetchSubscriptionCheck(requestParameters.addresses, requestParameters.contractAddress, requestParameters.chainId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch created subscriptions for a given FID\'s.
     * @summary Subscriptions created by FID
     * @param {SubscribersApiFetchSubscriptionsForFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscribersApi
     * @returns {Promise<SubscriptionsResponse>} A promise that resolves to a `SubscriptionsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-subscriptions-for-fid)
     * 
     */
    public fetchSubscriptionsForFid(requestParameters: SubscribersApiFetchSubscriptionsForFidRequest, options?: RawAxiosRequestConfig) {
        return SubscribersApiFp(this.configuration).fetchSubscriptionsForFid(requestParameters.fid, requestParameters.subscriptionProvider, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const FetchSubscribedToForFidSubscriptionProviderEnum = {
    FabricStp: 'fabric_stp'
} as const;
export type FetchSubscribedToForFidSubscriptionProviderEnum = typeof FetchSubscribedToForFidSubscriptionProviderEnum[keyof typeof FetchSubscribedToForFidSubscriptionProviderEnum];
/**
 * @export
 */
export const FetchSubscribersForFidSubscriptionProviderEnum = {
    FabricStp: 'fabric_stp',
    Paragraph: 'paragraph'
} as const;
export type FetchSubscribersForFidSubscriptionProviderEnum = typeof FetchSubscribersForFidSubscriptionProviderEnum[keyof typeof FetchSubscribersForFidSubscriptionProviderEnum];
/**
 * @export
 */
export const FetchSubscriptionsForFidSubscriptionProviderEnum = {
    FabricStp: 'fabric_stp'
} as const;
export type FetchSubscriptionsForFidSubscriptionProviderEnum = typeof FetchSubscriptionsForFidSubscriptionProviderEnum[keyof typeof FetchSubscriptionsForFidSubscriptionProviderEnum];
