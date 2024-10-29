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



/**
 * 
 * @export
 * @interface OembedRichDataAnyOf
 */
export interface OembedRichDataAnyOf {
    /**
     * 
     * @type {string}
     * @memberof OembedRichDataAnyOf
     */
    'type'?: OembedRichDataAnyOfTypeEnum;
    /**
     * The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic.
     * @type {string}
     * @memberof OembedRichDataAnyOf
     */
    'html': string | null;
    /**
     * The width in pixels required to display the HTML.
     * @type {number}
     * @memberof OembedRichDataAnyOf
     */
    'width': number | null;
    /**
     * The height in pixels required to display the HTML.
     * @type {number}
     * @memberof OembedRichDataAnyOf
     */
    'height': number | null;
}

export const OembedRichDataAnyOfTypeEnum = {
    Rich: 'rich'
} as const;

export type OembedRichDataAnyOfTypeEnum = typeof OembedRichDataAnyOfTypeEnum[keyof typeof OembedRichDataAnyOfTypeEnum];

