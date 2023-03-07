const getComparePercentage = (compareValue = 0, allCompareValues = []) => {
    const total = allCompareValues.reduce((sum, singleValue) => sum + Number(singleValue), 0);
    const compareNum = Number(compareValue);

    if (total === 0) {
        return 0;
    }

    return Math.round((compareNum / total) * 100).toFixed(0);
};

export default getComparePercentage;
