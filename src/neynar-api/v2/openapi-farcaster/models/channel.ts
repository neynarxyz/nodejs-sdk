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
import type { ChannelExternalLink } from './channel-external-link';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelUserContext } from './channel-user-context';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Channel
 */
export interface Channel {
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'object': ChannelObjectEnum;
    /**
     * Epoch timestamp in seconds.
     * @type {number}
     * @memberof Channel
     */
    'created_at'?: number;
    /**
     * Number of followers the channel has.
     * @type {number}
     * @memberof Channel
     */
    'follower_count'?: number;
    /**
     * 
     * @type {ChannelExternalLink}
     * @memberof Channel
     */
    'external_link'?: ChannelExternalLink;
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'image_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof Channel
     */
    'parent_url'?: string;
    /**
     * 
     * @type {User}
     * @memberof Channel
     */
    'lead'?: User;
    /**
     * 
     * @type {Array<number>}
     * @memberof Channel
     */
    'moderator_fids'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Channel
     */
    'member_count'?: number;
    /**
     * 
     * @type {User}
     * @memberof Channel
     */
    'moderator'?: User;
    /**
     * Cast Hash
     * @type {string}
     * @memberof Channel
     */
    'pinned_cast_hash'?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof Channel
     * @deprecated
     */
    'hosts'?: Array<User>;
    /**
     * 
     * @type {ChannelUserContext}
     * @memberof Channel
     */
    'viewer_context'?: ChannelUserContext;
}

export const ChannelObjectEnum = {
    Channel: 'channel'
} as const;

export type ChannelObjectEnum = typeof ChannelObjectEnum[keyof typeof ChannelObjectEnum];


