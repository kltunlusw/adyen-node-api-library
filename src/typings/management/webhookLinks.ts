/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { LinksElement } from './linksElement';

export class WebhookLinks {
    'company'?: LinksElement;
    'generateHmac': LinksElement;
    'merchant'?: LinksElement;
    'self': LinksElement;
    'testWebhook': LinksElement;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "company",
            "baseName": "company",
            "type": "LinksElement"
        },
        {
            "name": "generateHmac",
            "baseName": "generateHmac",
            "type": "LinksElement"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "LinksElement"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "LinksElement"
        },
        {
            "name": "testWebhook",
            "baseName": "testWebhook",
            "type": "LinksElement"
        }    ];

    static getAttributeTypeMap() {
        return WebhookLinks.attributeTypeMap;
    }
}
