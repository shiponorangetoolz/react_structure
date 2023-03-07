export const packageRegisterPattern = {
    title: {
        required: "Package title is required!",
        minLength: {
            value: 5,
            message: "Package title must have min 5 letters!",
        },
        maxLength: {
            value: 50,
            message: "Package title length must be less than 50",
        },
        setValueAs: (v) => (v ? v.trim() : ""),
    },
    package_price: {
        required: "package price is required!",
        valueAsNumber: true,
        min: {
            value: 1,
            message: "package price can't be 0 or negative",
        },
    },
};
