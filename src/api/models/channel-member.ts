/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ChannelMemberChannel } from './channel-member-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelMemberRole } from './channel-member-role';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelMemberUser } from './channel-member-user';

/**
 * 
 * @export
 * @interface ChannelMember
 */
export interface ChannelMember {
    /**
     * 
     * @type {string}
     * @memberof ChannelMember
     */
    'object': ChannelMemberObjectEnum;
    /**
     * 
     * @type {ChannelMemberRole}
     * @memberof ChannelMember
     */
    'role': ChannelMemberRole;
    /**
     * 
     * @type {ChannelMemberUser}
     * @memberof ChannelMember
     */
    'user': ChannelMemberUser;
    /**
     * 
     * @type {ChannelMemberChannel}
     * @memberof ChannelMember
     */
    'channel': ChannelMemberChannel;
}

export const ChannelMemberObjectEnum = {
    Member: 'member'
} as const;

export type ChannelMemberObjectEnum = typeof ChannelMemberObjectEnum[keyof typeof ChannelMemberObjectEnum];


