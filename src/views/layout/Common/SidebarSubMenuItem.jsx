import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const SidebarSubMenuItem = ({ subMenuItem, open }) => {
    const theme = useTheme();

    return (
        <NavLink to={subMenuItem.location}>
            {({ isActive }) => (
                <ListItemButton
                    sx={{
                        height: 40,
                        justifyContent: open ? "initial" : "center",
                        pl: open ? "46px" : "16px",
                        pr: open ? "20px" : "16px",
                        borderLeft: `${open ? "2px" : "0"} solid transparent`,
                        ...(isActive
                            ? {
                                  backgroundColor: theme.palette.action.hover,
                                  borderLeft: `${open ? "2px" : "0"} solid ${theme.palette.primary.main}`,
                                  paddingLeft: open ? "46px" : "16px",
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
                            fontSize: "20px",
                        }}
                    >
                        {/* ## tooltip show when open=false ## */}
                        {open ? (
                            subMenuItem.icon(isActive ? "primary" : "inherit")
                        ) : (
                            <Tooltip title={subMenuItem.name} placement='right' arrow>
                                {subMenuItem.icon(isActive ? "primary" : "inherit")}
                            </Tooltip>
                        )}
                    </ListItemIcon>
                    {open && (
                        <ListItemText
                            primary={subMenuItem.name}
                            sx={{
                                opacity: open ? 1 : 0,
                                color: theme.palette.text.primary,
                                "& .MuiTypography-root": {
                                    fontSize: "0.875rem",
                                },
                            }}
                        />
                    )}
                </ListItemButton>
            )}
        </NavLink>
    );
};

export default SidebarSubMenuItem;
