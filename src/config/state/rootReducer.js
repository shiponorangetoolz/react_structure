import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../../views/authUser/reducers/userSlice";
import clientSlice from "../../views/clients/reducers/clientSlice";
import accountSettingSlice from "../../views/settings/reducers/accountSettingSlice";
import agencySettingSlice from "../../views/settings/reducers/agencySettingSlice";
import snackbarSlice from "../../core/global/Snackbars/reducers/snackbarSlice";
import themeSlice from "../../views/theme/reducers/themeSlice";

import apiSlice from "./apiSlice";

const combinedReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    snackbar: snackbarSlice,
    theme: themeSlice,
    user: userSlice,
    client: clientSlice,
    accountSetting: accountSettingSlice,
    agencySetting: agencySettingSlice,
});

const rootReducer = (state, action) => {
    if (action.type === "user/attemptLogout") {
        state = undefined;
    }
    return combinedReducer(state, action);
};

export default rootReducer;
