import React from "react";
import ReactCodeInput from "react-code-input";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const VerificationCodeInput = ({ codes, onChange }) => {
    const theme = useTheme();

    const props = {
        inputStyle: {
            fontFamily: theme.typography.fontFamily,
            margin: "12px",
            MozAppearance: "textfield",
            width: "40px",
            height: "40px",
            borderRadius: "4px",
            fontSize: "16px",
            paddingLeft: "14px",
            lineHeight: "24px",
            color: theme.palette.text.secondary,
            border: `1px solid ${theme.palette.action.hover}`,
            background: theme.palette.background.default,
        },
    };

    return (
        <Box
            sx={{
                textAlign: "center",
                "& .react-code-input input::focus-visible": {
                    border: `1px solid ${theme.palette.action.active} !important`,
                },
            }}
        >
            {/* ================ React code input ================*/}
            <ReactCodeInput value={codes} type='text' onChange={onChange} fields={6} {...props} />
        </Box>
    );
};

export default VerificationCodeInput;
