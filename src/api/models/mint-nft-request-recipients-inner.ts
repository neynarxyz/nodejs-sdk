/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.31.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * NFT mint recipient. Exactly one of \"address\" or \"fid\" must be set.
 * @export
 * @interface MintNftRequestRecipientsInner
 */
export interface MintNftRequestRecipientsInner {
    /**
     * Ethereum address
     * @type {string}
     * @memberof MintNftRequestRecipientsInner
     */
    'address'?: string;
    /**
     * The unique identifier of a farcaster user or app (unsigned integer)
     * @type {number}
     * @memberof MintNftRequestRecipientsInner
     */
    'fid'?: number;
    /**
     * Quantity to mint (must be at least 1).
     * @type {number}
     * @memberof MintNftRequestRecipientsInner
     */
    'quantity'?: number;
}

