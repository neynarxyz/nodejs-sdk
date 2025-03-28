/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.24.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UserVerifiedAddressesPrimary } from './user-verified-addresses-primary';

/**
 * 
 * @export
 * @interface UserVerifiedAddresses
 */
export interface UserVerifiedAddresses {
    /**
     * List of verified Ethereum addresses of the user sorted by oldest to most recent.
     * @type {Array<string>}
     * @memberof UserVerifiedAddresses
     */
    'eth_addresses': Array<string>;
    /**
     * List of verified Solana addresses of the user sorted by oldest to most recent.
     * @type {Array<string>}
     * @memberof UserVerifiedAddresses
     */
    'sol_addresses': Array<string>;
    /**
     * 
     * @type {UserVerifiedAddressesPrimary}
     * @memberof UserVerifiedAddresses
     */
    'primary': UserVerifiedAddressesPrimary;
}

