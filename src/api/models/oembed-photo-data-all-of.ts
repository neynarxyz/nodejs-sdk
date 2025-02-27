/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.15.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OembedPhotoDataAllOf
 */
export interface OembedPhotoDataAllOf {
    /**
     * 
     * @type {string}
     * @memberof OembedPhotoDataAllOf
     */
    'type': OembedPhotoDataAllOfTypeEnum;
    /**
     * The source URL of the image. Consumers should be able to insert this URL into an <img> element. Only HTTP and HTTPS URLs are valid.
     * @type {string}
     * @memberof OembedPhotoDataAllOf
     */
    'url': string | null;
    /**
     * The width in pixels of the image specified in the url parameter.
     * @type {number}
     * @memberof OembedPhotoDataAllOf
     */
    'width': number | null;
    /**
     * The height in pixels of the image specified in the url parameter.
     * @type {number}
     * @memberof OembedPhotoDataAllOf
     */
    'height': number | null;
}

export const OembedPhotoDataAllOfTypeEnum = {
    Photo: 'photo'
} as const;

export type OembedPhotoDataAllOfTypeEnum = typeof OembedPhotoDataAllOfTypeEnum[keyof typeof OembedPhotoDataAllOfTypeEnum];


