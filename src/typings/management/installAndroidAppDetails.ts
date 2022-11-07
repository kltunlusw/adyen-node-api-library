/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class InstallAndroidAppDetails {
    /**
    * The unique identifier of the app to be installed.
    */
    'appId'?: string;
    /**
    * Type of terminal action: Install an Android app.
    */
    'type'?: InstallAndroidAppDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InstallAndroidAppDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return InstallAndroidAppDetails.attributeTypeMap;
    }
}

export namespace InstallAndroidAppDetails {
    export enum TypeEnum {
        InstallAndroidApp = <any> 'InstallAndroidApp'
    }
}