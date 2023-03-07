import {
    AGENCY_ACTIVITY_LOG__ACTION_TYPE__CREATE,
    AGENCY_ACTIVITY_LOG__ACTION_TYPE__UPDATE,
    AGENCY_ACTIVITY_LOG__ACTION_TYPE__DELETE,
    AGENCY_ACTIVITY_LOG__ACTION_TYPE__COMPLETED,
    AGENCY_ACTIVITY_LOG__ACTION_TYPE__OTHERS,
} from "../constants/coreConstant";

export const activityLogEventType = (eventType) => {
    switch (eventType) {
        case AGENCY_ACTIVITY_LOG__ACTION_TYPE__CREATE:
            return "Created";
        case AGENCY_ACTIVITY_LOG__ACTION_TYPE__UPDATE:
            return "Updated";
        case AGENCY_ACTIVITY_LOG__ACTION_TYPE__DELETE:
            return "Deleted";
        case AGENCY_ACTIVITY_LOG__ACTION_TYPE__COMPLETED:
            return "Completed";
        case AGENCY_ACTIVITY_LOG__ACTION_TYPE__OTHERS:
            return "Others";
    }
};
