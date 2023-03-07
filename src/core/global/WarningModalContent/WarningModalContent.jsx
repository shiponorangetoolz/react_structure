import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CancelButton from "../Button/CancelButton";
import LoadingButton from "../Button/LoadingButton";
import warningLogo from "../../asset/images/Icons/warning-logo.svg";

const WarningModalContent = ({
    title,
    subTitle,
    subTitleSpan,
    content,
    buttonName,
    buttonColor = "warning",
    onConfirm,
    onClose,
    loadingText = "",
    isLoading = false,
}) => {
    return (
        <Box>
            <img src={warningLogo} alt='success logo' />
            <Typography variant={"h4"} color={"text.primary"} sx={{ pt: 1 }}>
                {title}
            </Typography>
            <Typography variant={"h6"} color={"text.primary"} sx={{ pt: 1, pb: 2 }}>
                {subTitle}
                <Typography component={"span"} variant={"h6"} color={"success.main"} sx={{ ml: 0.5 }}>
                    {" "}
                    {subTitleSpan}
                </Typography>
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"}>
                {content}
            </Typography>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{ mt: 3 }}>
                <CancelButton sx={{ mr: 3 }} onClick={onClose}>
                    Cancel
                </CancelButton>
                <LoadingButton
                    isLoading={isLoading}
                    loadingText={loadingText}
                    color='warning'
                    variant='contained'
                    size='large'
                    onClick={onConfirm}
                >
                    {buttonName}
                </LoadingButton>
            </Stack>
        </Box>
    );
};

export default WarningModalContent;
