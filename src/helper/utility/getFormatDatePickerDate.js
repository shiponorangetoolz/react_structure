import { differenceInDays, format } from "date-fns";
import getDurationType from "./getDurationType";

const getFormatDataPickerDate = (startDate, endDate) => {
    const fromDate = format(startDate, "MMM dd, yyyy");
    const toDate = format(endDate, "MMM dd, yyyy");

    return [fromDate, toDate];
};

export default getFormatDataPickerDate;
