import React, { useState } from "react";
import { Alert, Collapse, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import CoreLink from "../Link/CoreLink";

const TransitionWarningAlert = ({ size = "small", title = "", link = "", linkTitle = "" }) => {
    const [open, setOpen] = useState(true);

    return (
        <Collapse in={open}>
            <Alert
                color={"warning"}
                severity={"warning"}
                action={
                    <IconButton
                        aria-label='close'
                        color='inherit'
                        size={size}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <Close fontSize='inherit' />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {title}
                {link && (
                    <Typography variant='buttonLarge' color='info.main'>
                        {" "}
                        <CoreLink to={link}> {linkTitle}</CoreLink>
                    </Typography>
                )}
            </Alert>
        </Collapse>
    );
};

export default TransitionWarningAlert;
