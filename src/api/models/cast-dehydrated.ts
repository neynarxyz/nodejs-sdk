/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.15.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface CastDehydrated
 */
export interface CastDehydrated {
    /**
     * 
     * @type {string}
     * @memberof CastDehydrated
     */
    'object': CastDehydratedObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof CastDehydrated
     */
    'hash': string;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof CastDehydrated
     */
    'author'?: UserDehydrated;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof CastDehydrated
     */
    'app'?: UserDehydrated | null;
}

export const CastDehydratedObjectEnum = {
    CastDehydrated: 'cast_dehydrated'
} as const;

export type CastDehydratedObjectEnum = typeof CastDehydratedObjectEnum[keyof typeof CastDehydratedObjectEnum];


