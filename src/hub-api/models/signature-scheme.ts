/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Type of signature scheme used to sign the Message hash - SIGNATURE_SCHEME_ED25519: Ed25519 signature (default)  - SIGNATURE_SCHEME_EIP712: ECDSA signature using EIP-712 scheme
 * @export
 * @enum {string}
 */

export const SignatureScheme = {
    Ed25519: 'SIGNATURE_SCHEME_ED25519',
    Eip712: 'SIGNATURE_SCHEME_EIP712'
} as const;

export type SignatureScheme = typeof SignatureScheme[keyof typeof SignatureScheme];



