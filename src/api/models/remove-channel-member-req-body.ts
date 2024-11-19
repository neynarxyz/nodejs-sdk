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
 * @interface RemoveChannelMemberReqBody
 */
export interface RemoveChannelMemberReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, you cannot use a `uuid` made with a different API key.
     * @type {string}
     * @memberof RemoveChannelMemberReqBody
     */
    'signer_uuid': string;
    /**
     * The unique identifier of a farcaster channel
     * @type {string}
     * @memberof RemoveChannelMemberReqBody
     */
    'channel_id': string;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof RemoveChannelMemberReqBody
     */
    'fid': number;
    /**
     * 
     * @type {ChannelMemberRole}
     * @memberof RemoveChannelMemberReqBody
     */
    'role': ChannelMemberRole;
}



