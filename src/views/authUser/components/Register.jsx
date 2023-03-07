import React, { useEffect, useState } from "react";
import Styles from "../styles/Register.module.css";
import Box from "@mui/material/Box";
import { FormControl, FormHelperText, Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CoreTextField from "../../../core/global/TextField/CoreTextField";
import { useForm } from "react-hook-form";
import { registerPattern } from "../../../helper/constants/registerPattern";
import { attemptSignUp } from "../reducers/userSlice";
import { useNavigate } from "react-router-dom";
import CoreLink from "../../../core/global/Link/CoreLink";
import CoreHref from "../../../core/global/Link/CoreHref";
import CoreCheckbox from "../../../core/global/Checkbox/CoreCheckbox";
import LoadingButton from "../../../core/global/Button/LoadingButton";
import { showErrorSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";
import routeLink from "../../../helper/constants/routeLink";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { signUpState } = useSelector((state) => state.user);
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setError,
    } = useForm({
        mode: "onSubmit",
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleChangeCheck = () => {
        setIsChecked(!isChecked);
    };

    // ## Server validation error handle
    useEffect(() => {
        if (signUpState.error) {
            if (typeof signUpState.error !== "string") {
                for (const errName in signUpState.error) {
                    setError(`${errName}`, { type: "custom", message: signUpState.error[errName] });
                }
            } else {
                dispatch(showErrorSnackbar(signUpState.error));
            }
        }
    }, [signUpState.error]);

    // ## After sing up success and Mail Send
    useEffect(() => {
        if (signUpState.isMailSend) navigate(routeLink.registerVerification.to);
    }, [signUpState.isMailSend]);

    // ## Form Submit Action
    const onSubmit = (data) => {
        dispatch(attemptSignUp(data));
    };

    return (
        <Paper elevation={0} className={Styles.register_form_wrapper}>
            <Box className={Styles.register_form_header}>
                <Typography variant={"h4"} color={"primary"}>
                    Get Started
                </Typography>
                <Typography variant={"body1"} sx={{ marginTop: "8px" }}>
                    Already have an account?{" "}
                    <CoreLink to={routeLink.login.to}>
                        <Typography variant={"button"} color={"secondary"}>
                            Sign in
                        </Typography>
                    </CoreLink>
                </Typography>
            </Box>
            <Box mt={"48px"} component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.register_form_area}>
                    <input type={"hidden"} value={"value"} />
                    <input type='email' name='email' style={{ display: "none" }} />

                    <CoreTextField
                        required={false}
                        type={"email"}
                        name={"email"}
                        label='Email Address'
                        size={"small"}
                        autoFocus={true}
                        // autoComplete={"off"}
                        error={!!(errors.email && errors.email.message)}
                        helperText={errors.email && errors.email.message}
                        {...register("email", registerPattern.email)}
                    />

                    <input type='password' name='password' style={{ display: "none" }} />
                    <CoreTextField
                        type={"password"}
                        name={"password"}
                        label='Password'
                        size={"small"}
                        autoComplete={"off"}
                        error={!!(errors.password && errors.password.message)}
                        helperText={errors.password && errors.password.message}
                        {...register("password", registerPattern.password)}
                    />

                    <Box className={Styles.formFooter}>
                        <FormControl
                            error={!!(errors.checked && errors.checked.message)}
                            {...register("checked", registerPattern.termsAndCondition)}
                        >
                            <Stack direction={"row"} alignItems={"center"}>
                                <CoreCheckbox
                                    label={"I accept the"}
                                    name={"checked"}
                                    defaultChecked={isChecked}
                                    onChange={handleChangeCheck}
                                />
                                <CoreHref href={"/privacy/policy"} target='_blank' rel='noopener'>
                                    <Typography variant={"body1"} color={"warning.main"} sx={{ ml: "-12px" }}>
                                        Terms of services & privacy policy
                                    </Typography>
                                </CoreHref>
                            </Stack>
                            <FormHelperText>{errors.checked && errors.checked.message}</FormHelperText>
                        </FormControl>
                    </Box>

                    <LoadingButton isLoading={signUpState.pending} size={"large"} type={"submit"}>
                        Sign up
                    </LoadingButton>
                </div>
            </Box>
        </Paper>
    );
};

export default Register;
