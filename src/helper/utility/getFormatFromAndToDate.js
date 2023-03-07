import { differenceInDays, format } from "date-fns";
import getDurationType from "./getDurationType";

const getFormatFromAndToDate = (startDate, endDate) => {
    const fromDate = format(startDate, "yyyy-MM-dd");
    const toDate = format(endDate, "yyyy-MM-dd");
    const difference = differenceInDays(endDate, startDate);
    const durationType = getDurationType(difference);

    return { fromDate, toDate, difference, durationType };
};

export default getFormatFromAndToDate;
