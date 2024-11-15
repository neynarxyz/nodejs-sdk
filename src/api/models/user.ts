/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UserExperimental } from './user-experimental';
// May contain unused imports in some cases
// @ts-ignore
import type { UserProfile } from './user-profile';
// May contain unused imports in some cases
// @ts-ignore
import type { UserVerifiedAccountsInner } from './user-verified-accounts-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { UserVerifiedAddresses } from './user-verified-addresses';
// May contain unused imports in some cases
// @ts-ignore
import type { UserViewerContext } from './user-viewer-context';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'object': UserObjectEnum;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof User
     */
    'fid': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'display_name'?: string;
    /**
     * Ethereum address
     * @type {string}
     * @memberof User
     */
    'custody_address': string;
    /**
     * The URL of the user\'s profile picture
     * @type {string}
     * @memberof User
     */
    'pfp_url'?: string;
    /**
     * 
     * @type {UserProfile}
     * @memberof User
     */
    'profile': UserProfile;
    /**
     * The number of followers the user has.
     * @type {number}
     * @memberof User
     */
    'follower_count': number;
    /**
     * The number of users the user is following.
     * @type {number}
     * @memberof User
     */
    'following_count': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    'verifications': Array<string>;
    /**
     * 
     * @type {UserVerifiedAddresses}
     * @memberof User
     */
    'verified_addresses': UserVerifiedAddresses;
    /**
     * Verified accounts of the user on other platforms, currently only X is supported.
     * @type {Array<UserVerifiedAccountsInner>}
     * @memberof User
     */
    'verified_accounts': Array<UserVerifiedAccountsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'power_badge': boolean;
    /**
     * 
     * @type {UserExperimental}
     * @memberof User
     */
    'experimental'?: UserExperimental;
    /**
     * 
     * @type {UserViewerContext}
     * @memberof User
     */
    'viewer_context'?: UserViewerContext;
}

export const UserObjectEnum = {
    User: 'user'
} as const;

export type UserObjectEnum = typeof UserObjectEnum[keyof typeof UserObjectEnum];

