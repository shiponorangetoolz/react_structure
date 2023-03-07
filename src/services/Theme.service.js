import { requests } from "./http.service";

class ThemeService {
    getThemeColorPallet() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/theme/setting/get/data");
    }

    updateThemeColorPallet(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/theme/setting/update/data",
            body
        );
    }
}

export default new ThemeService();
