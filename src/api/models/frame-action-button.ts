/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FrameButtonActionType } from './frame-button-action-type';

/**
 * 
 * @export
 * @interface FrameActionButton
 */
export interface FrameActionButton {
    /**
     * Title of the button
     * @type {string}
     * @memberof FrameActionButton
     */
    'title'?: string;
    /**
     * Index of the button
     * @type {number}
     * @memberof FrameActionButton
     */
    'index': number;
    /**
     * 
     * @type {FrameButtonActionType}
     * @memberof FrameActionButton
     */
    'action_type': FrameButtonActionType;
    /**
     * Target of the button
     * @type {string}
     * @memberof FrameActionButton
     */
    'target'?: string;
    /**
     * Used specifically for the tx action type to post a successful transaction hash
     * @type {string}
     * @memberof FrameActionButton
     */
    'post_url'?: string;
}



