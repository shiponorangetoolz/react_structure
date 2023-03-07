import CookieService from "../../services/cookie/cookie.service";
import LocalStorageService from "../../services/LocalStorage/LocalStorage.service";

export const clearStorageWhenLogOut = () => {
    CookieService.setCookie(process.env.REACT_APP_ACCESS_TOKEN, "", "");
    LocalStorageService.setUserRole("");
    LocalStorageService.setUserHiddenModuleKeys("");
};
