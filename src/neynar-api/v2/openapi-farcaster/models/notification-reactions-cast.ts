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



/**
 * 
 * @export
 * @interface NotificationReactionsCast
 */
export interface NotificationReactionsCast {
    /**
     * 
     * @type {string}
     * @memberof NotificationReactionsCast
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof NotificationReactionsCast
     */
    'object': NotificationReactionsCastObjectEnum;
}

export const NotificationReactionsCastObjectEnum = {
    CastDehydrated: 'cast_dehydrated'
} as const;

export type NotificationReactionsCastObjectEnum = typeof NotificationReactionsCastObjectEnum[keyof typeof NotificationReactionsCastObjectEnum];

