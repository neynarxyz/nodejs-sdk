/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.22.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Frame base object used across all versions
 * @export
 * @interface FrameBase
 */
export interface FrameBase {
    /**
     * Version of the frame, \'next\' for v2, \'vNext\' for v1
     * @type {string}
     * @memberof FrameBase
     */
    'version': string;
    /**
     * URL of the image
     * @type {string}
     * @memberof FrameBase
     */
    'image': string;
    /**
     * Launch URL of the frame
     * @type {string}
     * @memberof FrameBase
     */
    'frames_url': string;
}

