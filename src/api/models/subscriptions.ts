/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.10.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Subscription } from './subscription';

/**
 * 
 * @export
 * @interface Subscriptions
 */
export interface Subscriptions {
    /**
     * 
     * @type {string}
     * @memberof Subscriptions
     */
    'object': string;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof Subscriptions
     */
    'subscriptions_created': Array<Subscription>;
}

