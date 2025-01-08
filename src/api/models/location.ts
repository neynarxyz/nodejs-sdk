/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { LocationAddress } from './location-address';

/**
 * Coordinates and place names for a location
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    'latitude': number;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    'longitude': number;
    /**
     * 
     * @type {LocationAddress}
     * @memberof Location
     */
    'address'?: LocationAddress;
}

