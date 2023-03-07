import {
    AGENCY_INVOICE__FOR_PACKAGE_BUY,
    AGENCY_INVOICE__FOR_PACKAGE_FREE,
    AGENCY_INVOICE__FOR_PACKAGE_RECURRING,
    AGENCY_INVOICE__FOR_RECHARGE_TOP_UP_AMOUNT,
} from "../constants/coreConstant";

export const invoiceForConstant = (type) => {
    switch (type) {
        case AGENCY_INVOICE__FOR_PACKAGE_BUY:
            return "Buy Package";
        case AGENCY_INVOICE__FOR_PACKAGE_FREE:
            return "Free Package";
        case AGENCY_INVOICE__FOR_PACKAGE_RECURRING:
            return "Recurring Package";
        case AGENCY_INVOICE__FOR_RECHARGE_TOP_UP_AMOUNT:
            return "Recharge Top-up Amount";
        default:
            return "N/A";
    }
};
