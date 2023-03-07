import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clientList: [],
    page: 1,
    perPage: 10,
    total: 10,
    loading: false,
    formSubmitLoader: false,
    isFormSubmitSuccess: false,
    isEditFormSubmitSuccess: false,
    error: "",
    filters: {
        name: "",
        package_title: "",
        status: null,
    },
};

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        getClientsData: (state, action) => {
            state.loading = true;
            if (action.payload) {
                state.page = action.payload.page || 1;
                state.perPage = action.payload.per_page || 10;
            }
        },
        getClientsDataSuccess: (state, action) => {
            state.clientList = action.payload.data;
            state.total = action.payload.total;
            state.loading = false;
            state.error = "";
        },
        getClientsDataFailed: (state, action) => {
            state.clientList = [];
            state.loading = false;
            state.error = action.payload;
        },

        createClient: (state) => {
            state.formSubmitLoader = true;
        },
        createClientSuccess: (state, action) => {
            state.formSubmitLoader = false;
            state.isFormSubmitSuccess = true;
            state.error = "";
        },
        createClientFailed: (state, action) => {
            state.formSubmitLoader = false;
            state.isFormSubmitSuccess = false;
            state.error = action.payload;
        },
        clearFormSubmitSuccess: (state) => {
            state.isFormSubmitSuccess = false;
        },
        updateClient: (state) => {
            state.formSubmitLoader = true;
        },
        updateClientSuccess: (state, action) => {
            state.formSubmitLoader = false;
            state.isEditFormSubmitSuccess = true;
            state.error = "";
        },
        updateClientFailed: (state, action) => {
            state.formSubmitLoader = false;
            state.isEditFormSubmitSuccess = false;
            state.error = action.payload;
        },
        clearUpdateFormSubmitSuccess: (state) => {
            state.isEditFormSubmitSuccess = false;
        },
        packageAllocation: (state) => {
            state.formSubmitLoader = true;
        },
        packageAllocationSuccess: (state, action) => {
            state.formSubmitLoader = false;
            state.isEditFormSubmitSuccess = true;
            state.error = "";
        },
        packageAllocationFailed: (state, action) => {
            state.formSubmitLoader = false;
            state.isEditFormSubmitSuccess = false;
            state.error = action.payload;
        },
        updateClientStatus: (state) => {},
        updateClientStatusSuccess: (state, action) => {
            state.clientList = state.clientList.map((client) => {
                if (client.uid === action.payload.uid) {
                    client.status = action.payload.status;
                }
                return { ...client };
            });
            state.error = "";
        },
        deleteClient: (state) => {},
        deleteClientSuccess: (state, action) => {
            state.clientList = state.clientList.filter((client) => client.uid !== action.payload);
            state.error = "";
        },

        filterBySearch: (state, action) => {
            state.filters.name = action.payload;
        },
        filterByPackageName: (state, action) => {
            state.filters.package_title = action.payload;
        },
        filterByStatus: (state, action) => {
            state.filters.status = action.payload;
        },
        resetFilter: (state) => {
            state.filters.name = "";
            state.filters.package_title = "";
            state.filters.status = null;
        },
    },
});

export const {
    getClientsData,
    getClientsDataSuccess,
    getClientsDataFailed,
    createClient,
    createClientSuccess,
    createClientFailed,
    clearFormSubmitSuccess,
    updateClient,
    updateClientSuccess,
    updateClientFailed,
    clearUpdateFormSubmitSuccess,
    packageAllocation,
    packageAllocationSuccess,
    packageAllocationFailed,
    updateClientStatus,
    updateClientStatusSuccess,
    deleteClient,
    deleteClientSuccess,

    filterBySearch,
    filterByPackageName,
    filterByStatus,
    resetFilter,
} = clientSlice.actions;

export default clientSlice.reducer;
