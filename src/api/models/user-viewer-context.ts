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



/**
 * Adds context on the viewer\'s follow relationship with the user.
 * @export
 * @interface UserViewerContext
 */
export interface UserViewerContext {
    /**
     * Indicates if the viewer is following the user.
     * @type {boolean}
     * @memberof UserViewerContext
     */
    'following': boolean;
    /**
     * Indicates if the viewer is followed by the user.
     * @type {boolean}
     * @memberof UserViewerContext
     */
    'followed_by': boolean;
    /**
     * Indicates if the viewer is blocking the user.
     * @type {boolean}
     * @memberof UserViewerContext
     */
    'blocking': boolean;
    /**
     * Indicates if the viewer is blocked by the user.
     * @type {boolean}
     * @memberof UserViewerContext
     */
    'blocked_by': boolean;
}

