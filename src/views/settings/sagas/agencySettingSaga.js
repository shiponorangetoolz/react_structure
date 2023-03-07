import { all, call, put, takeEvery } from "redux-saga/effects";
import AgencySettingService from "../../../services/AgencySetting.service";
import {
    getAgencySettingData,
    getAgencySettingDataByDomainNameFailed,
    getAgencySettingDataByDomainNameSuccess,
    getAgencySettingDataFailed,
    getAgencySettingDataSuccess,
    updateAgencySettingInfoFailed,
    updateAgencySettingInfoSuccess,
} from "../reducers/agencySettingSlice";
import { showErrorSnackbar, showSuccessSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";
import { delay } from "@redux-saga/core/effects";
import { RESPONSE_LOADING_TIME } from "../../../helper/constants/coreConstant";

function* agencySettingWatcher() {
    yield takeEvery("agencySetting/getAgencySettingData", getAgencySettingDataSaga);
    yield takeEvery("agencySetting/updateAgencySettingInfo", updateAgencySettingInfoSaga);
    yield takeEvery("agencySetting/getAgencySettingDataByDomainName", getAgencySettingDataByDomainNameSaga);
}

function* getAgencySettingDataSaga(action) {
    try {
        const response = yield call(AgencySettingService.getAgencySettingData, action.payload);

        if (response.success) {
            yield put(getAgencySettingDataSuccess(response.data));
        } else {
            yield put(getAgencySettingDataFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* updateAgencySettingInfoSaga(action) {
    try {
        const response = yield call(AgencySettingService.updateAgencySettingInfo, action.payload);

        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(updateAgencySettingInfoSuccess());
            yield put(showSuccessSnackbar(response.message));
            yield put(getAgencySettingData());
        } else {
            yield put(updateAgencySettingInfoFailed(response.message));
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

function* getAgencySettingDataByDomainNameSaga(action) {
    try {
        const response = yield call(AgencySettingService.getAgencyInfoWithDomainName, action.payload);

        if (response.success) {
            yield put(getAgencySettingDataByDomainNameSuccess(response.data));
        } else {
            yield put(getAgencySettingDataByDomainNameFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

export default function* agencySettingSaga() {
    yield all([agencySettingWatcher()]);
}
