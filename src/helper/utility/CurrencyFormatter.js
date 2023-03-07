class CurrencyFormatter {
    dollar(amount, toFixedLength = 2) {
        const amountValue = Number(amount);
        return amountValue.toFixed(toFixedLength).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
}

export default new CurrencyFormatter();
