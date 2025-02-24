/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.15.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AddressBalanceVerifiedAddress } from './address-balance-verified-address';
// May contain unused imports in some cases
// @ts-ignore
import type { TokenBalance } from './token-balance';

/**
 * The token balances associated with a wallet address
 * @export
 * @interface AddressBalance
 */
export interface AddressBalance {
    /**
     * 
     * @type {string}
     * @memberof AddressBalance
     */
    'object': AddressBalanceObjectEnum;
    /**
     * 
     * @type {AddressBalanceVerifiedAddress}
     * @memberof AddressBalance
     */
    'verified_address': AddressBalanceVerifiedAddress;
    /**
     * 
     * @type {Array<TokenBalance>}
     * @memberof AddressBalance
     */
    'token_balances': Array<TokenBalance>;
}

export const AddressBalanceObjectEnum = {
    AddressBalance: 'address_balance'
} as const;

export type AddressBalanceObjectEnum = typeof AddressBalanceObjectEnum[keyof typeof AddressBalanceObjectEnum];


