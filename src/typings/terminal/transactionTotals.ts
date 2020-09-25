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


import { LoyaltyTotals } from "./loyaltyTotals";
import { PaymentInstrumentType } from "./paymentInstrumentType";
import { PaymentTotals } from "./paymentTotals";

export class TransactionTotals {
    "acquirerID"?: string;
    "cardBrand"?: string;
    "errorCondition"?: TransactionTotals.ErrorConditionEnum;
    "hostReconciliationID"?: string;
    "loyaltyCurrency"?: string;
    "loyaltyTotals"?: LoyaltyTotals[];
    "loyaltyUnit"?: TransactionTotals.LoyaltyUnitEnum;
    "operatorID"?: string;
    "paymentCurrency"?: string;
    "paymentInstrumentType": PaymentInstrumentType;
    "paymentTotals"?: PaymentTotals[];
    "pOIID"?: string;
    "saleID"?: string;
    "shiftNumber"?: string;
    "totalsGroupID"?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "cardBrand",
            "baseName": "CardBrand",
            "type": "string"
        },
        {
            "name": "errorCondition",
            "baseName": "ErrorCondition",
            "type": "TransactionTotals.ErrorConditionEnum"
        },
        {
            "name": "hostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "loyaltyCurrency",
            "baseName": "LoyaltyCurrency",
            "type": "string"
        },
        {
            "name": "loyaltyTotals",
            "baseName": "LoyaltyTotals",
            "type": "Array<LoyaltyTotals>"
        },
        {
            "name": "loyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "TransactionTotals.LoyaltyUnitEnum"
        },
        {
            "name": "operatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "paymentCurrency",
            "baseName": "PaymentCurrency",
            "type": "string"
        },
        {
            "name": "paymentInstrumentType",
            "baseName": "PaymentInstrumentType",
            "type": "PaymentInstrumentType"
        },
        {
            "name": "paymentTotals",
            "baseName": "PaymentTotals",
            "type": "Array<PaymentTotals>"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "saleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "shiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "totalsGroupID",
            "baseName": "TotalsGroupID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionTotals.attributeTypeMap;
    }
}

export namespace TransactionTotals {
    export enum ErrorConditionEnum {
        Aborted = "Aborted" as any,
        Busy = "Busy" as any,
        Cancel = "Cancel" as any,
        DeviceOut = "DeviceOut" as any,
        InProgress = "InProgress" as any,
        InsertedCard = "InsertedCard" as any,
        InvalidCard = "InvalidCard" as any,
        LoggedOut = "LoggedOut" as any,
        MessageFormat = "MessageFormat" as any,
        NotAllowed = "NotAllowed" as any,
        NotFound = "NotFound" as any,
        PaymentRestriction = "PaymentRestriction" as any,
        Refusal = "Refusal" as any,
        UnavailableDevice = "UnavailableDevice" as any,
        UnavailableService = "UnavailableService" as any,
        UnreachableHost = "UnreachableHost" as any,
        WrongPIN = "WrongPIN" as any
    }
    export enum LoyaltyUnitEnum {
        Monetary = "Monetary" as any,
        Point = "Point" as any
    }
}
