import { requests } from "./http.service";

class BalanceService {
    getAllBalanceData() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/balance/all/data");
    }

    getSpecificBalanceData(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/balance/key/wise/data",
            params
        );
    }
}

export default new BalanceService();
