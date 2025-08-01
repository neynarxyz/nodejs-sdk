/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.31.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Location } from './location';
// May contain unused imports in some cases
// @ts-ignore
import type { UserProfileBanner } from './user-profile-banner';
// May contain unused imports in some cases
// @ts-ignore
import type { UserProfileBio } from './user-profile-bio';

/**
 * 
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     * 
     * @type {UserProfileBio}
     * @memberof UserProfile
     */
    'bio': UserProfileBio;
    /**
     * 
     * @type {Location}
     * @memberof UserProfile
     */
    'location'?: Location;
    /**
     * 
     * @type {UserProfileBanner}
     * @memberof UserProfile
     */
    'banner'?: UserProfileBanner;
}

