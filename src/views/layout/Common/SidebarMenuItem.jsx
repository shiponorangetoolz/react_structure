import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const SidebarMenuItem = ({ item, handleClickMenu, selectedSubMenu, open }) => {
    const theme = useTheme();

    if (item.location === "") {
        return (
            <ListItemButton
                onClick={() => handleClickMenu(item)}
                sx={{
                    height: 40,
                    justifyContent: open ? "flex-start" : "center",
                    paddingLeft: "16px",
                    borderLeft: `${open ? "2px" : "0"} solid transparent`,
                    "&:hover": {
                        borderLeft: `${open ? "2px" : "0"} solid ${theme.palette.primary.main}`,
                    },
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? "10px" : "2px",
                        justifyContent: "center",
                    }}
                >
                    {/* ## tooltip show when open=false ## */}
                    {open ? (
                        item.icon(item.name === selectedSubMenu ? "primary" : "inherit")
                    ) : (
                        <Tooltip title={item.name} placement='right' arrow>
                            {item.icon(item.name === selectedSubMenu ? "primary" : "inherit")}
                        </Tooltip>
                    )}
                </ListItemIcon>
                {open && (
                    <ListItemText
                        primary={item.name}
                        sx={{
                            opacity: open ? 1 : 0,
                            color: theme.palette.text.primary,
                            "& .MuiTypography-root": {
                                fontSize: theme.typography.body2.fontSize,
                                lineHeight: theme.typography.body2.lineHeight,
                                letterSpacing: theme.typography.body2.letterSpacing,
                                padding: "8px 16px 8px 0",
                                color: theme.palette.text.primary,
                            },
                        }}
                    />
                )}
                {open && item.subMenu ? item.name === selectedSubMenu ? <ExpandLess /> : <ExpandMore /> : ""}
            </ListItemButton>
        );
    } else {
        return (
            <NavLink to={item.location}>
                {({ isActive }) => (
                    <ListItemButton
                        onClick={() => handleClickMenu(item)}
                        sx={{
                            height: 40,
                            justifyContent: open ? "flex-start" : "center",
                            paddingLeft: "16px",
                            borderLeft: `${open ? "2px" : "0"} solid transparent`,
                            ...(isActive
                                ? {
                                      backgroundColor: theme.palette.action.hover,
                                      borderLeft: `${open ? "2px" : "0"} solid ${theme.palette.primary.main}`,
                                      paddingLeft: "16px",
                                      color: theme.palette.primary.main,
                                  }
                                : {}),
                            "&:hover": {
                                borderLeft: `${open ? "2px" : "0"} solid ${theme.palette.primary.main}`,
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? "10px" : "2px",
                                justifyContent: "center",
                            }}
                        >
                            {/* ## tooltip show when open=false ## */}
                            {open ? (
                                item.icon(isActive ? "primary" : "inherit")
                            ) : (
                                <Tooltip title={item.name} placement='right' arrow>
                                    {item.icon(isActive ? "primary" : "inherit")}
                                </Tooltip>
                            )}
                        </ListItemIcon>
                        {open && (
                            <ListItemText
                                primary={item.name}
                                sx={{
                                    opacity: open ? 1 : 0,
                                    color: theme.palette.text.primary,
                                    "& .MuiTypography-root": {
                                        fontSize: theme.typography.body2.fontSize,
                                        lineHeight: theme.typography.body2.lineHeight,
                                        letterSpacing: theme.typography.body2.letterSpacing,
                                        padding: "8px 16px 8px 0",
                                        color: theme.palette.text.primary,
                                    },
                                }}
                            />
                        )}
                        {open && item.subMenu ? item.name === selectedSubMenu ? <ExpandLess /> : <ExpandMore /> : ""}
                    </ListItemButton>
                )}
            </NavLink>
        );
    }
};

export default SidebarMenuItem;
