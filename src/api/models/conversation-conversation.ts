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
import type { CastWithInteractions } from './cast-with-interactions';
// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsAndConversations } from './cast-with-interactions-and-conversations';

/**
 * 
 * @export
 * @interface ConversationConversation
 */
export interface ConversationConversation {
    /**
     * 
     * @type {CastWithInteractionsAndConversations}
     * @memberof ConversationConversation
     */
    'cast': CastWithInteractionsAndConversations;
    /**
     * 
     * @type {Array<CastWithInteractions>}
     * @memberof ConversationConversation
     */
    'chronological_parent_casts'?: Array<CastWithInteractions>;
}

