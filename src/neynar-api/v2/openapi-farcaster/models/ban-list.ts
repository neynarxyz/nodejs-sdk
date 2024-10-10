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
 * @interface BanList
 */
export interface BanList {
    /**
     * 
     * @type {string}
     * @memberof BanList
     */
    'object': BanListObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof BanList
     */
    'banned'?: User;
    /**
     * 
     * @type {string}
     * @memberof BanList
     */
    'banned_at': string;
}

export const BanListObjectEnum = {
    Ban: 'ban'
} as const;

export type BanListObjectEnum = typeof BanListObjectEnum[keyof typeof BanListObjectEnum];


