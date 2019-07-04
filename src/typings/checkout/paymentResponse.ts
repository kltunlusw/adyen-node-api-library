

/**
 * Adyen Checkout Service
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v46/payments ```
 *
 * OpenAPI spec version: 46
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { FraudResult } from './fraudResult';
import { InputDetail } from './inputDetail';
import { Redirect } from './redirect';


export interface PaymentResponse { 
    /**
     * This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs**.
     */
    additionalData?: any;
    /**
     * When non-empty, contains all the fields that you must submit to the `/payments/details` endpoint.
     */
    details?: Array<InputDetail>;
    fraudResult?: FraudResult;
    /**
     * Contains the details that will be presented to the shopper.
     */
    outputDetails?: any;
    /**
     * When non-empty, contains a value that you must submit to the `/payments/details` endpoint.
     */
    paymentData?: string;
    /**
     * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.  > `pspReference` is returned only for non-redirect payment methods.
     */
    pspReference?: string;
    redirect?: Redirect;
    /**
     * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error.  When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
     */
    refusalReason?: string;
    /**
     * Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
     */
    refusalReasonCode?: string;
    /**
     * The result of the payment. Possible values:  * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions. * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state. * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state. * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state. * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state. * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. For more information on handling a pending payment, refer to [Payments with pending status](https://docs.adyen.com/development-resources/payments-with-pending-status). * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments. * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation. 
     */
    resultCode?: PaymentResponse.ResultCodeEnum;
}
export namespace PaymentResponse {
    export type ResultCodeEnum = 'AuthenticationFinished' | 'Authorised' | 'Cancelled' | 'ChallengeShopper' | 'Error' | 'IdentifyShopper' | 'Pending' | 'Received' | 'RedirectShopper' | 'Refused';
    export const ResultCodeEnum = {
        AuthenticationFinished: 'AuthenticationFinished' as ResultCodeEnum,
        Authorised: 'Authorised' as ResultCodeEnum,
        Cancelled: 'Cancelled' as ResultCodeEnum,
        ChallengeShopper: 'ChallengeShopper' as ResultCodeEnum,
        Error: 'Error' as ResultCodeEnum,
        IdentifyShopper: 'IdentifyShopper' as ResultCodeEnum,
        Pending: 'Pending' as ResultCodeEnum,
        Received: 'Received' as ResultCodeEnum,
        RedirectShopper: 'RedirectShopper' as ResultCodeEnum,
        Refused: 'Refused' as ResultCodeEnum
    };
}