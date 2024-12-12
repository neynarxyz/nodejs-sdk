/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.2.2
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ValidateFrameActionReqBody
 */
export interface ValidateFrameActionReqBody {
    /**
     * Hexadecimal string of message bytes.
     * @type {string}
     * @memberof ValidateFrameActionReqBody
     */
    'message_bytes_in_hex': string;
    /**
     * Adds viewer_context inside the cast object to indicate whether the interactor reacted to the cast housing the frame.
     * @type {boolean}
     * @memberof ValidateFrameActionReqBody
     */
    'cast_reaction_context'?: boolean;
    /**
     * Adds viewer_context inside the user (interactor) object to indicate whether the interactor follows or is followed by the cast author.
     * @type {boolean}
     * @memberof ValidateFrameActionReqBody
     */
    'follow_context'?: boolean;
    /**
     * Adds context about the app used by the user inside `frame.action`.
     * @type {boolean}
     * @memberof ValidateFrameActionReqBody
     */
    'signer_context'?: boolean;
    /**
     * Adds context about the channel that the cast belongs to inside of the cast object.
     * @type {boolean}
     * @memberof ValidateFrameActionReqBody
     */
    'channel_follow_context'?: boolean;
}

