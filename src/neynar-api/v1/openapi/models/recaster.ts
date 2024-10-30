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
import type { RecasterPfp } from './recaster-pfp';
// May contain unused imports in some cases
// @ts-ignore
import type { RecasterProfile } from './recaster-profile';
// May contain unused imports in some cases
// @ts-ignore
import type { RecasterViewerContext } from './recaster-viewer-context';

/**
 * 
 * @export
 * @interface Recaster
 */
export interface Recaster {
    /**
     * The unique identifier of the recaster.
     * @type {number}
     * @memberof Recaster
     */
    'fid': number;
    /**
     * The username of the recaster.
     * @type {string}
     * @memberof Recaster
     */
    'username': string;
    /**
     * The display name of the recaster.
     * @type {string}
     * @memberof Recaster
     */
    'displayName': string;
    /**
     * 
     * @type {RecasterPfp}
     * @memberof Recaster
     */
    'pfp': RecasterPfp;
    /**
     * 
     * @type {RecasterProfile}
     * @memberof Recaster
     */
    'profile': RecasterProfile;
    /**
     * The number of followers the recaster has.
     * @type {number}
     * @memberof Recaster
     */
    'followerCount': number;
    /**
     * The number of users the recaster is following.
     * @type {number}
     * @memberof Recaster
     */
    'followingCount': number;
    /**
     * 
     * @type {string}
     * @memberof Recaster
     */
    'timestamp': string;
    /**
     * 
     * @type {RecasterViewerContext}
     * @memberof Recaster
     */
    'viewerContext'?: RecasterViewerContext;
}

