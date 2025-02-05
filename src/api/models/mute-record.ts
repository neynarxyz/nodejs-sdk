/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.10.0
 * Contact: team@neynar.com
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
 * @interface MuteRecord
 */
export interface MuteRecord {
    /**
     * 
     * @type {string}
     * @memberof MuteRecord
     */
    'object': MuteRecordObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof MuteRecord
     */
    'muted': User;
    /**
     * 
     * @type {string}
     * @memberof MuteRecord
     */
    'muted_at': string;
}

export const MuteRecordObjectEnum = {
    Mute: 'mute'
} as const;

export type MuteRecordObjectEnum = typeof MuteRecordObjectEnum[keyof typeof MuteRecordObjectEnum];


