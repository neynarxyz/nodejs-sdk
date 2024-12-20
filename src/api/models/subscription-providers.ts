/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The provider of the subscription. 
 * @export
 * @enum {string}
 */

export const SubscriptionProviders = {
    FabricStp: 'fabric_stp',
    Paragraph: 'paragraph'
} as const;

export type SubscriptionProviders = typeof SubscriptionProviders[keyof typeof SubscriptionProviders];



