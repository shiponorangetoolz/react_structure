import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../styles/agencyMainDashboard.module.css";
import { useTheme } from "@mui/material/styles";
import { chartTab } from "../../../helper/constants/dashboardConstant";

const DashboardHeaderController = ({ handleChartTypeShow, selectedChartType }) => {
    const theme = useTheme();

    const activeTabClass = {
        backgroundColor: theme.palette.secondary.main,
        borderColor: `${theme.palette.secondary.main} !important`,
        "& svg": {
            color: `${theme.palette.secondary.contrastText} !important`,
        },
        "& .MuiTypography-root": {
            color: `${theme.palette.secondary.contrastText} !important`,
        },
    };

    const deactivateTabClass = {
        backgroundColor: theme.palette.background.paper,
        borderColor: `${theme.palette.divider} !important`,
        "& svg": {
            color: `${theme.palette.text.primary} !important`,
        },
        "& .MuiTypography-root": {
            color: `${theme.palette.text.primary} !important`,
        },
    };

    return (
        <>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ pb: 3 }}></Stack>
        </>
    );
};

export default DashboardHeaderController;
