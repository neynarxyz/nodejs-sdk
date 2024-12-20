/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SubscriptionTier } from './subscription-tier';

/**
 * 
 * @export
 * @interface SubscriptionStatus
 */
export interface SubscriptionStatus {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionStatus
     */
    'object': SubscriptionStatusObjectEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionStatus
     */
    'status': boolean;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionStatus
     */
    'expires_at': number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionStatus
     */
    'subscribed_at': number | null;
    /**
     * 
     * @type {SubscriptionTier}
     * @memberof SubscriptionStatus
     */
    'tier': SubscriptionTier | null;
}

export const SubscriptionStatusObjectEnum = {
    SubscribedToDehydrated: 'subscribed_to_dehydrated'
} as const;

export type SubscriptionStatusObjectEnum = typeof SubscriptionStatusObjectEnum[keyof typeof SubscriptionStatusObjectEnum];


