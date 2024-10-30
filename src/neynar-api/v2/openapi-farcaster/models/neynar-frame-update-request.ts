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
import type { NeynarFramePage } from './neynar-frame-page';

/**
 * 
 * @export
 * @interface NeynarFrameUpdateRequest
 */
export interface NeynarFrameUpdateRequest {
    /**
     * The UUID of the frame to update.
     * @type {string}
     * @memberof NeynarFrameUpdateRequest
     */
    'uuid': string;
    /**
     * The name of the frame.
     * @type {string}
     * @memberof NeynarFrameUpdateRequest
     */
    'name'?: string;
    /**
     * 
     * @type {Array<NeynarFramePage>}
     * @memberof NeynarFrameUpdateRequest
     */
    'pages': Array<NeynarFramePage>;
}

