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
 * @interface FarcasterManifestTriggersInnerOneOf
 */
export interface FarcasterManifestTriggersInnerOneOf {
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf
     */
    'type': FarcasterManifestTriggersInnerOneOfTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf
     */
    'name'?: string;
}

export const FarcasterManifestTriggersInnerOneOfTypeEnum = {
    Cast: 'cast'
} as const;

export type FarcasterManifestTriggersInnerOneOfTypeEnum = typeof FarcasterManifestTriggersInnerOneOfTypeEnum[keyof typeof FarcasterManifestTriggersInnerOneOfTypeEnum];


