/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.19.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { WebhookSubscriptionFilters } from './webhook-subscription-filters';

/**
 * 
 * @export
 * @interface WebhookSubscription
 */
export interface WebhookSubscription {
    /**
     * 
     * @type {string}
     * @memberof WebhookSubscription
     */
    'object': WebhookSubscriptionObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof WebhookSubscription
     */
    'subscription_id': string;
    /**
     * 
     * @type {WebhookSubscriptionFilters}
     * @memberof WebhookSubscription
     */
    'filters': WebhookSubscriptionFilters;
    /**
     * 
     * @type {string}
     * @memberof WebhookSubscription
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof WebhookSubscription
     */
    'updated_at': string;
}

export const WebhookSubscriptionObjectEnum = {
    WebhookSubscription: 'webhook_subscription'
} as const;

export type WebhookSubscriptionObjectEnum = typeof WebhookSubscriptionObjectEnum[keyof typeof WebhookSubscriptionObjectEnum];


