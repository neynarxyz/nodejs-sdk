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
import type { Channel } from './channel';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelExternalLink } from './channel-external-link';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelUserContext } from './channel-user-context';
// May contain unused imports in some cases
// @ts-ignore
import type { DehydratedChannel } from './dehydrated-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * @type ChannelOrDehydratedChannel
 * @export
 */
export type ChannelOrDehydratedChannel = { object: 'channel' } & Channel | { object: 'dehydrated_channel' } & DehydratedChannel;


