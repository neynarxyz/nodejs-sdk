/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SharedSignerPermission } from './shared-signer-permission';

/**
 * 
 * @export
 * @interface Signer
 */
export interface Signer {
    /**
     * 
     * @type {string}
     * @memberof Signer
     */
    'object'?: SignerObjectEnum;
    /**
     * UUID of the signer. `signer_uuid` is paired with API key, can\'t use a `uuid` made with a different API key. 
     * @type {string}
     * @memberof Signer
     */
    'signer_uuid': string;
    /**
     * Ed25519 public key
     * @type {string}
     * @memberof Signer
     */
    'public_key': string;
    /**
     * 
     * @type {string}
     * @memberof Signer
     */
    'status': SignerStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Signer
     */
    'signer_approval_url'?: string;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof Signer
     */
    'fid'?: number;
    /**
     * 
     * @type {Array<SharedSignerPermission>}
     * @memberof Signer
     */
    'permissions'?: Array<SharedSignerPermission>;
}

export const SignerObjectEnum = {
    Signer: 'signer'
} as const;

export type SignerObjectEnum = typeof SignerObjectEnum[keyof typeof SignerObjectEnum];
export const SignerStatusEnum = {
    Generated: 'generated',
    PendingApproval: 'pending_approval',
    Approved: 'approved',
    Revoked: 'revoked'
} as const;

export type SignerStatusEnum = typeof SignerStatusEnum[keyof typeof SignerStatusEnum];


