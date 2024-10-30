/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsReactions } from './cast-with-interactions-reactions';
// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsRecasts } from './cast-with-interactions-recasts';
// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsReplies } from './cast-with-interactions-replies';
// May contain unused imports in some cases
// @ts-ignore
import type { ViewerContext } from './viewer-context';

/**
 * 
 * @export
 * @interface CastWithInteractionsAllOf
 */
export interface CastWithInteractionsAllOf {
    /**
     * 
     * @type {CastWithInteractionsReactions}
     * @memberof CastWithInteractionsAllOf
     */
    'reactions': CastWithInteractionsReactions;
    /**
     * 
     * @type {CastWithInteractionsRecasts}
     * @memberof CastWithInteractionsAllOf
     */
    'recasts': CastWithInteractionsRecasts;
    /**
     * 
     * @type {Array<string>}
     * @memberof CastWithInteractionsAllOf
     */
    'recasters': Array<string>;
    /**
     * 
     * @type {ViewerContext}
     * @memberof CastWithInteractionsAllOf
     */
    'viewerContext'?: ViewerContext;
    /**
     * 
     * @type {CastWithInteractionsReplies}
     * @memberof CastWithInteractionsAllOf
     */
    'replies': CastWithInteractionsReplies;
}

