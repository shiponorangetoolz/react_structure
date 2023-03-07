import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { showWarningSnackbar } from "../Snackbars/reducers/snackbarSlice";

const CoreBackDrop = ({ isLoading = false, invisible = false }) => {
    const dispatch = useDispatch();

    const handleOutSiteClick = () => {
        dispatch(showWarningSnackbar("Please, wait until the process complete."));
    };

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={handleOutSiteClick}
            invisible={invisible}
        >
            <CircularProgress color='inherit' />
        </Backdrop>
    );
};

export default CoreBackDrop;
