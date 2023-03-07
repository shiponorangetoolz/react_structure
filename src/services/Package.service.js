import { requests } from "./http.service";

class PackageService {
    getPackages() {
        return requests.get(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/get/data");
    }

    getMaxLimitBasedOnPrice(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/get/max/limit/based/on/price",
            params
        );
    }

    createPackage(body) {
        return requests.post(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/create", body);
    }

    updatePackage(body) {
        return requests.put(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/update", body);
    }

    updateVisibility(body) {
        return requests.put(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/visibility/update", body);
    }

    deletePackage(params) {
        return requests.delete(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/delete", params);
    }

    allocatedPackage(body) {
        return requests.post(process.env.REACT_APP_API_URL_PACKAGE_SERVER + "api/v1/package/allocated/to/user", body);
    }

    getPackageDiscountByUid(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_PACKAGE_SERVER +
                "api/v1/package/get/user/package/discount/data/by/userPackageUId",
            params
        );
    }
}

export default new PackageService();
