import React from "react";
import { Backdrop } from "@mui/material";
import { useDispatch } from "react-redux";
import { showWarningSnackbar } from "../Snackbars/reducers/snackbarSlice";

const HideBackDrop = ({ isLoading = false }) => {
    const dispatch = useDispatch();

    const handleOutSiteClick = () => {
        dispatch(showWarningSnackbar("Please, wait until the process complete."));
    };

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={handleOutSiteClick}
            invisible={true}
        />
    );
};

export default HideBackDrop;
