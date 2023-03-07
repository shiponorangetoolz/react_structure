import { requests } from "./http.service";

class AgencyPaymentService {
    addAgencyPaymentCard(params) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/add/card/info",
            params
        );
    }

    getAgencyPaymentCardList() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/get/all/data");
    }

    updateAgencyDefaultPaymentCard(params) {
        return requests.put(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/update/default/card",
            params
        );
    }

    updateAgencyPaymentCardActiveStatus(params) {
        return requests.put(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/update/card/status",
            params
        );
    }

    deleteAgencyPaymentCard(params) {
        return requests.delete(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/payment/delete/card",
            params
        );
    }
}

export default new AgencyPaymentService();
