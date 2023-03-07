import React, { useEffect, useState } from "react";
import Styles from "../styles/ForgotVerification.module.css";
import Box from "@mui/material/Box";
import VerificationHeader from "./VerificationHeader";
import PasswordIcon from "../../../core/asset/images/Icons/icon_password.svg";
import VerificationCodeInput from "./VerificationCodeInput";
import CoreButton from "../../../core/global/Button/CoreButton";
import { CircularProgress, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { attemptResetPasswordWithToken } from "../reducers/userSlice";
import VerificationFooter from "./VerificationFooter";
import { useNavigate } from "react-router-dom";
import AlertMessageShow from "./AlertMessageShow";
import routeLink from "../../../helper/constants/routeLink";

const ForgotVerification = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resetPasswordState } = useSelector((state) => state.user);
    const [codes, setCodes] = useState("");

    const handleCodeInput = (value) => setCodes(value);

    useEffect(() => {
        if (!resetPasswordState.isMailSend) navigate(routeLink.forgot.to);
    }, []);

    useEffect(() => {
        if (resetPasswordState.isCodeVerify) navigate(routeLink.passwordSet.to);
    }, [resetPasswordState.isCodeVerify]);

    // ## Form Submit Action
    const onFormSubmit = () => {
        const data = {
            email: resetPasswordState.email,
            token_code: codes,
        };
        dispatch(attemptResetPasswordWithToken(data));
    };

    return (
        <Paper elevation={0} className={Styles.verification_form_wrapper}>
            <Box
                component='form'
                sx={{
                    marginTop: "20px",
                }}
                noValidate
                autoComplete='off'
            >
                <Box className={Styles.verification_form_area}>
                    <VerificationHeader
                        imgIcon={PasswordIcon}
                        heading={"Check Your Email"}
                        email={resetPasswordState.email}
                    />

                    {resetPasswordState.error && <AlertMessageShow error={resetPasswordState.error} />}

                    <VerificationCodeInput codes={codes} onChange={handleCodeInput} />

                    <CoreButton
                        variant={"contained"}
                        size={"large"}
                        disabled={codes.length !== 6 || resetPasswordState.pending}
                        startIcon={resetPasswordState.pending && <CircularProgress size={16} color={"inherit"} />}
                        onClick={onFormSubmit}
                    >
                        Submit
                    </CoreButton>

                    <VerificationFooter email={resetPasswordState.email} isResetPassword={true} />
                </Box>
            </Box>
        </Paper>
    );
};

export default ForgotVerification;
