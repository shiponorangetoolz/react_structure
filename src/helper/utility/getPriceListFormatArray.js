import {
    CREDIT_SETTING__CONTENT_TYPE__FOR_AGENCY_EMAIL_COST_RATE,
    CREDIT_SETTING__CONTENT_TYPE__FOR_AGENCY_SMS_COST_RATE,
    CREDIT_SETTING__CONTENT_TYPE__FOR_USER_EMAIL_COST_RATE,
    CREDIT_SETTING__CONTENT_TYPE__FOR_USER_SMS_COST_RATE,
} from "../constants/coreConstant";

const getPriceListFormatArray = (priceList) => {
    const formatPriceList = [];

    priceList.map((priceContent) => {
        if (priceContent.content_type === CREDIT_SETTING__CONTENT_TYPE__FOR_AGENCY_SMS_COST_RATE) {
            formatPriceList.push({ name: "Agency's SMS", ...priceContent });
        } else if (priceContent.content_type === CREDIT_SETTING__CONTENT_TYPE__FOR_AGENCY_EMAIL_COST_RATE) {
            formatPriceList.push({
                name: "Agency's Email",
                ...priceContent,
            });
        } else if (priceContent.content_type === CREDIT_SETTING__CONTENT_TYPE__FOR_USER_SMS_COST_RATE) {
            formatPriceList.push({
                name: "User's SMS",
                ...priceContent,
            });
        } else if (priceContent.content_type === CREDIT_SETTING__CONTENT_TYPE__FOR_USER_EMAIL_COST_RATE) {
            formatPriceList.push({
                name: "User's Email",
                ...priceContent,
            });
        }

        return priceContent;
    });

    return formatPriceList;
};

export default getPriceListFormatArray;
