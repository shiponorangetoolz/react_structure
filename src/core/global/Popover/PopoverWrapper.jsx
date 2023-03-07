import React from "react";
import { styled } from "@mui/material/styles";
import { Popover } from "@mui/material";

const PopoverStyled = styled(Popover)(({ theme }) => ({
    "& .MuiPaper-root": {
        width: "100%",
        boxShadow: "1px 2px 2px -1px rgb(0 0 0 / 20%), -4px -4px 6px -4px rgb(0 0 0 / 20%)",
        padding: "16px 0",
        borderRadius: 2,
    },
}));

const PopoverWrapper = ({ id, open, anchorEl, onClose, maxWidth = 240, children, ...rest }) => {
    return (
        <PopoverStyled
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            sx={{
                "& .MuiPaper-root": {
                    maxWidth: maxWidth,
                },
            }}
            {...rest}
        >
            {children}
        </PopoverStyled>
    );
};

export default PopoverWrapper;
