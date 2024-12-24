/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface WebhookPatchReqBody
 */
export interface WebhookPatchReqBody {
    /**
     * 
     * @type {string}
     * @memberof WebhookPatchReqBody
     */
    'webhook_id': string;
    /**
     * 
     * @type {string}
     * @memberof WebhookPatchReqBody
     */
    'active': WebhookPatchReqBodyActiveEnum;
}

export const WebhookPatchReqBodyActiveEnum = {
    True: 'true',
    False: 'false'
} as const;

export type WebhookPatchReqBodyActiveEnum = typeof WebhookPatchReqBodyActiveEnum[keyof typeof WebhookPatchReqBodyActiveEnum];


