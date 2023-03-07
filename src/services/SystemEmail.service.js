import { requests } from "./http.service";

class SystemEmailService {
    getSystemEmailData(body) {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/system/email/get/list", body);
    }

    createSystemEmail(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/system/email/create", body);
    }

    updateSystemEmail(body) {
        return requests.put(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/system/email/update", body);
    }

    changeStatusSystemEmail(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/system/email/change/status",
            body
        );
    }

    deleteSystemEmail(body) {
        return requests.delete(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/system/email/delete", body);
    }
}

export default new SystemEmailService();
