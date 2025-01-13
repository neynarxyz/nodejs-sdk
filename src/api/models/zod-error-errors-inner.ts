/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ZodErrorErrorsInner
 */
export interface ZodErrorErrorsInner {
    /**
     * 
     * @type {string}
     * @memberof ZodErrorErrorsInner
     */
    'code': string;
    /**
     * 
     * @type {string}
     * @memberof ZodErrorErrorsInner
     */
    'expected': string;
    /**
     * 
     * @type {string}
     * @memberof ZodErrorErrorsInner
     */
    'received': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ZodErrorErrorsInner
     */
    'path': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ZodErrorErrorsInner
     */
    'message': string;
}

