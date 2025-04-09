/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.26.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastComposerActionsListResponseActionsInnerAction } from './cast-composer-actions-list-response-actions-inner-action';

/**
 * 
 * @export
 * @interface CastComposerActionsListResponseActionsInner
 */
export interface CastComposerActionsListResponseActionsInner {
    /**
     * The name of the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'name'?: string;
    /**
     * The icon representing the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'icon'?: string;
    /**
     * A brief description of the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'description'?: string;
    /**
     * URL to learn more about the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'about_url'?: string;
    /**
     * URL of the action\'s image.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'image_url'?: string;
    /**
     * URL to perform the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'action_url'?: string;
    /**
     * 
     * @type {CastComposerActionsListResponseActionsInnerAction}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'action'?: CastComposerActionsListResponseActionsInnerAction;
    /**
     * Icon name for the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'octicon'?: string;
    /**
     * Number of times the action has been added.
     * @type {number}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'added_count'?: number;
    /**
     * Name of the application providing the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'app_name'?: string;
    /**
     * Author\'s Farcaster ID.
     * @type {number}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'author_fid'?: number;
    /**
     * Category of the action.
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'category'?: string;
    /**
     * Object type, which is \"composer_action\".
     * @type {string}
     * @memberof CastComposerActionsListResponseActionsInner
     */
    'object'?: string;
}

