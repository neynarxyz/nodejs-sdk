/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.18.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ImageObject } from './image-object';
// May contain unused imports in some cases
// @ts-ignore
import type { VideoObject } from './video-object';

/**
 * 
 * @export
 * @interface OgObject
 */
export interface OgObject {
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'favicon'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'modifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticleAuthor'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticleExpirationTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticleModifiedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticlePublishedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticlePublisher'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticleSection'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogArticleTag'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogAudio'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogAudioSecureURL'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogAudioType'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogAudioURL'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogAvailability'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogDeterminer'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogEpisode'?: string;
    /**
     * 
     * @type {Array<ImageObject>}
     * @memberof OgObject
     */
    'ogImage'?: Array<ImageObject>;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogLocale'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogLocaleAlternate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogLogo'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogMovie'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogPriceAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogPriceCurrency'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogProductAvailability'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogProductCondition'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogProductPriceAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogProductPriceCurrency'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogProductRetailerItemId'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogSiteName'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogTitle'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogType'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogUrl'?: string;
    /**
     * 
     * @type {Array<VideoObject>}
     * @memberof OgObject
     */
    'ogVideo'?: Array<VideoObject>;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoActor'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoActorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoActorRole'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoDirector'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoDuration'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoOther'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoReleaseDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoSecureURL'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoSeries'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoTag'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoTvShow'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogVideoWriter'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'ogWebsite'?: string;
    /**
     * 
     * @type {string}
     * @memberof OgObject
     */
    'updatedTime'?: string;
}

