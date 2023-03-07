export const currencyFormat = (currency = 0) => {
    if (currency) {
        return Number(currency).toFixed(2);
    } else {
        return 0.0;
    }
};
