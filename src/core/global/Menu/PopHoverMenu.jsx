import React from "react";
import Menu from "@mui/material/Menu";

const PopHoverMenu = ({ anchorEl, open, onClose, children }) => {
    return (
        <Menu
            sx={{
                mt: "45px",
                p: 0,

                "& .MuiPaper-root": {
                    boxShadow: "unset",
                    borderRadius: "0 0 4px 4px",
                    minWidth: "176px",
                    "& .MuiList-root": {
                        padding: "0",
                    },
                },
            }}
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={open}
            onClose={onClose}
        >
            {children}
        </Menu>
    );
};

export default PopHoverMenu;
