import apiSlice from "../../../config/state/apiSlice";

export const newClientApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getNewClientLastWeekData: build.query({
            query: (params) => ({
                url:
                    process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER +
                    "api/v1/agency/dashboard/get/client/related/state/count/graph/data/for/week",
                method: "GET",
                params: params,
            }),
        }),
    }),
});

export const { useGetNewClientLastWeekDataQuery } = newClientApiSlice;
