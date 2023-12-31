/* tslint:disable */
/* eslint-disable */
/**
 * Recommendation API V2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * A mint object relevant to the user
 * @export
 * @interface RelevantMint
 */
export interface RelevantMint {
    /**
     * Ethereum address
     * @type {string}
     * @memberof RelevantMint
     */
    'contract_address': string;
    /**
     * 
     * @type {string}
     * @memberof RelevantMint
     */
    'token_id': string;
    /**
     * 
     * @type {number}
     * @memberof RelevantMint
     */
    'block_number': number;
    /**
     * 
     * @type {string}
     * @memberof RelevantMint
     */
    'tx_hash': string;
    /**
     * 
     * @type {User}
     * @memberof RelevantMint
     */
    'minter': User;
}

