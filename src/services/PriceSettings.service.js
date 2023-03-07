import { requests } from "./http.service";

class PriceSettingsService {
    getEmailAndSmsPriceSettingsData(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/email/sms/price/setting/get/pricing/data",
            params
        );
    }

    updateEmailAndSmsPriceSettingsData(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/email/sms/price/setting/configuration/data",
            body
        );
    }
}

export default new PriceSettingsService();
