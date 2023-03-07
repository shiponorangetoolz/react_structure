import { requests } from "./http.service";

class AgencyBalanceService {
    getBalanceAmountList() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/recharge/get/amount/data");
    }

    configureAutoRecharge(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/recharge/configuration/auto/recharge/amount",
            body
        );
    }

    changeStatusAutoRecharge(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/recharge/change/status/auto/recharge/amount",
            body
        );
    }

    removeAutoRecharge(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/recharge/remove/auto/recharge/amount",
            body
        );
    }

    addRechargeBalance(body) {
        return requests.post(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/recharge/amount", body);
    }

    getAgencyCardInfo() {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/get/agency/card/info/for/user/payment/card"
        );
    }

    getSystemRechargeCharge(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/recharge/get/charge/amount/data",
            params
        );
    }
}

export default new AgencyBalanceService();
