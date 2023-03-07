import { requests } from "./http.service";

class AppIntegrationService {
    getGoogleAppInfo(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/app/integration/get/data",
            params
        );
    }

    addOrUpdateGoogleAppInfo(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/app/integration/add/data",
            body
        );
    }
}

export default new AppIntegrationService();
