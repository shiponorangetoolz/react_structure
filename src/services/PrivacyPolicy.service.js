import { requests } from "./http.service";

class PrivacyPolicyService {
    getPrivacyPolicyData() {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/company/setting/get/privacy/policy"
        );
    }

    updateAndCreatePrivacyPolicyData(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/company/setting/update/privacy/policy",
            body
        );
    }
}

export default new PrivacyPolicyService();
