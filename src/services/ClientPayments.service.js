import { requests } from "./http.service";

class ClientPaymentsService {
    getClientTransactionHistory(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/user/invoice/get/all/user/data",
            params
        );
    }
}

export default new ClientPaymentsService();
