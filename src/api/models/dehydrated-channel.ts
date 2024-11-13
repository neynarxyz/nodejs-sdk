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
import type { ChannelUserContext } from './channel-user-context';

/**
 * 
 * @export
 * @interface DehydratedChannel
 */
export interface DehydratedChannel {
    /**
     * 
     * @type {string}
     * @memberof DehydratedChannel
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof DehydratedChannel
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DehydratedChannel
     */
    'object': DehydratedChannelObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof DehydratedChannel
     */
    'image_url'?: string;
    /**
     * 
     * @type {ChannelUserContext}
     * @memberof DehydratedChannel
     */
    'viewer_context'?: ChannelUserContext;
}

export const DehydratedChannelObjectEnum = {
    ChannelDehydrated: 'channel_dehydrated'
} as const;

export type DehydratedChannelObjectEnum = typeof DehydratedChannelObjectEnum[keyof typeof DehydratedChannelObjectEnum];


