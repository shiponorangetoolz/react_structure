import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../../../core/asset/images/Logo/Avatar.png";
import AppNavbarRight from "./AppNavbarRight";
import { useSelector } from "react-redux";

const AppNavbar = ({ handleDrawerToggle }) => {
    const theme = useTheme();
    const { agencySettingData, loading } = useSelector((state) => state.agencySetting);

    return (
        <AppBar
            position='fixed'
            sx={{
                padding: "0 20px",
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                boxShadow: "none",
                "& .MuiToolbar-root": {
                    minHeight: "60px",
                },
            }}
        >
            <Toolbar disableGutters>
                <IconButton
                    aria-label='open drawer'
                    onClick={handleDrawerToggle}
                    edge='start'
                    sx={{
                        mr: 2,
                        color: theme.palette.action.active,
                        background: theme.palette.background.default,
                        borderRadius: "100px",
                        "&:hover": {
                            background: "rgba(32, 164, 243, 0.08)",
                            color: theme.palette.info.main,
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ mr: 2 }}>
                    {agencySettingData && agencySettingData.company_logo && (
                        <img height={"60"} src={agencySettingData.company_logo} alt={"logo"} />
                    )}
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <AppNavbarRight />
            </Toolbar>
        </AppBar>
    );
};
export default AppNavbar;
