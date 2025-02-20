/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.3
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractions } from './cast-with-interactions';
// May contain unused imports in some cases
// @ts-ignore
import type { Follow } from './follow';
// May contain unused imports in some cases
// @ts-ignore
import type { ReactionWithUserInfo } from './reaction-with-user-info';

/**
 * 
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'most_recent_timestamp': string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'type': NotificationTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Notification
     */
    'seen': boolean;
    /**
     * 
     * @type {Array<Follow>}
     * @memberof Notification
     */
    'follows'?: Array<Follow>;
    /**
     * 
     * @type {CastWithInteractions}
     * @memberof Notification
     */
    'cast'?: CastWithInteractions;
    /**
     * 
     * @type {Array<ReactionWithUserInfo>}
     * @memberof Notification
     */
    'reactions'?: Array<ReactionWithUserInfo>;
    /**
     * The number of notifications of this(follows, likes, recast) type bundled in a single notification.
     * @type {number}
     * @memberof Notification
     */
    'count'?: number;
}

export const NotificationTypeEnum = {
    Follows: 'follows',
    Recasts: 'recasts',
    Likes: 'likes',
    Mention: 'mention',
    Reply: 'reply',
    Quote: 'quote'
} as const;

export type NotificationTypeEnum = typeof NotificationTypeEnum[keyof typeof NotificationTypeEnum];


