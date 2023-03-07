import { all, call, put, takeEvery } from "redux-saga/effects";
import clientService from "../../../services/Client.service";
import {
    createClientFailed,
    createClientSuccess,
    deleteClientSuccess,
    getClientsData,
    getClientsDataFailed,
    getClientsDataSuccess,
    packageAllocationFailed,
    packageAllocationSuccess,
    updateClientFailed,
    updateClientStatusSuccess,
    updateClientSuccess,
} from "../reducers/clientSlice";
import { showErrorSnackbar, showSuccessSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";
import { debounce, delay } from "@redux-saga/core/effects";
import {
    AGENCY_PACKAGE_LIMIT_KEY__CLIENT,
    DEBOUNCE_DELAY_TIME,
    RESPONSE_LOADING_TIME,
} from "../../../helper/constants/coreConstant";
import PackageService from "../../../services/Package.service";
import { SERVICE_BAD_REQUEST_MESSAGE } from "../../../helper/constants/messageConstant";

function* clientWatcher() {
    yield debounce(DEBOUNCE_DELAY_TIME, "client/getClientsData", getClientsDataSaga);
    yield takeEvery("client/createClient", createClientSaga);
    yield takeEvery("client/updateClient", updateClientSaga);
    yield takeEvery("client/packageAllocation", packageAllocationSaga);
    yield takeEvery("client/updateClientStatus", updateClientStatusSaga);
    yield takeEvery("client/deleteClient", deleteClientSaga);
}

function* getClientsDataSaga(action) {
    try {
        const response = yield call(clientService.getClients, action.payload);

        if (response.success) {
            yield put(getClientsDataSuccess(response.data));
        } else {
            yield put(getClientsDataFailed(response.message));
        }
    } catch (err) {
        yield put(getClientsDataFailed(SERVICE_BAD_REQUEST_MESSAGE));
        yield put(showErrorSnackbar(SERVICE_BAD_REQUEST_MESSAGE));
        console.log("Error: ", err);
    }
}

function* createClientSaga(action) {
    try {
        const response = yield call(clientService.createClient, action.payload);
        yield delay(RESPONSE_LOADING_TIME);

        if (response.success) {
            yield put(createClientSuccess(response.data));
            yield put(showSuccessSnackbar(response.message));
            yield put(getClientsData());
        } else {
            yield put(createClientFailed(response.message));
            yield put(showErrorSnackbar(response.message));
        }
    } catch (err) {
        yield put(showErrorSnackbar(SERVICE_BAD_REQUEST_MESSAGE));
        console.log("Error: ", err);
    }
}

function* updateClientSaga(action) {
    try {
        const response = yield call(clientService.updateClient, action.payload);
        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(updateClientSuccess(response.data));
            yield put(showSuccessSnackbar(response.message));
            yield put(getClientsData());
        } else {
            yield put(updateClientFailed(response.message));
            yield put(showErrorSnackbar(response.message));
        }
    } catch (err) {
        yield put(updateClientFailed(SERVICE_BAD_REQUEST_MESSAGE));
        yield put(showErrorSnackbar(SERVICE_BAD_REQUEST_MESSAGE));
        console.log("Error: ", err);
    }
}

function* packageAllocationSaga(action) {
    try {
        const response = yield call(PackageService.allocatedPackage, action.payload);
        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(packageAllocationSuccess(response.data));
            yield put(showSuccessSnackbar(response.message));
            yield put(getClientsData());
        } else {
            yield put(packageAllocationFailed(response.message));
            yield put(showErrorSnackbar(response.message));
        }
    } catch (err) {
        yield put(packageAllocationFailed(SERVICE_BAD_REQUEST_MESSAGE));
        yield put(showErrorSnackbar(SERVICE_BAD_REQUEST_MESSAGE));
        console.log("Error: ", err);
    }
}

function* updateClientStatusSaga(action) {
    try {
        const response = yield call(clientService.clientStatusChange, action.payload);

        if (response.success) {
            yield put(updateClientStatusSuccess(action.payload));
            yield put(showSuccessSnackbar(response.message));
        } else {
            yield put(showErrorSnackbar(response.message));
        }
    } catch (err) {}
}

function* deleteClientSaga(action) {
    try {
        const response = yield call(clientService.deleteClient, action.payload);

        if (response.success) {
            yield put(deleteClientSuccess(action.payload.uid));
            yield put(showSuccessSnackbar(response.message));
        } else {
            yield put(showErrorSnackbar(response.message));
        }
    } catch (err) {}
}

export default function* clientSaga() {
    yield all([clientWatcher()]);
}
