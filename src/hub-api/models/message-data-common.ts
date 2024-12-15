/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FarcasterNetwork } from './farcaster-network';

/**
 * 
 * @export
 * @interface MessageDataCommon
 */
export interface MessageDataCommon {
    /**
     * 
     * @type {number}
     * @memberof MessageDataCommon
     */
    'fid': number;
    /**
     * Seconds since [Farcaster Epoch](https://docs.farcaster.xyz/learn/what-is-farcaster/messages#timestamps) which began on Jan 1, 2021 00:00:00 UTC
     * @type {number}
     * @memberof MessageDataCommon
     */
    'timestamp': number;
    /**
     * 
     * @type {FarcasterNetwork}
     * @memberof MessageDataCommon
     */
    'network': FarcasterNetwork;
}



