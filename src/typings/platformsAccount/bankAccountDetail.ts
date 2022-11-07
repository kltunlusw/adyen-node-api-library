/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BankAccountDetail {
    /**
    * The bank account number (without separators). >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'accountNumber'?: string;
    /**
    * The type of bank account. Only applicable to bank accounts held in the USA. The permitted values are: `checking`, `savings`.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'accountType'?: string;
    /**
    * The name of the bank account.
    */
    'bankAccountName'?: string;
    /**
    * Merchant reference to the bank account.
    */
    'bankAccountReference'?: string;
    /**
    * The unique identifier (UUID) of the Bank Account. >If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.  >If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.  >If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.  >If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated. 
    */
    'bankAccountUUID'?: string;
    /**
    * The bank identifier code. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'bankBicSwift'?: string;
    /**
    * The city in which the bank branch is located.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'bankCity'?: string;
    /**
    * The bank code of the banking institution with which the bank account is registered.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'bankCode'?: string;
    /**
    * The name of the banking institution with which the bank account is held.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'bankName'?: string;
    /**
    * The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account: * United States - Routing number * United Kingdom - Sort code * Germany - Bankleitzahl >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'branchCode'?: string;
    /**
    * The check code of the bank account.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'checkCode'?: string;
    /**
    * The two-letter country code in which the bank account is registered. >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. \'NL\').  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'countryCode'?: string;
    /**
    * The currency in which the bank account deals. >The permitted currency codes are defined in ISO-4217 (e.g. \'EUR\'). 
    */
    'currencyCode'?: string;
    /**
    * The international bank account number. >The IBAN standard is defined in ISO-13616.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'iban'?: string;
    /**
    * The city of residence of the bank account owner. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerCity'?: string;
    /**
    * The country code of the country of residence of the bank account owner. >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. \'NL\').  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerCountryCode'?: string;
    /**
    * The date of birth of the bank account owner. The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
    */
    'ownerDateOfBirth'?: string;
    /**
    * The house name or number of the residence of the bank account owner. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerHouseNumberOrName'?: string;
    /**
    * The name of the bank account owner. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerName'?: string;
    /**
    * The country code of the country of nationality of the bank account owner. >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. \'NL\').  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerNationality'?: string;
    /**
    * The postal code of the residence of the bank account owner. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerPostalCode'?: string;
    /**
    * The state of residence of the bank account owner. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerState'?: string;
    /**
    * The street name of the residence of the bank account owner. >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'ownerStreet'?: string;
    /**
    * If set to true, the bank account is a primary account.
    */
    'primaryAccount'?: boolean;
    /**
    * The tax ID number.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'taxId'?: string;
    /**
    * The URL to be used for bank account verification. This may be generated on bank account creation.  >Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.
    */
    'urlForVerification'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string"
        },
        {
            "name": "bankAccountName",
            "baseName": "bankAccountName",
            "type": "string"
        },
        {
            "name": "bankAccountReference",
            "baseName": "bankAccountReference",
            "type": "string"
        },
        {
            "name": "bankAccountUUID",
            "baseName": "bankAccountUUID",
            "type": "string"
        },
        {
            "name": "bankBicSwift",
            "baseName": "bankBicSwift",
            "type": "string"
        },
        {
            "name": "bankCity",
            "baseName": "bankCity",
            "type": "string"
        },
        {
            "name": "bankCode",
            "baseName": "bankCode",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bankName",
            "type": "string"
        },
        {
            "name": "branchCode",
            "baseName": "branchCode",
            "type": "string"
        },
        {
            "name": "checkCode",
            "baseName": "checkCode",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "ownerCity",
            "baseName": "ownerCity",
            "type": "string"
        },
        {
            "name": "ownerCountryCode",
            "baseName": "ownerCountryCode",
            "type": "string"
        },
        {
            "name": "ownerDateOfBirth",
            "baseName": "ownerDateOfBirth",
            "type": "string"
        },
        {
            "name": "ownerHouseNumberOrName",
            "baseName": "ownerHouseNumberOrName",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string"
        },
        {
            "name": "ownerNationality",
            "baseName": "ownerNationality",
            "type": "string"
        },
        {
            "name": "ownerPostalCode",
            "baseName": "ownerPostalCode",
            "type": "string"
        },
        {
            "name": "ownerState",
            "baseName": "ownerState",
            "type": "string"
        },
        {
            "name": "ownerStreet",
            "baseName": "ownerStreet",
            "type": "string"
        },
        {
            "name": "primaryAccount",
            "baseName": "primaryAccount",
            "type": "boolean"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        },
        {
            "name": "urlForVerification",
            "baseName": "urlForVerification",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BankAccountDetail.attributeTypeMap;
    }
}
