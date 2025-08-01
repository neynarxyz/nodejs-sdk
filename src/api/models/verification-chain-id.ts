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



