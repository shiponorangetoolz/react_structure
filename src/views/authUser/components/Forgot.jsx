import React, { useEffect, useState } from "react";
import Styles from "../styles/Forgot.module.css";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import CoreTextField from "../../../core/global/TextField/CoreTextField";
import { useForm } from "react-hook-form";
import { registerPattern } from "../../../helper/constants/registerPattern";
import { ArrowBack } from "@mui/icons-material";
import CoreLink from "../../../core/global/Link/CoreLink";
import UnStyledButton from "../../../core/global/Button/UnStyledButton";
import { useDispatch, useSelector } from "react-redux";
import { attemptResetPassword, attemptResetPasswordErrorClear } from "../reducers/userSlice";
import { Alert } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../core/global/Button/LoadingButton";
import routeLink from "../../../helper/constants/routeLink";

const Forgot = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resetPasswordState } = useSelector((state) => state.user);
    const [backendError, setBackendError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: "onSubmit",
    });

    // ## Server validation error handle
    useEffect(() => {
        if (typeof resetPasswordState.error === "object") {
            for (const errName in resetPasswordState.error) {
                setError(`${errName}`, { type: "custom", message: resetPasswordState.error[errName] });
            }
        } else {
            setBackendError(resetPasswordState.error);
        }
    }, [resetPasswordState.error]);

    useEffect(() => {
        if (resetPasswordState.isMailSend) navigate(routeLink.forgotVerification.to);
    }, [resetPasswordState.isMailSend]);

    // ## Clear Reset Password Error When Leave the page
    useEffect(() => {
        return () => dispatch(attemptResetPasswordErrorClear());
    }, []);

    // ## Form Submit Action
    const onSubmit = (data) => {
        dispatch(attemptResetPassword(data));
    };

    return (
        <Paper elevation={0} className={Styles.forgot_form_wrapper}>
            <CoreLink to={routeLink.login.to}>
                <UnStyledButton color={"secondary"} startIcon={<ArrowBack />}>
                    Back to Sign In
                </UnStyledButton>
            </CoreLink>

            <Box className={Styles.forgot_form_header}>
                <Typography variant={"h4"} color={"primary"}>
                    Forgot your password?
                </Typography>
                <Typography variant={"body1"} sx={{ marginTop: "8px" }}>
                    {
                        "No worries, Enter the email address associated with your account and we'll send you a Code to reset your password."
                    }
                </Typography>
            </Box>

            <Box mt={"48px"} component='form' onSubmit={handleSubmit(onSubmit)}>
                {backendError && <Alert severity='error'>{backendError}</Alert>}
                <div className={Styles.forgot_form_area}>
                    <CoreTextField
                        type={"email"}
                        id='outlined-required'
                        name={"email"}
                        size={"small"}
                        label='Email Address *'
                        error={!!(errors.email && errors.email.message)}
                        helperText={errors.email && errors.email.message}
                        {...register("email", registerPattern.email)}
                    />

                    <LoadingButton isLoading={resetPasswordState.pending} size={"large"} type={"submit"}>
                        Continue
                    </LoadingButton>
                </div>
            </Box>
        </Paper>
    );
};

export default Forgot;
