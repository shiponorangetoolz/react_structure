import { requests } from "./http.service";

class AccountSettingService {
    getAccountSettingData() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/get/specific/agency/data");
    }

    updateAccountSettingInfo(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/update/agency/information",
            body
        );
    }

    updateAgencyPassword(body) {
        return requests.put(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/update/agency/password", body);
    }

    updateAgencyProfileImage(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/update/agency/profile/image",
            body
        );
    }

    updateAgencyCreditForward(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/update/agency/credit/forward",
            body
        );
    }

    updateAgencyCurrencyData(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/update/agency/currency/data",
            body
        );
    }

    getAgencyCurrencyData() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/get/agency/currency/data");
    }

    getAllCurrencyData() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/get/all/currency/data");
    }
}

export default new AccountSettingService();
