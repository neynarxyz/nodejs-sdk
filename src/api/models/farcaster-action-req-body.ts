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


// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterActionReqBodyAction } from './farcaster-action-req-body-action';

/**
 * 
 * @export
 * @interface FarcasterActionReqBody
 */
export interface FarcasterActionReqBody {
    /**
     * The signer_uuid of the user on behalf of whom the action is being performed.
     * @type {string}
     * @memberof FarcasterActionReqBody
     */
    'signer_uuid': string;
    /**
     * The base URL of the app on which the action is being performed.
     * @type {string}
     * @memberof FarcasterActionReqBody
     */
    'base_url': string;
    /**
     * 
     * @type {FarcasterActionReqBodyAction}
     * @memberof FarcasterActionReqBody
     */
    'action': FarcasterActionReqBodyAction;
}

