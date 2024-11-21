/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 1.0
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
import type { Message } from '../models';
// @ts-ignore
import type { ValidateMessageResponse } from '../models';
/**
 * MessageApi - axios parameter creator
 * @export
 */
export const MessageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submit a message to the Farcaster network.
         * @summary Submit signed message
         * @param {File} body A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<Message>} A promise that resolves to a `Message` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/submit-signed-message)
         * 
         */
        publishMessage: async (body: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('publishMessage', 'body', body)
            const localVarPath = `/v1/submitMessage`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/octet-stream';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Validate a message on the Farcaster network.
         * @summary Validate signed message
         * @param {File} body A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ValidateMessageResponse>} A promise that resolves to a `ValidateMessageResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-message)
         * 
         */
        validateMessage: async (body: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('validateMessage', 'body', body)
            const localVarPath = `/v1/validateMessage`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/octet-stream';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessageApi - functional programming interface
 * @export
 */
export const MessageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MessageApiAxiosParamCreator(configuration)
    return {
        /**
         * Submit a message to the Farcaster network.
         * @summary Submit signed message
         * @param {File} body A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<Message>} A promise that resolves to a `Message` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/submit-signed-message)
         * 
         */
        async publishMessage(body: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Message>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishMessage(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessageApi.publishMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Validate a message on the Farcaster network.
         * @summary Validate signed message
         * @param {File} body A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity.  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ValidateMessageResponse>} A promise that resolves to a `ValidateMessageResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-message)
         * 
         */
        async validateMessage(body: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidateMessageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateMessage(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessageApi.validateMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MessageApi - factory interface
 * @export
 */
export const MessageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MessageApiFp(configuration)
    return {
        /**
         * Submit a message to the Farcaster network.
         * @summary Submit signed message
         * @param {MessageApiPublishMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<Message>} A promise that resolves to a `Message` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/submit-signed-message)
         * 
         */
        publishMessage(requestParameters: MessageApiPublishMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<Message> {
            return localVarFp.publishMessage(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Validate a message on the Farcaster network.
         * @summary Validate signed message
         * @param {MessageApiValidateMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<ValidateMessageResponse>} A promise that resolves to a `ValidateMessageResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-message)
         * 
         */
        validateMessage(requestParameters: MessageApiValidateMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<ValidateMessageResponse> {
            return localVarFp.validateMessage(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessageApi - interface
 * @export
 * @interface MessageApi
 */
export interface MessageApiInterface {
    /**
     * Submit a message to the Farcaster network.
     * @summary Submit signed message
     * @param {MessageApiPublishMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     * @returns {Promise<Message>} A promise that resolves to a `Message` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/submit-signed-message)
     * 
     */
    publishMessage(requestParameters: MessageApiPublishMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<Message>;

    /**
     * Validate a message on the Farcaster network.
     * @summary Validate signed message
     * @param {MessageApiValidateMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     * @returns {Promise<ValidateMessageResponse>} A promise that resolves to a `ValidateMessageResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-message)
     * 
     */
    validateMessage(requestParameters: MessageApiValidateMessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<ValidateMessageResponse>;

}

/**
 * Request parameters for publishMessage operation in MessageApi.
 * @export
 * @interface MessageApiPublishMessageRequest
 */
export interface MessageApiPublishMessageRequest {
    /**
     * A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity. 
     * 
     * 
     * 
     * @type {File}
     * @memberof MessageApiPublishMessage
     */
    readonly body: File
}

/**
 * Request parameters for validateMessage operation in MessageApi.
 * @export
 * @interface MessageApiValidateMessageRequest
 */
export interface MessageApiValidateMessageRequest {
    /**
     * A Message is a delta operation on the Farcaster network. The message protobuf is an envelope that wraps a MessageData object and contains a hash and signature which can verify its authenticity. 
     * 
     * 
     * 
     * @type {File}
     * @memberof MessageApiValidateMessage
     */
    readonly body: File
}

/**
 * MessageApi - object-oriented interface
 * @export
 * @class MessageApi
 * @extends {BaseAPI}
 */
export class MessageApi extends BaseAPI implements MessageApiInterface {
    /**
     * Submit a message to the Farcaster network.
     * @summary Submit signed message
     * @param {MessageApiPublishMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     * @returns {Promise<Message>} A promise that resolves to a `Message` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/submit-signed-message)
     * 
     */
    public publishMessage(requestParameters: MessageApiPublishMessageRequest, options?: RawAxiosRequestConfig) {
        return MessageApiFp(this.configuration).publishMessage(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Validate a message on the Farcaster network.
     * @summary Validate signed message
     * @param {MessageApiValidateMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     * @returns {Promise<ValidateMessageResponse>} A promise that resolves to a `ValidateMessageResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/validate-message)
     * 
     */
    public validateMessage(requestParameters: MessageApiValidateMessageRequest, options?: RawAxiosRequestConfig) {
        return MessageApiFp(this.configuration).validateMessage(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

