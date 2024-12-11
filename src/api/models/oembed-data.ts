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
 * Basic data structure of every oembed response see https://oembed.com/
 * @export
 * @interface OembedData
 */
export interface OembedData {
    /**
     * 
     * @type {string}
     * @memberof OembedData
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof OembedData
     */
    'version': string | null;
    /**
     * A text title, describing the resource.
     * @type {string}
     * @memberof OembedData
     */
    'title'?: string | null;
    /**
     * The name of the author/owner of the resource.
     * @type {string}
     * @memberof OembedData
     */
    'author_name'?: string | null;
    /**
     * A URL for the author/owner of the resource.
     * @type {string}
     * @memberof OembedData
     */
    'author_url'?: string | null;
    /**
     * The name of the resource provider.
     * @type {string}
     * @memberof OembedData
     */
    'provider_name'?: string | null;
    /**
     * The url of the resource provider.
     * @type {string}
     * @memberof OembedData
     */
    'provider_url'?: string | null;
    /**
     * The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not.
     * @type {string}
     * @memberof OembedData
     */
    'cache_age'?: string | null;
    /**
     * A URL to a thumbnail image representing the resource. The thumbnail must respect any maxwidth and maxheight parameters. If this parameter is present, thumbnail_width and thumbnail_height must also be present.
     * @type {string}
     * @memberof OembedData
     */
    'thumbnail_url'?: string | null;
    /**
     * The width of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_height must also be present.
     * @type {number}
     * @memberof OembedData
     */
    'thumbnail_width'?: number | null;
    /**
     * The height of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_width must also be present.
     * @type {number}
     * @memberof OembedData
     */
    'thumbnail_height'?: number | null;
}

