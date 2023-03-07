import { requests } from "./http.service";

class DomainService {
    getDomainData(body) {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/get/domain/data", body);
    }

    createSubDomain(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/sub/domain/add", body);
    }

    createCustomDomain(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/custom/domain/add", body);
    }
}

export default new DomainService();
