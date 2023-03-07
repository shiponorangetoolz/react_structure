import { requests } from "./http.service";

class UserRole {
    getAllRoleData() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/role/get/all/role/data");
    }

    getAllModuleData(body) {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/role/get/all/module/data", body);
    }
}

export default new UserRole();
