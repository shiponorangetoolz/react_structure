import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ThemeSwitch from "../../theme/components/ThemeSwitch";
import Box from "@mui/material/Box";
import CoreLink from "../../../core/global/Link/CoreLink";
import { settingAppSidebar } from "./helper/settingAppSidebarHelper";
import { Collapse } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import CoreButton from "../../../core/global/Button/CoreButton";
import sidebarFilterByHiddenKeys from "./helper/sidebarFilterByHiddenKeys";
import { useSelector } from "react-redux";
import SidebarSubMenuItem from "../Common/SidebarSubMenuItem";
import SidebarMenuItem from "../Common/SidebarMenuItem";
import routeLink from "../../../helper/constants/routeLink";
import getRoleWiseHiddenKeys from "../../../helper/utility/getRoleWiseHiddenKeys";

const SettingsAppSidebar = ({ open }) => {
    const { roleName, hiddenKeys } = useSelector((state) => state.user);
    const { accountSetting } = useSelector((state) => state.accountSetting);
    const [sidebarList, setSidebarList] = useState([]);
    const [selectedSubMenu, setSelectedSubMenu] = useState("Settings");

    const handleClickMenu = (menuItem) => {
        if (menuItem.subMenu) {
            if (selectedSubMenu === menuItem.name) {
                setSelectedSubMenu("");
            } else {
                setSelectedSubMenu(menuItem.name);
            }
        }
    };

    useEffect(() => {
        const roleWiseHiddenKeys = getRoleWiseHiddenKeys(roleName, accountSetting && accountSetting.parent_uid);

        let hiddenKeyList = [];
        if (hiddenKeys && hiddenKeys?.length > 0) hiddenKeyList = [...hiddenKeys];
        if (roleWiseHiddenKeys && roleWiseHiddenKeys?.length > 0) {
            hiddenKeyList = [...hiddenKeyList, ...roleWiseHiddenKeys];
        }

        const filterSidebarList = sidebarFilterByHiddenKeys(settingAppSidebar, hiddenKeyList);
        setSidebarList(filterSidebarList);
    }, [hiddenKeys]);

    return (
        <>
            <List sx={{ flex: "auto", pt: 0 }}>
                <CoreLink to={routeLink.dashboard.to}>
                    <CoreButton
                        variant={"contained"}
                        size={"medium"}
                        color={"secondary"}
                        startIcon={<ArrowBack />}
                        className={`${open ? "open-left-menu" : "close-left-menu"}`}
                        style={{
                            marginBottom: "16px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "flex",
                        }}
                    >
                        {open ? "Back Dashboard" : ""}
                    </CoreButton>
                </CoreLink>

                {sidebarList &&
                    sidebarList.length > 0 &&
                    sidebarList.map((item) => (
                        <Box key={item.id} className='single-list-item'>
                            <SidebarMenuItem
                                item={item}
                                selectedSubMenu={selectedSubMenu}
                                handleClickMenu={handleClickMenu}
                                open={open}
                            />
                            {item.subMenu &&
                                item.subMenu.map((subMenuItem) => (
                                    <Collapse
                                        in={item.name === selectedSubMenu}
                                        timeout='auto'
                                        unmountOnExit
                                        key={subMenuItem.id}
                                    >
                                        <SidebarSubMenuItem subMenuItem={subMenuItem} open={open} />
                                    </Collapse>
                                ))}
                        </Box>
                    ))}
            </List>

            <Divider />

            <List>
                <ThemeSwitch open={open} />
            </List>
        </>
    );
};

export default SettingsAppSidebar;
