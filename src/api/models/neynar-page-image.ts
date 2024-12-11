/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface NeynarPageImage
 */
export interface NeynarPageImage {
    /**
     * The URL of the page\'s image.
     * @type {string}
     * @memberof NeynarPageImage
     */
    'url': string;
    /**
     * The aspect ratio of the image.
     * @type {string}
     * @memberof NeynarPageImage
     */
    'aspect_ratio': NeynarPageImageAspectRatioEnum;
}

export const NeynarPageImageAspectRatioEnum = {
    _1911: '1.91:1',
    _11: '1:1'
} as const;

export type NeynarPageImageAspectRatioEnum = typeof NeynarPageImageAspectRatioEnum[keyof typeof NeynarPageImageAspectRatioEnum];


