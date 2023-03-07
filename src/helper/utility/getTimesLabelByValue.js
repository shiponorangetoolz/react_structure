import getTimes from "./getTimes";

const getTimesLabelByValue = (timeValue = "") => {
    const result = getTimes.find((time) => time.value === Number(timeValue));
    return result?.label;
};

export default getTimesLabelByValue;
