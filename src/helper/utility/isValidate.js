export const isEmailValidate = (email) => {
    return email.match(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
};

export const isEmptyString = (value = "") => {
    const trimValue = value.trim();
    return !!trimValue;
};
