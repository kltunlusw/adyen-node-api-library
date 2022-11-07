/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccountDetail } from './bankAccountDetail';
import { BusinessDetails } from './businessDetails';
import { IndividualDetails } from './individualDetails';
import { LegalArrangementDetail } from './legalArrangementDetail';
import { PayoutMethod } from './payoutMethod';
import { StoreDetail } from './storeDetail';
import { ViasAddress } from './viasAddress';

export class AccountHolderDetails {
    'address'?: ViasAddress;
    /**
    * Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information).
    */
    'bankAccountDetails'?: Array<BankAccountDetail>;
    /**
    * The opaque reference value returned by the Adyen API during bank account login.
    */
    'bankAggregatorDataReference'?: string;
    'businessDetails'?: BusinessDetails;
    /**
    * The email address of the account holder.
    */
    'email': string;
    /**
    * The phone number of the account holder provided as a single string. It will be handled as a landline phone. **Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"
    */
    'fullPhoneNumber': string;
    'individualDetails'?: IndividualDetails;
    /**
    * Date when you last reviewed the account holder\'s information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**.
    */
    'lastReviewDate'?: string;
    /**
    * An array containing information about the account holder\'s [legal arrangements](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/legal-arrangements).
    */
    'legalArrangements'?: Array<LegalArrangementDetail>;
    /**
    * The Merchant Category Code of the account holder. > If not specified in the request, this will be derived from the platform account (which is configured by Adyen).
    */
    'merchantCategoryCode'?: string;
    /**
    * A set of key and value pairs for general use by the account holder or merchant. The keys do not have specific names and may be used for storing miscellaneous data as desired. > The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary. > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * Array of tokenized card details associated with the account holder. For details about how you can use the tokens to pay out, refer to [Pay out to cards](https://docs.adyen.com/marketplaces-and-platforms/classic/payout-to-cards).
    */
    'payoutMethods'?: Array<PayoutMethod>;
    'principalBusinessAddress'?: ViasAddress;
    /**
    * Array of stores associated with the account holder. Required when onboarding account holders that have an Adyen [point of sale](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-pos).
    */
    'storeDetails'?: Array<StoreDetail>;
    /**
    * The URL of the website of the account holder.
    */
    'webAddress': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "ViasAddress"
        },
        {
            "name": "bankAccountDetails",
            "baseName": "bankAccountDetails",
            "type": "Array<BankAccountDetail>"
        },
        {
            "name": "bankAggregatorDataReference",
            "baseName": "bankAggregatorDataReference",
            "type": "string"
        },
        {
            "name": "businessDetails",
            "baseName": "businessDetails",
            "type": "BusinessDetails"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "fullPhoneNumber",
            "baseName": "fullPhoneNumber",
            "type": "string"
        },
        {
            "name": "individualDetails",
            "baseName": "individualDetails",
            "type": "IndividualDetails"
        },
        {
            "name": "lastReviewDate",
            "baseName": "lastReviewDate",
            "type": "string"
        },
        {
            "name": "legalArrangements",
            "baseName": "legalArrangements",
            "type": "Array<LegalArrangementDetail>"
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "merchantCategoryCode",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "payoutMethods",
            "baseName": "payoutMethods",
            "type": "Array<PayoutMethod>"
        },
        {
            "name": "principalBusinessAddress",
            "baseName": "principalBusinessAddress",
            "type": "ViasAddress"
        },
        {
            "name": "storeDetails",
            "baseName": "storeDetails",
            "type": "Array<StoreDetail>"
        },
        {
            "name": "webAddress",
            "baseName": "webAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderDetails.attributeTypeMap;
    }
}
