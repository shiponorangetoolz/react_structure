import React from "react";
import { styled } from "@mui/material";
import CoreButton from "./CoreButton";

const UnStyledButtonStyled = styled(CoreButton)(() => ({
    "&:hover": {
        background: "none",
    },
    "&.MuiButton-sizeMedium ": {
        padding: "0 12px",
        fontSize: "15px",
    },
}));

const UnStyledButton = ({ color = "secondary", variant = "text", children, ...rest }) => {
    return (
        <UnStyledButtonStyled color={color} variant={variant} disableRipple {...rest}>
            {children}
        </UnStyledButtonStyled>
    );
};

export default UnStyledButton;
