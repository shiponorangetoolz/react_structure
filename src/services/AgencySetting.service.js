import { requests } from "./http.service";

class AgencySettingService {
    getAgencySettingData() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/company/setting");
    }

    updateAgencySettingInfo(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/company/setting/update/information",
            body
        );
    }

    updateAgencyCompanyLogo(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/company/setting/update/logo",
            body
        );
    }

    updateAgencyFavIcon(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/company/setting/update/fav/icon/logo",
            body
        );
    }

    getAgencyInfoWithDomainName(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/info/get/using/domain/name",
            params
        );
    }
}

export default new AgencySettingService();
