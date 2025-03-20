/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.21.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ChannelMemberRole } from './channel-member-role';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface ChannelMemberInvite
 */
export interface ChannelMemberInvite {
    /**
     * The unique identifier of a farcaster channel
     * @type {string}
     * @memberof ChannelMemberInvite
     */
    'channel_id': string;
    /**
     * 
     * @type {ChannelMemberRole}
     * @memberof ChannelMemberInvite
     */
    'role': ChannelMemberRole;
    /**
     * 
     * @type {User}
     * @memberof ChannelMemberInvite
     */
    'inviter': User;
    /**
     * 
     * @type {User}
     * @memberof ChannelMemberInvite
     */
    'invited': User;
}



