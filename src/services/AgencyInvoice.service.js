import { requests } from "./http.service";

class AgencyInvoiceService {
    getInvoiceReport(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/invoice/get/all/data",
            params
        );
    }

    getTopUpRechargeInvoiceReport(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/invoice/get/all/recharge/top/up/data",
            params
        );
    }

    getSpecificInvoiceReport(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/invoice/get/specific/data",
            params
        );
    }
}

export default new AgencyInvoiceService();
