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



/**
 * 
 * @export
 * @interface FrameNotificationTokensNotificationTokensInner
 */
export interface FrameNotificationTokensNotificationTokensInner {
    /**
     * 
     * @type {string}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'object'?: FrameNotificationTokensNotificationTokensInnerObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'token'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'status'?: FrameNotificationTokensNotificationTokensInnerStatusEnum;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'fid'?: number;
    /**
     * 
     * @type {string}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameNotificationTokensNotificationTokensInner
     */
    'updated_at'?: string;
}

export const FrameNotificationTokensNotificationTokensInnerObjectEnum = {
    NotificationToken: 'notification_token'
} as const;

export type FrameNotificationTokensNotificationTokensInnerObjectEnum = typeof FrameNotificationTokensNotificationTokensInnerObjectEnum[keyof typeof FrameNotificationTokensNotificationTokensInnerObjectEnum];
export const FrameNotificationTokensNotificationTokensInnerStatusEnum = {
    Enabled: 'enabled',
    Disabled: 'disabled'
} as const;

export type FrameNotificationTokensNotificationTokensInnerStatusEnum = typeof FrameNotificationTokensNotificationTokensInnerStatusEnum[keyof typeof FrameNotificationTokensNotificationTokensInnerStatusEnum];


