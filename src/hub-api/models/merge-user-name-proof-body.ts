/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. 
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
import type { Message } from './message';
// May contain unused imports in some cases
// @ts-ignore
import type { UserNameProof } from './user-name-proof';

/**
 * 
 * @export
 * @interface MergeUserNameProofBody
 */
export interface MergeUserNameProofBody {
    /**
     * 
     * @type {UserNameProof}
     * @memberof MergeUserNameProofBody
     */
    'usernameProof'?: UserNameProof;
    /**
     * 
     * @type {UserNameProof}
     * @memberof MergeUserNameProofBody
     */
    'deletedUsernameProof'?: UserNameProof;
    /**
     * 
     * @type {Message}
     * @memberof MergeUserNameProofBody
     */
    'usernameProofMessage'?: Message;
    /**
     * 
     * @type {Message}
     * @memberof MergeUserNameProofBody
     */
    'deletedUsernameProofMessage'?: Message;
}

