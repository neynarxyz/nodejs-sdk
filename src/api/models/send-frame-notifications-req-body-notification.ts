/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.9.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SendFrameNotificationsReqBodyNotification
 */
export interface SendFrameNotificationsReqBodyNotification {
    /**
     * The title of the notification. Must be between 1 and 32 characters.
     * @type {string}
     * @memberof SendFrameNotificationsReqBodyNotification
     */
    'title': string;
    /**
     * The body of the notification. Must be between 1 and 128 characters.
     * @type {string}
     * @memberof SendFrameNotificationsReqBodyNotification
     */
    'body': string;
    /**
     * The target URL to open when the user clicks the notification. Must be a valid URL.
     * @type {string}
     * @memberof SendFrameNotificationsReqBodyNotification
     */
    'target_url': string;
    /**
     * An optional UUID for the notification, used as an idempotency key.
     * @type {string}
     * @memberof SendFrameNotificationsReqBodyNotification
     */
    'uuid'?: string;
}

