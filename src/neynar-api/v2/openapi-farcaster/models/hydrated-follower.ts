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
 * @interface HydratedFollower
 */
export interface HydratedFollower {
    /**
     * 
     * @type {string}
     * @memberof HydratedFollower
     */
    'object'?: HydratedFollowerObjectEnum;
    /**
     * 
     * @type {User}
     * @memberof HydratedFollower
     */
    'user'?: User;
}

export const HydratedFollowerObjectEnum = {
    Follow: 'follow'
} as const;

export type HydratedFollowerObjectEnum = typeof HydratedFollowerObjectEnum[keyof typeof HydratedFollowerObjectEnum];


