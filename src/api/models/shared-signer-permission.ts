/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.6.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const SharedSignerPermission = {
    WriteAll: 'WRITE_ALL',
    ReadOnly: 'READ_ONLY',
    None: 'NONE',
    PublishCast: 'PUBLISH_CAST',
    DeleteCast: 'DELETE_CAST',
    PublishReaction: 'PUBLISH_REACTION',
    DeleteReaction: 'DELETE_REACTION',
    UpdateProfile: 'UPDATE_PROFILE',
    FollowUser: 'FOLLOW_USER',
    UnfollowUser: 'UNFOLLOW_USER',
    FollowChannel: 'FOLLOW_CHANNEL',
    UnfollowChannel: 'UNFOLLOW_CHANNEL',
    AddVerification: 'ADD_VERIFICATION',
    RemoveVerification: 'REMOVE_VERIFICATION',
    WriteFrameAction: 'WRITE_FRAME_ACTION'
} as const;

export type SharedSignerPermission = typeof SharedSignerPermission[keyof typeof SharedSignerPermission];



