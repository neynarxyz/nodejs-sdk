/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SendFrameNotificationsReqBodyNotification } from './send-frame-notifications-req-body-notification';

/**
 * 
 * @export
 * @interface SendFrameNotificationsReqBody
 */
export interface SendFrameNotificationsReqBody {
    /**
     * An array of target FIDs to whom the notifications should be sent. Each FID must be a positive integer, with a maximum of 100 FIDs allowed per call.
     * @type {Array<number>}
     * @memberof SendFrameNotificationsReqBody
     */
    'target_fids': Array<number>;
    /**
     * 
     * @type {SendFrameNotificationsReqBodyNotification}
     * @memberof SendFrameNotificationsReqBody
     */
    'notification': SendFrameNotificationsReqBodyNotification;
}

