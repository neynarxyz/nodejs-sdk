/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { NotificationType } from './notification-type';

/**
 * 
 * @export
 * @interface MarkNotificationsAsSeenReqBody
 */
export interface MarkNotificationsAsSeenReqBody {
    /**
     * The UUID of the signer. Signer should have atleast one write permission 
     * @type {string}
     * @memberof MarkNotificationsAsSeenReqBody
     */
    'signer_uuid': string;
    /**
     * 
     * @type {NotificationType}
     * @memberof MarkNotificationsAsSeenReqBody
     */
    'type'?: NotificationType;
}



