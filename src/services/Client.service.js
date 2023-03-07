import { requests } from "./http.service";

class ClientService {
    getClients(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/get/all/client/info/data",
            params
        );
    }

    createClient(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/create", body);
    }

    updateClient(body) {
        return requests.put(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/update", body);
    }

    deleteClient(params) {
        return requests.delete(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/delete", params);
    }

    clientStatusChange(body) {
        return requests.put(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/change/status", body);
    }

    billingStatusChange(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/change/auto/recurring/billing/status",
            body
        );
    }

    getClientListForSwitchAccount(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/client/get/client/list/for/switch/account",
            params
        );
    }
}

export default new ClientService();
