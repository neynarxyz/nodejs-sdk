/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FrameAction } from './frame-action';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameSignaturePacket } from './frame-signature-packet';

/**
 * 
 * @export
 * @interface FrameDeveloperManagedActionReqBody
 */
export interface FrameDeveloperManagedActionReqBody {
    /**
     * Cast Hash
     * @type {string}
     * @memberof FrameDeveloperManagedActionReqBody
     */
    'cast_hash'?: string;
    /**
     * 
     * @type {FrameAction}
     * @memberof FrameDeveloperManagedActionReqBody
     */
    'action': FrameAction;
    /**
     * 
     * @type {FrameSignaturePacket}
     * @memberof FrameDeveloperManagedActionReqBody
     */
    'signature_packet': FrameSignaturePacket;
}

