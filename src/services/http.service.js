import axios from "axios";
import CookieService from "./cookie/cookie.service";

const responseBody = (response) => {
    const responseData = response.data;
    if (
        Number(responseData.status_code) === 401 ||
        Number(responseData.status) === 401 ||
        responseData.message === "Token Invalid"
    ) {
        if (window.handleLogOut) {
            window.handleLogOut();
        }
    }
    return responseData;
};

const errorResponseBody = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const backendError = error.response.data;
        if (
            Number(backendError.status_code) === 401 ||
            Number(backendError.status) === 401 ||
            backendError.message === "Token Invalid"
        ) {
            if (window.handleLogOut) {
                window.handleLogOut();
            }
        }
        return backendError;
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error: axios ", error.message);
    }
};

export const requests = {
    get: (url = "", params = {}) =>
        axios
            .get(url, {
                params: params,
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),

    post: (url = "", body = {}) =>
        axios
            .post(url, body, {
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),

    put: (url = "", body = {}) =>
        axios
            .put(url, body, {
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),

    delete: (url = "", params = {}) =>
        axios
            .delete(url, {
                params: params,
                headers: {
                    Authorization: `bearer ${CookieService.getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`,
                },
            })
            .then(responseBody)
            .catch(errorResponseBody),
};
