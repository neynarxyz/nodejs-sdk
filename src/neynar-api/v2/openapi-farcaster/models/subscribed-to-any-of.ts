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
import { SubscriptionTier } from './subscription-tier';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface SubscribedToAnyOf
 */
export interface SubscribedToAnyOf {
    /**
     * 
     * @type {string}
     * @memberof SubscribedToAnyOf
     */
    'expires_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToAnyOf
     */
    'subscribed_at'?: string;
    /**
     * 
     * @type {SubscriptionTier}
     * @memberof SubscribedToAnyOf
     */
    'tier'?: SubscriptionTier;
    /**
     * 
     * @type {User}
     * @memberof SubscribedToAnyOf
     */
    'creator'?: User;
}
