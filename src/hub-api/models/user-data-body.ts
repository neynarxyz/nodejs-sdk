/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.35.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UserDataType } from './user-data-type';

/**
 * Contains the data for updating a specific field of a user\'s profile metadata. Each update operation modifies one profile field at a time, allowing granular control over profile information.
 * @export
 * @interface UserDataBody
 */
export interface UserDataBody {
    /**
     * Specifies which profile field is being updated (e.g., profile picture, display name, bio).
     * @type {UserDataType}
     * @memberof UserDataBody
     */
    'type': UserDataType;
    /**
     * The new value for the specified profile field. The format depends on the type: URLs for profile pictures, plain text for display names and bios, etc.
     * @type {string}
     * @memberof UserDataBody
     */
    'value': string;
}



