import { requests } from "./http.service";

class UserService {
    attemptLogin(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/login", body);
    }

    attemptResetPassword(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/reset/password/token/send",
            body
        );
    }

    attemptResetPasswordResendToken(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/reset/password/token/resend",
            body
        );
    }

    attemptResetPasswordWithToken(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/forget/password/token/verify",
            body
        );
    }

    attemptSetNewPassword(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/reset/new/password", body);
    }

    attemptLogout() {
        return requests.get(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/logout");
    }

    attemptSignUp(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/registration/agency", body);
    }

    attemptSignUpWithToken(body) {
        return requests.post(
            process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/verify/signup/token/and/login",
            body
        );
    }

    attemptSignUpResendToken(body) {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/resend/signup/token", body);
    }

    attemptRefreshToken() {
        return requests.post(process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/refresh/token");
    }
}

export default new UserService();
