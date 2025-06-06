/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.46.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TransactionFrameConfig } from './transaction-frame-config';
// May contain unused imports in some cases
// @ts-ignore
import type { TransactionFrameStatus } from './transaction-frame-status';
// May contain unused imports in some cases
// @ts-ignore
import type { TransactionFrameType } from './transaction-frame-type';

/**
 * 
 * @export
 * @interface TransactionFrameBase
 */
export interface TransactionFrameBase {
    /**
     * Unique identifier for the transaction mini app
     * @type {string}
     * @memberof TransactionFrameBase
     */
    'id': string;
    /**
     * URL that can be used to access the transaction mini app
     * @type {string}
     * @memberof TransactionFrameBase
     */
    'url': string;
    /**
     * 
     * @type {TransactionFrameType}
     * @memberof TransactionFrameBase
     */
    'type': TransactionFrameType;
    /**
     * 
     * @type {TransactionFrameConfig}
     * @memberof TransactionFrameBase
     */
    'config': TransactionFrameConfig;
    /**
     * 
     * @type {TransactionFrameStatus}
     * @memberof TransactionFrameBase
     */
    'status': TransactionFrameStatus;
}



