/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.14.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Adds context on interactions the viewer has made with the cast.
 * @export
 * @interface CastViewerContext
 */
export interface CastViewerContext {
    /**
     * Indicates if the viewer liked the cast.
     * @type {boolean}
     * @memberof CastViewerContext
     */
    'liked': boolean;
    /**
     * Indicates if the viewer recasted the cast.
     * @type {boolean}
     * @memberof CastViewerContext
     */
    'recasted': boolean;
}

