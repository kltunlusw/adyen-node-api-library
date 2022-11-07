/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ScheduleAccountUpdaterResult {
    /**
    * Adyen\'s 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference': string;
    /**
    * The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.
    */
    'result': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ScheduleAccountUpdaterResult.attributeTypeMap;
    }
}
