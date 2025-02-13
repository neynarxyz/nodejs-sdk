/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.12.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const ValidateFrameAnalyticsType = {
    TotalInteractors: 'total-interactors',
    Interactors: 'interactors',
    InteractionsPerCast: 'interactions-per-cast',
    InputText: 'input-text'
} as const;

export type ValidateFrameAnalyticsType = typeof ValidateFrameAnalyticsType[keyof typeof ValidateFrameAnalyticsType];



