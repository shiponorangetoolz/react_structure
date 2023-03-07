import React, { useRef } from "react";
import Box from "@mui/material/Box";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { styled } from "@mui/material/styles";

const WrapperBox = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.background.default,
    "& .form-control": {
        width: "100% !important",
        padding: "8.5px 14px 11.5px 58px !important",
        backgroundColor: `${theme.palette.background.paper} !important`,
        // backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important",
        height: "40px",
        color: `${theme.palette.text.primary} !important`,
        "&:focus": {
            borderColor: `${theme.palette.primary.main} !important`,
            boxShadow: `0 0 0 1px ${theme.palette.primary.main} !important`,
        },
    },
    "& .special-label": {
        color: `${theme.palette.text.secondary} !important`,
        top: "-13px !important",
        fontSize: "11px !important",
        height: "15px",
        // backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important",
        backgroundColor: `${theme.palette.background.paper} !important`,
    },
}));

const PhoneInputField = ({
    country = "us",
    value = "",
    onChange,
    name = "phone",
    label = "Phone",
    required = false,
    autoFocus = true,
    disableDropdown = true,
    backgroundColor,
    ...rest
}) => {
    return (
        <WrapperBox
            sx={{
                ...(backgroundColor && {
                    "& .form-control": {
                        backgroundColor: `${backgroundColor} !important`,
                    },
                    "& .special-label": {
                        backgroundColor: `${backgroundColor} !important`,
                    },
                }),
            }}
        >
            <PhoneInput
                country={country}
                value={value}
                disableDropdown={disableDropdown}
                inputProps={{
                    name: name,
                    required: required,
                    // autoFocus: autoFocus,
                }}
                specialLabel={label}
                onChange={onChange}
                onlyCountries={["bd", "us"]}
                {...rest}
            />
        </WrapperBox>
    );
};

export default PhoneInputField;
