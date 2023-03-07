import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../services/cookie/cookie.service";

const baseQueryMiddleware = fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = CookieService.getCookie(process.env.REACT_APP_ACCESS_TOKEN);
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set("authorization", `bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "agencyAppApi",
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQueryMiddleware(args, api, extraOptions);

        if (result?.error) {
            if (result?.error?.status === 401) {
                window.handleLogOut();
            }
        }

        return result;
    },
    tagTypes: ["Help/Get"],
    endpoints: () => ({}),
});

export default apiSlice;
