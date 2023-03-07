import { requests } from "./http.service";

class RevenueService {
    getRevenueStateReport(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/state/report/get/revenue/data/count",
            params
        );
    }

    getRevenueBillingHistory(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/state/report/get/all/revenue/data/list",
            params
        );
    }

    getAgencyInvoiceDataByInvoiceUid(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER +
                "api/v1/agency/state/report/get/agency/invoice/data/by/invoice/uid",
            params
        );
    }
}

export default new RevenueService();
