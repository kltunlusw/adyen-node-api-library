/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Avs } from './avs';
import { InstallmentsNumber } from './installmentsNumber';
import { ShopperInput } from './shopperInput';

export class Configuration {
    'avs'?: Avs;
    /**
    * Determines whether the cardholder name should be provided or not.  Permitted values: * NONE * OPTIONAL * REQUIRED
    */
    'cardHolderName'?: Configuration.CardHolderNameEnum;
    'installments'?: InstallmentsNumber;
    'shopperInput'?: ShopperInput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "avs",
            "baseName": "avs",
            "type": "Avs"
        },
        {
            "name": "cardHolderName",
            "baseName": "cardHolderName",
            "type": "Configuration.CardHolderNameEnum"
        },
        {
            "name": "installments",
            "baseName": "installments",
            "type": "InstallmentsNumber"
        },
        {
            "name": "shopperInput",
            "baseName": "shopperInput",
            "type": "ShopperInput"
        }    ];

    static getAttributeTypeMap() {
        return Configuration.attributeTypeMap;
    }
}

export namespace Configuration {
    export enum CardHolderNameEnum {
        None = <any> 'NONE',
        Optional = <any> 'OPTIONAL',
        Required = <any> 'REQUIRED'
    }
}