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
import type { WebhookSubscriptionFiltersCast } from './webhook-subscription-filters-cast';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookSubscriptionFiltersFollow } from './webhook-subscription-filters-follow';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookSubscriptionFiltersReaction } from './webhook-subscription-filters-reaction';
// May contain unused imports in some cases
// @ts-ignore
import type { WebhookSubscriptionFiltersUserUpdated } from './webhook-subscription-filters-user-updated';

/**
 * 
 * @export
 * @interface WebhookSubscriptionFilters
 */
export interface WebhookSubscriptionFilters {
    /**
     * 
     * @type {WebhookSubscriptionFiltersCast}
     * @memberof WebhookSubscriptionFilters
     */
    'cast.created'?: WebhookSubscriptionFiltersCast;
    /**
     * 
     * @type {WebhookSubscriptionFiltersCast}
     * @memberof WebhookSubscriptionFilters
     */
    'cast.deleted'?: WebhookSubscriptionFiltersCast;
    /**
     * 
     * @type {object}
     * @memberof WebhookSubscriptionFilters
     */
    'user.created'?: object;
    /**
     * 
     * @type {WebhookSubscriptionFiltersUserUpdated}
     * @memberof WebhookSubscriptionFilters
     */
    'user.updated'?: WebhookSubscriptionFiltersUserUpdated;
    /**
     * 
     * @type {WebhookSubscriptionFiltersFollow}
     * @memberof WebhookSubscriptionFilters
     */
    'follow.created'?: WebhookSubscriptionFiltersFollow;
    /**
     * 
     * @type {WebhookSubscriptionFiltersFollow}
     * @memberof WebhookSubscriptionFilters
     */
    'follow.deleted'?: WebhookSubscriptionFiltersFollow;
    /**
     * 
     * @type {WebhookSubscriptionFiltersReaction}
     * @memberof WebhookSubscriptionFilters
     */
    'reaction.created'?: WebhookSubscriptionFiltersReaction;
    /**
     * 
     * @type {WebhookSubscriptionFiltersReaction}
     * @memberof WebhookSubscriptionFilters
     */
    'reaction.deleted'?: WebhookSubscriptionFiltersReaction;
}

