/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OembedLinkDataAllOf
 */
export interface OembedLinkDataAllOf {
    /**
     * 
     * @type {string}
     * @memberof OembedLinkDataAllOf
     */
    'type': OembedLinkDataAllOfTypeEnum;
}

export const OembedLinkDataAllOfTypeEnum = {
    Link: 'link'
} as const;

export type OembedLinkDataAllOfTypeEnum = typeof OembedLinkDataAllOfTypeEnum[keyof typeof OembedLinkDataAllOfTypeEnum];


