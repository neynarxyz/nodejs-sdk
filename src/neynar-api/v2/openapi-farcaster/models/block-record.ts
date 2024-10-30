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
import type { User } from './user';

/**
 * 
 * @export
 * @interface BlockRecord
 */
export interface BlockRecord {
    /**
     * 
     * @type {string}
     * @memberof BlockRecord
     */
    'object': BlockRecordObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof BlockRecord
     */
    'blocked'?: User;
    /**
     * 
     * @type {User}
     * @memberof BlockRecord
     */
    'blocker'?: User;
    /**
     * 
     * @type {string}
     * @memberof BlockRecord
     */
    'blocked_at': string;
}

export const BlockRecordObjectEnum = {
    Block: 'block'
} as const;

export type BlockRecordObjectEnum = typeof BlockRecordObjectEnum[keyof typeof BlockRecordObjectEnum];


