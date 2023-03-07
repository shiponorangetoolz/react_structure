import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSnackbar } from "../reducers/snackbarSlice";
import { Slide, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const InfoSnackbar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { isInfoSnackbarOpen, infoMessage } = useSelector((state) => state.snackbar);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(clearSnackbar());
    };

    const SlideRight = (props) => {
        return <Slide {...props} direction={"left"} />;
    };

    return (
        <Snackbar
            open={isInfoSnackbarOpen}
            sx={{ minWidth: 300, maxWidth: 400 }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            // TransitionComponent={SlideRight}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity='info' sx={{ width: "100%", color: theme.palette.info.contrastText }}>
                {infoMessage}
            </Alert>
        </Snackbar>
    );
};

export default InfoSnackbar;
