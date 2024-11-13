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
 * Farcaster network the message is intended for. - FARCASTER_NETWORK_MAINNET: Public primary network  - FARCASTER_NETWORK_TESTNET: Public test network  - FARCASTER_NETWORK_DEVNET: Private test network
 * @export
 * @enum {string}
 */

export const FarcasterNetwork = {
    Mainnet: 'FARCASTER_NETWORK_MAINNET',
    Testnet: 'FARCASTER_NETWORK_TESTNET',
    Devnet: 'FARCASTER_NETWORK_DEVNET'
} as const;

export type FarcasterNetwork = typeof FarcasterNetwork[keyof typeof FarcasterNetwork];



