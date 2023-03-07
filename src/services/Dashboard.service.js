import { requests } from "./http.service";

class DashBoardService {
    getTotalFreeAndPaidClient(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/dashboard/total/free/paid/client",
            params
        );
    }

    getClientRelatedStateCountData(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER +
                "api/v1/agency/dashboard/get/client/related/state/count/data",
            params
        );
    }

    getClientRelatedStateCountGraphData(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER +
                "api/v1/agency/dashboard/get/client/related/state/count/graph/data",
            params
        );
    }
}

export default new DashBoardService();
