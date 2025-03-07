/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.19.0
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
import type { Embed } from './embed';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Cast
 */
export interface Cast {
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'parent_hash': string | null;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'parent_url': string | null;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'root_parent_url': string | null;
    /**
     * 
     * @type {CastEmbeddedParentAuthor}
     * @memberof Cast
     */
    'parent_author': CastEmbeddedParentAuthor;
    /**
     * 
     * @type {User}
     * @memberof Cast
     */
    'author': User;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'timestamp': string;
    /**
     * 
     * @type {Array<Embed>}
     * @memberof Cast
     */
    'embeds': Array<Embed>;
    /**
     * 
     * @type {CastNotificationType}
     * @memberof Cast
     */
    'type'?: CastNotificationType;
}



