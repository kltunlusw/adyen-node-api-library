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


import { LoyaltyData } from "./loyaltyData";
import { LoyaltyTransaction } from "./loyaltyTransaction";
import { SaleData } from "./saleData";

export class LoyaltyRequest {
    "loyaltyData"?: LoyaltyData[];
    "loyaltyTransaction": LoyaltyTransaction;
    "saleData": SaleData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "loyaltyData",
            "baseName": "LoyaltyData",
            "type": "Array<LoyaltyData>"
        },
        {
            "name": "loyaltyTransaction",
            "baseName": "LoyaltyTransaction",
            "type": "LoyaltyTransaction"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyRequest.attributeTypeMap;
    }
}

