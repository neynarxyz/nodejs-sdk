/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.0.4
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

/**
 * 
 * @export
 * @interface Frame
 */
export interface Frame {
    /**
     * Version of the frame
     * @type {string}
     * @memberof Frame
     */
    'version': string;
    /**
     * URL of the image
     * @type {string}
     * @memberof Frame
     */
    'image': string;
    /**
     * 
     * @type {Array<FrameActionButton>}
     * @memberof Frame
     */
    'buttons'?: Array<FrameActionButton>;
    /**
     * Post URL to take an action on this frame
     * @type {string}
     * @memberof Frame
     */
    'post_url'?: string;
    /**
     * URL of the frames
     * @type {string}
     * @memberof Frame
     */
    'frames_url': string;
    /**
     * 
     * @type {string}
     * @memberof Frame
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof Frame
     */
    'image_aspect_ratio'?: string;
    /**
     * 
     * @type {FrameInput}
     * @memberof Frame
     */
    'input'?: FrameInput;
    /**
     * 
     * @type {FrameState}
     * @memberof Frame
     */
    'state'?: FrameState;
}

