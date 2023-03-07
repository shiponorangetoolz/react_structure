import {
    SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_CREATE,
    SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_DEACTIVATE,
    SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_FORGOT_PASSWORD,
    SYSTEM_EMAIL__EMAIL__TYPE__PACKAGE_BUY,
    SYSTEM_EMAIL__EMAIL__TYPE__PACKAGE_CHANGE,
    SYSTEM_EMAIL__EMAIL__TYPE__TOP_UP_RECHARGE,
    SYSTEM_EMAIL__USER__TYPE__ADMIN,
    SYSTEM_EMAIL__USER__TYPE__AGENCY,
} from "../constants/coreConstant";

export const systemEmailEmailType = (emailType) => {
    switch (emailType) {
        case SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_CREATE:
            return "Account Create";
        case SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_DEACTIVATE:
            return "Account Deactivate";
        case SYSTEM_EMAIL__EMAIL__TYPE__ACCOUNT_FORGOT_PASSWORD:
            return "Forgot Password";
        case SYSTEM_EMAIL__EMAIL__TYPE__PACKAGE_BUY:
            return "Package Buy";
        case SYSTEM_EMAIL__EMAIL__TYPE__PACKAGE_CHANGE:
            return "Package Change";
        case SYSTEM_EMAIL__EMAIL__TYPE__TOP_UP_RECHARGE:
            return "Top Up/Recharge";
    }
};

export const systemEmailUserType = (userType) => {
    switch (userType) {
        case SYSTEM_EMAIL__USER__TYPE__ADMIN:
            return "Admin";
        case SYSTEM_EMAIL__USER__TYPE__AGENCY:
            return "Agency";
    }
};
