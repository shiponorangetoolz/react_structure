import React, { useEffect, useState } from "react";
import Styles from "../styles/RegisterVerification.module.css";
import Box from "@mui/material/Box";
import { CircularProgress, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CoreButton from "../../../core/global/Button/CoreButton";
import { attemptSignUpStateClear, attemptSignUpWithToken } from "../reducers/userSlice";
import EmailIcon from "../../../core/asset/images/Logo/colorful_email_icon.png";
import VerificationCodeInput from "./VerificationCodeInput";
import CongratulationsLogo from "../../../core/asset/images/Icons/congratulations-logo.svg";
import VerificationHeader from "./VerificationHeader";
import InfoModal from "../../../core/global/Modal/InfoModal";
import SuccessModalContent from "./SuccessModalContent";
import VerificationFooter from "./VerificationFooter";
import { useNavigate } from "react-router-dom";
import AlertMessageShow from "./AlertMessageShow";
import routeLink from "../../../helper/constants/routeLink";

const RegisterVerification = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signUpState } = useSelector((state) => state.user);
    const { email, password, pending, error, isMailSend, isSignUpSuccess } = signUpState;
    const [codes, setCodes] = useState("");

    useEffect(() => {
        if (!isMailSend) navigate(routeLink.register.to);
    }, []);

    // ## Clear Reset Password State When Leave the page
    useEffect(() => {
        return () => dispatch(attemptSignUpStateClear());
    }, []);

    const handleCodeInput = (value) => {
        setCodes(value);
    };

    const onCloseSuccessModal = () => {
        navigate(routeLink.dashboard.to);
    };

    const handleClickGoButton = () => {
        navigate(routeLink.dashboard.to);
    };

    // ## Form Submit Action
    const onFormSubmit = () => {
        const data = {
            token_code: codes,
            email: email,
            password: password,
        };
        dispatch(attemptSignUpWithToken(data));
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
                        imgIcon={EmailIcon}
                        subHeading={"Start Your Journey with Earn 5 Star"}
                        heading={"Thanks for Signing Up!"}
                        email={email}
                    />

                    {error && <AlertMessageShow error={error} />}

                    <VerificationCodeInput codes={codes} onChange={handleCodeInput} />

                    <CoreButton
                        variant={"contained"}
                        size={"large"}
                        disabled={codes.length !== 6 || pending}
                        startIcon={pending && <CircularProgress size={16} color={"inherit"} />}
                        onClick={onFormSubmit}
                    >
                        Submit
                    </CoreButton>

                    <VerificationFooter email={email} isResetPassword={false} />
                </Box>

                <InfoModal open={isSignUpSuccess} onClose={onCloseSuccessModal}>
                    <SuccessModalContent
                        logo={CongratulationsLogo}
                        title={"Congratulation!"}
                        subTitle={"Your account has been created succesfully."}
                        helperText={"Get More Leads and Sales Easily with Earn 5 Star."}
                        buttonText={"Go to Dashboard"}
                        onClickButton={handleClickGoButton}
                    />
                </InfoModal>
            </Box>
        </Paper>
    );
};

export default RegisterVerification;
