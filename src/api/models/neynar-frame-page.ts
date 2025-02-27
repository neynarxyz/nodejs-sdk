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


// May contain unused imports in some cases
// @ts-ignore
import type { NeynarPageButton } from './neynar-page-button';
// May contain unused imports in some cases
// @ts-ignore
import type { NeynarPageImage } from './neynar-page-image';
// May contain unused imports in some cases
// @ts-ignore
import type { NeynarPageInput } from './neynar-page-input';

/**
 * 
 * @export
 * @interface NeynarFramePage
 */
export interface NeynarFramePage {
    /**
     * Unique identifier for the page.
     * @type {string}
     * @memberof NeynarFramePage
     */
    'uuid': string;
    /**
     * The version of the page schema.
     * @type {string}
     * @memberof NeynarFramePage
     */
    'version': string;
    /**
     * The title of the page.
     * @type {string}
     * @memberof NeynarFramePage
     */
    'title': string;
    /**
     * 
     * @type {NeynarPageImage}
     * @memberof NeynarFramePage
     */
    'image': NeynarPageImage;
    /**
     * 
     * @type {Array<NeynarPageButton>}
     * @memberof NeynarFramePage
     */
    'buttons'?: Array<NeynarPageButton>;
    /**
     * 
     * @type {NeynarPageInput}
     * @memberof NeynarFramePage
     */
    'input'?: NeynarPageInput;
}

