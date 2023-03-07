import { createSlice } from "@reduxjs/toolkit";

const messageValidation = (message) => {
    if (typeof message === "string") {
        return message;
    } else {
        return "An Error occur. Try again!";
    }
};

const initialState = {
    isSuccessSnackbarOpen: false,
    successMessage: "",
    isErrorSnackbarOpen: false,
    errorMessage: "",
    isInfoSnackbarOpen: false,
    infoMessage: "",
    isWarningSnackbarOpen: false,
    warningMessage: "",
};

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        showSuccessSnackbar: (state, action) => {
            state.isSuccessSnackbarOpen = true;
            state.successMessage = messageValidation(action.payload);
            state.isErrorSnackbarOpen = false;
            state.isInfoSnackbarOpen = false;
            state.isWarningSnackbarOpen = false;
        },
        showErrorSnackbar: (state, action) => {
            state.isErrorSnackbarOpen = true;
            state.errorMessage = messageValidation(action.payload);
            state.isSuccessSnackbarOpen = false;
            state.isInfoSnackbarOpen = false;
            state.isWarningSnackbarOpen = false;
        },
        showInfoSnackbar: (state, action) => {
            state.isInfoSnackbarOpen = true;
            state.infoMessage = messageValidation(action.payload);
            state.isSuccessSnackbarOpen = false;
            state.isErrorSnackbarOpen = false;
            state.isWarningSnackbarOpen = false;
        },
        showWarningSnackbar: (state, action) => {
            state.isWarningSnackbarOpen = true;
            state.warningMessage = messageValidation(action.payload);
            state.isSuccessSnackbarOpen = false;
            state.isErrorSnackbarOpen = false;
            state.isInfoSnackbarOpen = false;
        },
        clearSnackbar: (state) => {
            state.isSuccessSnackbarOpen = false;
            state.isErrorSnackbarOpen = false;
            state.isInfoSnackbarOpen = false;
            state.isWarningSnackbarOpen = false;
        },
    },
});

export const { showSuccessSnackbar, showErrorSnackbar, showInfoSnackbar, showWarningSnackbar, clearSnackbar } =
    snackbarSlice.actions;

export default snackbarSlice.reducer;
