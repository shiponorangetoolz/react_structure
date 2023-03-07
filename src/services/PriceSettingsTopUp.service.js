import { requests } from "./http.service";

class PriceSettingsTopUpService {
    getTopUpAmountList(body) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/package/setting/get/auto/recharge/amount",
            body
        );
    }

    createTopUpAmount(params) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/package/setting/create/auto/recharge/amount",
            params
        );
    }

    updateTopUpAmount(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/package/setting/update/auto/recharge/amount",
            body
        );
    }

    deleteTopUpAmount(body) {
        return requests.delete(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/package/setting/delete/auto/recharge/amount",
            body
        );
    }
}

export default new PriceSettingsTopUpService();
