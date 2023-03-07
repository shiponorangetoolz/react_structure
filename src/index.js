import React from "react";
import ReactDOM from "react-dom";
import "./core/css/index.css";
import { Provider } from "react-redux";
import store from "./config/state/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
