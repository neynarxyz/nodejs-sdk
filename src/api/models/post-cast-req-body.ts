/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { PostCastReqBodyEmbeds } from './post-cast-req-body-embeds';

/**
 * 
 * @export
 * @interface PostCastReqBody
 */
export interface PostCastReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof PostCastReqBody
     */
    'signer_uuid': string;
    /**
     * 
     * @type {string}
     * @memberof PostCastReqBody
     */
    'text'?: string;
    /**
     * 
     * @type {Array<PostCastReqBodyEmbeds>}
     * @memberof PostCastReqBody
     */
    'embeds'?: Array<PostCastReqBodyEmbeds>;
    /**
     * parent_url of the channel the cast is in, or hash of the cast
     * @type {string}
     * @memberof PostCastReqBody
     */
    'parent'?: string;
    /**
     * Channel ID of the channel where the cast is to be posted. e.g. neynar, farcaster, warpcast
     * @type {string}
     * @memberof PostCastReqBody
     */
    'channel_id'?: string;
    /**
     * An Idempotency key is a unique identifier for the request. **Note:**  1) This is used to prevent duplicate requests. Use the same idem key on retry attempts. 2) This should be a unique identifier for each request. 3) Recommended format is a 16-character string generated by the developer at the time of making this request. 
     * @type {string}
     * @memberof PostCastReqBody
     */
    'idem'?: string;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof PostCastReqBody
     */
    'parent_author_fid'?: number;
}

