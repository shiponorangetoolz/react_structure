import { requests } from "./http.service";

class AgencyBillingService {
    getAgencyBillingHistory(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/invoice/get/all/data",
            params
        );
    }
}

export default new AgencyBillingService();
