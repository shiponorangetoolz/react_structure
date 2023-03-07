import React from "react";
import Menu from "@mui/material/Menu";

const PopHoverCommonMenu = ({ anchorEl, open, onClose, children, ...rest }) => {
    return (
        <Menu
            sx={{
                mt: "45px",
                p: 0,

                "& .MuiPaper-root": {
                    borderRadius: "4px",

                    "& .MuiList-root": {
                        padding: "0",

                        "& .MuiMenuItem-root": {
                            padding: "8px 16px",
                        },
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
            {...rest}
        >
            {children}
        </Menu>
    );
};

export default PopHoverCommonMenu;
