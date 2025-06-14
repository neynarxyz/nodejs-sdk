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
 * Reference to CastWithInteractionsAndConversations to avoid circular reference
 * @export
 * @interface CastWithInteractionsAndConversationsRef
 */
export interface CastWithInteractionsAndConversationsRef {
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'object': CastWithInteractionsAndConversationsRefObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'parent_hash': string | null;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'parent_url': string | null;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'root_parent_url': string | null;
    /**
     * 
     * @type {CastEmbeddedParentAuthor}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'parent_author': CastEmbeddedParentAuthor;
    /**
     * 
     * @type {User}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'author': User;
    /**
     * 
     * @type {UserDehydrated}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'app'?: UserDehydrated | null;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'timestamp': string;
    /**
     * 
     * @type {Array<Embed>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'embeds': Array<Embed>;
    /**
     * 
     * @type {CastNotificationType}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'type'?: CastNotificationType;
    /**
     * 
     * @type {Array<Frame>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'frames'?: Array<Frame>;
    /**
     * 
     * @type {CastWithInteractionsReactions}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'reactions': CastWithInteractionsReactions;
    /**
     * 
     * @type {CastWithInteractionsReplies}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'replies': CastWithInteractionsReplies;
    /**
     * 
     * @type {string}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'thread_hash': string | null;
    /**
     * 
     * @type {Array<User>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'mentioned_profiles': Array<User>;
    /**
     * Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_profiles list.
     * @type {Array<TextRange>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'mentioned_profiles_ranges': Array<TextRange>;
    /**
     * 
     * @type {Array<ChannelDehydrated>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'mentioned_channels': Array<ChannelDehydrated>;
    /**
     * Positions within the text (inclusive start, exclusive end) where each mention occurs. Each index within this list corresponds to the same-numbered index in the mentioned_channels list.
     * @type {Array<TextRange>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'mentioned_channels_ranges': Array<TextRange>;
    /**
     * 
     * @type {ChannelOrChannelDehydrated}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'channel': ChannelOrChannelDehydrated | null;
    /**
     * 
     * @type {CastViewerContext}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'viewer_context'?: CastViewerContext;
    /**
     * 
     * @type {ChannelUserContext}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'author_channel_context'?: ChannelUserContext;
    /**
     * note: This is recursive. It contains the direct replies to the cast and their direct replies up to n reply_depth.
     * @type {Array<object>}
     * @memberof CastWithInteractionsAndConversationsRef
     */
    'direct_replies': Array<object>;
}

export const CastWithInteractionsAndConversationsRefObjectEnum = {
    Cast: 'cast'
} as const;

export type CastWithInteractionsAndConversationsRefObjectEnum = typeof CastWithInteractionsAndConversationsRefObjectEnum[keyof typeof CastWithInteractionsAndConversationsRefObjectEnum];


