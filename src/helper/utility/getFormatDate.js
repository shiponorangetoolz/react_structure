import { format, parse, parseISO } from "date-fns";

export function getFormatDateWithTime(isoDate) {
    //18th March 2021, 4:47 AM
    if (isoDate && isoDate.length > 0) {
        const date = new Date(parseISO(isoDate));
        return format(date, "do MMM yyyy, p");
    }

    return "-";
}

export function getFormatDate(isoDate) {
    if (isoDate && isoDate.length > 0) {
        const date = new Date(parseISO(isoDate));
        return format(date, "do MMMM yyyy");
    }

    return "-";
}

export function getCurrentMonthYear() {
    return format(new Date(), "MMMM yyyy");
}
