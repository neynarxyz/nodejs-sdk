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


