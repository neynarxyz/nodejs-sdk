/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.7.1
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

export const IdRegisterEventType = {
    Register: 'ID_REGISTER_EVENT_TYPE_REGISTER',
    Transfer: 'ID_REGISTER_EVENT_TYPE_TRANSFER',
    ChangeRecovery: 'ID_REGISTER_EVENT_TYPE_CHANGE_RECOVERY'
} as const;

export type IdRegisterEventType = typeof IdRegisterEventType[keyof typeof IdRegisterEventType];



