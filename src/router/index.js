import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import PublicRoutes from "./PublicRoutes";
import { useEffect, useState } from "react";
import routesFilterByHiddenKey from "../helper/utility/routesFilterByHiddenKey";
import { useSelector } from "react-redux";
import getRoleWiseHiddenKeys from "../helper/utility/getRoleWiseHiddenKeys";

export default function ThemeRoutes() {
    const { roleName, hiddenKeys } = useSelector((state) => state.user);
    const { accountSetting } = useSelector((state) => state.accountSetting);

    const [mainRouteList, setMainRouteList] = useState(MainRoutes);

    useEffect(() => {
        const roleWiseHiddenKeys = getRoleWiseHiddenKeys(roleName, accountSetting && accountSetting.parent_uid);

        let hiddenKeyList = [];
        if (hiddenKeys && hiddenKeys?.length > 0) hiddenKeyList = [...hiddenKeys];
        if (roleWiseHiddenKeys && roleWiseHiddenKeys?.length > 0) {
            hiddenKeyList = [...hiddenKeyList, ...roleWiseHiddenKeys];
        }

        if (hiddenKeyList && hiddenKeyList.length > 0) {
            const mainRoutes = routesFilterByHiddenKey(MainRoutes, hiddenKeyList);

            setMainRouteList(mainRoutes);
        }
    }, [hiddenKeys, accountSetting]);

    return useRoutes([mainRouteList, AuthenticationRoutes, ...PublicRoutes]);
}
