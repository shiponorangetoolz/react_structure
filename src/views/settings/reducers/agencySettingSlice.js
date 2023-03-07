import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    agencySettingData: null,
    loading: false,
    error: "",
    formSubmitLoader: false,
};

const agencySettingSlice = createSlice({
    name: "agencySetting",
    initialState,
    reducers: {
        getAgencySettingData: (state) => {
            state.loading = true;
        },
        getAgencySettingDataSuccess: (state, action) => {
            state.agencySettingData = action.payload;
            state.loading = false;
            state.error = "";
        },
        getAgencySettingDataFailed: (state, action) => {
            state.agencySettingData = null;
            state.loading = false;
            state.error = action.payload;
        },

        updateAgencySettingInfo: (state) => {
            state.formSubmitLoader = true;
        },
        updateAgencySettingInfoSuccess: (state, action) => {
            state.formSubmitLoader = false;
            state.error = "";
        },
        updateAgencySettingInfoFailed: (state, action) => {
            state.formSubmitLoader = false;
            state.error = action.payload;
        },

        getAgencySettingDataByDomainName: (state) => {
            state.loading = true;
        },
        getAgencySettingDataByDomainNameSuccess: (state, action) => {
            state.agencySettingData = action.payload;
            state.loading = false;
            state.error = "";
        },
        getAgencySettingDataByDomainNameFailed: (state, action) => {
            state.agencySettingData = null;
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getAgencySettingData,
    getAgencySettingDataSuccess,
    getAgencySettingDataFailed,
    updateAgencySettingInfo,
    updateAgencySettingInfoSuccess,
    updateAgencySettingInfoFailed,
    getAgencySettingDataByDomainName,
    getAgencySettingDataByDomainNameSuccess,
    getAgencySettingDataByDomainNameFailed,
} = agencySettingSlice.actions;

export default agencySettingSlice.reducer;
