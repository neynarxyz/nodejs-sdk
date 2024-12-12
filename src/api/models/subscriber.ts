/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.3
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SubscribedToObject } from './subscribed-to-object';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Subscriber
 */
export interface Subscriber {
    /**
     * 
     * @type {string}
     * @memberof Subscriber
     */
    'object': string;
    /**
     * 
     * @type {User}
     * @memberof Subscriber
     */
    'user': User;
    /**
     * 
     * @type {SubscribedToObject}
     * @memberof Subscriber
     */
    'subscribed_to': SubscribedToObject;
}

