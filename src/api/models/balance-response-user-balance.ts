/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AddressBalance } from './address-balance';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface BalanceResponseUserBalance
 */
export interface BalanceResponseUserBalance {
    /**
     * 
     * @type {string}
     * @memberof BalanceResponseUserBalance
     */
    'object': BalanceResponseUserBalanceObjectEnum;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof BalanceResponseUserBalance
     */
    'user': UserDehydrated;
    /**
     * 
     * @type {Array<AddressBalance>}
     * @memberof BalanceResponseUserBalance
     */
    'address_balances': Array<AddressBalance>;
}

export const BalanceResponseUserBalanceObjectEnum = {
    UserBalance: 'user_balance'
} as const;

export type BalanceResponseUserBalanceObjectEnum = typeof BalanceResponseUserBalanceObjectEnum[keyof typeof BalanceResponseUserBalanceObjectEnum];


