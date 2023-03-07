import React, { useEffect, useRef } from "react";
import { Paper, Typography } from "@mui/material";
import Styles from "../styles/ForgotPasswordSet.module.css";
import CoreLink from "../../../core/global/Link/CoreLink";
import CoreButton from "../../../core/global/Button/CoreButton";
import { ArrowBack } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CoreTextField from "../../../core/global/TextField/CoreTextField";
import { registerPattern } from "../../../helper/constants/registerPattern";
import { useForm } from "react-hook-form";
import UnStyledButton from "../../../core/global/Button/UnStyledButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { attemptSetNewPassword, clearResetPasswordState } from "../reducers/userSlice";
import SuccessModalContent from "./SuccessModalContent";
import ResetPasswordIcon from "../../../core/asset/images/Icons/reset_password.svg";
import InfoModal from "../../../core/global/Modal/InfoModal";
import AlertMessageShow from "./AlertMessageShow";
import LoadingButton from "../../../core/global/Button/LoadingButton";
import routeLink from "../../../helper/constants/routeLink";

const ForgotPasswordSet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resetPasswordState } = useSelector((state) => state.user);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: "onBlur",
    });

    const password = useRef(null);
    password.current = watch("password", "");

    useEffect(() => {
        if (!resetPasswordState.isCodeVerify) navigate(routeLink.forgot.to);
    }, []);

    useEffect(() => {
        if (resetPasswordState.isResetSuccess) navigate(routeLink.passwordSet.to);
    }, [resetPasswordState.isResetSuccess]);

    // ## Clear Reset Password State When Leave the page
    useEffect(() => {
        return () => dispatch(clearResetPasswordState());
    }, []);

    const onCloseSuccessModal = () => {
        navigate(routeLink.login.to);
    };

    // ## Form Submit Action
    const onSubmit = (data) => {
        data.email = resetPasswordState.email;
        dispatch(attemptSetNewPassword(data));
    };

    const handleClickGoButton = () => {
        navigate(routeLink.login.to);
    };

    return (
        <Paper elevation={0} className={Styles.pass_set_form_wrapper}>
            <CoreLink to={routeLink.login.to}>
                <UnStyledButton color={"secondary"} startIcon={<ArrowBack />}>
                    Back to Sign In
                </UnStyledButton>
            </CoreLink>
            <Box className={Styles.pass_set_form_header}>
                <Typography variant={"h4"} color={"primary"}>
                    Set a new password
                </Typography>
                <Typography variant={"body1"} sx={{ marginTop: "8px" }}>
                    Your new password must be different to previous used passwords.
                </Typography>
            </Box>

            <Box mt={"48px"} component='form' onSubmit={handleSubmit(onSubmit)}>
                {resetPasswordState.error && <AlertMessageShow error={resetPasswordState.error} />}

                <div className={Styles.pass_set_form_area}>
                    <CoreTextField
                        type={"password"}
                        size={"small"}
                        label='Password'
                        name={"password"}
                        error={!!(errors.password && errors.password.message)}
                        helperText={errors.password && errors.password.message}
                        {...register("password", registerPattern.password)}
                    />

                    <CoreTextField
                        type={"password"}
                        size={"small"}
                        label='Confirm Password'
                        name={"confirm_password"}
                        error={!!(errors.confirm_password && errors.confirm_password.message)}
                        helperText={errors.confirm_password && errors.confirm_password.message}
                        {...register("confirm_password", {
                            validate: (value) => value === password.current || "passwords do not match",
                        })}
                    />

                    <LoadingButton isLoading={resetPasswordState.pending} size={"large"} type={"submit"}>
                        Set Password
                    </LoadingButton>
                </div>

                <InfoModal open={resetPasswordState.isResetSuccess} onClose={onCloseSuccessModal}>
                    <SuccessModalContent
                        logo={ResetPasswordIcon}
                        title={"Reset Password"}
                        subTitle={"Your Password has been successfully reset."}
                        helperText={" Click bellow to back to “Sign In”  page"}
                        buttonText={"Back to sign in"}
                        onClickButton={handleClickGoButton}
                    />
                </InfoModal>
            </Box>
        </Paper>
    );
};

export default ForgotPasswordSet;
