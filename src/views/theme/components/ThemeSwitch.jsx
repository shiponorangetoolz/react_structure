import React, { useContext, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../layout/ThemingLayout";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { handleGetThemeMode } from "../helpers/themingUtility";
import Divider from "@mui/material/Divider";

const themeMode = handleGetThemeMode();

const ThemeSwitch = ({ open }) => {
    const theme = useTheme();
    const [mode, setMode] = useState(themeMode);
    const colorMode = useContext(ColorModeContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleThemeChange = () => {
        colorMode.toggleColorMode();
        setMode((prevState) => (prevState === "dark" ? "light" : "dark"));
    };

    const switchPopperOpen = Boolean(anchorEl);
    const id = switchPopperOpen ? "switch-account-popover" : undefined;

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: open ? "initial" : "center",
                px: 2,
            }}
        >
            <Divider />

            <ListItemButton
                sx={{
                    height: 40,
                    px: 0,
                    borderRadius: 8,
                    backgroundColor: theme.palette.background.default,
                }}
                onClick={handleThemeChange}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: "auto",
                        justifyContent: "center",
                    }}
                >
                    <IconButton color='inherit'>
                        {mode === "light" ? (
                            <LightModeIcon color='primary' />
                        ) : (
                            <DarkModeIcon color='primary' fontSize='small' />
                        )}
                    </IconButton>
                </ListItemIcon>
                {open && (
                    <ListItemText
                        primary={mode === "light" ? "Light mode" : "Dark mode"}
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                )}
            </ListItemButton>
        </Box>
    );
};

export default ThemeSwitch;
