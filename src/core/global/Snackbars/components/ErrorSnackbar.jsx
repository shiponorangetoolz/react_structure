import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSnackbar } from "../reducers/snackbarSlice";
import { Slide, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const ErrorSnackbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { isErrorSnackbarOpen, errorMessage } = useSelector((state) => state.snackbar);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(clearSnackbar());
    };

    const SlideRight = (props) => {
        return <Slide {...props} direction={"left"} />;
    };

    if (typeof errorMessage === "string") {
        return (
            <Snackbar
                open={isErrorSnackbarOpen}
                sx={{ minWidth: 300, maxWidth: 400 }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                // TransitionComponent={SlideRight}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='error'
                    sx={{ width: "100%", color: theme.palette.error.contrastText }}
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
        );
    } else {
        let message = "";
        Object.entries(errorMessage).forEach(([key, value]) => {
            message += value + "\n";
        });

        return (
            <Snackbar
                open={isErrorSnackbarOpen}
                sx={{ minWidth: 300, maxWidth: 400 }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                // TransitionComponent={SlideRight}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='error'
                    sx={{ width: "100%", color: theme.palette.error.contrastText }}
                >
                    {message}
                </Alert>
            </Snackbar>
        );
    }
};

export default ErrorSnackbar;
