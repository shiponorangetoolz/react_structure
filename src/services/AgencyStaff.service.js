import { requests } from "./http.service";

class AgencyStaffService {
    getAgencyStaffList(params) {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/staff/get/list", params);
    }

    createAgencyStaff(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/staff/create", body);
    }

    updateAgencyStaff(body) {
        return requests.put(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/staff/update", body);
    }

    updateAgencyStaffStatus(body) {
        return requests.put(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/staff/update/status",
            body
        );
    }

    deleteAgencyStaff(params) {
        return requests.delete(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/staff/delete", params);
    }
}

export default new AgencyStaffService();
