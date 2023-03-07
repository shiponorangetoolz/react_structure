class InputValidation {
    phone(number = "") {
        const pNum = number ? number.trim() : "";
        if (!pNum) {
            return { isValid: false, message: "Phone number is required!" };
        } else {
            if (pNum.length < 10 || pNum.length > 16) {
                return { isValid: false, message: "Phone number is not valid!" };
            } else {
                return { isValid: true, message: "" };
            }
        }
    }
}

export default new InputValidation();
