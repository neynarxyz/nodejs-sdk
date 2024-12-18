/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CastWithInteractions } from './cast-with-interactions';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameInput } from './frame-input';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameState } from './frame-state';
// May contain unused imports in some cases
// @ts-ignore
import type { FrameTransaction } from './frame-transaction';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';
// May contain unused imports in some cases
// @ts-ignore
import type { ValidatedFrameActionSigner } from './validated-frame-action-signer';
// May contain unused imports in some cases
// @ts-ignore
import type { ValidatedFrameActionTappedButton } from './validated-frame-action-tapped-button';

/**
 * 
 * @export
 * @interface ValidatedFrameAction
 */
export interface ValidatedFrameAction {
    /**
     * 
     * @type {string}
     * @memberof ValidatedFrameAction
     */
    'object': ValidatedFrameActionObjectEnum;
    /**
     * 
     * @type {string}
     * @memberof ValidatedFrameAction
     */
    'url': string;
    /**
     * 
     * @type {User}
     * @memberof ValidatedFrameAction
     */
    'interactor': User;
    /**
     * 
     * @type {ValidatedFrameActionTappedButton}
     * @memberof ValidatedFrameAction
     */
    'tapped_button': ValidatedFrameActionTappedButton;
    /**
     * 
     * @type {FrameInput}
     * @memberof ValidatedFrameAction
     */
    'input'?: FrameInput;
    /**
     * 
     * @type {FrameState}
     * @memberof ValidatedFrameAction
     */
    'state': FrameState;
    /**
     * 
     * @type {CastWithInteractions}
     * @memberof ValidatedFrameAction
     */
    'cast': CastWithInteractions;
    /**
     * 
     * @type {string}
     * @memberof ValidatedFrameAction
     */
    'timestamp': string;
    /**
     * 
     * @type {ValidatedFrameActionSigner}
     * @memberof ValidatedFrameAction
     */
    'signer'?: ValidatedFrameActionSigner;
    /**
     * 
     * @type {FrameTransaction}
     * @memberof ValidatedFrameAction
     */
    'transaction'?: FrameTransaction;
    /**
     * The connected wallet address of the interacting user.
     * @type {string}
     * @memberof ValidatedFrameAction
     */
    'address'?: string;
}

export const ValidatedFrameActionObjectEnum = {
    ValidatedFrameAction: 'validated_frame_action'
} as const;

export type ValidatedFrameActionObjectEnum = typeof ValidatedFrameActionObjectEnum[keyof typeof ValidatedFrameActionObjectEnum];


