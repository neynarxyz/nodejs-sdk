/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.11.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ProfileUrl } from './profile-url';
// May contain unused imports in some cases
// @ts-ignore
import type { ProfileUrlPfp } from './profile-url-pfp';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';
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
 * @interface SearchedUser
 */
export interface SearchedUser {
    /**
     * 
     * @type {string}
     * @memberof SearchedUser
     */
    'object': SearchedUserObjectEnum;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof SearchedUser
     */
    'fid': number;
    /**
     * 
     * @type {string}
     * @memberof SearchedUser
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SearchedUser
     */
    'display_name'?: string;
    /**
     * Ethereum address
     * @type {string}
     * @memberof SearchedUser
     */
    'custody_address': string;
    /**
     * The URL of the user\'s profile picture
     * @type {string}
     * @memberof SearchedUser
     */
    'pfp_url'?: string;
    /**
     * 
     * @type {UserProfile}
     * @memberof SearchedUser
     */
    'profile': UserProfile;
    /**
     * The number of followers the user has.
     * @type {number}
     * @memberof SearchedUser
     */
    'follower_count': number;
    /**
     * The number of users the user is following.
     * @type {number}
     * @memberof SearchedUser
     */
    'following_count': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchedUser
     */
    'verifications': Array<string>;
    /**
     * 
     * @type {UserVerifiedAddresses}
     * @memberof SearchedUser
     */
    'verified_addresses': UserVerifiedAddresses;
    /**
     * Verified accounts of the user on other platforms, currently only X is supported.
     * @type {Array<UserVerifiedAccountsInner>}
     * @memberof SearchedUser
     */
    'verified_accounts': Array<UserVerifiedAccountsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedUser
     */
    'power_badge': boolean;
    /**
     * 
     * @type {UserExperimental}
     * @memberof SearchedUser
     */
    'experimental'?: UserExperimental;
    /**
     * 
     * @type {UserViewerContext}
     * @memberof SearchedUser
     */
    'viewer_context'?: UserViewerContext;
    /**
     * 
     * @type {ProfileUrlPfp}
     * @memberof SearchedUser
     */
    'pfp': ProfileUrlPfp;
}

export const SearchedUserObjectEnum = {
    User: 'user'
} as const;

export type SearchedUserObjectEnum = typeof SearchedUserObjectEnum[keyof typeof SearchedUserObjectEnum];


