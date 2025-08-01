/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.31.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface NotificationDelivery
 */
export interface NotificationDelivery {
    /**
     * 
     * @type {string}
     * @memberof NotificationDelivery
     */
    'object': NotificationDeliveryObjectEnum;
    /**
     * The unique identifier of a farcaster user or app (unsigned integer)
     * @type {number}
     * @memberof NotificationDelivery
     */
    'fid': number;
    /**
     * 
     * @type {string}
     * @memberof NotificationDelivery
     */
    'status': NotificationDeliveryStatusEnum;
    /**
     * The unique identifier of a farcaster user or app (unsigned integer)
     * @type {number}
     * @memberof NotificationDelivery
     */
    'app_fid'?: number;
}

export const NotificationDeliveryObjectEnum = {
    NotificationDelivery: 'notification_delivery'
} as const;

export type NotificationDeliveryObjectEnum = typeof NotificationDeliveryObjectEnum[keyof typeof NotificationDeliveryObjectEnum];
export const NotificationDeliveryStatusEnum = {
    Success: 'success',
    TokenNotFound: 'token_not_found',
    TokenDisabled: 'token_disabled',
    Failed: 'failed'
} as const;

export type NotificationDeliveryStatusEnum = typeof NotificationDeliveryStatusEnum[keyof typeof NotificationDeliveryStatusEnum];


