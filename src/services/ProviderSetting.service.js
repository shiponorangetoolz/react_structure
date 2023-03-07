import { requests } from "./http.service";

class ProviderSettingService {
    getEmailProviderList() {
        return requests.get(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/provider/get/data/for/email"
        );
    }

    createOrUpdateEmailProviderConfig(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/provider/config/email/setup",
            body
        );
    }

    getSmsProviderList() {
        return requests.get(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/provider/get/data/for/sms"
        );
    }

    createOrUpdateSmsProviderConfig(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/provider/config/sms/setting",
            body
        );
    }

    getProviderConfigByType(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/provider/get/config/data",
            params
        );
    }

    addSMSSenderAddress(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/add/sender/address",
            body
        );
    }

    getAllSMSSenderAddress(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/get/all/sender/address",
            params
        );
    }

    deleteSMSSenderAddress(params) {
        return requests.delete(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/delete/sender/address",
            params
        );
    }

    changeStatusSMSSenderAddress(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/sender/address/status/change",
            body
        );
    }

    updateSMSSenderAddress(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_GATEWAY_SERVER + "api/v1/agency/gateway/update/sender/address",
            body
        );
    }
}

export default new ProviderSettingService();
