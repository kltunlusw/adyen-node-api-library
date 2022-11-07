/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ThreeDS2ResponseData {
    'acsChallengeMandated'?: string;
    'acsOperatorID'?: string;
    'acsReferenceNumber'?: string;
    'acsSignedContent'?: string;
    'acsTransID'?: string;
    'acsURL'?: string;
    'authenticationType'?: string;
    'cardHolderInfo'?: string;
    'cavvAlgorithm'?: string;
    'challengeIndicator'?: string;
    'dsReferenceNumber'?: string;
    'dsTransID'?: string;
    'exemptionIndicator'?: string;
    'messageVersion'?: string;
    'riskScore'?: string;
    'sdkEphemPubKey'?: string;
    'threeDSServerTransID'?: string;
    'transStatus'?: string;
    'transStatusReason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acsChallengeMandated",
            "baseName": "acsChallengeMandated",
            "type": "string"
        },
        {
            "name": "acsOperatorID",
            "baseName": "acsOperatorID",
            "type": "string"
        },
        {
            "name": "acsReferenceNumber",
            "baseName": "acsReferenceNumber",
            "type": "string"
        },
        {
            "name": "acsSignedContent",
            "baseName": "acsSignedContent",
            "type": "string"
        },
        {
            "name": "acsTransID",
            "baseName": "acsTransID",
            "type": "string"
        },
        {
            "name": "acsURL",
            "baseName": "acsURL",
            "type": "string"
        },
        {
            "name": "authenticationType",
            "baseName": "authenticationType",
            "type": "string"
        },
        {
            "name": "cardHolderInfo",
            "baseName": "cardHolderInfo",
            "type": "string"
        },
        {
            "name": "cavvAlgorithm",
            "baseName": "cavvAlgorithm",
            "type": "string"
        },
        {
            "name": "challengeIndicator",
            "baseName": "challengeIndicator",
            "type": "string"
        },
        {
            "name": "dsReferenceNumber",
            "baseName": "dsReferenceNumber",
            "type": "string"
        },
        {
            "name": "dsTransID",
            "baseName": "dsTransID",
            "type": "string"
        },
        {
            "name": "exemptionIndicator",
            "baseName": "exemptionIndicator",
            "type": "string"
        },
        {
            "name": "messageVersion",
            "baseName": "messageVersion",
            "type": "string"
        },
        {
            "name": "riskScore",
            "baseName": "riskScore",
            "type": "string"
        },
        {
            "name": "sdkEphemPubKey",
            "baseName": "sdkEphemPubKey",
            "type": "string"
        },
        {
            "name": "threeDSServerTransID",
            "baseName": "threeDSServerTransID",
            "type": "string"
        },
        {
            "name": "transStatus",
            "baseName": "transStatus",
            "type": "string"
        },
        {
            "name": "transStatusReason",
            "baseName": "transStatusReason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2ResponseData.attributeTypeMap;
    }
}
