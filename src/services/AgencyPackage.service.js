import { requests } from "./http.service";

class AgencyPackageService {
    getAgencyPackages() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/agency/get/all");
    }

    buyPackage(params) {
        return requests.post(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/agency/buy", params);
    }

    agencyHasPackageData() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/has/package/current/data");
    }

    agencyHasPackageDataForStaff(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/agency/has/package/current/data/for/staff",
            params
        );
    }
}

export default new AgencyPackageService();
