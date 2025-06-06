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
import type { FrameActionBody } from './frame-action-body';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataCommon } from './message-data-common';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataFrameActionAllOf } from './message-data-frame-action-all-of';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageType } from './message-type';

/**
 * @type MessageDataFrameAction
 * Represents a user\'s interaction with a Farcaster Frame, which is an interactive element embedded within a cast. Frames allow users to engage with content through clickable buttons, creating interactive experiences within the Farcaster network.
 * @export
 */
export type MessageDataFrameAction = MessageDataCommon & MessageDataFrameActionAllOf;


