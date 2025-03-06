/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.19.0
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
import type { BalanceResponse } from '../models';
// @ts-ignore
import type { DeployFungibleReqBodyMetadataMedia } from '../models';
// @ts-ignore
import type { DeployFungibleResponse } from '../models';
// @ts-ignore
import type { ErrorRes } from '../models';
// @ts-ignore
import type { Networks } from '../models';
// @ts-ignore
import type { RelevantFungibleOwnersResponse } from '../models';
/**
 * OnchainApi - axios parameter creator
 * @export
 */
export const OnchainApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new token. This is an allowlisted API, reach out if you want access. 
         * @summary Deploy fungible
         * @param {string} owner Ethereum address of the one who is creating the token 
         * @param {string} symbol Symbol/Ticker for the token 
         * @param {string} name Name of the token 
         * @param {DeployFungibleReqBodyMetadataMedia} [metadataMedia]  
         * @param {string} [metadataDescription] Description of the token 
         * @param {DeployFungibleMetadataNsfwEnum} [metadataNsfw] Indicates if the token is NSFW (Not Safe For Work).  
         * @param {string} [metadataWebsiteLink] Website link related to the token 
         * @param {string} [metadataTwitter] Twitter profile link 
         * @param {string} [metadataDiscord] Discord server link 
         * @param {string} [metadataTelegram] Telegram link 
         * @param {DeployFungibleNetworkEnum} [network] Network/Chain name 
         * @param {DeployFungibleFactoryEnum} [factory] Factory name - wow -&gt; [wow.xyz](https://wow.xyz) - clanker -&gt; [clanker.world](https://www.clanker.world)  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<DeployFungibleResponse>} A promise that resolves to a `DeployFungibleResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/deploy-fungible)
         * 
         */
        deployFungible: async (owner: string, symbol: string, name: string, metadataMedia?: DeployFungibleReqBodyMetadataMedia, metadataDescription?: string, metadataNsfw?: DeployFungibleMetadataNsfwEnum, metadataWebsiteLink?: string, metadataTwitter?: string, metadataDiscord?: string, metadataTelegram?: string, network?: DeployFungibleNetworkEnum, factory?: DeployFungibleFactoryEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('deployFungible', 'owner', owner)
            // verify required parameter 'symbol' is not null or undefined
            assertParamExists('deployFungible', 'symbol', symbol)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deployFungible', 'name', name)
            const localVarPath = `/fungible`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication ApiKeyAuth required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


            if (owner !== undefined) { 
                localVarFormParams.append('owner', owner as any);
            }
    
            if (symbol !== undefined) { 
                localVarFormParams.append('symbol', symbol as any);
            }
    
            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }
    
            if (metadataMedia !== undefined) { 
                localVarFormParams.append('metadata[media]', metadataMedia);
            }
    
            if (metadataDescription !== undefined) { 
                localVarFormParams.append('metadata[description]', metadataDescription as any);
            }
    
            if (metadataNsfw !== undefined) { 
                localVarFormParams.append('metadata[nsfw]', metadataNsfw as any);
            }
    
            if (metadataWebsiteLink !== undefined) { 
                localVarFormParams.append('metadata[website_link]', metadataWebsiteLink as any);
            }
    
            if (metadataTwitter !== undefined) { 
                localVarFormParams.append('metadata[twitter]', metadataTwitter as any);
            }
    
            if (metadataDiscord !== undefined) { 
                localVarFormParams.append('metadata[discord]', metadataDiscord as any);
            }
    
            if (metadataTelegram !== undefined) { 
                localVarFormParams.append('metadata[telegram]', metadataTelegram as any);
            }
    
            if (network !== undefined) { 
                localVarFormParams.append('network', network as any);
            }
    
            if (factory !== undefined) { 
                localVarFormParams.append('factory', factory as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a list of relevant owners for a specific FID. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".
         * @summary Relevant owners
         * @param {string} contractAddress Contract address of the fungible asset 
         * @param {Array<Networks>} networks Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported. 
         * @param {number} viewerFid The FID of the user to customize this response for. Providing this will also return a list of owners that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<RelevantFungibleOwnersResponse>} A promise that resolves to a `RelevantFungibleOwnersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-fungible-owners)
         * 
         */
        fetchRelevantFungibleOwners: async (contractAddress: string, networks: Array<Networks>, viewerFid: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractAddress' is not null or undefined
            assertParamExists('fetchRelevantFungibleOwners', 'contractAddress', contractAddress)
            // verify required parameter 'networks' is not null or undefined
            assertParamExists('fetchRelevantFungibleOwners', 'networks', networks)
            // verify required parameter 'viewerFid' is not null or undefined
            assertParamExists('fetchRelevantFungibleOwners', 'viewerFid', viewerFid)
            const localVarPath = `/farcaster/fungible/owner/relevant`;
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

            if (contractAddress !== undefined) {
                localVarQueryParameter['contract_address'] = contractAddress;
            }

            if (networks) {
                localVarQueryParameter['networks'] = networks.join(COLLECTION_FORMATS.csv);
            }

            if (viewerFid !== undefined) {
                localVarQueryParameter['viewer_fid'] = viewerFid;
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
         * Fetches the token balances of a user given their FID
         * @summary Token balance
         * @param {number} fid FID of the user to fetch 
         * @param {Array<Networks>} networks Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BalanceResponse>} A promise that resolves to a `BalanceResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-balance)
         * 
         */
        fetchUserBalance: async (fid: number, networks: Array<Networks>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('fetchUserBalance', 'fid', fid)
            // verify required parameter 'networks' is not null or undefined
            assertParamExists('fetchUserBalance', 'networks', networks)
            const localVarPath = `/farcaster/user/balance`;
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

            if (networks) {
                localVarQueryParameter['networks'] = networks.join(COLLECTION_FORMATS.csv);
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
 * OnchainApi - functional programming interface
 * @export
 */
export const OnchainApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OnchainApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new token. This is an allowlisted API, reach out if you want access. 
         * @summary Deploy fungible
         * @param {string} owner Ethereum address of the one who is creating the token 
         * @param {string} symbol Symbol/Ticker for the token 
         * @param {string} name Name of the token 
         * @param {DeployFungibleReqBodyMetadataMedia} [metadataMedia]  
         * @param {string} [metadataDescription] Description of the token 
         * @param {DeployFungibleMetadataNsfwEnum} [metadataNsfw] Indicates if the token is NSFW (Not Safe For Work).  
         * @param {string} [metadataWebsiteLink] Website link related to the token 
         * @param {string} [metadataTwitter] Twitter profile link 
         * @param {string} [metadataDiscord] Discord server link 
         * @param {string} [metadataTelegram] Telegram link 
         * @param {DeployFungibleNetworkEnum} [network] Network/Chain name 
         * @param {DeployFungibleFactoryEnum} [factory] Factory name - wow -&gt; [wow.xyz](https://wow.xyz) - clanker -&gt; [clanker.world](https://www.clanker.world)  
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<DeployFungibleResponse>} A promise that resolves to a `DeployFungibleResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/deploy-fungible)
         * 
         */
        async deployFungible(owner: string, symbol: string, name: string, metadataMedia?: DeployFungibleReqBodyMetadataMedia, metadataDescription?: string, metadataNsfw?: DeployFungibleMetadataNsfwEnum, metadataWebsiteLink?: string, metadataTwitter?: string, metadataDiscord?: string, metadataTelegram?: string, network?: DeployFungibleNetworkEnum, factory?: DeployFungibleFactoryEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployFungibleResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployFungible(owner, symbol, name, metadataMedia, metadataDescription, metadataNsfw, metadataWebsiteLink, metadataTwitter, metadataDiscord, metadataTelegram, network, factory, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OnchainApi.deployFungible']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetch a list of relevant owners for a specific FID. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".
         * @summary Relevant owners
         * @param {string} contractAddress Contract address of the fungible asset 
         * @param {Array<Networks>} networks Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported. 
         * @param {number} viewerFid The FID of the user to customize this response for. Providing this will also return a list of owners that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<RelevantFungibleOwnersResponse>} A promise that resolves to a `RelevantFungibleOwnersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-fungible-owners)
         * 
         */
        async fetchRelevantFungibleOwners(contractAddress: string, networks: Array<Networks>, viewerFid: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RelevantFungibleOwnersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchRelevantFungibleOwners(contractAddress, networks, viewerFid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OnchainApi.fetchRelevantFungibleOwners']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches the token balances of a user given their FID
         * @summary Token balance
         * @param {number} fid FID of the user to fetch 
         * @param {Array<Networks>} networks Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BalanceResponse>} A promise that resolves to a `BalanceResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-balance)
         * 
         */
        async fetchUserBalance(fid: number, networks: Array<Networks>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BalanceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchUserBalance(fid, networks, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OnchainApi.fetchUserBalance']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OnchainApi - factory interface
 * @export
 */
export const OnchainApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OnchainApiFp(configuration)
    return {
        /**
         * Creates a new token. This is an allowlisted API, reach out if you want access. 
         * @summary Deploy fungible
         * @param {OnchainApiDeployFungibleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<DeployFungibleResponse>} A promise that resolves to a `DeployFungibleResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/deploy-fungible)
         * 
         */
        deployFungible(requestParameters: OnchainApiDeployFungibleRequest, options?: RawAxiosRequestConfig): AxiosPromise<DeployFungibleResponse> {
            return localVarFp.deployFungible(requestParameters.owner, requestParameters.symbol, requestParameters.name, requestParameters.metadataMedia, requestParameters.metadataDescription, requestParameters.metadataNsfw, requestParameters.metadataWebsiteLink, requestParameters.metadataTwitter, requestParameters.metadataDiscord, requestParameters.metadataTelegram, requestParameters.network, requestParameters.factory, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of relevant owners for a specific FID. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".
         * @summary Relevant owners
         * @param {OnchainApiFetchRelevantFungibleOwnersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<RelevantFungibleOwnersResponse>} A promise that resolves to a `RelevantFungibleOwnersResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-fungible-owners)
         * 
         */
        fetchRelevantFungibleOwners(requestParameters: OnchainApiFetchRelevantFungibleOwnersRequest, options?: RawAxiosRequestConfig): AxiosPromise<RelevantFungibleOwnersResponse> {
            return localVarFp.fetchRelevantFungibleOwners(requestParameters.contractAddress, requestParameters.networks, requestParameters.viewerFid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches the token balances of a user given their FID
         * @summary Token balance
         * @param {OnchainApiFetchUserBalanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @returns {Promise<BalanceResponse>} A promise that resolves to a `BalanceResponse` object
         * 
         * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-balance)
         * 
         */
        fetchUserBalance(requestParameters: OnchainApiFetchUserBalanceRequest, options?: RawAxiosRequestConfig): AxiosPromise<BalanceResponse> {
            return localVarFp.fetchUserBalance(requestParameters.fid, requestParameters.networks, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OnchainApi - interface
 * @export
 * @interface OnchainApi
 */
export interface OnchainApiInterface {
    /**
     * Creates a new token. This is an allowlisted API, reach out if you want access. 
     * @summary Deploy fungible
     * @param {OnchainApiDeployFungibleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnchainApiInterface
     * @returns {Promise<DeployFungibleResponse>} A promise that resolves to a `DeployFungibleResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/deploy-fungible)
     * 
     */
    deployFungible(requestParameters: OnchainApiDeployFungibleRequest, options?: RawAxiosRequestConfig): AxiosPromise<DeployFungibleResponse>;

    /**
     * Fetch a list of relevant owners for a specific FID. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".
     * @summary Relevant owners
     * @param {OnchainApiFetchRelevantFungibleOwnersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnchainApiInterface
     * @returns {Promise<RelevantFungibleOwnersResponse>} A promise that resolves to a `RelevantFungibleOwnersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-fungible-owners)
     * 
     */
    fetchRelevantFungibleOwners(requestParameters: OnchainApiFetchRelevantFungibleOwnersRequest, options?: RawAxiosRequestConfig): AxiosPromise<RelevantFungibleOwnersResponse>;

    /**
     * Fetches the token balances of a user given their FID
     * @summary Token balance
     * @param {OnchainApiFetchUserBalanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnchainApiInterface
     * @returns {Promise<BalanceResponse>} A promise that resolves to a `BalanceResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-balance)
     * 
     */
    fetchUserBalance(requestParameters: OnchainApiFetchUserBalanceRequest, options?: RawAxiosRequestConfig): AxiosPromise<BalanceResponse>;

}

/**
 * Request parameters for deployFungible operation in OnchainApi.
 * @export
 * @interface OnchainApiDeployFungibleRequest
 */
export interface OnchainApiDeployFungibleRequest {
    /**
     * Ethereum address of the one who is creating the token
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly owner: string

    /**
     * Symbol/Ticker for the token
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly symbol: string

    /**
     * Name of the token
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly name: string

    /**
     * 
     * 
     * 
     * 
     * @type {DeployFungibleReqBodyMetadataMedia}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataMedia?: DeployFungibleReqBodyMetadataMedia

    /**
     * Description of the token
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataDescription?: string

    /**
     * Indicates if the token is NSFW (Not Safe For Work). 
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataNsfw?: DeployFungibleMetadataNsfwEnum

    /**
     * Website link related to the token
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataWebsiteLink?: string

    /**
     * Twitter profile link
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataTwitter?: string

    /**
     * Discord server link
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataDiscord?: string

    /**
     * Telegram link
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly metadataTelegram?: string

    /**
     * Network/Chain name
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly network?: DeployFungibleNetworkEnum

    /**
     * Factory name - wow -&gt; [wow.xyz](https://wow.xyz) - clanker -&gt; [clanker.world](https://www.clanker.world) 
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiDeployFungible
     */
    readonly factory?: DeployFungibleFactoryEnum
}

/**
 * Request parameters for fetchRelevantFungibleOwners operation in OnchainApi.
 * @export
 * @interface OnchainApiFetchRelevantFungibleOwnersRequest
 */
export interface OnchainApiFetchRelevantFungibleOwnersRequest {
    /**
     * Contract address of the fungible asset
     * 
     * 
     * 
     * @type {string}
     * @memberof OnchainApiFetchRelevantFungibleOwners
     */
    readonly contractAddress: string

    /**
     * Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported.
     * 
     * 
     * 
     * @type {Array<Networks>}
     * @memberof OnchainApiFetchRelevantFungibleOwners
     */
    readonly networks: Array<Networks>

    /**
     * The FID of the user to customize this response for. Providing this will also return a list of owners that respects this user\&#39;s mutes and blocks and includes &#x60;viewer_context&#x60;.
     * 
     * 
     * 
     * @type {number}
     * @memberof OnchainApiFetchRelevantFungibleOwners
     */
    readonly viewerFid: number
}

/**
 * Request parameters for fetchUserBalance operation in OnchainApi.
 * @export
 * @interface OnchainApiFetchUserBalanceRequest
 */
export interface OnchainApiFetchUserBalanceRequest {
    /**
     * FID of the user to fetch
     * 
     * 
     * 
     * @type {number}
     * @memberof OnchainApiFetchUserBalance
     */
    readonly fid: number

    /**
     * Comma separated list of networks to fetch balances for. Currently, only \&quot;base\&quot; is supported.
     * 
     * 
     * 
     * @type {Array<Networks>}
     * @memberof OnchainApiFetchUserBalance
     */
    readonly networks: Array<Networks>
}

/**
 * OnchainApi - object-oriented interface
 * @export
 * @class OnchainApi
 * @extends {BaseAPI}
 */
export class OnchainApi extends BaseAPI implements OnchainApiInterface {
    /**
     * Creates a new token. This is an allowlisted API, reach out if you want access. 
     * @summary Deploy fungible
     * @param {OnchainApiDeployFungibleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnchainApi
     * @returns {Promise<DeployFungibleResponse>} A promise that resolves to a `DeployFungibleResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/deploy-fungible)
     * 
     */
    public deployFungible(requestParameters: OnchainApiDeployFungibleRequest, options?: RawAxiosRequestConfig) {
        return OnchainApiFp(this.configuration).deployFungible(requestParameters.owner, requestParameters.symbol, requestParameters.name, requestParameters.metadataMedia, requestParameters.metadataDescription, requestParameters.metadataNsfw, requestParameters.metadataWebsiteLink, requestParameters.metadataTwitter, requestParameters.metadataDiscord, requestParameters.metadataTelegram, requestParameters.network, requestParameters.factory, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a list of relevant owners for a specific FID. This usually shows on a fungible asset page as \"X, Y, Z and N others you know own this asset\".
     * @summary Relevant owners
     * @param {OnchainApiFetchRelevantFungibleOwnersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnchainApi
     * @returns {Promise<RelevantFungibleOwnersResponse>} A promise that resolves to a `RelevantFungibleOwnersResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-relevant-fungible-owners)
     * 
     */
    public fetchRelevantFungibleOwners(requestParameters: OnchainApiFetchRelevantFungibleOwnersRequest, options?: RawAxiosRequestConfig) {
        return OnchainApiFp(this.configuration).fetchRelevantFungibleOwners(requestParameters.contractAddress, requestParameters.networks, requestParameters.viewerFid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches the token balances of a user given their FID
     * @summary Token balance
     * @param {OnchainApiFetchUserBalanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnchainApi
     * @returns {Promise<BalanceResponse>} A promise that resolves to a `BalanceResponse` object
     * 
     * For more information, refer to the [API documentation](https://docs.neynar.com/reference/fetch-user-balance)
     * 
     */
    public fetchUserBalance(requestParameters: OnchainApiFetchUserBalanceRequest, options?: RawAxiosRequestConfig) {
        return OnchainApiFp(this.configuration).fetchUserBalance(requestParameters.fid, requestParameters.networks, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const DeployFungibleMetadataNsfwEnum = {
    True: 'true',
    False: 'false'
} as const;
export type DeployFungibleMetadataNsfwEnum = typeof DeployFungibleMetadataNsfwEnum[keyof typeof DeployFungibleMetadataNsfwEnum];
/**
 * @export
 */
export const DeployFungibleNetworkEnum = {
    Base: 'base'
} as const;
export type DeployFungibleNetworkEnum = typeof DeployFungibleNetworkEnum[keyof typeof DeployFungibleNetworkEnum];
/**
 * @export
 */
export const DeployFungibleFactoryEnum = {
    Wow: 'wow',
    Clanker: 'clanker'
} as const;
export type DeployFungibleFactoryEnum = typeof DeployFungibleFactoryEnum[keyof typeof DeployFungibleFactoryEnum];
