import React from "react";
import { Box, Typography } from "@mui/material";
import CoreTextField from "../../TextField/CoreTextField";
import CancelButton from "../../Button/CancelButton";
import CoreButton from "../../Button/CoreButton";

const ConfirmPassword = ({ value = "", handleChangePassword, handleClose, handleConfirm }) => {
    return (
        <Box>
            <Typography variant='h6' color='text.primary'>
                Are you sure want to Edit
            </Typography>
            <Typography variant='h6' color='secondary.main'>
                Ibrahim Nahid ?
            </Typography>

            <Box
                sx={{
                    padding: "24px 0",
                    "& .MuiFormControl-root": {
                        width: "100%",
                    },
                }}
            >
                <CoreTextField
                    required
                    type={"password"}
                    id='outlined-required'
                    name={"password"}
                    size={"small"}
                    placeholder='Confirm your Password '
                    defaultValue={value}
                    // error
                    // onChange={handleChangePassword}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gridGap: "24px",
                    maxWidth: "328px",
                    width: "100%",
                }}
            >
                <CancelButton onClick={handleClose}>Cancel</CancelButton>
                <CoreButton onClick={handleConfirm} variant={"contained"} size={"large"} color={"secondary"}>
                    Confirm
                </CoreButton>
            </Box>
        </Box>
    );
};

export default ConfirmPassword;
