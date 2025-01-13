/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.8.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Signer } from './signer';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface RegisterUserResponse
 */
export interface RegisterUserResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RegisterUserResponse
     */
    'success': RegisterUserResponseSuccessEnum;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserResponse
     */
    'message': string;
    /**
     * 
     * @type {Signer}
     * @memberof RegisterUserResponse
     */
    'signer': Signer;
    /**
     * 
     * @type {User}
     * @memberof RegisterUserResponse
     */
    'user'?: User;
}

export const RegisterUserResponseSuccessEnum = {
    True: true
} as const;

export type RegisterUserResponseSuccessEnum = typeof RegisterUserResponseSuccessEnum[keyof typeof RegisterUserResponseSuccessEnum];


