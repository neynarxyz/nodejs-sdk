/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.19.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface DeveloperManagedSigner
 */
export interface DeveloperManagedSigner {
    /**
     * Ed25519 public key
     * @type {string}
     * @memberof DeveloperManagedSigner
     */
    'public_key': string;
    /**
     * 
     * @type {string}
     * @memberof DeveloperManagedSigner
     */
    'status': DeveloperManagedSignerStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof DeveloperManagedSigner
     */
    'signer_approval_url'?: string;
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof DeveloperManagedSigner
     */
    'fid'?: number;
}

export const DeveloperManagedSignerStatusEnum = {
    PendingApproval: 'pending_approval',
    Approved: 'approved',
    Revoked: 'revoked'
} as const;

export type DeveloperManagedSignerStatusEnum = typeof DeveloperManagedSignerStatusEnum[keyof typeof DeveloperManagedSignerStatusEnum];


