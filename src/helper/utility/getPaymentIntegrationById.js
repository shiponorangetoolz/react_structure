import { PAYMENT_METHOD__STRIPE } from "../constants/coreConstant";

export const getPaymentIntegrationById = (id) => {
    switch (id) {
        case PAYMENT_METHOD__STRIPE:
            return "Stripe";
        default:
            return "N/A";
    }
};
