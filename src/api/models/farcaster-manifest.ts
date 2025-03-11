/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.20.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterManifestAccountAssociation } from './farcaster-manifest-account-association';
// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterManifestFrame } from './farcaster-manifest-frame';
// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterManifestTriggersInner } from './farcaster-manifest-triggers-inner';

/**
 * 
 * @export
 * @interface FarcasterManifest
 */
export interface FarcasterManifest {
    /**
     * 
     * @type {FarcasterManifestAccountAssociation}
     * @memberof FarcasterManifest
     */
    'account_association': FarcasterManifestAccountAssociation;
    /**
     * 
     * @type {FarcasterManifestFrame}
     * @memberof FarcasterManifest
     */
    'frame'?: FarcasterManifestFrame;
    /**
     * 
     * @type {Array<FarcasterManifestTriggersInner>}
     * @memberof FarcasterManifest
     */
    'triggers'?: Array<FarcasterManifestTriggersInner>;
}

