import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import AppNavbar from "../AppNavbar/AppNavbar";
import PrivateLayout from "../PrivateLayout";
import SettingsAppSidebar from "./SettingsAppSidebar";
import GlobalLayoutLoader from "../GlobalLayoutLoader";
import LocalStorageService from "../../../services/LocalStorage/LocalStorage.service";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    top: 60,
    paddingTop: 16,
    paddingBottom: "60px",
    zIndex: 1,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    top: 60,
    paddingTop: 16,
    paddingBottom: "60px",
    zIndex: 1,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    // width: `calc(${theme.spacing(7)} + 1px)`,
    // [theme.breakpoints.up("sm")]: {
    //     width: `calc(${theme.spacing(8)} + 1px)`,
    // },
    width: "70px",
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    background: "#ddd",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const SettingsAppLayout = () => {
    const [open, setOpen] = useState(LocalStorageService.getIsMenuOpen());

    const handleDrawerToggle = () => {
        setOpen(!open);
        LocalStorageService.setMenuOpen(!open);
    };

    return (
        <>
            <PrivateLayout>
                <GlobalLayoutLoader>
                    <AppNavbar handleDrawerToggle={handleDrawerToggle} />

                    <Box sx={{ display: "flex" }}>
                        <Drawer variant='permanent' open={open}>
                            <SettingsAppSidebar open={open} />
                        </Drawer>

                        <Box component='main' sx={{ flexGrow: 1, p: 3 }} className={"main__app__wrapper"}>
                            <DrawerHeader />
                            {/* ## == Child component of AppLayout == ## */}
                            <PrivateLayout>
                                <Outlet />
                            </PrivateLayout>
                        </Box>
                    </Box>
                </GlobalLayoutLoader>
            </PrivateLayout>
        </>
    );
};

export default SettingsAppLayout;
