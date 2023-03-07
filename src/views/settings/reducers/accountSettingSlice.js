import { createSlice } from "@reduxjs/toolkit";
import LocalStorageService from "../../../services/LocalStorage/LocalStorage.service";

const userRole = LocalStorageService.getUserRole();
const userHiddenModuleKeys = LocalStorageService.getUserHiddenModuleKeys();

const initialState = {
    accountSetting: null,
    roleName: userRole || null,
    hiddenKeys: userHiddenModuleKeys || [],
    loading: false,
    error: "",
    formSubmitLoader: false,
};

const accountSettingSlice = createSlice({
    name: "accountSetting",
    initialState,
    reducers: {
        getAccountSettingData: (state) => {
            state.loading = true;
        },
        getAccountSettingDataSuccess: (state, action) => {
            state.accountSetting = action.payload;
            state.loading = false;
            state.error = "";
        },
        getAccountSettingDataFailed: (state, action) => {
            state.accountSetting = null;
            state.loading = false;
            state.error = action.payload;
        },

        setAccountSettingDataWithRoleAndHiddenKeys: (state, action) => {
            state.accountSetting = action.payload.user;
            state.roleName = action.payload.roleName;
            state.hiddenKeys = action.payload.hiddenKeys;
        },

        updateAccountSettingInfo: (state) => {
            state.formSubmitLoader = true;
        },
        updateAccountSettingInfoSuccess: (state, action) => {
            state.formSubmitLoader = false;
            state.error = "";
        },
        updateAccountSettingInfoFailed: (state, action) => {
            state.formSubmitLoader = false;
            state.error = action.payload;
        },
    },
});

export const {
    getAccountSettingData,
    getAccountSettingDataSuccess,
    getAccountSettingDataFailed,
    setAccountSettingDataWithRoleAndHiddenKeys,
    updateAccountSettingInfo,
    updateAccountSettingInfoSuccess,
    updateAccountSettingInfoFailed,
} = accountSettingSlice.actions;

export default accountSettingSlice.reducer;
