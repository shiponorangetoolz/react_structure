import { all, call } from "redux-saga/effects";
import { put, takeLatest } from "@redux-saga/core/effects";
import DashboardService from "../../../services/Dashboard.service";
import {
    getClientRelatedStateCountDataFailed,
    getClientRelatedStateCountDataSuccess,
    getClientRelatedStateCountGraphDataFailed,
    getClientRelatedStateCountGraphDataSuccess,
} from "../reducers/dashboardSlice";

function* dashboardWatcher() {
    yield takeLatest("dashboard/getClientRelatedStateCountData", getClientRelatedStateCountDataSaga);
    yield takeLatest("dashboard/getClientRelatedStateCountGraphData", getClientRelatedStateCountGraphDataSaga);
}

function* getClientRelatedStateCountDataSaga(action) {
    try {
        const response = yield call(DashboardService.getClientRelatedStateCountData, action.payload);

        if (response.success) {
            yield put(getClientRelatedStateCountDataSuccess(response.data));
        } else {
            yield put(getClientRelatedStateCountDataFailed(response.error));
        }
    } catch (err) {
        console.log("Error: ", err.message);
        yield put(getClientRelatedStateCountDataFailed(err.message));
    }
}

function* getClientRelatedStateCountGraphDataSaga(action) {
    try {
        const response = yield call(DashboardService.getClientRelatedStateCountGraphData, action.payload);

        if (response.success) {
            yield put(getClientRelatedStateCountGraphDataSuccess(response.data));
        } else {
            yield put(getClientRelatedStateCountGraphDataFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
        yield put(getClientRelatedStateCountGraphDataFailed(err.message));
    }
}

export default function* dashboardSaga() {
    yield all([dashboardWatcher()]);
}
