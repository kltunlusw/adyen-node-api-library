/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AnyType } from "./anyType";

export class CustomerOrder {
    "accessedBy"?: string;
    "additionalInformation"?: string;
    "currency"?: string;
    "currentAmount": number;
    "customerOrderID": string;
    "endDate"?: { [key: string]: AnyType; };
    "forecastedAmount": number;
    "openOrderState"?: boolean;
    "startDate": { [key: string]: AnyType; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "accessedBy",
            "baseName": "AccessedBy",
            "type": "string"
        },
        {
            "name": "additionalInformation",
            "baseName": "AdditionalInformation",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "currentAmount",
            "baseName": "CurrentAmount",
            "type": "number"
        },
        {
            "name": "customerOrderID",
            "baseName": "CustomerOrderID",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "EndDate",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "forecastedAmount",
            "baseName": "ForecastedAmount",
            "type": "number"
        },
        {
            "name": "openOrderState",
            "baseName": "OpenOrderState",
            "type": "boolean"
        },
        {
            "name": "startDate",
            "baseName": "StartDate",
            "type": "{ [key: string]: AnyType; }"
        }    ];

    static getAttributeTypeMap() {
        return CustomerOrder.attributeTypeMap;
    }
}

