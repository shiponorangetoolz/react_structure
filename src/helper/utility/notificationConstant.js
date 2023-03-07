import {
    NOTIFICATION_AGENCY_EVENT__TYPE__USER_REGISTRATION,
    NOTIFICATION_AGENCY_EVENT__TYPE__USER_BUY_PACKAGE,
    NOTIFICATION_AGENCY_EVENT__TYPE__USER_BALANCE_RECHARGE,
    NOTIFICATION_AGENCY_EVENT__TYPE__USER_RECURRING_BILLING_FAILED,
    NOTIFICATION_AGENCY_EVENT__TYPE__AGENCY_PACKAGE_EXPIRE,
} from "../constants/coreConstant";

export const notificationEventType = (eventType) => {
    switch (eventType) {
        case NOTIFICATION_AGENCY_EVENT__TYPE__USER_REGISTRATION:
            return "User Registration";
        case NOTIFICATION_AGENCY_EVENT__TYPE__USER_BUY_PACKAGE:
            return "User Buy Package";
        case NOTIFICATION_AGENCY_EVENT__TYPE__USER_BALANCE_RECHARGE:
            return "User Balance Recharge";
        case NOTIFICATION_AGENCY_EVENT__TYPE__USER_RECURRING_BILLING_FAILED:
            return "User Recurring Billing Failed";
        case NOTIFICATION_AGENCY_EVENT__TYPE__AGENCY_PACKAGE_EXPIRE:
            return "Agency Package Expired";
    }
};
