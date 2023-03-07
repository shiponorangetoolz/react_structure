import React from "react";
import { Typography } from "@mui/material";
import CoreButton from "../../../core/global/Button/CoreButton";
import Box from "@mui/material/Box";

const SuccessModalContent = ({ logo, title, subTitle, helperText, buttonText, onClickButton }) => {
    return (
        <Box
            sx={{
                "@media screen and (max-width: 1366px)": {
                    "& img": {
                        width: 70,
                    },
                    "& h2": {
                        fontSize: 25,
                    },
                },
            }}
        >
            <img src={logo} alt='success logo' />

            <Typography variant='h2' color='primary' sx={{ mt: "24px", mb: "10px" }}>
                {title}
            </Typography>

            <Typography variant='h6' color={"success.main"}>
                {subTitle}
            </Typography>

            <Typography variant='body2' sx={{ mt: "6px", mb: "24px" }}>
                {helperText}
            </Typography>

            <CoreButton onClick={onClickButton} variant={"contained"} size={"large"} color={"secondary"}>
                {buttonText}
            </CoreButton>
        </Box>
    );
};

export default SuccessModalContent;
