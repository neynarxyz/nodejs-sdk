/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastEmbeddedParentAuthor } from './cast-embedded-parent-author';
// May contain unused imports in some cases
// @ts-ignore
import type { CastNotificationType } from './cast-notification-type';
// May contain unused imports in some cases
// @ts-ignore
import type { DehydratedChannel } from './dehydrated-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { EmbedDeep } from './embed-deep';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface CastEmbedded
 */
export interface CastEmbedded {
    /**
     * 
     * @type {string}
     * @memberof CastEmbedded
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof CastEmbedded
     */
    'parent_hash': string | null;
    /**
     * 
     * @type {string}
     * @memberof CastEmbedded
     */
    'parent_url': string | null;
    /**
     * 
     * @type {string}
     * @memberof CastEmbedded
     */
    'root_parent_url': string | null;
    /**
     * 
     * @type {CastEmbeddedParentAuthor}
     * @memberof CastEmbedded
     */
    'parent_author': CastEmbeddedParentAuthor;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof CastEmbedded
     */
    'author': UserDehydrated;
    /**
     * 
     * @type {string}
     * @memberof CastEmbedded
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof CastEmbedded
     */
    'timestamp': string;
    /**
     * 
     * @type {CastNotificationType}
     * @memberof CastEmbedded
     */
    'type': CastNotificationType;
    /**
     * 
     * @type {Array<EmbedDeep>}
     * @memberof CastEmbedded
     */
    'embeds': Array<EmbedDeep>;
    /**
     * 
     * @type {DehydratedChannel}
     * @memberof CastEmbedded
     */
    'channel': DehydratedChannel | null;
}



