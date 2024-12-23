/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { WebhookSecret } from './webhook-secret';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookSubscription } from './webhook-subscription';

/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'object': WebhookObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'webhook_id': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'developer_uuid': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'target_url': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'title': string;
    /**
     * 
     * @type {Array<WebhookSecret>}
     * @memberof Webhook
     */
    'secrets': Array<WebhookSecret>;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'http_timeout': string;
    /**
     * 
     * @type {number}
     * @memberof Webhook
     */
    'rate_limit': number;
    /**
     * 
     * @type {boolean}
     * @memberof Webhook
     */
    'active': boolean;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'rate_limit_duration': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'updated_at': string;
    /**
     * 
     * @type {string}
     * @memberof Webhook
     */
    'deleted_at': string;
    /**
     * 
     * @type {WebhookSubscription}
     * @memberof Webhook
     */
    'subscription'?: WebhookSubscription;
}

export const WebhookObjectEnum = {
    Webhook: 'webhook'
} as const;

export type WebhookObjectEnum = typeof WebhookObjectEnum[keyof typeof WebhookObjectEnum];


