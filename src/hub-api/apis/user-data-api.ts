/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0
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
import type { ErrorResponse } from '../models';
// @ts-ignore
import type { FetchUserData200Response } from '../models';
// @ts-ignore
import type { UserDataType } from '../models';
/**
 * UserDataApi - axios parameter creator
 * @export
 */
export const UserDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
         * @summary Fetch UserData for a FID.
         * @param {number} fid The FID that\&#39;s being requested 
         * @param {UserDataType} [user_data_type] The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned 
         * @param {number} [page_size] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [page_token] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
         * 
         */
        fetchUserData: async (fid: number, user_data_type?: UserDataType, page_size?: number, reverse?: boolean, page_token?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchUserData', 'fid', fid)
            const localVarPath = `/v1/userDataByFid`;
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

            if (user_data_type !== undefined) {
                localVarQueryParameter['user_data_type'] = user_data_type;
            }

            if (page_size !== undefined) {
                localVarQueryParameter['pageSize'] = page_size;
            }

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }

            if (page_token !== undefined) {
                localVarQueryParameter['pageToken'] = page_token;
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
 * UserDataApi - functional programming interface
 * @export
 */
export const UserDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserDataApiAxiosParamCreator(configuration)
    return {
        /**
         * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
         * @summary Fetch UserData for a FID.
         * @param {number} fid The FID that\&#39;s being requested 
         * @param {UserDataType} [user_data_type] The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned 
         * @param {number} [page_size] Maximum number of messages to return in a single response 
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first 
         * @param {string} [page_token] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
         * 
         */
        async fetchUserData(fid: number, user_data_type?: UserDataType, page_size?: number, reverse?: boolean, page_token?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FetchUserData200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserData(fid, user_data_type, page_size, reverse, page_token, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataApi.fetchUserData']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserDataApi - factory interface
 * @export
 */
export const UserDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserDataApiFp(configuration)
    return {
        /**
         * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
         * @summary Fetch UserData for a FID.
         * @param {UserDataApiFetchUserDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
         * 
         */
        fetchUserData(requestParameters: UserDataApiFetchUserDataRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserData200Response> {
            return localVarFp.fetchUserData(requestParameters.fid, requestParameters.user_data_type, requestParameters.page_size, requestParameters.reverse, requestParameters.page_token, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserDataApi - interface
 * @export
 * @interface UserDataApi
 */
export interface UserDataApiInterface {
    /**
     * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
     * @summary Fetch UserData for a FID.
     * @param {UserDataApiFetchUserDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApiInterface
     * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
     * 
     */
    fetchUserData(requestParameters: UserDataApiFetchUserDataRequest, options?: RawAxiosRequestConfig): AxiosPromise<FetchUserData200Response>;

}

/**
 * Request parameters for fetchUserData operation in UserDataApi.
 * @export
 * @interface UserDataApiFetchUserDataRequest
 */
export interface UserDataApiFetchUserDataRequest {
    /**
     * The FID that\&#39;s being requested
     * 
     * 
     * 
     * @type {number}
     * @memberof UserDataApiFetchUserData
     */
    readonly fid: number

    /**
     * The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned
     * 
     * 
     * 
     * @type {UserDataType}
     * @memberof UserDataApiFetchUserData
     */
    readonly user_data_type?: UserDataType

    /**
     * Maximum number of messages to return in a single response
     * 
     * 
     * 
     * @type {number}
     * @memberof UserDataApiFetchUserData
     */
    readonly page_size?: number

    /**
     * Reverse the sort order, returning latest messages first
     * 
     * 
     * 
     * @type {boolean}
     * @memberof UserDataApiFetchUserData
     */
    readonly reverse?: boolean

    /**
     * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * 
     * 
     * 
     * @type {string}
     * @memberof UserDataApiFetchUserData
     */
    readonly page_token?: string
}

/**
 * UserDataApi - object-oriented interface
 * @export
 * @class UserDataApi
 * @extends {BaseAPI}
 */
export class UserDataApi extends BaseAPI implements UserDataApiInterface {
    /**
     * **Note:** one of two different response schemas is returned based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
     * @summary Fetch UserData for a FID.
     * @param {UserDataApiFetchUserDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataApi
     * @returns {Promise<FetchUserData200Response>} A promise that resolves to a `FetchUserData200Response` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-data)
     * 
     */
    public fetchUserData(requestParameters: UserDataApiFetchUserDataRequest, options?: RawAxiosRequestConfig) {
        return UserDataApiFp(this.configuration).fetchUserData(requestParameters.fid, requestParameters.user_data_type, requestParameters.page_size, requestParameters.reverse, requestParameters.page_token, options).then((request) => request(this.axios, this.basePath));
    }
}
