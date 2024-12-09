/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: team@neynar.com
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
 * @interface NeynarFrameUpdateReqBody
 */
export interface NeynarFrameUpdateReqBody {
    /**
     * The UUID of the frame to update.
     * @type {string}
     * @memberof NeynarFrameUpdateReqBody
     */
    'uuid': string;
    /**
     * The name of the frame.
     * @type {string}
     * @memberof NeynarFrameUpdateReqBody
     */
    'name'?: string;
    /**
     * 
     * @type {Array<NeynarFramePage>}
     * @memberof NeynarFrameUpdateReqBody
     */
    'pages': Array<NeynarFramePage>;
}

