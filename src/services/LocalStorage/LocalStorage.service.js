import { AGENCY_ROLE_ADMIN_VIEW } from "../../helper/constants/coreConstant";

class LocalStorageService {
    setUserRole(roleName) {
        localStorage.setItem("role", roleName);
    }

    getUserRole() {
        return localStorage.getItem("role");
    }

    checkHasRole = () => {
        const role = localStorage.getItem("role");
        return !!role;
    };

    checkIsMainAgency = () => {
        const role = this.getUserRole();
        if (role) return false;
        return true;
    };

    checkUserHasEditAccess() {
        const roleName = this.getUserRole();
        return roleName !== AGENCY_ROLE_ADMIN_VIEW;
    }

    setUserHiddenModuleKeys(hiddenModuleKeyList) {
        const json_encode_keys = JSON.stringify(hiddenModuleKeyList);
        localStorage.setItem("hidden_module_keys", json_encode_keys);
    }

    getUserHiddenModuleKeys() {
        const hidden_module_keys = localStorage.getItem("hidden_module_keys");

        if (hidden_module_keys && hidden_module_keys !== "undefined") {
            return JSON.parse(hidden_module_keys);
        } else {
            return [];
        }
    }

    checkHasUserHiddenModuleKeys() {
        const hidden_module_keys = localStorage.getItem("hidden_module_keys");
        return !!hidden_module_keys;
    }

    checkUserHasPageAccess(pageKey) {
        const hiddenModuleList = this.getUserHiddenModuleKeys();
        console.log({ hiddenModuleList, pageKey });
        return hiddenModuleList.includes(pageKey);
    }

    setMenuOpen(status) {
        localStorage.setItem("menu_open", status);
    }

    getIsMenuOpen() {
        const isMenuOpen = localStorage.getItem("menu_open");
        if (isMenuOpen !== null) {
            return JSON.parse(isMenuOpen);
        } else {
            return true;
        }
    }
}

export default new LocalStorageService();
