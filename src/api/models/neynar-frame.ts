/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.11.0
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
 * @interface NeynarFrame
 */
export interface NeynarFrame {
    /**
     * Unique identifier for the frame.
     * @type {string}
     * @memberof NeynarFrame
     */
    'uuid': string;
    /**
     * Name of the frame.
     * @type {string}
     * @memberof NeynarFrame
     */
    'name': string;
    /**
     * Generated link for the frame\'s first page.
     * @type {string}
     * @memberof NeynarFrame
     */
    'link': string;
    /**
     * 
     * @type {Array<NeynarFramePage>}
     * @memberof NeynarFrame
     */
    'pages': Array<NeynarFramePage>;
    /**
     * Indicates if the frame is valid.
     * @type {boolean}
     * @memberof NeynarFrame
     */
    'valid'?: boolean;
}

