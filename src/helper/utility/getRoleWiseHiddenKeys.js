import { AGENCY_ROLE_ADMIN, AGENCY_ROLE_EDITOR } from "../constants/coreConstant";
import * as HIDDEN_KEYS from "../constants/routeKeysConstant";

const getRoleWiseHiddenKeys = (roleName, parentUid) => {
    // console.log("getRoleWiseHiddenKeys", roleName, parentUid);

    if (parentUid === null && roleName === AGENCY_ROLE_ADMIN) {
        return [];
    } else if (roleName === AGENCY_ROLE_EDITOR) {
        return [
            HIDDEN_KEYS.APP_INTEGRATION_ROUTE_KEY,
            HIDDEN_KEYS.APP_PAYMENT_ROUTE_KEY,
            HIDDEN_KEYS.SYSTEM_EMAIL_SETTING,
            HIDDEN_KEYS.EMAIL_PROVIDER_SETTING_KEY,
            HIDDEN_KEYS.SMS_PROVIDER_SETTING_KEY,
            HIDDEN_KEYS.AGENCY_STAFF_SETTING_KEY,
            HIDDEN_KEYS.AGENCY_PRICE_SETTING_KEY,
        ];
    } else if (parentUid && parentUid.length > 6) {
        return [HIDDEN_KEYS.APP_INTEGRATION_ROUTE_KEY, HIDDEN_KEYS.APP_PAYMENT_ROUTE_KEY];
    }
};

export default getRoleWiseHiddenKeys;
