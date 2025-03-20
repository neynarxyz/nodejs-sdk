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
 * Contains the data required to remove a previously added blockchain address verification from a user\'s profile. This operation permanently removes the verification until explicitly re-added.
 * @export
 * @interface VerificationRemoveBody
 */
export interface VerificationRemoveBody {
    /**
     * The Ethereum address (0x-prefixed) for which the verification should be removed. Must match a previously verified address in the user\'s profile.
     * @type {string}
     * @memberof VerificationRemoveBody
     */
    'address': string;
}

