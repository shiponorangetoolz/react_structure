import React, { useEffect, useState } from "react";
import Styles from "../styles/login.module.css";
import Box from "@mui/material/Box";
import { Checkbox, FormControlLabel, InputAdornment, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import CoreTextField from "../../../core/global/TextField/CoreTextField";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CoreLink from "../../../core/global/Link/CoreLink";
import { useForm } from "react-hook-form";
import { registerPattern } from "../../../helper/constants/registerPattern";
import { attemptClearLogin, attemptLogin } from "../reducers/userSlice";
import hasAuthenticatedUser from "../../../helper/utility/hasAuthenticateUser";
import LoadingButton from "../../../core/global/Button/LoadingButton";
import TooManyLoginAttemptAlert from "./TooManyLoginAttemptAlert";
import routeLink from "../../../helper/constants/routeLink";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin, error, pending, isTooManyAttempt, attemptTooManyInterval } = useSelector((state) => state.user);
    const [isChecked, setChecked] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    });

    useEffect(() => {
        if (isLogin) {
            const hasAccessToken = hasAuthenticatedUser();
            if (hasAccessToken) {
                navigate(routeLink.dashboard.to);
                dispatch(attemptClearLogin());
            }
        }
    }, [isLogin]);

    const handleClickShowPassword = () => setShowPassword(!isShowPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleChangeCheck = () => setChecked(!isChecked);

    // ## Form Submit Action
    const onSubmit = (data) => {
        dispatch(attemptLogin(data));
    };

    return (
        <Paper elevation={0} className={Styles.login_form_wrapper}>
            <Box className={Styles.login_form_header}>
                <Typography variant={"h4"} color={"primary"}>
                    Sign in
                </Typography>
                <Typography variant={"body1"} sx={{ marginTop: "8px" }}>
                    Do not have any agency account?{" "}
                    <CoreLink to={routeLink.register.to}>
                        <Typography variant={"button"} color={"secondary"}>
                            Sign up
                        </Typography>
                    </CoreLink>
                </Typography>
            </Box>

            <Box mt={"48px"} component='form' onSubmit={handleSubmit(onSubmit)}>
                <Box className={Styles.login_form_area}>
                    {/* ## Error Message View ## */}
                    {isTooManyAttempt && error ? (
                        <TooManyLoginAttemptAlert
                            preMessage={"Too many login attempt, try again after "}
                            countDownTime={attemptTooManyInterval}
                        />
                    ) : error ? (
                        <Alert severity='error'>{error}</Alert>
                    ) : (
                        ""
                    )}

                    <CoreTextField
                        type={"email"}
                        name={"email"}
                        label='Email Address'
                        size={"small"}
                        autoFocus={true}
                        error={!!(errors.email && errors.email.message)}
                        helperText={errors.email && errors.email.message}
                        defaultValue={""}
                        {...register("email", registerPattern.email)}
                    />

                    <CoreTextField
                        type={isShowPassword ? "text" : "password"}
                        name={"password"}
                        label='Password'
                        size={"small"}
                        autoComplete={"none"}
                        error={!!(errors.password && errors.password.message)}
                        helperText={errors.password && errors.password.message}
                        defaultValue={""}
                        {...register("password", registerPattern.password)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {isShowPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box className={Styles.formFooter}>
                        <FormControlLabel
                            label='Remember me'
                            control={<Checkbox size='small' checked={isChecked} onChange={handleChangeCheck} />}
                        />

                        <CoreLink to={routeLink.forgot.to}>
                            <Typography variant={"body1"} color={"primary"}>
                                Forgot your password?
                            </Typography>
                        </CoreLink>
                    </Box>

                    <LoadingButton disabled={isTooManyAttempt} isLoading={pending} size={"large"} type={"submit"}>
                        Sign in
                    </LoadingButton>
                </Box>
            </Box>
        </Paper>
    );
};

export default Login;
