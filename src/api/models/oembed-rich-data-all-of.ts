/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OembedRichDataAllOf
 */
export interface OembedRichDataAllOf {
    /**
     * 
     * @type {string}
     * @memberof OembedRichDataAllOf
     */
    'type': OembedRichDataAllOfTypeEnum;
    /**
     * The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic.
     * @type {string}
     * @memberof OembedRichDataAllOf
     */
    'html': string | null;
    /**
     * The width in pixels required to display the HTML.
     * @type {number}
     * @memberof OembedRichDataAllOf
     */
    'width': number | null;
    /**
     * The height in pixels required to display the HTML.
     * @type {number}
     * @memberof OembedRichDataAllOf
     */
    'height': number | null;
}

export const OembedRichDataAllOfTypeEnum = {
    Rich: 'rich'
} as const;

export type OembedRichDataAllOfTypeEnum = typeof OembedRichDataAllOfTypeEnum[keyof typeof OembedRichDataAllOfTypeEnum];


