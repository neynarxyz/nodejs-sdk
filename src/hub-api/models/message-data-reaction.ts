/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.35.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterNetwork } from './farcaster-network';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataCommon } from './message-data-common';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataReactionAllOf } from './message-data-reaction-all-of';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageType } from './message-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ReactionBody } from './reaction-body';

/**
 * @type MessageDataReaction
 * Represents a user\'s reaction to content on the Farcaster network. Reactions can be likes or recasts of casts, allowing users to express appreciation or share content with their followers.
 * @export
 */
export type MessageDataReaction = MessageDataCommon & MessageDataReactionAllOf;


