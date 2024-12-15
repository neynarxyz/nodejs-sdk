/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SignedKeyRequestSponsor
 */
export interface SignedKeyRequestSponsor {
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof SignedKeyRequestSponsor
     */
    'fid'?: number;
    /**
     * Signature generated by the fid of the sponsor and the signature generated from signKeyRequest for the app.
     * @type {string}
     * @memberof SignedKeyRequestSponsor
     */
    'signature'?: string;
    /**
     * Neynar will sponsor the signer if set to true. **Note: ** If sponsor.fid and sponsor.signature are provided along with sponsored_by_neynar set to true,  the sponsor.fid and sponsor.signature will be ignored.  Neynar will sponsor the signer on behalf of the user. The developer will get charged in compute units. 
     * @type {boolean}
     * @memberof SignedKeyRequestSponsor
     */
    'sponsored_by_neynar'?: boolean;
}

