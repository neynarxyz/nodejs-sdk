/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.21.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const SignerEventType = {
    Add: 'SIGNER_EVENT_TYPE_ADD',
    Remove: 'SIGNER_EVENT_TYPE_REMOVE',
    AdminReset: 'SIGNER_EVENT_TYPE_ADMIN_RESET'
} as const;

export type SignerEventType = typeof SignerEventType[keyof typeof SignerEventType];



