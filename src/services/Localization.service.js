import { requests } from "./http.service";

class LocalizationService {
    getAllCountryList() {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/localization/get/all/country/list"
        );
    }

    getAllTimezoneList() {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/localization/get/all/timezone/list"
        );
    }

    setCountryAndTimeZone(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/on/boarding/country/timezone/setting",
            body
        );
    }

    getLocalizationData(body) {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/localization/get/data");
    }

    getStandardTimeZoneData(body) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/localization/get/standard/timezone",
            body
        );
    }
}

export default new LocalizationService();
