import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalClientState: null,
    graphState: null,
    reviewLocationState: null,
    loading: false,
    error: "",
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        getClientRelatedStateCountData: (state, action) => {
            state.loading = true;
        },
        getClientRelatedStateCountDataSuccess: (state, action) => {
            state.totalClientState = action.payload;
            state.loading = false;
        },
        getClientRelatedStateCountDataFailed: (state, action) => {
            state.totalClientState = null;
            state.loading = false;
            state.error = action.payload;
        },

        getClientRelatedStateCountGraphData: (state, action) => {
            state.loading = true;
        },
        getClientRelatedStateCountGraphDataSuccess: (state, action) => {
            state.graphState = action.payload;
            state.loading = false;
        },
        getClientRelatedStateCountGraphDataFailed: (state, action) => {
            state.graphState = null;
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getClientRelatedStateCountData,
    getClientRelatedStateCountDataSuccess,
    getClientRelatedStateCountDataFailed,

    getClientRelatedStateCountGraphData,
    getClientRelatedStateCountGraphDataSuccess,
    getClientRelatedStateCountGraphDataFailed,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
