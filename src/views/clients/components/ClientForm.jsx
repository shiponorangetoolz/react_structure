import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import CoreTextField from "../../../core/global/TextField/CoreTextField";
import CancelButton from "../../../core/global/Button/CancelButton";
import { registerPattern } from "../../../helper/constants/registerPattern";
import { Controller, useForm } from "react-hook-form";
import LoadingButton from "../../../core/global/Button/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import InputValidation from "../../../helper/utility/InputValidation";
import { showErrorSnackbar } from "../../../core/global/Snackbars/reducers/snackbarSlice";
import { useTheme } from "@mui/material/styles";

const ClientForm = ({ isEditMood = false, clientData, handleSubmitClient, handleDrawerClose }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const { formSubmitLoader } = useSelector((state) => state.client);

    const [phoneNumber, setPhoneNumber] = useState("");

    const { handleSubmit, watch, setValue, setError, control } = useForm();

    const password = useRef(null);
    password.current = watch("password", "");

    useEffect(() => {
        if (clientData) {
            setValue("first_name", clientData.first_name || "");
            setValue("last_name", clientData.last_name || "");
            // setValue("phone", clientData.phone || "");
            setPhoneNumber(clientData.phone || "");
            setValue("email", clientData.email || "");
            setValue("city", clientData.city || "");
            setValue("state", clientData.state || "");
        }
    }, [clientData]);

    // ## Form Submit Action
    const onSubmit = (data) => {
        const phoneValidation = InputValidation.phone(phoneNumber);
        if (!phoneValidation.isValid) {
            dispatch(showErrorSnackbar(phoneValidation.message));
            return false;
        }
        data.phone = phoneNumber;
        if (isEditMood) data.uid = clientData.uid ?? clientData.user_uid;
        if (handleSubmitClient) handleSubmitClient(data);
    };

    return (
        <Box
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
            sx={{ p: 3, backgroundColor: theme.palette.background.paper, height: "100%" }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name='first_name'
                        defaultValue=''
                        render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                            <CoreTextField
                                fullWidth
                                type={"text"}
                                size={"small"}
                                required
                                onChange={onChange}
                                value={value}
                                label={"First Name"}
                                placeholder={"First Name"}
                                error={!!(invalid && error.message)}
                                helperText={invalid && error.message}
                            />
                        )}
                        rules={registerPattern.first_name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name='last_name'
                        defaultValue=''
                        render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                            <CoreTextField
                                fullWidth
                                type={"text"}
                                size={"small"}
                                required
                                onChange={onChange}
                                value={value}
                                label={"Last Name"}
                                placeholder={"Last Name"}
                                error={!!(invalid && error.message)}
                                helperText={invalid && error.message}
                            />
                        )}
                        rules={registerPattern.last_name}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Controller
                        fullWidth
                        control={control}
                        name='email'
                        defaultValue=''
                        render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                            <CoreTextField
                                fullWidth
                                type={"text"}
                                size={"small"}
                                required
                                onChange={onChange}
                                value={value}
                                label={"Email"}
                                placeholder={"Email Address"}
                                disabled={isEditMood}
                                error={!!(invalid && error.message)}
                                helperText={invalid && error.message}
                            />
                        )}
                        rules={registerPattern.email}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name='city'
                        defaultValue=''
                        render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                            <CoreTextField
                                fullWidth
                                type={"text"}
                                size={"small"}
                                onChange={onChange}
                                value={value}
                                label={"City"}
                                placeholder={"City"}
                                error={!!(invalid && error.message)}
                                helperText={invalid && error.message}
                            />
                        )}
                        rules={registerPattern.cityNotRequired}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name='state'
                        defaultValue=''
                        render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                            <CoreTextField
                                fullWidth
                                type={"text"}
                                size={"small"}
                                onChange={onChange}
                                value={value}
                                label={"State"}
                                autoComplete='off'
                                placeholder={"State"}
                                error={!!(invalid && error.message)}
                                helperText={invalid && error.message}
                            />
                        )}
                        rules={registerPattern.stateNotRequired}
                    />
                </Grid>

                {!isEditMood && (
                    <Grid item xs={12} sm={6}>
                        {/* ## for hide auto password appear ## */}

                        <Controller
                            control={control}
                            name='password'
                            defaultValue=''
                            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                <CoreTextField
                                    fullWidth
                                    type={"password"}
                                    size={"small"}
                                    required
                                    onChange={onChange}
                                    value={value}
                                    label='Password'
                                    placeholder={"Password"}
                                    error={!!(invalid && error.message)}
                                    helperText={invalid && error.message}
                                />
                            )}
                            rules={registerPattern.password}
                        />
                    </Grid>
                )}

                {!isEditMood && (
                    <Grid item xs={12} sm={6}>
                        <Controller
                            control={control}
                            name={"confirm_password"}
                            defaultValue=''
                            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                <CoreTextField
                                    fullWidth
                                    type={"password"}
                                    size={"small"}
                                    required
                                    onChange={onChange}
                                    value={value}
                                    label='Confirm Password '
                                    placeholder={"Retype Password"}
                                    error={!!(invalid && error.message)}
                                    helperText={invalid && error.message}
                                />
                            )}
                            rules={{
                                required: "Confirm password is required!",
                                validate: (value) => value === password.current || "Passwords do not match",
                            }}
                        />
                    </Grid>
                )}
            </Grid>

            <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={2} mt={2}>
                <CancelButton onClick={handleDrawerClose} type={"button"}>
                    Cancel
                </CancelButton>
                <LoadingButton
                    isLoading={formSubmitLoader}
                    loadingText={isEditMood ? "Updating..." : "Creating..."}
                    type={"submit"}
                    size={"large"}
                    color={"secondary"}
                >
                    {isEditMood ? "Update User" : "Create User"}
                </LoadingButton>
            </Stack>
        </Box>
    );
};

export default ClientForm;
