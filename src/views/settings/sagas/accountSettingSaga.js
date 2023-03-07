import { all, call, put, takeEvery } from "redux-saga/effects";
import AccountSettingService from "../../../services/AcccountSetting.service";
import {
    getAccountSettingData,
    getAccountSettingDataFailed,
    getAccountSettingDataSuccess,
    updateAccountSettingInfoFailed,
    updateAccountSettingInfoSuccess,
} from "../reducers/accountSettingSlice";
import { showErrorSnackbar, showSuccessSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";
import { delay } from "@redux-saga/core/effects";
import { RESPONSE_LOADING_TIME } from "../../../helper/constants/coreConstant";

function* accountSettingWatcher() {
    yield takeEvery("accountSetting/getAccountSettingData", getAccountSettingDataSaga);
    yield takeEvery("accountSetting/updateAccountSettingInfo", updateAccountSettingInfoSaga);
}

function* getAccountSettingDataSaga(action) {
    try {
        const response = yield call(AccountSettingService.getAccountSettingData, action.payload);

        if (response.success) {
            yield put(getAccountSettingDataSuccess(response.data));
        } else {
            yield put(getAccountSettingDataFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* updateAccountSettingInfoSaga(action) {
    try {
        const response = yield call(AccountSettingService.updateAccountSettingInfo, action.payload);

        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(updateAccountSettingInfoSuccess());
            yield put(showSuccessSnackbar(response.message));
            yield put(getAccountSettingData());
        } else {
            yield put(updateAccountSettingInfoFailed(response.message));
            if (typeof response.message === "string") {
                yield put(showErrorSnackbar(response.message));
            } else {
                let message = "";
                Object.entries(response.message).forEach(([key, value]) => {
                    message += value + "\n";
                });
                yield put(showErrorSnackbar(message));
            }
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

export default function* accountSettingSaga() {
    yield all([accountSettingWatcher()]);
}
