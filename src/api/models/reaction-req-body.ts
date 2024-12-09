/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.7
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ReactionType } from './reaction-type';

/**
 * 
 * @export
 * @interface ReactionReqBody
 */
export interface ReactionReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof ReactionReqBody
     */
    'signer_uuid': string;
    /**
     * 
     * @type {ReactionType}
     * @memberof ReactionReqBody
     */
    'reaction_type': ReactionType;
    /**
     * 
     * @type {string}
     * @memberof ReactionReqBody
     */
    'target': string;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof ReactionReqBody
     */
    'target_author_fid'?: number;
    /**
     * An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request. 
     * @type {string}
     * @memberof ReactionReqBody
     */
    'idem'?: string;
}



