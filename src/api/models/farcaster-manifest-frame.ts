/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface FarcasterManifestFrame
 */
export interface FarcasterManifestFrame {
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'version': FarcasterManifestFrameVersionEnum;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'home_url': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'icon_url': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'image_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'button_title'?: string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'splash_image_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'splash_background_color'?: string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestFrame
     */
    'webhook_url'?: string;
}

export const FarcasterManifestFrameVersionEnum = {
    _000: '0.0.0',
    _001: '0.0.1',
    _1: '1',
    Next: 'next'
} as const;

export type FarcasterManifestFrameVersionEnum = typeof FarcasterManifestFrameVersionEnum[keyof typeof FarcasterManifestFrameVersionEnum];


