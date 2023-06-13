/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { CardDetailsRequest } from "../../typings/checkout/models";
import { CardDetailsResponse } from "../../typings/checkout/models";
import { CreateCheckoutSessionRequest } from "../../typings/checkout/models";
import { CreateCheckoutSessionResponse } from "../../typings/checkout/models";
import { DetailsRequest } from "../../typings/checkout/models";
import { DonationResponse } from "../../typings/checkout/models";
import { PaymentDetailsResponse } from "../../typings/checkout/models";
import { PaymentDonationRequest } from "../../typings/checkout/models";
import { PaymentMethodsRequest } from "../../typings/checkout/models";
import { PaymentMethodsResponse } from "../../typings/checkout/models";
import { PaymentRequest } from "../../typings/checkout/models";
import { PaymentResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import CheckoutResource from "../resource/checkoutResource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class PaymentsApi extends Service {

    /**
     * @summary Get the list of brands on the card
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param cardDetailsRequest 
     */
    public async cardDetails(cardDetailsRequest: CardDetailsRequest, requestOptions?: IRequest.Options): Promise<CardDetailsResponse> {
        const localVarPath = "/cardDetails";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CardDetailsRequest = ObjectSerializer.serialize(cardDetailsRequest, "CardDetailsRequest");
        const response = await getJsonResponse<CardDetailsRequest, CardDetailsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CardDetailsResponse");
    }

    /**
     * @summary Start a transaction for donations
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param paymentDonationRequest 
     */
    public async donations(paymentDonationRequest: PaymentDonationRequest, requestOptions?: IRequest.Options): Promise<DonationResponse> {
        const localVarPath = "/donations";
        const resource = new CheckoutResource(this, localVarPath);
        const request: PaymentDonationRequest = ObjectSerializer.serialize(paymentDonationRequest, "PaymentDonationRequest");
        const response = await getJsonResponse<PaymentDonationRequest, DonationResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DonationResponse");
    }

    /**
     * @summary Get a list of available payment methods
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param paymentMethodsRequest 
     */
    public async paymentMethods(paymentMethodsRequest: PaymentMethodsRequest, requestOptions?: IRequest.Options): Promise<PaymentMethodsResponse> {
        const localVarPath = "/paymentMethods";
        const resource = new CheckoutResource(this, localVarPath);
        const request: PaymentMethodsRequest = ObjectSerializer.serialize(paymentMethodsRequest, "PaymentMethodsRequest");
        const response = await getJsonResponse<PaymentMethodsRequest, PaymentMethodsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethodsResponse");
    }

    /**
     * @summary Start a transaction
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param paymentRequest 
     */
    public async payments(paymentRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        const localVarPath = "/payments";
        const resource = new CheckoutResource(this, localVarPath);
        const request: PaymentRequest = ObjectSerializer.serialize(paymentRequest, "PaymentRequest");
        const response = await getJsonResponse<PaymentRequest, PaymentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentResponse");
    }

    /**
     * @summary Submit details for a payment
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param detailsRequest 
     */
    public async paymentsDetails(detailsRequest: DetailsRequest, requestOptions?: IRequest.Options): Promise<PaymentDetailsResponse> {
        const localVarPath = "/payments/details";
        const resource = new CheckoutResource(this, localVarPath);
        const request: DetailsRequest = ObjectSerializer.serialize(detailsRequest, "DetailsRequest");
        const response = await getJsonResponse<DetailsRequest, PaymentDetailsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentDetailsResponse");
    }

    /**
     * @summary Create a payment session
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createCheckoutSessionRequest 
     */
    public async sessions(createCheckoutSessionRequest: CreateCheckoutSessionRequest, requestOptions?: IRequest.Options): Promise<CreateCheckoutSessionResponse> {
        const localVarPath = "/sessions";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreateCheckoutSessionRequest = ObjectSerializer.serialize(createCheckoutSessionRequest, "CreateCheckoutSessionRequest");
        const response = await getJsonResponse<CreateCheckoutSessionRequest, CreateCheckoutSessionResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateCheckoutSessionResponse");
    }
}