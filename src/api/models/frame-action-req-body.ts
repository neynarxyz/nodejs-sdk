/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
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
     * UUID of the signer
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

