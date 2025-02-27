/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.15.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FrameActionButton } from './frame-action-button';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameInput } from './frame-input';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameState } from './frame-state';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameTransaction } from './frame-transaction';

/**
 * 
 * @export
 * @interface FrameAction
 */
export interface FrameAction {
    /**
     * 
     * @type {string}
     * @memberof FrameAction
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameAction
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof FrameAction
     */
    'image'?: string;
    /**
     * 
     * @type {FrameActionButton}
     * @memberof FrameAction
     */
    'button': FrameActionButton;
    /**
     * 
     * @type {FrameInput}
     * @memberof FrameAction
     */
    'input'?: FrameInput;
    /**
     * 
     * @type {FrameState}
     * @memberof FrameAction
     */
    'state'?: FrameState;
    /**
     * 
     * @type {FrameTransaction}
     * @memberof FrameAction
     */
    'transaction'?: FrameTransaction;
    /**
     * The connected wallet address of the interacting user.
     * @type {string}
     * @memberof FrameAction
     */
    'address'?: string;
    /**
     * URL of the frames
     * @type {string}
     * @memberof FrameAction
     */
    'frames_url': string;
    /**
     * URL of the post to get the next frame
     * @type {string}
     * @memberof FrameAction
     */
    'post_url': string;
}

