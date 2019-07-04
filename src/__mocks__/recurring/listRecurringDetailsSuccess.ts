export const listRecurringDetailsSuccess = JSON.stringify({
    creationDate: new Date("2017-03-01T11:53:11+01:00"),
    details: [
        {
            additionalData: {
                cardBin: "411111",
            },
            alias: "cardAlias",
            aliasType: "Default",
            card: {
                expiryMonth: "8",
                expiryYear: "2018",
                holderName: "Holder",
                number: "1111",
            },
            contractTypes: [
                "ONECLICK",
            ],
            creationDate: new Date("2017-03-07T09:43:33+01:00"),
            firstPspReference: "8524888762135795",
            paymentMethodVariant: "visa",
            recurringDetailReference: "recurringReference",
            variant: "visa",
        },
        {
            billingAddress: {
                city: "City",
                country: "NL",
                houseNumberOrName: "1",
                postalCode: "2312aa",
                stateOrProvince: "NA",
                street: "Street",
            },
            contractTypes: [
                "RECURRING",
            ],
            creationDate: new Date("2017-10-10T08:50:02+02:00"),
            firstPspReference: "8515076181707110",
            paymentMethodVariant: "paypal",
            recurringDetailReference: "8315076181982020",
            tokenDetails: {
                tokenData: {
                    "BillingAgreementId": "B-7MA42752FE774625C",
                    "EmailId": "tedtest@test.nl",
                    "PayPal.PayerId": "H95EPL8B2KFE6",
                },
                tokenDataType: "PayPal",
            },
            variant: "paypal",
        },
    ],
});
