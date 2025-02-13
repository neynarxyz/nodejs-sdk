/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster API V2
 * The Farcaster API allows you to interact with the Farcaster protocol. See the [Neynar docs](https://docs.neynar.com/reference) for more details. 
 *
 * The version of the OpenAPI document: 2.13.1
 * Contact: team@neynar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface WebhookSubscriptionFiltersCast
 */
export interface WebhookSubscriptionFiltersCast {
    /**
     * Exclude casts that matches these authors. **Note:** This is applied as an AND operation against rest of the filters. Rest of the filters are bundled as an OR operation. 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'exclude_author_fids'?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'author_fids'?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'mentioned_fids'?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'parent_urls'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'root_parent_urls'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'parent_hashes'?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'parent_author_fids'?: Array<number>;
    /**
     * Regex pattern to match the text key of the cast. **Note:**  1) Regex must be parsed by Go\'s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: (?i)\\\\$degen should be written as (?i)\\\\\\\\$degen 
     * @type {string}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'text'?: string;
    /**
     * Regex pattern to match the embeded_url (key embeds) of the cast. **Note:**  1) Regex must be parsed by Go\'s RE2 engine (Test your expression here: https://www.lddgo.net/en/string/golangregex) 2) Use backslashes to escape special characters. For example: \\\\b(farcaster|neynar)\\\\b should be written as \\\\\\\\b(farcaster|neynar)\\\\\\\\b 
     * @type {string}
     * @memberof WebhookSubscriptionFiltersCast
     */
    'embeds'?: string;
}

