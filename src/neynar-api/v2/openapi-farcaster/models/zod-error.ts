/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
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
