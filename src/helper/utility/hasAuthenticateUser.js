import CookieService from "../../services/cookie/cookie.service";

const hasAuthenticatedUser = () => {
    return CookieService.checkCookie(process.env.REACT_APP_ACCESS_TOKEN);
};

export default hasAuthenticatedUser;
