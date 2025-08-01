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


// May contain unused imports in some cases
// @ts-ignore
import type { TransactionSendFungiblesRecipient } from './transaction-send-fungibles-recipient';

/**
 * 
 * @export
 * @interface TransactionSendFungiblesReqBody
 */
export interface TransactionSendFungiblesReqBody {
    /**
     * 
     * @type {string}
     * @memberof TransactionSendFungiblesReqBody
     */
    'network': TransactionSendFungiblesReqBodyNetworkEnum;
    /**
     * Contract address of the fungible token to send. If not provided, the default is the native token of the network.
     * @type {string}
     * @memberof TransactionSendFungiblesReqBody
     */
    'fungible_contract_address'?: string;
    /**
     * 
     * @type {Array<TransactionSendFungiblesRecipient>}
     * @memberof TransactionSendFungiblesReqBody
     */
    'recipients': Array<TransactionSendFungiblesRecipient>;
}

export const TransactionSendFungiblesReqBodyNetworkEnum = {
    Base: 'base',
    Optimism: 'optimism',
    BaseSepolia: 'base-sepolia'
} as const;

export type TransactionSendFungiblesReqBodyNetworkEnum = typeof TransactionSendFungiblesReqBodyNetworkEnum[keyof typeof TransactionSendFungiblesReqBodyNetworkEnum];


