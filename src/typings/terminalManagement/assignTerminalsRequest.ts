/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AssignTerminalsRequest {
    /**
    * Your company account. To return terminals to the company inventory, specify only this parameter and the `terminals`.
    */
    'companyAccount': string;
    /**
    * Name of the merchant account. Specify this parameter to assign terminals to this merchant account or to a store under this merchant account.
    */
    'merchantAccount'?: string;
    /**
    * Boolean that indicates if you are assigning the terminals to the merchant inventory. Do not use when assigning terminals to a store. Required when assigning the terminal to a merchant account.  - Set this to **true** to assign the terminals to the merchant inventory. This also means that the terminals cannot be boarded.  - Set this to **false** to assign the terminals to the merchant account as in-store terminals. This makes the terminals ready to be boarded and to process payments through the specified merchant account.
    */
    'merchantInventory'?: boolean;
    /**
    * The store code of the store that you want to assign the terminals to.
    */
    'store'?: string;
    /**
    * Array containing a list of terminal IDs that you want to assign or reassign to the merchant account or store, or that you want to return to the company inventory.  For example, `[\"V400m-324689776\",\"P400Plus-329127412\"]`.
    */
    'terminals': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "companyAccount",
            "baseName": "companyAccount",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantInventory",
            "baseName": "merchantInventory",
            "type": "boolean"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "terminals",
            "baseName": "terminals",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AssignTerminalsRequest.attributeTypeMap;
    }
}
