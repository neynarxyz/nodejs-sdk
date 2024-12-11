/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TokenBalanceBalance } from './token-balance-balance';
// May contain unused imports in some cases
// @ts-ignore
import type { TokenBalanceToken } from './token-balance-token';

/**
 * The token balance associated with a wallet address and a network
 * @export
 * @interface TokenBalance
 */
export interface TokenBalance {
    /**
     * 
     * @type {string}
     * @memberof TokenBalance
     */
    'object': TokenBalanceObjectEnum;
    /**
     * 
     * @type {TokenBalanceToken}
     * @memberof TokenBalance
     */
    'token': TokenBalanceToken;
    /**
     * 
     * @type {TokenBalanceBalance}
     * @memberof TokenBalance
     */
    'balance': TokenBalanceBalance;
}

export const TokenBalanceObjectEnum = {
    TokenBalance: 'token_balance'
} as const;

export type TokenBalanceObjectEnum = typeof TokenBalanceObjectEnum[keyof typeof TokenBalanceObjectEnum];


