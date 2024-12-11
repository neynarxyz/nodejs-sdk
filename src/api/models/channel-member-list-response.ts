/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ChannelMember } from './channel-member';
// May contain unused imports in some cases
// @ts-ignore
import type { NextCursor } from './next-cursor';

/**
 * 
 * @export
 * @interface ChannelMemberListResponse
 */
export interface ChannelMemberListResponse {
    /**
     * 
     * @type {Array<ChannelMember>}
     * @memberof ChannelMemberListResponse
     */
    'members': Array<ChannelMember>;
    /**
     * 
     * @type {NextCursor}
     * @memberof ChannelMemberListResponse
     */
    'next': NextCursor;
}

