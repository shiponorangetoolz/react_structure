import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import CoreButton from "./CoreButton";
import { useDispatch } from "react-redux";
import { showWarningSnackbar } from "../Snackbars/reducers/snackbarSlice";

const LoadingButton = ({
    variant = "contained",
    size = "large",
    isLoading = false,
    loadingText = "",
    disabled = false,
    children = "",
    startIcon,
    ...rest
}) => {
    const dispatch = useDispatch();

    const handleOutSiteClick = () => {
        dispatch(showWarningSnackbar("Please, wait until the process complete."));
    };

    return (
        <>
            <CoreButton
                variant={variant}
                size={size}
                disabled={isLoading || disabled}
                startIcon={
                    isLoading && startIcon ? (
                        <CircularProgress size={16} color={"inherit"} />
                    ) : isLoading ? (
                        <CircularProgress size={16} color={"inherit"} />
                    ) : (
                        startIcon
                    )
                }
                {...rest}
            >
                {isLoading && loadingText ? loadingText : children}
            </CoreButton>

            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
                onClick={handleOutSiteClick}
                invisible={true}
            >
                {/*<CircularProgress color="inherit" />*/}
            </Backdrop>
        </>
    );
};

export default LoadingButton;
