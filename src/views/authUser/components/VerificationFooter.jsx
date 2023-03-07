import React, { useEffect, useRef, useState } from "react";
import { Stack, Typography } from "@mui/material";
import UnStyledButton from "../../../core/global/Button/UnStyledButton";
import { formatCountDownTime } from "../../../helper/utility/formatCountDownTime";
import UserService from "../../../services/User.service";
import { useDispatch } from "react-redux";
import { showErrorSnackbar, showSuccessSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";

const VerificationFooter = ({ email = "", isResetPassword = false }) => {
    const dispatch = useDispatch();

    // ## resend code related state
    const timerIdRef = useRef(null);
    const [countDown, setCountDown] = useState(120);

    const handleResendCode = () => {
        const handleResendResponse = (response) => {
            if (response.success) {
                setCountDown(120);
                dispatch(showSuccessSnackbar(response.message));
            } else {
                dispatch(showErrorSnackbar(response.message));
            }
        };

        if (isResetPassword) {
            UserService.attemptResetPasswordResendToken({ email: email })
                .then((response) => {
                    handleResendResponse(response);
                })
                .catch((err) => console.log(err));
        } else {
            UserService.attemptSignUpResendToken({ email: email })
                .then((response) => {
                    handleResendResponse(response);
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        timerIdRef.current = setInterval(() => {
            if (countDown > 1) {
                setCountDown((prevState) => prevState - 1);
            } else {
                setCountDown(0);
                clearTimerId();
            }
        }, 1000);
        return () => clearTimerId();
    });

    const clearTimerId = () => {
        clearInterval(timerIdRef.current);
    };

    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant={"body1"}>{"Don't have a code?"}</Typography>
            <UnStyledButton disabled={countDown !== 0} onClick={handleResendCode} color={"warning"}>
                Resend code
            </UnStyledButton>
            <Typography component={"span"} variant={"body2"} color={"error.main"}>
                {formatCountDownTime(countDown)}
            </Typography>
        </Stack>
    );
};

export default VerificationFooter;
