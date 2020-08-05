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


import { TransactionIdentification } from './transactionIdentification';

export class OriginalPOITransaction {
    'acquirerID'?: string;
    'approvalCode'?: string;
    'customerLanguage'?: string;
    'hostTransactionID'?: TransactionIdentification;
    'pOIID'?: string;
    'pOITransactionID'?: TransactionIdentification;
    'reuseCardDataFlag'?: boolean;
    'saleID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "approvalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "hostTransactionID",
            "baseName": "HostTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "pOITransactionID",
            "baseName": "POITransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "reuseCardDataFlag",
            "baseName": "ReuseCardDataFlag",
            "type": "boolean"
        },
        {
            "name": "saleID",
            "baseName": "SaleID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OriginalPOITransaction.attributeTypeMap;
    }
}
