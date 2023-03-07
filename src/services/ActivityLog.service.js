import { requests } from "./http.service";

class ActivityLogService {
    getActivityLogList(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/activity/logs/get/data/list",
            params
        );
    }

    deleteActivityLogData(params) {
        return requests.delete(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/activity/logs/delete",
            params
        );
    }
}

export default new ActivityLogService();
