/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.35.0
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
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { FetchUserFollowing200Response } from '../models';
// @ts-ignore
import type { LinkAdd } from '../models';
// @ts-ignore
import type { LinkType } from '../models';
/**
 * LinksApi - axios parameter creator
 * @export
 */
export const LinksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch a list of users that are following a user.
         * @summary To target FID
         * @param {number} targetFid The FID of the target user for this link 
         * @param {LinkType} [linkType]  
         * @param {number} [pageSize] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
         * 
         */
        fetchUserFollowers: async (targetFid: number, linkType?: LinkType, pageSize?: number, reverse?: boolean, pageToken?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'targetFid' is not null or undefined
            assertParamExists('fetchUserFollowers', 'targetFid', targetFid)
            const localVarPath = `/v1/linksByTargetFid`;
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

            if (targetFid !== undefined) {
                localVarQueryParameter['target_fid'] = targetFid;
            }

            if (linkType !== undefined) {
                localVarQueryParameter['link_type'] = linkType;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
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
         * Fetch a list of users that a user is following.
         * @summary From source FID
         * @param {number} fid The FID of the link\&#39;s originator 
         * @param {LinkType} [linkType]  
         * @param {number} [pageSize] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
         * 
         */
        fetchUserFollowing: async (fid: number, linkType?: LinkType, pageSize?: number, reverse?: boolean, pageToken?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchUserFollowing', 'fid', fid)
            const localVarPath = `/v1/linksByFid`;
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

            if (linkType !== undefined) {
                localVarQueryParameter['link_type'] = linkType;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
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
         * Lookup a link by its FID and target FID.
         * @summary By its FID and target FID
         * @param {number} fid The FID of the link\&#39;s originator 
         * @param {number} targetFid The FID of the target user for this link 
         * @param {LinkType} linkType  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
         * 
         */
        lookupUserRelation: async (fid: number, targetFid: number, linkType: LinkType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('lookupUserRelation', 'fid', fid)
            // verify required parameter 'targetFid' is not null or undefined
            assertParamExists('lookupUserRelation', 'targetFid', targetFid)
            // verify required parameter 'linkType' is not null or undefined
            assertParamExists('lookupUserRelation', 'linkType', linkType)
            const localVarPath = `/v1/linkById`;
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

            if (targetFid !== undefined) {
                localVarQueryParameter['target_fid'] = targetFid;
            }

            if (linkType !== undefined) {
                localVarQueryParameter['link_type'] = linkType;
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
 * LinksApi - functional programming interface
 * @export
 */
export const LinksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LinksApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch a list of users that are following a user.
         * @summary To target FID
         * @param {number} targetFid The FID of the target user for this link 
         * @param {LinkType} [linkType]  
         * @param {number} [pageSize] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
         * 
         */
        async fetchUserFollowers(targetFid: number, linkType?: LinkType, pageSize?: number, reverse?: boolean, pageToken?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FetchUserFollowing200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserFollowers(targetFid, linkType, pageSize, reverse, pageToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LinksApi.fetchUserFollowers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch a list of users that a user is following.
         * @summary From source FID
         * @param {number} fid The FID of the link\&#39;s originator 
         * @param {LinkType} [linkType]  
         * @param {number} [pageSize] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
         * 
         */
        async fetchUserFollowing(fid: number, linkType?: LinkType, pageSize?: number, reverse?: boolean, pageToken?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FetchUserFollowing200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserFollowing(fid, linkType, pageSize, reverse, pageToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LinksApi.fetchUserFollowing']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lookup a link by its FID and target FID.
         * @summary By its FID and target FID
         * @param {number} fid The FID of the link\&#39;s originator 
         * @param {number} targetFid The FID of the target user for this link 
         * @param {LinkType} linkType  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
         * 
         */
        async lookupUserRelation(fid: number, targetFid: number, linkType: LinkType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LinkAdd>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lookupUserRelation(fid, targetFid, linkType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LinksApi.lookupUserRelation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LinksApi - factory interface
 * @export
 */
export const LinksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LinksApiFp(configuration)
    return {
        /**
         * Fetch a list of users that are following a user.
         * @summary To target FID
         * @param {LinksApiFetchUserFollowersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
         * 
         */
        fetchUserFollowers(requestParameters: LinksApiFetchUserFollowersRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserFollowing200Response> {
            return localVarFp.fetchUserFollowers(requestParameters.targetFid, requestParameters.linkType, requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of users that a user is following.
         * @summary From source FID
         * @param {LinksApiFetchUserFollowingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
         * 
         */
        fetchUserFollowing(requestParameters: LinksApiFetchUserFollowingRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserFollowing200Response> {
            return localVarFp.fetchUserFollowing(requestParameters.fid, requestParameters.linkType, requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Lookup a link by its FID and target FID.
         * @summary By its FID and target FID
         * @param {LinksApiLookupUserRelationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
         * 
         */
        lookupUserRelation(requestParameters: LinksApiLookupUserRelationRequest, options?: RawAxiosRequestConfig): AxiosPromise<LinkAdd> {
            return localVarFp.lookupUserRelation(requestParameters.fid, requestParameters.targetFid, requestParameters.linkType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LinksApi - interface
 * @export
 * @interface LinksApi
 */
export interface LinksApiInterface {
    /**
     * Fetch a list of users that are following a user.
     * @summary To target FID
     * @param {LinksApiFetchUserFollowersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinksApiInterface
     * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
     * 
     */
    fetchUserFollowers(requestParameters: LinksApiFetchUserFollowersRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserFollowing200Response>;

    /**
     * Fetch a list of users that a user is following.
     * @summary From source FID
     * @param {LinksApiFetchUserFollowingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinksApiInterface
     * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
     * 
     */
    fetchUserFollowing(requestParameters: LinksApiFetchUserFollowingRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserFollowing200Response>;

    /**
     * Lookup a link by its FID and target FID.
     * @summary By its FID and target FID
     * @param {LinksApiLookupUserRelationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinksApiInterface
     * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
     * 
     */
    lookupUserRelation(requestParameters: LinksApiLookupUserRelationRequest, options?: RawAxiosRequestConfig): AxiosPromise<LinkAdd>;

}

/**
 * Request parameters for fetchUserFollowers operation in LinksApi.
 * @export
 * @interface LinksApiFetchUserFollowersRequest
 */
export interface LinksApiFetchUserFollowersRequest {
    /**
     * The FID of the target user for this link
     * 
     * 
     * 
     * @type {number}
     * @memberof LinksApiFetchUserFollowers
     */
    readonly targetFid: number

    /**
     * 
     * 
     * 
     * 
     * @type {LinkType}
     * @memberof LinksApiFetchUserFollowers
     */
    readonly linkType?: LinkType

    /**
     * Maximum number of messages to return in a single response
     * 
     * 
     * 
     * @type {number}
     * @memberof LinksApiFetchUserFollowers
     */
    readonly pageSize?: number

    /**
     * Reverse the sort order, returning latest messages first
     * 
     * 
     * 
     * @type {boolean}
     * @memberof LinksApiFetchUserFollowers
     */
    readonly reverse?: boolean

    /**
     * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * 
     * 
     * 
     * @type {string}
     * @memberof LinksApiFetchUserFollowers
     */
    readonly pageToken?: string
}

/**
 * Request parameters for fetchUserFollowing operation in LinksApi.
 * @export
 * @interface LinksApiFetchUserFollowingRequest
 */
export interface LinksApiFetchUserFollowingRequest {
    /**
     * The FID of the link\&#39;s originator
     * 
     * 
     * 
     * @type {number}
     * @memberof LinksApiFetchUserFollowing
     */
    readonly fid: number

    /**
     * 
     * 
     * 
     * 
     * @type {LinkType}
     * @memberof LinksApiFetchUserFollowing
     */
    readonly linkType?: LinkType

    /**
     * Maximum number of messages to return in a single response
     * 
     * 
     * 
     * @type {number}
     * @memberof LinksApiFetchUserFollowing
     */
    readonly pageSize?: number

    /**
     * Reverse the sort order, returning latest messages first
     * 
     * 
     * 
     * @type {boolean}
     * @memberof LinksApiFetchUserFollowing
     */
    readonly reverse?: boolean

    /**
     * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * 
     * 
     * 
     * @type {string}
     * @memberof LinksApiFetchUserFollowing
     */
    readonly pageToken?: string
}

/**
 * Request parameters for lookupUserRelation operation in LinksApi.
 * @export
 * @interface LinksApiLookupUserRelationRequest
 */
export interface LinksApiLookupUserRelationRequest {
    /**
     * The FID of the link\&#39;s originator
     * 
     * 
     * 
     * @type {number}
     * @memberof LinksApiLookupUserRelation
     */
    readonly fid: number

    /**
     * The FID of the target user for this link
     * 
     * 
     * 
     * @type {number}
     * @memberof LinksApiLookupUserRelation
     */
    readonly targetFid: number

    /**
     * 
     * 
     * 
     * 
     * @type {LinkType}
     * @memberof LinksApiLookupUserRelation
     */
    readonly linkType: LinkType
}

/**
 * LinksApi - object-oriented interface
 * @export
 * @class LinksApi
 * @extends {BaseAPI}
 */
export class LinksApi extends BaseAPI implements LinksApiInterface {
    /**
     * Fetch a list of users that are following a user.
     * @summary To target FID
     * @param {LinksApiFetchUserFollowersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinksApi
     * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-followers)
     * 
     */
    public fetchUserFollowers(requestParameters: LinksApiFetchUserFollowersRequest, options?: RawAxiosRequestConfig) {
        return LinksApiFp(this.configuration).fetchUserFollowers(requestParameters.targetFid, requestParameters.linkType, requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of users that a user is following.
     * @summary From source FID
     * @param {LinksApiFetchUserFollowingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinksApi
     * @returns {Promise<FetchUserFollowing200Response>} A promise that resolves to a `FetchUserFollowing200Response` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-following)
     * 
     */
    public fetchUserFollowing(requestParameters: LinksApiFetchUserFollowingRequest, options?: RawAxiosRequestConfig) {
        return LinksApiFp(this.configuration).fetchUserFollowing(requestParameters.fid, requestParameters.linkType, requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lookup a link by its FID and target FID.
     * @summary By its FID and target FID
     * @param {LinksApiLookupUserRelationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LinksApi
     * @returns {Promise<LinkAdd>} A promise that resolves to a `LinkAdd` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/lookup-user-relation)
     * 
     */
    public lookupUserRelation(requestParameters: LinksApiLookupUserRelationRequest, options?: RawAxiosRequestConfig) {
        return LinksApiFp(this.configuration).lookupUserRelation(requestParameters.fid, requestParameters.targetFid, requestParameters.linkType, options).then((request) => request(this.axios, this.basePath));
    }
}

