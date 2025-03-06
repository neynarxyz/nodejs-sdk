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



/**
 * Chain ID for farcaster verifications. 0 for EOA verifications, 1 or 10 for contract verifications
 * @export
 * @enum {number}
 */

export const VerificationChainId = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_10: 10
} as const;

export type VerificationChainId = typeof VerificationChainId[keyof typeof VerificationChainId];



