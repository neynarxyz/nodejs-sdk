/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SubscriptionMetadata } from './subscription-metadata';
// May contain unused imports in some cases
// @ts-ignore
import type { SubscriptionPrice } from './subscription-price';
// May contain unused imports in some cases
// @ts-ignore
import type { SubscriptionTier } from './subscription-tier';
// May contain unused imports in some cases
// @ts-ignore
import type { SubscriptionToken } from './subscription-token';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'provider_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'contract_address': string;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    'chain': number;
    /**
     * 
     * @type {SubscriptionMetadata}
     * @memberof Subscription
     */
    'metadata': SubscriptionMetadata;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'owner_address': string;
    /**
     * 
     * @type {SubscriptionPrice}
     * @memberof Subscription
     */
    'price': SubscriptionPrice;
    /**
     * 
     * @type {Array<SubscriptionTier>}
     * @memberof Subscription
     */
    'tiers'?: Array<SubscriptionTier>;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    'protocol_version': number;
    /**
     * 
     * @type {SubscriptionToken}
     * @memberof Subscription
     */
    'token': SubscriptionToken;
}

