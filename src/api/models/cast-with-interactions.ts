/* tslint:disable */
/* eslint-disable */
/**
 * Neynar API
 * The Neynar API allows you to interact with the Farcaster protocol among other things. See the [Neynar docs](https://docs.neynar.com/reference) for more details.
 *
 * The version of the OpenAPI document: 3.2.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastEmbeddedParentAuthor } from './cast-embedded-parent-author';
// May contain unused imports in some cases
// @ts-ignore
import type { CastNotificationType } from './cast-notification-type';
// May contain unused imports in some cases
// @ts-ignore
import type { CastViewerContext } from './cast-viewer-context';
// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsReactions } from './cast-with-interactions-reactions';
// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractionsReplies } from './cast-with-interactions-replies';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelDehydrated } from './channel-dehydrated';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelOrChannelDehydrated } from './channel-or-channel-dehydrated';
// May contain unused imports in some cases
// @ts-ignore
import type { ChannelUserContext } from './channel-user-context';
// May contain unused imports in some cases
// @ts-ignore
import type { Embed } from './embed';
// May contain unused imports in some cases
// @ts-ignore
import type { Frame } from './frame';
// May contain unused imports in some cases
// @ts-ignore
import type { TextRange } from './text-range';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDehydrated } from './user-dehydrated';

/**
 * 
 * @export
 * @interface CastWithInteractions
 */
export interface CastWithInteractions {
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'object': CastWithInteractionsObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'parent_hash': string | null;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'parent_url': string | null;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'root_parent_url': string | null;
    /**
     * 
     * @type {CastEmbeddedParentAuthor}
     * @memberof CastWithInteractions
     */
    'parent_author': CastEmbeddedParentAuthor;
    /**
     * 
     * @type {User}
     * @memberof CastWithInteractions
     */
    'author': User;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof CastWithInteractions
     */
    'app'?: UserDehydrated | null;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'timestamp': string;
    /**
     * 
     * @type {Array<Embed>}
     * @memberof CastWithInteractions
     */
    'embeds': Array<Embed>;
    /**
     * 
     * @type {CastNotificationType}
     * @memberof CastWithInteractions
     */
    'type'?: CastNotificationType;
    /**
     * 
     * @type {Array<Frame>}
     * @memberof CastWithInteractions
     */
    'frames'?: Array<Frame>;
    /**
     * 
     * @type {CastWithInteractionsReactions}
     * @memberof CastWithInteractions
     */
    'reactions': CastWithInteractionsReactions;
    /**
     * 
     * @type {CastWithInteractionsReplies}
     * @memberof CastWithInteractions
     */
    'replies': CastWithInteractionsReplies;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractions
     */
    'thread_hash': string | null;
    /**
     * 
     * @type {Array<User>}
     * @memberof CastWithInteractions
     */
    'mentioned_profiles': Array<User>;
    /**
     * Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_profiles list.
     * @type {Array<TextRange>}
     * @memberof CastWithInteractions
     */
    'mentioned_profiles_ranges': Array<TextRange>;
    /**
     * 
     * @type {Array<ChannelDehydrated>}
     * @memberof CastWithInteractions
     */
    'mentioned_channels': Array<ChannelDehydrated>;
    /**
     * Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_channels list.
     * @type {Array<TextRange>}
     * @memberof CastWithInteractions
     */
    'mentioned_channels_ranges': Array<TextRange>;
    /**
     * 
     * @type {ChannelOrChannelDehydrated}
     * @memberof CastWithInteractions
     */
    'channel': ChannelOrChannelDehydrated | null;
    /**
     * 
     * @type {CastViewerContext}
     * @memberof CastWithInteractions
     */
    'viewer_context'?: CastViewerContext;
    /**
     * 
     * @type {ChannelUserContext}
     * @memberof CastWithInteractions
     */
    'author_channel_context'?: ChannelUserContext;
}

export const CastWithInteractionsObjectEnum = {
    Cast: 'cast'
} as const;

export type CastWithInteractionsObjectEnum = typeof CastWithInteractionsObjectEnum[keyof typeof CastWithInteractionsObjectEnum];


