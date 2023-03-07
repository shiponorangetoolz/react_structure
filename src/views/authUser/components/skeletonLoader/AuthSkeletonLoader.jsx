import React from "react";
import Styles from "../../styles/login.module.css";
import { Paper, Box, Skeleton } from "@mui/material";

const AuthSkeletonLoader = () => {
    return (
        <Paper elevation={0} className={Styles.login_form_wrapper}>
            <Box className={Styles.login_form_header}>
                <Skeleton variant='text' />
                <Skeleton variant='text' />
            </Box>
            <Box mt={"48px"}>
                <Box className={Styles.login_form_area}>
                    <Skeleton variant='rectangular' />
                    <Skeleton variant='rectangular' />
                    <Box className={Styles.formFooter}>
                        <Skeleton variant='text' />
                        <Skeleton variant='text' />
                    </Box>
                    <Skeleton variant='rectangular' />
                </Box>
            </Box>
        </Paper>
    );
};

export default AuthSkeletonLoader;
