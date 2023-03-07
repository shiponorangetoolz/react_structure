import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../../services/LocalStorage/LocalStorage.service";

const userRole = LocalStorageService.getUserRole();
const userHiddenModuleKeys = LocalStorageService.getUserHiddenModuleKeys();

const initialState = {
    user: null,
    isLogin: false,
    roleName: userRole || null,
    hiddenKeys: userHiddenModuleKeys || [],
    pending: false,
    error: "",
    isTooManyAttempt: false,
    attemptTooManyInterval: 0,
    signUpState: {
        email: "",
        password: "",
        error: "",
        pending: false,
        isMailSend: false,
        isSignUpSuccess: false,
    },
    resetPasswordState: {
        email: "",
        pending: false,
        error: "",
        isMailSend: false,
        isCodeVerify: false,
        isResetSuccess: false,
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        attemptLogin: (state) => {
            state.pending = true;
        },
        attemptLoginSuccess: (state, action) => {
            state.isLogin = true;
            state.pending = false;
            state.user = action.payload.user;
            state.roleName = action.payload.roleName;
            state.hiddenKeys = action.payload.hiddenKeys;
            state.error = "";
        },
        attemptLoginFailed: (state, action) => {
            state.isLogin = false;
            state.pending = false;
            state.user = null;
            state.error = action.payload;
        },
        attemptClearLogin: (state) => {
            state.pending = false;
            state.isLogin = false;
            state.error = "";
        },

        // ## reset password actions
        attemptResetPassword: (state, action) => {
            state.resetPasswordState.email = action.payload.email;
            state.resetPasswordState.pending = true;
        },
        attemptResetPasswordSuccess: (state, action) => {
            state.resetPasswordState.pending = false;
            state.resetPasswordState.isMailSend = true;
            state.resetPasswordState.error = "";
        },
        attemptResetPasswordFailed: (state, action) => {
            state.resetPasswordState.pending = false;
            state.resetPasswordState.isMailSend = false;
            state.resetPasswordState.error = action.payload;
        },
        attemptResetPasswordErrorClear: (state, action) => {
            state.resetPasswordState.error = "";
        },

        attemptResetPasswordWithToken: (state, action) => {
            state.resetPasswordState.pending = true;
        },
        attemptResetPasswordWithTokenSuccess: (state, action) => {
            state.resetPasswordState.pending = false;
            state.resetPasswordState.isCodeVerify = true;
            state.resetPasswordState.error = "";
        },
        attemptResetPasswordWithTokenFailed: (state, action) => {
            state.resetPasswordState.pending = false;
            state.resetPasswordState.isCodeVerify = false;
            state.resetPasswordState.error = action.payload;
        },

        attemptSetNewPassword: (state, action) => {
            state.resetPasswordState.pending = true;
        },
        attemptSetNewPasswordSuccess: (state, action) => {
            state.resetPasswordState.pending = false;
            state.resetPasswordState.isResetSuccess = true;
            state.resetPasswordState.error = "";
        },
        attemptSetNewPasswordFailed: (state, action) => {
            state.resetPasswordState.pending = false;
            state.resetPasswordState.isResetSuccess = false;
            state.resetPasswordState.error = action.payload;
        },
        clearResetPasswordState: (state, action) => {
            state.resetPasswordState.email = "";
            state.resetPasswordState.pending = false;
            state.resetPasswordState.error = "";
            state.resetPasswordState.isMailSend = false;
            state.resetPasswordState.isCodeVerify = false;
            state.resetPasswordState.isResetSuccess = false;
        },

        attemptLogout: (state) => {
            state.isLogin = false;
            state.user = null;
            state.error = "";
        },

        // ## sign up actions
        attemptSignUp: (state, action) => {
            state.signUpState.email = action.payload.email;
            state.signUpState.password = action.payload.password;
            state.signUpState.pending = true;
            state.signUpState.isMailSend = false;
        },
        attemptSignUpSuccess: (state) => {
            state.signUpState.isMailSend = true;
            state.signUpState.pending = false;
            state.signUpState.error = "";
        },
        attemptSignUpFailed: (state, action) => {
            state.signUpState.email = "";
            state.signUpState.password = "";
            state.signUpState.pending = false;
            state.signUpState.isMailSend = false;
            state.signUpState.error = action.payload.message;
        },
        attemptSignUpWithToken: (state) => {
            state.signUpState.pending = true;
            state.signUpState.error = "";
        },
        attemptSignUpWithTokenSuccess: (state) => {
            state.signUpState.pending = false;
            state.signUpState.isSignUpSuccess = true;
        },
        attemptSignUpWithTokenFailed: (state, action) => {
            state.signUpState.pending = false;
            state.signUpState.isSignUpSuccess = false;
            state.signUpState.error = action.payload.message;
        },
        attemptSignUpStateClear: (state) => {
            state.signUpState = {
                email: "",
                password: "",
                error: "",
                pending: false,
                isMailSend: false,
                isSignUpSuccess: false,
            };
        },

        attemptRefreshToken: (state) => {},

        attemptTooMany: (state, action) => {
            state.isTooManyAttempt = true;
            state.attemptTooManyInterval = action.payload.attemptTooManyInterval;
            state.error = action.payload.message;
            state.pending = false;
        },
        clearAttemptTooMany: (state) => {
            state.isTooManyAttempt = false;
            state.attemptTooManyInterval = 0;
            state.error = "";
        },
    },
});

export const {
    attemptLogin,
    attemptLoginSuccess,
    attemptLoginFailed,
    attemptClearLogin,
    attemptLogout,
    attemptResetPassword,
    attemptResetPasswordSuccess,
    attemptResetPasswordFailed,
    attemptResetPasswordErrorClear,
    attemptResetPasswordWithToken,
    attemptResetPasswordWithTokenSuccess,
    attemptResetPasswordWithTokenFailed,
    attemptSetNewPassword,
    attemptSetNewPasswordSuccess,
    attemptSetNewPasswordFailed,
    clearResetPasswordState,
    attemptSignUp,
    attemptSignUpSuccess,
    attemptSignUpFailed,
    attemptSignUpWithToken,
    attemptSignUpWithTokenSuccess,
    attemptSignUpWithTokenFailed,
    attemptSignUpStateClear,

    attemptRefreshToken,

    attemptTooMany,
    clearAttemptTooMany,
} = userSlice.actions;

export default userSlice.reducer;
