/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.7.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsAndConversationsRef } from './cast-with-interactions-and-conversations-ref';

/**
 * 
 * @export
 * @interface CastWithInteractionsAndConversationsAllOf
 */
export interface CastWithInteractionsAndConversationsAllOf {
    /**
     * note: This is recursive. It contains the direct replies to the cast and their direct replies up to n reply_depth.
     * @type {Array<CastWithInteractionsAndConversationsRef>}
     * @memberof CastWithInteractionsAndConversationsAllOf
     */
    'direct_replies': Array<CastWithInteractionsAndConversationsRef>;
}

