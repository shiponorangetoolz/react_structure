function getPercentage(partialValue, totalValue) {
    if (!partialValue) {
        return 0;
    } else {
        const percentage = (100 * partialValue) / totalValue;
        return Number(percentage).toFixed(1);
    }
}

export default getPercentage;
