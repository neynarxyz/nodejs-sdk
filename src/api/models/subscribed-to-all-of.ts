/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.7
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SubscriptionTier } from './subscription-tier';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface SubscribedToAllOf
 */
export interface SubscribedToAllOf {
    /**
     * 
     * @type {string}
     * @memberof SubscribedToAllOf
     */
    'expires_at': string;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToAllOf
     */
    'subscribed_at': string;
    /**
     * 
     * @type {SubscriptionTier}
     * @memberof SubscribedToAllOf
     */
    'tier': SubscriptionTier;
    /**
     * 
     * @type {User}
     * @memberof SubscribedToAllOf
     */
    'creator': User;
}

