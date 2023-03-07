import { all, call, put, takeEvery } from "redux-saga/effects";
import userService from "../../../services/User.service";
import { delay } from "@redux-saga/core/effects";

import {
    attemptLoginFailed,
    attemptLoginSuccess,
    attemptResetPasswordFailed,
    attemptResetPasswordSuccess,
    attemptResetPasswordWithTokenFailed,
    attemptResetPasswordWithTokenSuccess,
    attemptSetNewPasswordFailed,
    attemptSetNewPasswordSuccess,
    attemptSignUpFailed,
    attemptSignUpSuccess,
    attemptSignUpWithTokenFailed,
    attemptSignUpWithTokenSuccess,
    attemptTooMany,
} from "../reducers/userSlice";
import CookieService from "../../../services/cookie/cookie.service";
import { RESPONSE_LOADING_TIME } from "../../../helper/constants/coreConstant";
import LocalStorageService from "../../../services/LocalStorage/LocalStorage.service";
import { setAccountSettingDataWithRoleAndHiddenKeys } from "../../settings/reducers/accountSettingSlice";

function* userWatcher() {
    yield takeEvery("user/attemptLogin", attemptLoginSaga);

    yield takeEvery("user/attemptResetPassword", attemptResetPasswordSaga);
    yield takeEvery("user/attemptResetPasswordWithToken", attemptResetPasswordWithTokenSaga);
    yield takeEvery("user/attemptSetNewPassword", attemptSetNewPasswordSaga);

    yield takeEvery("user/attemptSignUp", attemptSignUpSaga);
    yield takeEvery("user/attemptSignUpWithToken", attemptSignUpWithTokenSaga);

    yield takeEvery("user/attemptRefreshToken", attemptRefreshTokenSaga);
}

function* attemptLoginSaga(action) {
    try {
        const response = yield call(userService.attemptLogin, action.payload);

        if (response.exception === "Exception") {
            const getIntervalTime = response.message.match(/[0-9]+/);
            yield put(attemptTooMany({ message: response.message, attemptTooManyInterval: getIntervalTime[0] }));
            return false;
        }

        if (response.success) {
            if (response.data) {
                CookieService.setCookie(process.env.REACT_APP_ACCESS_TOKEN, response.data.access_token, "");
                LocalStorageService.setUserRole(response.data.role_name);
                LocalStorageService.setUserHiddenModuleKeys(response.data.hidden_modules_key);
                yield put(
                    setAccountSettingDataWithRoleAndHiddenKeys({
                        user: response.data.user,
                        roleName: response.data.role_name,
                        hiddenKeys: response.data.hidden_modules_key,
                    })
                );
            }

            yield delay(RESPONSE_LOADING_TIME);
            yield put(
                attemptLoginSuccess({
                    user: response.data.user,
                    roleName: response.data.role_name,
                    hiddenKeys: response.data.hidden_modules_key,
                })
            );
        } else {
            yield put(attemptLoginFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
        yield put(attemptLoginFailed(""));
    }
}

function* attemptResetPasswordSaga(action) {
    try {
        const response = yield call(userService.attemptResetPassword, action.payload);

        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(attemptResetPasswordSuccess());
        } else {
            yield put(attemptResetPasswordFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* attemptResetPasswordWithTokenSaga(action) {
    try {
        const response = yield call(userService.attemptResetPasswordWithToken, action.payload);

        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(attemptResetPasswordWithTokenSuccess());
        } else {
            yield put(attemptResetPasswordWithTokenFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* attemptSetNewPasswordSaga(action) {
    try {
        const response = yield call(userService.attemptSetNewPassword, action.payload);

        yield delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(attemptSetNewPasswordSuccess());
        } else {
            yield put(attemptSetNewPasswordFailed(response.message));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* attemptSignUpSaga(action) {
    try {
        const response = yield call(userService.attemptSignUp, action.payload);

        delay(RESPONSE_LOADING_TIME);
        if (response.success) {
            yield put(attemptSignUpSuccess(response));
        } else {
            yield put(attemptSignUpFailed(response));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* attemptSignUpWithTokenSaga(action) {
    try {
        const response = yield call(userService.attemptSignUpWithToken, action.payload);

        if (response.success) {
            yield put(attemptSignUpWithTokenSuccess());

            delay(RESPONSE_LOADING_TIME);
            const userData = response.data.original;
            if (userData) {
                CookieService.setCookie(process.env.REACT_APP_ACCESS_TOKEN, userData.data.access_token, "");
                LocalStorageService.setUserRole(response.data.role_name);
                LocalStorageService.setUserHiddenModuleKeys(response.data.hidden_modules_key);

                attemptLoginSuccess({
                    user: response.data.user,
                    roleName: response.data.role_name,
                    hiddenKeys: response.data.hidden_modules_key,
                });
                yield put(
                    setAccountSettingDataWithRoleAndHiddenKeys({
                        user: response.data.user,
                        roleName: response.data.role_name,
                        hiddenKeys: response.data.hidden_modules_key,
                    })
                );
            }
        } else {
            yield put(attemptSignUpWithTokenFailed(response));
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

function* attemptRefreshTokenSaga(action) {
    try {
        const response = yield call(userService.attemptRefreshToken, action.payload);
        const token = response.data;

        if (response.success && token) {
            CookieService.setCookie(process.env.REACT_APP_ACCESS_TOKEN, token.access_token, "");
        } else {
            CookieService.setCookie(process.env.REACT_APP_ACCESS_TOKEN, "", "");
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

export default function* userSaga() {
    yield all([userWatcher()]);
}
