import { requests } from "./http.service";

class PaymentIntegrationService {
    getPaymentIntegrationMethodList() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/payment/integration/list");
    }

    createOrUpdatePaymentIntegrationMethodConfig(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/integration/setup",
            body
        );
    }

    getPaymentIntegrationMethodConfig(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/integration/all/data",
            params
        );
    }

    changeStatusPaymentIntegrationMethodConfig(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/integration/status/change",
            body
        );
    }
}

export default new PaymentIntegrationService();
