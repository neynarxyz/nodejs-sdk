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
import { User } from './user';

/**
 * 
 * @export
 * @interface BlockList
 */
export interface BlockList {
    /**
     * 
     * @type {string}
     * @memberof BlockList
     */
    'object': BlockListObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof BlockList
     */
    'blocked'?: User;
    /**
     * 
     * @type {User}
     * @memberof BlockList
     */
    'blocker'?: User;
    /**
     * 
     * @type {string}
     * @memberof BlockList
     */
    'blocked_at': string;
}

