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
 * @interface FarcasterManifestTriggersInnerOneOf1
 */
export interface FarcasterManifestTriggersInnerOneOf1 {
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf1
     */
    'type': FarcasterManifestTriggersInnerOneOf1TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf1
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf1
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof FarcasterManifestTriggersInnerOneOf1
     */
    'name'?: string;
}

export const FarcasterManifestTriggersInnerOneOf1TypeEnum = {
    Composer: 'composer'
} as const;

export type FarcasterManifestTriggersInnerOneOf1TypeEnum = typeof FarcasterManifestTriggersInnerOneOf1TypeEnum[keyof typeof FarcasterManifestTriggersInnerOneOf1TypeEnum];


