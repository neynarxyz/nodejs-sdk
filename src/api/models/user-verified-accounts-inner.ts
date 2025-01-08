/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UserVerifiedAccountsInner
 */
export interface UserVerifiedAccountsInner {
    /**
     * 
     * @type {string}
     * @memberof UserVerifiedAccountsInner
     */
    'platform'?: UserVerifiedAccountsInnerPlatformEnum;
    /**
     * 
     * @type {string}
     * @memberof UserVerifiedAccountsInner
     */
    'username'?: string;
}

export const UserVerifiedAccountsInnerPlatformEnum = {
    X: 'x',
    Github: 'github'
} as const;

export type UserVerifiedAccountsInnerPlatformEnum = typeof UserVerifiedAccountsInnerPlatformEnum[keyof typeof UserVerifiedAccountsInnerPlatformEnum];


