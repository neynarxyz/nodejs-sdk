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
import type { CastComposerActionsListResponseActionsInner } from './cast-composer-actions-list-response-actions-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { NextCursor } from './next-cursor';

/**
 * 
 * @export
 * @interface CastComposerActionsListResponse
 */
export interface CastComposerActionsListResponse {
    /**
     * 
     * @type {Array<CastComposerActionsListResponseActionsInner>}
     * @memberof CastComposerActionsListResponse
     */
    'actions'?: Array<CastComposerActionsListResponseActionsInner>;
    /**
     * 
     * @type {NextCursor}
     * @memberof CastComposerActionsListResponse
     */
    'next'?: NextCursor;
}

