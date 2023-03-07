import { all, call } from "redux-saga/effects";
import { put, takeLatest } from "@redux-saga/core/effects";
import ThemeService from "../../../services/Theme.service";
import {
    getThemeColorPallet,
    getThemeColorPalletFailed,
    getThemeColorPalletSuccess,
    updateThemeColorPalletFailed,
    updateThemeColorPalletSuccess,
} from "../reducers/themeSlice";
import { showSuccessSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";
import { saveThemingColorPalette } from "../helpers/themingUtility";

function* dashboardWatcher() {
    yield takeLatest("theme/getThemeColorPallet", getThemeColorPalletSaga);
    yield takeLatest("theme/updateThemeColorPallet", updateThemeColorPalletSaga);
}

function* getThemeColorPalletSaga(action) {
    try {
        const response = yield call(ThemeService.getThemeColorPallet, action.payload);

        if (response.success) {
            yield put(getThemeColorPalletSuccess(response.data));

            // handle Save theme palette color
            saveThemingColorPalette(response.data);
        } else {
            yield put(getThemeColorPalletFailed(response.error));
        }
    } catch (err) {
        console.log("Error: ", err.message);
    }
}

function* updateThemeColorPalletSaga(action) {
    try {
        const response = yield call(ThemeService.updateThemeColorPallet, action.payload);

        if (response.success) {
            yield put(updateThemeColorPalletSuccess());
            yield put(getThemeColorPallet());
            yield put(showSuccessSnackbar("Successfully applied the Theme Color Palette"));
        } else {
            yield put(updateThemeColorPalletFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

export default function* themeSaga() {
    yield all([dashboardWatcher()]);
}
