/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.0
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
import type { CastsMetricsResponse } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches metrics casts matching a query
         * @summary Metrics for casts
         * @param {string} q Query string to search for casts 
         * @param {FetchCastMetricsIntervalEnum} [interval] Interval of time for which to fetch metrics. Choices are &#x60;1d&#x60;, &#x60;7d&#x60;, &#x60;30d&#x60; 
         * @param {number} [authorFid] Fid of the user whose casts you want to search 
         * @param {string} [channelId] Channel ID of the casts you want to search 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<CastsMetricsResponse>} A promise that resolves to a `CastsMetricsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-metrics)
         * 
         */
        fetchCastMetrics: async (q: string, interval?: FetchCastMetricsIntervalEnum, authorFid?: number, channelId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'q' is not null or undefined
            assertParamExists('fetchCastMetrics', 'q', q)
            const localVarPath = `/farcaster/cast/metrics`;
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

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }

            if (authorFid !== undefined) {
                localVarQueryParameter['author_fid'] = authorFid;
            }

            if (channelId !== undefined) {
                localVarQueryParameter['channel_id'] = channelId;
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
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetricsApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetches metrics casts matching a query
         * @summary Metrics for casts
         * @param {string} q Query string to search for casts 
         * @param {FetchCastMetricsIntervalEnum} [interval] Interval of time for which to fetch metrics. Choices are &#x60;1d&#x60;, &#x60;7d&#x60;, &#x60;30d&#x60; 
         * @param {number} [authorFid] Fid of the user whose casts you want to search 
         * @param {string} [channelId] Channel ID of the casts you want to search 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<CastsMetricsResponse>} A promise that resolves to a `CastsMetricsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-metrics)
         * 
         */
        async fetchCastMetrics(q: string, interval?: FetchCastMetricsIntervalEnum, authorFid?: number, channelId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CastsMetricsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchCastMetrics(q, interval, authorFid, channelId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetricsApi.fetchCastMetrics']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetricsApiFp(configuration)
    return {
        /**
         * Fetches metrics casts matching a query
         * @summary Metrics for casts
         * @param {MetricsApiFetchCastMetricsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<CastsMetricsResponse>} A promise that resolves to a `CastsMetricsResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-metrics)
         * 
         */
        fetchCastMetrics(requestParameters: MetricsApiFetchCastMetricsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CastsMetricsResponse> {
            return localVarFp.fetchCastMetrics(requestParameters.q, requestParameters.interval, requestParameters.authorFid, requestParameters.channelId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetricsApi - interface
 * @export
 * @interface MetricsApi
 */
export interface MetricsApiInterface {
    /**
     * Fetches metrics casts matching a query
     * @summary Metrics for casts
     * @param {MetricsApiFetchCastMetricsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApiInterface
     * @returns {Promise<CastsMetricsResponse>} A promise that resolves to a `CastsMetricsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-metrics)
     * 
     */
    fetchCastMetrics(requestParameters: MetricsApiFetchCastMetricsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CastsMetricsResponse>;

}

/**
 * Request parameters for fetchCastMetrics operation in MetricsApi.
 * @export
 * @interface MetricsApiFetchCastMetricsRequest
 */
export interface MetricsApiFetchCastMetricsRequest {
    /**
     * Query string to search for casts
     * 
     * 
     * 
     * @type {string}
     * @memberof MetricsApiFetchCastMetrics
     */
    readonly q: string

    /**
     * Interval of time for which to fetch metrics. Choices are &#x60;1d&#x60;, &#x60;7d&#x60;, &#x60;30d&#x60;
     * 
     * 
     * 
     * @type {'1d' | '7d' | '30d'}
     * @memberof MetricsApiFetchCastMetrics
     */
    readonly interval?: FetchCastMetricsIntervalEnum

    /**
     * Fid of the user whose casts you want to search
     * 
     * 
     * 
     * @type {number}
     * @memberof MetricsApiFetchCastMetrics
     */
    readonly authorFid?: number

    /**
     * Channel ID of the casts you want to search
     * 
     * 
     * 
     * @type {string}
     * @memberof MetricsApiFetchCastMetrics
     */
    readonly channelId?: string
}

/**
 * MetricsApi - object-oriented interface
 * @export
 * @class MetricsApi
 * @extends {BaseAPI}
 */
export class MetricsApi extends BaseAPI implements MetricsApiInterface {
    /**
     * Fetches metrics casts matching a query
     * @summary Metrics for casts
     * @param {MetricsApiFetchCastMetricsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     * @returns {Promise<CastsMetricsResponse>} A promise that resolves to a `CastsMetricsResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-cast-metrics)
     * 
     */
    public fetchCastMetrics(requestParameters: MetricsApiFetchCastMetricsRequest, options?: RawAxiosRequestConfig) {
        return MetricsApiFp(this.configuration).fetchCastMetrics(requestParameters.q, requestParameters.interval, requestParameters.authorFid, requestParameters.channelId, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const FetchCastMetricsIntervalEnum = {
    _1d: '1d',
    _7d: '7d',
    _30d: '30d'
} as const;
export type FetchCastMetricsIntervalEnum = typeof FetchCastMetricsIntervalEnum[keyof typeof FetchCastMetricsIntervalEnum];
