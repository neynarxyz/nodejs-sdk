/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.25.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The action type of a frame button. Action types \"mint\" & \"link\" are to be handled on the client side only and so they will produce a no/op for POST /farcaster/frame/action.
 * @export
 * @enum {string}
 */

export const FrameButtonActionType = {
    Post: 'post',
    PostRedirect: 'post_redirect',
    Tx: 'tx',
    Link: 'link',
    Mint: 'mint'
} as const;

export type FrameButtonActionType = typeof FrameButtonActionType[keyof typeof FrameButtonActionType];



