/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
 *
 * The version of the OpenAPI document: 1.0
 * 
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
import type { CastRemoveBody } from './cast-remove-body';
// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterNetwork } from './farcaster-network';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameActionBody } from './frame-action-body';
// May contain unused imports in some cases
// @ts-ignore
import type { LinkBody } from './link-body';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataCastAdd } from './message-data-cast-add';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataCastRemove } from './message-data-cast-remove';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataFrameAction } from './message-data-frame-action';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataLink } from './message-data-link';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataReaction } from './message-data-reaction';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataUserDataAdd } from './message-data-user-data-add';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataUsernameProof } from './message-data-username-proof';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataVerificationAdd } from './message-data-verification-add';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageDataVerificationRemove } from './message-data-verification-remove';
// May contain unused imports in some cases
// @ts-ignore
import type { ReactionBody } from './reaction-body';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDataBody } from './user-data-body';
// May contain unused imports in some cases
// @ts-ignore
import type { UserNameProof } from './user-name-proof';
// May contain unused imports in some cases
// @ts-ignore
import type { VerificationAddEthAddressBody } from './verification-add-eth-address-body';
// May contain unused imports in some cases
// @ts-ignore
import type { VerificationRemoveBody } from './verification-remove-body';

/**
 * @type MessageAllOfData
 * @export
 */
export type MessageAllOfData = { type: 'MESSAGE_TYPE_CAST_ADD' } & MessageDataCastAdd | { type: 'MESSAGE_TYPE_CAST_REMOVE' } & MessageDataCastRemove | { type: 'MESSAGE_TYPE_FRAME_ACTION' } & MessageDataFrameAction | { type: 'MESSAGE_TYPE_LINK_ADD' } & MessageDataLink | { type: 'MESSAGE_TYPE_LINK_REMOVE' } & MessageDataLink | { type: 'MESSAGE_TYPE_REACTION_ADD' } & MessageDataReaction | { type: 'MESSAGE_TYPE_REACTION_REMOVE' } & MessageDataReaction | { type: 'MESSAGE_TYPE_USERNAME_PROOF' } & MessageDataUsernameProof | { type: 'MESSAGE_TYPE_USER_DATA_ADD' } & MessageDataUserDataAdd | { type: 'MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS' } & MessageDataVerificationAdd | { type: 'MESSAGE_TYPE_VERIFICATION_REMOVE' } & MessageDataVerificationRemove;


