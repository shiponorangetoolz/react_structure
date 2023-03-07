import React from "react";
import CoreButton from "./CoreButton";
import { styled } from "@mui/material/styles";

const ButtonStyle = styled(CoreButton)(({ theme }) => ({
    fontWeight: 500,
    border: "1px solid" + theme.palette.action.active,
    color: theme.palette.action.active,
    background: theme.palette.background.paper,
    "&:hover": {
        border: "1px solid" + theme.palette.action.active,
        color: theme.palette.action.active,
        background: theme.palette.background.paper,
    },
}));

const CancelButton = ({ variant = "contained", startIcon, endIcon, children, ...rest }) => {
    return (
        <ButtonStyle
            startIcon={startIcon && startIcon}
            endIcon={endIcon && endIcon}
            variant={variant}
            size='large'
            {...rest}
        >
            {children}
        </ButtonStyle>
    );
};

export default CancelButton;
