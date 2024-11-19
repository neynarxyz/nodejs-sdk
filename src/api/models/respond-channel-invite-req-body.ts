/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ChannelMemberRole } from './channel-member-role';

/**
 * 
 * @export
 * @interface RespondChannelInviteReqBody
 */
export interface RespondChannelInviteReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, you cannot use a `uuid` made with a different API key.
     * @type {string}
     * @memberof RespondChannelInviteReqBody
     */
    'signer_uuid': string;
    /**
     * The unique identifier of a farcaster channel
     * @type {string}
     * @memberof RespondChannelInviteReqBody
     */
    'channel_id': string;
    /**
     * 
     * @type {ChannelMemberRole}
     * @memberof RespondChannelInviteReqBody
     */
    'role': ChannelMemberRole;
    /**
     * Accept or reject the invite
     * @type {boolean}
     * @memberof RespondChannelInviteReqBody
     */
    'accept': boolean;
}



