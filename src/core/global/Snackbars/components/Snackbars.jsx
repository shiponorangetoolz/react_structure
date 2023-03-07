import React from "react";
import SuccessSnackbar from "./SuccessSnackbar";
import InfoSnackbar from "./InfoSnackbar";
import ErrorSnackbar from "./ErrorSnackbar";
import WarningSnackbar from "./warningSnackbar";

const Snackbars = () => {
    return (
        <>
            <SuccessSnackbar />
            <ErrorSnackbar />
            <InfoSnackbar />
            <WarningSnackbar />
        </>
    );
};

export default Snackbars;
