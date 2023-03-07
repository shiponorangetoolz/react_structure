const getSum = (numbers = []) => {
    let sumValue = 0;
    if (numbers && numbers.length > 0) {
        sumValue = numbers.reduce((sum, number) => sum + Number(number), 0);
    }

    return sumValue;
};

export default getSum;
