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



/**
 * 
 * @export
 * @interface TokenBalanceToken
 */
export interface TokenBalanceToken {
    /**
     * 
     * @type {string}
     * @memberof TokenBalanceToken
     */
    'object': TokenBalanceTokenObjectEnum;
    /**
     * The token name e.g. \"Ethereum\"
     * @type {string}
     * @memberof TokenBalanceToken
     */
    'name': string;
    /**
     * The token symbol e.g. \"ETH\"
     * @type {string}
     * @memberof TokenBalanceToken
     */
    'symbol': string;
    /**
     * The contract address of the token (omitted for native token)
     * @type {string}
     * @memberof TokenBalanceToken
     */
    'address'?: string;
    /**
     * The number of decimals the token uses
     * @type {number}
     * @memberof TokenBalanceToken
     */
    'decimals'?: number;
}

export const TokenBalanceTokenObjectEnum = {
    Token: 'token'
} as const;

export type TokenBalanceTokenObjectEnum = typeof TokenBalanceTokenObjectEnum[keyof typeof TokenBalanceTokenObjectEnum];

