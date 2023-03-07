import React from "react";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import routeLink from "../../../helper/constants/routeLink";
import ToolTipHelp from "../Tooltip/ToolTipHelp";

const BalanceButton = ({
    totalTitle = "Total",
    total = 0,
    remainingTitle = "",
    remainingBalance = 0,
    helpToolTipTitle,
}) => {
    const theme = useTheme();

    return (
        <Link to={routeLink.settings_balance.to}>
            <Stack
                flexDirection='row'
                alignItems='center'
                sx={{
                    border: `1px solid ${theme.palette.info.main}`,
                    background: theme.palette.background.default,
                    borderRadius: "4px",
                    padding: "11px 20px",
                    cursor: "pointer",
                }}
            >
                <TimelapseIcon color='info' />
                <Stack direction={"row"} alignItems='center' spacing={1}>
                    <Typography sx={{ mr: 0.5 }} variant='subtitle2' color='text.secondary'>
                        {totalTitle + " " + total + ": "}
                    </Typography>
                    <Typography variant='subtitle1' color='text.primary'>
                        {remainingTitle + " " + remainingBalance}
                    </Typography>

                    {helpToolTipTitle && remainingBalance === 0 && (
                        <ToolTipHelp title={helpToolTipTitle} color={"info"} />
                    )}
                </Stack>
            </Stack>
        </Link>
    );
};

export default BalanceButton;
