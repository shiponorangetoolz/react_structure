import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import apiSlice from "./apiSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware, apiSlice.middleware),
});

sagaMiddleware.run(rootSaga);
