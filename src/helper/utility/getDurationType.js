const getDurationType = (days = 1) => {
    let durationType = "month";
    if (days <= 7) {
        durationType = "week";
    } else if (days <= 365) {
        durationType = "month";
    } else if (days > 365) {
        durationType = "year";
    }

    return durationType;
};

export default getDurationType;
