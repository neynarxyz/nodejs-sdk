/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
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
import type { CastAddBody } from './cast-add-body';
// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterNetwork } from './farcaster-network';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataCastAddAllOf } from './message-data-cast-add-all-of';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataCommon } from './message-data-common';

/**
 * @type MessageDataCastAdd
 * Represents a new cast (post) being created in the Farcaster network. A cast can include text content, mentions of other users, embedded URLs, and references to parent posts for replies.
 * @export
 */
export type MessageDataCastAdd = MessageDataCastAddAllOf & MessageDataCommon;


