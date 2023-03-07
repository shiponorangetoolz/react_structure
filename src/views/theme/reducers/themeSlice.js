import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorPalette: null,
    loading: false,
    isUpdating: false,
    isUpdated: false,
    error: "",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        getThemeColorPallet: (state, action) => {
            state.loading = true;
        },
        getThemeColorPalletSuccess: (state, action) => {
            state.colorPalette = action.payload;
            state.loading = false;
        },
        getThemeColorPalletFailed: (state, action) => {
            state.colorPalette = null;
            state.loading = false;
            state.error = action.payload;
        },

        updateThemeColorPallet: (state, action) => {
            state.isUpdating = true;
        },
        updateThemeColorPalletSuccess: (state, action) => {
            state.isUpdating = false;
            state.isUpdated = true;
            state.error = "";
        },
        updateThemeColorPalletFailed: (state, action) => {
            state.isUpdating = false;
            state.isUpdated = false;
            state.error = action.payload;
        },
        clearUpdateThemeColorPallet: (state) => {
            state.isUpdated = false;
        },
    },
});

export const {
    getThemeColorPallet,
    getThemeColorPalletSuccess,
    getThemeColorPalletFailed,

    updateThemeColorPallet,
    updateThemeColorPalletSuccess,
    updateThemeColorPalletFailed,
    clearUpdateThemeColorPallet,
} = themeSlice.actions;

export default themeSlice.reducer;
