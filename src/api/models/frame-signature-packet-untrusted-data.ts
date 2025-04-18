/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.29.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastId } from './cast-id';

/**
 * Untrusted data from the user
 * @export
 * @interface FrameSignaturePacketUntrustedData
 */
export interface FrameSignaturePacketUntrustedData {
    /**
     * The unique identifier of a farcaster user (unsigned integer)
     * @type {number}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'fid'?: number;
    /**
     * URL of the frame
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'url'?: string;
    /**
     * Message hash
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'messageHash'?: string;
    /**
     * Timestamp
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'timestamp'?: string;
    /**
     * Network
     * @type {number}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'network'?: number;
    /**
     * Index of the button
     * @type {number}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'buttonIndex'?: number;
    /**
     * Input text
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'inputText'?: string;
    /**
     * State
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'state'?: string;
    /**
     * Transaction ID
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'transactionId'?: string;
    /**
     * Ethereum address
     * @type {string}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'address'?: string;
    /**
     * 
     * @type {CastId}
     * @memberof FrameSignaturePacketUntrustedData
     */
    'castId'?: CastId;
}

