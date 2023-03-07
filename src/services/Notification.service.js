import { requests } from "./http.service";

class NotificationService {
    addNotification(params) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/notification/add/data",
            params
        );
    }

    getNotificationList(params) {
        return requests.get(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/notification/get/data/list",
            params
        );
    }

    deleteNotificationData(params) {
        return requests.delete(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/notification/delete",
            params
        );
    }

    updateNotificationMarkAsRead(params) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/agency/notification/mark/as/read",
            params
        );
    }
}

export default new NotificationService();
