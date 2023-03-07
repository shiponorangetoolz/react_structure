import { all } from "redux-saga/effects";
import userSaga from "../../views/authUser/sagas/userSaga";
import clientSaga from "../../views/clients/sagas/clientSaga";
import accountSettingSaga from "../../views/settings/sagas/accountSettingSaga";
import themeSaga from "../../views/theme/sagas/themeSaga";

export default function* rootSaga() {
    yield all([userSaga(), themeSaga(), clientSaga(), accountSettingSaga()]);
}
