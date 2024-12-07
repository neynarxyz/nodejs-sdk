/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FrameSignaturePacketTrustedData } from './frame-signature-packet-trusted-data';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameSignaturePacketUntrustedData } from './frame-signature-packet-untrusted-data';

/**
 * The Frame Signature Packet (https://docs.farcaster.xyz/developers/frames/spec#frame-signature-packet)
 * @export
 * @interface FrameSignaturePacket
 */
export interface FrameSignaturePacket {
    /**
     * 
     * @type {FrameSignaturePacketUntrustedData}
     * @memberof FrameSignaturePacket
     */
    'untrustedData': FrameSignaturePacketUntrustedData;
    /**
     * 
     * @type {FrameSignaturePacketTrustedData}
     * @memberof FrameSignaturePacket
     */
    'trustedData': FrameSignaturePacketTrustedData;
}

