/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { VerificationChainId } from './verification-chain-id';
// May contain unused imports in some cases
// @ts-ignore
import type { VerificationType } from './verification-type';

/**
 * 
 * @export
 * @interface AddVerificationReqBody
 */
export interface AddVerificationReqBody {
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof AddVerificationReqBody
     */
    'signer_uuid': string;
    /**
     * Ethereum address
     * @type {string}
     * @memberof AddVerificationReqBody
     */
    'address': string;
    /**
     * 
     * @type {string}
     * @memberof AddVerificationReqBody
     */
    'block_hash': string;
    /**
     * 
     * @type {string}
     * @memberof AddVerificationReqBody
     */
    'eth_signature': string;
    /**
     * 
     * @type {VerificationType}
     * @memberof AddVerificationReqBody
     */
    'verification_type'?: VerificationType;
    /**
     * 
     * @type {VerificationChainId}
     * @memberof AddVerificationReqBody
     */
    'chain_id'?: VerificationChainId;
}



