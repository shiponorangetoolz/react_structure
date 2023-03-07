import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import img from "../../asset/images/Vectors/no-page-found.svg";
import CoreButton from "../Button/CoreButton";
import { ArrowBack } from "@mui/icons-material";
import CoreLink from "../Link/CoreLink";
import routeLink from "../../../helper/constants/routeLink";

const NoMatch = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: "100%",
                height: "100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box>
                <Typography variant='h3' color='text.primary'>
                    Whoops!
                </Typography>
                <Typography variant='h6' color='text.secondary'>
                    This page is unavailable. ( agency )
                </Typography>
                <Typography variant='body2' color='text.secondary' sx={{ padding: "8px 0 24px 0" }}>
                    {"You don't have access to this Page or it doesn't exist anymore."}
                </Typography>
                <Box
                    sx={{
                        maxWidth: "496px",
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <img src={img} width='100%' />
                </Box>
                <CoreLink to={routeLink.dashboard.path}>
                    <CoreButton variant='contained' color='secondary' size='large' startIcon={<ArrowBack />}>
                        Back to Dashboard
                    </CoreButton>
                </CoreLink>
            </Box>
        </Paper>
    );
};

export default NoMatch;
