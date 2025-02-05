/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.10.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface DeployFungibleResponseContractFungible
 */
export interface DeployFungibleResponseContractFungible {
    /**
     * 
     * @type {string}
     * @memberof DeployFungibleResponseContractFungible
     */
    'object'?: string;
    /**
     * Name of the token
     * @type {string}
     * @memberof DeployFungibleResponseContractFungible
     */
    'name'?: string;
    /**
     * Symbol of the token
     * @type {string}
     * @memberof DeployFungibleResponseContractFungible
     */
    'symbol'?: string;
    /**
     * URI of the token media
     * @type {string}
     * @memberof DeployFungibleResponseContractFungible
     */
    'media'?: string;
    /**
     * Contract address of the token
     * @type {string}
     * @memberof DeployFungibleResponseContractFungible
     */
    'address'?: string;
    /**
     * Decimal precision of the token
     * @type {number}
     * @memberof DeployFungibleResponseContractFungible
     */
    'decimals'?: number;
}

