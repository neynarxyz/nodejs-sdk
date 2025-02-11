/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.12.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UserDehydrated
 */
export interface UserDehydrated {
    /**
     * 
     * @type {string}
     * @memberof UserDehydrated
     */
    'object': UserDehydratedObjectEnum;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof UserDehydrated
     */
    'fid': number;
    /**
     * 
     * @type {string}
     * @memberof UserDehydrated
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDehydrated
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDehydrated
     */
    'pfp_url'?: string;
}

export const UserDehydratedObjectEnum = {
    UserDehydrated: 'user_dehydrated'
} as const;

export type UserDehydratedObjectEnum = typeof UserDehydratedObjectEnum[keyof typeof UserDehydratedObjectEnum];


