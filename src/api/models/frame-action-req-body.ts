/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.15.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FrameAction } from './frame-action';

/**
 * 
 * @export
 * @interface FrameActionReqBody
 */
export interface FrameActionReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof FrameActionReqBody
     */
    'signer_uuid': string;
    /**
     * Cast Hash
     * @type {string}
     * @memberof FrameActionReqBody
     */
    'cast_hash'?: string;
    /**
     * 
     * @type {FrameAction}
     * @memberof FrameActionReqBody
     */
    'action': FrameAction;
}

