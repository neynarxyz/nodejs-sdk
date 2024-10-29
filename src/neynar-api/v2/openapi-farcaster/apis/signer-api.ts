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
import type { AuthorizationUrlResponse } from '../models';
// @ts-ignore
import type { AuthorizationUrlResponseType } from '../models';
// @ts-ignore
import type { DeveloperManagedSigner } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
// @ts-ignore
import type { RegisterDeveloperManagedSignedKeyReqBody } from '../models';
// @ts-ignore
import type { RegisterSignerKeyReqBody } from '../models';
// @ts-ignore
import type { Signer } from '../models';
/**
 * SignerApi - axios parameter creator
 * @export
 */
export const SignerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a signer and returns the signer status. \\ **Note**: While tesing please reuse the signer, it costs money to approve a signer. 
         * @summary Create signer
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSigner: async (apiKey: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('createSigner', 'apiKey', apiKey)
            const localVarPath = `/farcaster/signer`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches the status of a developer managed signer by public key
         * @summary Status by public key
         * @param {string} apiKey API key required for authentication.
         * @param {string} publicKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        developerManagedSigner: async (apiKey: string, publicKey: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('developerManagedSigner', 'apiKey', apiKey)
            // verify required parameter 'publicKey' is not null or undefined
            assertParamExists('developerManagedSigner', 'publicKey', publicKey)
            const localVarPath = `/farcaster/signer/developer_managed`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (publicKey !== undefined) {
                localVarQueryParameter['public_key'] = publicKey;
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
         * Fetch authorization url (Fetched authorized url useful for SIWN login operation)
         * @summary Fetch authorization url
         * @param {string} apiKey API key required for authentication.
         * @param {string} clientId 
         * @param {AuthorizationUrlResponseType} responseType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAuthorizationUrl: async (apiKey: string, clientId: string, responseType: AuthorizationUrlResponseType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('fetchAuthorizationUrl', 'apiKey', apiKey)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('fetchAuthorizationUrl', 'clientId', clientId)
            // verify required parameter 'responseType' is not null or undefined
            assertParamExists('fetchAuthorizationUrl', 'responseType', responseType)
            const localVarPath = `/farcaster/login/authorize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (responseType !== undefined) {
                localVarQueryParameter['response_type'] = responseType;
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
         * Publish a message to farcaster. The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message. Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.
         * @summary Publish message
         * @param {string} apiKey API key required for authentication.
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishMessage: async (apiKey: string, body: object, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('publishMessage', 'apiKey', apiKey)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('publishMessage', 'body', body)
            const localVarPath = `/farcaster/message`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Registers an app FID, deadline and a signature. Returns the signer status with an approval url.
         * @summary Register Signed Key
         * @param {string} apiKey API key required for authentication.
         * @param {RegisterSignerKeyReqBody} registerSignerKeyReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSignedKey: async (apiKey: string, registerSignerKeyReqBody: RegisterSignerKeyReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('registerSignedKey', 'apiKey', apiKey)
            // verify required parameter 'registerSignerKeyReqBody' is not null or undefined
            assertParamExists('registerSignedKey', 'registerSignerKeyReqBody', registerSignerKeyReqBody)
            const localVarPath = `/farcaster/signer/signed_key`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(registerSignerKeyReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Registers an signed key and returns the developer managed signer status with an approval url.
         * @summary Register Signed Key
         * @param {string} apiKey API key required for authentication.
         * @param {RegisterDeveloperManagedSignedKeyReqBody} registerDeveloperManagedSignedKeyReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSignedKeyForDeveloperManagedSigner: async (apiKey: string, registerDeveloperManagedSignedKeyReqBody: RegisterDeveloperManagedSignedKeyReqBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('registerSignedKeyForDeveloperManagedSigner', 'apiKey', apiKey)
            // verify required parameter 'registerDeveloperManagedSignedKeyReqBody' is not null or undefined
            assertParamExists('registerSignedKeyForDeveloperManagedSigner', 'registerDeveloperManagedSignedKeyReqBody', registerDeveloperManagedSignedKeyReqBody)
            const localVarPath = `/farcaster/signer/developer_managed/signed_key`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(registerDeveloperManagedSignedKeyReqBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
         * @summary Status
         * @param {string} apiKey API key required for authentication.
         * @param {string} signerUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signer: async (apiKey: string, signerUuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiKey' is not null or undefined
            assertParamExists('signer', 'apiKey', apiKey)
            // verify required parameter 'signerUuid' is not null or undefined
            assertParamExists('signer', 'signerUuid', signerUuid)
            const localVarPath = `/farcaster/signer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (signerUuid !== undefined) {
                localVarQueryParameter['signer_uuid'] = signerUuid;
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
 * SignerApi - functional programming interface
 * @export
 */
export const SignerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SignerApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a signer and returns the signer status. \\ **Note**: While tesing please reuse the signer, it costs money to approve a signer. 
         * @summary Create signer
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSigner(apiKey: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSigner(apiKey, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.createSigner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches the status of a developer managed signer by public key
         * @summary Status by public key
         * @param {string} apiKey API key required for authentication.
         * @param {string} publicKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async developerManagedSigner(apiKey: string, publicKey: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeveloperManagedSigner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.developerManagedSigner(apiKey, publicKey, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.developerManagedSigner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch authorization url (Fetched authorized url useful for SIWN login operation)
         * @summary Fetch authorization url
         * @param {string} apiKey API key required for authentication.
         * @param {string} clientId 
         * @param {AuthorizationUrlResponseType} responseType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAuthorizationUrl(apiKey: string, clientId: string, responseType: AuthorizationUrlResponseType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthorizationUrlResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAuthorizationUrl(apiKey, clientId, responseType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.fetchAuthorizationUrl']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Publish a message to farcaster. The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message. Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.
         * @summary Publish message
         * @param {string} apiKey API key required for authentication.
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishMessage(apiKey: string, body: object, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishMessage(apiKey, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.publishMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Registers an app FID, deadline and a signature. Returns the signer status with an approval url.
         * @summary Register Signed Key
         * @param {string} apiKey API key required for authentication.
         * @param {RegisterSignerKeyReqBody} registerSignerKeyReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerSignedKey(apiKey: string, registerSignerKeyReqBody: RegisterSignerKeyReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerSignedKey(apiKey, registerSignerKeyReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.registerSignedKey']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Registers an signed key and returns the developer managed signer status with an approval url.
         * @summary Register Signed Key
         * @param {string} apiKey API key required for authentication.
         * @param {RegisterDeveloperManagedSignedKeyReqBody} registerDeveloperManagedSignedKeyReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerSignedKeyForDeveloperManagedSigner(apiKey: string, registerDeveloperManagedSignedKeyReqBody: RegisterDeveloperManagedSignedKeyReqBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeveloperManagedSigner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerSignedKeyForDeveloperManagedSigner(apiKey, registerDeveloperManagedSignedKeyReqBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.registerSignedKeyForDeveloperManagedSigner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
         * @summary Status
         * @param {string} apiKey API key required for authentication.
         * @param {string} signerUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signer(apiKey: string, signerUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Signer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signer(apiKey, signerUuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SignerApi.signer']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SignerApi - factory interface
 * @export
 */
export const SignerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SignerApiFp(configuration)
    return {
        /**
         * Creates a signer and returns the signer status. \\ **Note**: While tesing please reuse the signer, it costs money to approve a signer. 
         * @summary Create signer
         * @param {string} apiKey API key required for authentication.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSigner(apiKey: string, options?: RawAxiosRequestConfig): AxiosPromise<Signer> {
            return localVarFp.createSigner(apiKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches the status of a developer managed signer by public key
         * @summary Status by public key
         * @param {string} apiKey API key required for authentication.
         * @param {string} publicKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        developerManagedSigner(apiKey: string, publicKey: string, options?: RawAxiosRequestConfig): AxiosPromise<DeveloperManagedSigner> {
            return localVarFp.developerManagedSigner(apiKey, publicKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch authorization url (Fetched authorized url useful for SIWN login operation)
         * @summary Fetch authorization url
         * @param {string} apiKey API key required for authentication.
         * @param {string} clientId 
         * @param {AuthorizationUrlResponseType} responseType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAuthorizationUrl(apiKey: string, clientId: string, responseType: AuthorizationUrlResponseType, options?: RawAxiosRequestConfig): AxiosPromise<AuthorizationUrlResponse> {
            return localVarFp.fetchAuthorizationUrl(apiKey, clientId, responseType, options).then((request) => request(axios, basePath));
        },
        /**
         * Publish a message to farcaster. The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message. Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.
         * @summary Publish message
         * @param {string} apiKey API key required for authentication.
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishMessage(apiKey: string, body: object, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.publishMessage(apiKey, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Registers an app FID, deadline and a signature. Returns the signer status with an approval url.
         * @summary Register Signed Key
         * @param {string} apiKey API key required for authentication.
         * @param {RegisterSignerKeyReqBody} registerSignerKeyReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSignedKey(apiKey: string, registerSignerKeyReqBody: RegisterSignerKeyReqBody, options?: RawAxiosRequestConfig): AxiosPromise<Signer> {
            return localVarFp.registerSignedKey(apiKey, registerSignerKeyReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Registers an signed key and returns the developer managed signer status with an approval url.
         * @summary Register Signed Key
         * @param {string} apiKey API key required for authentication.
         * @param {RegisterDeveloperManagedSignedKeyReqBody} registerDeveloperManagedSignedKeyReqBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerSignedKeyForDeveloperManagedSigner(apiKey: string, registerDeveloperManagedSignedKeyReqBody: RegisterDeveloperManagedSignedKeyReqBody, options?: RawAxiosRequestConfig): AxiosPromise<DeveloperManagedSigner> {
            return localVarFp.registerSignedKeyForDeveloperManagedSigner(apiKey, registerDeveloperManagedSignedKeyReqBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
         * @summary Status
         * @param {string} apiKey API key required for authentication.
         * @param {string} signerUuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signer(apiKey: string, signerUuid: string, options?: RawAxiosRequestConfig): AxiosPromise<Signer> {
            return localVarFp.signer(apiKey, signerUuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SignerApi - object-oriented interface
 * @export
 * @class SignerApi
 * @extends {BaseAPI}
 */
export class SignerApi extends BaseAPI {
    /**
     * Creates a signer and returns the signer status. \\ **Note**: While tesing please reuse the signer, it costs money to approve a signer. 
     * @summary Create signer
     * @param {string} apiKey API key required for authentication.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public createSigner(apiKey: string, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).createSigner(apiKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches the status of a developer managed signer by public key
     * @summary Status by public key
     * @param {string} apiKey API key required for authentication.
     * @param {string} publicKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public developerManagedSigner(apiKey: string, publicKey: string, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).developerManagedSigner(apiKey, publicKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch authorization url (Fetched authorized url useful for SIWN login operation)
     * @summary Fetch authorization url
     * @param {string} apiKey API key required for authentication.
     * @param {string} clientId 
     * @param {AuthorizationUrlResponseType} responseType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public fetchAuthorizationUrl(apiKey: string, clientId: string, responseType: AuthorizationUrlResponseType, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).fetchAuthorizationUrl(apiKey, clientId, responseType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Publish a message to farcaster. The message must be signed by a signer managed by the developer. Use the @farcaster/core library to construct and sign the message. Use the Message.toJSON method on the signed message and pass the JSON in the body of this POST request.
     * @summary Publish message
     * @param {string} apiKey API key required for authentication.
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public publishMessage(apiKey: string, body: object, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).publishMessage(apiKey, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Registers an app FID, deadline and a signature. Returns the signer status with an approval url.
     * @summary Register Signed Key
     * @param {string} apiKey API key required for authentication.
     * @param {RegisterSignerKeyReqBody} registerSignerKeyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public registerSignedKey(apiKey: string, registerSignerKeyReqBody: RegisterSignerKeyReqBody, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).registerSignedKey(apiKey, registerSignerKeyReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Registers an signed key and returns the developer managed signer status with an approval url.
     * @summary Register Signed Key
     * @param {string} apiKey API key required for authentication.
     * @param {RegisterDeveloperManagedSignedKeyReqBody} registerDeveloperManagedSignedKeyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public registerSignedKeyForDeveloperManagedSigner(apiKey: string, registerDeveloperManagedSignedKeyReqBody: RegisterDeveloperManagedSignedKeyReqBody, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).registerSignedKeyForDeveloperManagedSigner(apiKey, registerDeveloperManagedSignedKeyReqBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
     * @summary Status
     * @param {string} apiKey API key required for authentication.
     * @param {string} signerUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignerApi
     */
    public signer(apiKey: string, signerUuid: string, options?: RawAxiosRequestConfig) {
        return SignerApiFp(this.configuration).signer(apiKey, signerUuid, options).then((request) => request(this.axios, this.basePath));
    }
}

