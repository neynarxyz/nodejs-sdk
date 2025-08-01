/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.31.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ZodErrorErrorsInner } from './zod-error-errors-inner';

/**
 * 
 * @export
 * @interface ZodError
 */
export interface ZodError {
    /**
     * 
     * @type {string}
     * @memberof ZodError
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof ZodError
     */
    'code': string;
    /**
     * 
     * @type {Array<ZodErrorErrorsInner>}
     * @memberof ZodError
     */
    'errors': Array<ZodErrorErrorsInner>;
}

