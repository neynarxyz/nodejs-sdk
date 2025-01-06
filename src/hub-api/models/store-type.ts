/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.7.1
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

export const StoreType = {
    Casts: 'STORE_TYPE_CASTS',
    Links: 'STORE_TYPE_LINKS',
    Reactions: 'STORE_TYPE_REACTIONS',
    UserData: 'STORE_TYPE_USER_DATA',
    Verifications: 'STORE_TYPE_VERIFICATIONS',
    UsernameProofs: 'STORE_TYPE_USERNAME_PROOFS'
} as const;

export type StoreType = typeof StoreType[keyof typeof StoreType];



