/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OembedVideoDataAllOf
 */
export interface OembedVideoDataAllOf {
    /**
     * 
     * @type {string}
     * @memberof OembedVideoDataAllOf
     */
    'type': OembedVideoDataAllOfTypeEnum;
    /**
     * The HTML required to embed a video player. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities.
     * @type {string}
     * @memberof OembedVideoDataAllOf
     */
    'html': string | null;
    /**
     * The width in pixels required to display the HTML.
     * @type {number}
     * @memberof OembedVideoDataAllOf
     */
    'width': number | null;
    /**
     * The height in pixels required to display the HTML.
     * @type {number}
     * @memberof OembedVideoDataAllOf
     */
    'height': number | null;
}

export const OembedVideoDataAllOfTypeEnum = {
    Video: 'video'
} as const;

export type OembedVideoDataAllOfTypeEnum = typeof OembedVideoDataAllOfTypeEnum[keyof typeof OembedVideoDataAllOfTypeEnum];


