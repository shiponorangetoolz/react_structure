const checkIsMonthSelect = (selectedMonthList, currentMonthValue = 0) => {
    return selectedMonthList.some((monthItem) => Number(monthItem.billing_cycle) === Number(currentMonthValue));
};

export default checkIsMonthSelect;
