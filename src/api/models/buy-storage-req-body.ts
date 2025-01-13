/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface BuyStorageReqBody
 */
export interface BuyStorageReqBody {
    /**
     * 
     * @type {number}
     * @memberof BuyStorageReqBody
     */
    'fid': number;
    /**
     * Number of storage units to buy. A storage unit lets you store 5000 casts, 2500 reactions and 2500 links. 
     * @type {number}
     * @memberof BuyStorageReqBody
     */
    'units'?: number;
    /**
     * An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request. 
     * @type {string}
     * @memberof BuyStorageReqBody
     */
    'idem'?: string;
}

