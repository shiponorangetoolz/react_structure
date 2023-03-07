import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ThemeSwitch from "../../theme/components/ThemeSwitch";
import Box from "@mui/material/Box";
import { sidebarMenu } from "./helper/AppSidebarHelper";
import { Collapse } from "@mui/material";
import SwitchAccount from "./AccountSwitch/SwitchAccount";
import SidebarMenuItem from "../Common/SidebarMenuItem";
import SidebarSubMenuItem from "../Common/SidebarSubMenuItem";
import sidebarFilterByHiddenKeys from "../SettingsAppLayout/helper/sidebarFilterByHiddenKeys";
import { useSelector } from "react-redux";
import getRoleWiseHiddenKeys from "../../../helper/utility/getRoleWiseHiddenKeys";

const AppSidebar = ({ open }) => {
    const { accountSetting, hiddenKeys, roleName } = useSelector((state) => state.accountSetting);
    const [selectedSubMenu, setSelectedSubMenu] = useState("");
    const [sidebarList, setSidebarList] = useState([]);

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
        if (roleWiseHiddenKeys && roleWiseHiddenKeys.length > 0) {
            hiddenKeyList = [...hiddenKeyList, ...roleWiseHiddenKeys];
        }

        const filterSidebarList = sidebarFilterByHiddenKeys(sidebarMenu, hiddenKeyList);
        setSidebarList(filterSidebarList);
    }, [hiddenKeys, accountSetting]);

    return (
        <>
            <List sx={{ flex: "auto", p: 0 }}>
                {sidebarList.map((item) => (
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

export default AppSidebar;
