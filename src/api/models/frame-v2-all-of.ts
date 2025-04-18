/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.28.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterManifest } from './farcaster-manifest';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameV2AllOfMetadata } from './frame-v2-all-of-metadata';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface FrameV2AllOf
 */
export interface FrameV2AllOf {
    /**
     * Button title of a frame
     * @type {string}
     * @memberof FrameV2AllOf
     */
    'title'?: string;
    /**
     * 
     * @type {FarcasterManifest}
     * @memberof FrameV2AllOf
     */
    'manifest'?: FarcasterManifest;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof FrameV2AllOf
     */
    'author'?: UserDehydrated;
    /**
     * 
     * @type {FrameV2AllOfMetadata}
     * @memberof FrameV2AllOf
     */
    'metadata'?: FrameV2AllOfMetadata;
}

