/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.2
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscribedToObject
 */
export interface SubscribedToObject {
    /**
     * 
     * @type {string}
     * @memberof SubscribedToObject
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToObject
     */
    'provider_name': string;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToObject
     */
    'contract_address'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscribedToObject
     */
    'protocol_version'?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscribedToObject
     */
    'chain'?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToObject
     */
    'expires_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToObject
     */
    'subscribed_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscribedToObject
     */
    'tier_id'?: string;
}

