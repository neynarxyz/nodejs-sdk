/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface ConversationSummarySummary
 */
export interface ConversationSummarySummary {
    /**
     * Summary generated by an LLM
     * @type {string}
     * @memberof ConversationSummarySummary
     */
    'text': string;
    /**
     * Users who casted in a conversation thread
     * @type {Array<User>}
     * @memberof ConversationSummarySummary
     */
    'participants': Array<User>;
    /**
     * Users who were mentioned in a conversation thread
     * @type {Array<User>}
     * @memberof ConversationSummarySummary
     */
    'mentioned_profiles': Array<User>;
}

