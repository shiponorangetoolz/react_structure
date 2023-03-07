import React, { useEffect } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Paid } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routeLink from "../../../helper/constants/routeLink";

const AppNavbarBalance = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { dollarBalance } = useSelector((state) => state.balance);

    return (
        <Tooltip title='Remaining Dollar Balance'>
            <Link to={routeLink.settings_balance.to}>
                <Button
                    sx={{
                        backgroundColor: theme.palette.background.default,
                        borderRadius: 8,
                        px: 2,
                    }}
                >
                    <Typography
                        variant={"subtitle2"}
                        sx={{
                            fontWeight: "bold",
                            color: theme.palette.action.active,
                        }}
                    >
                        Dollar Balance
                    </Typography>
                    <Paid sx={{ mx: "6px" }} />
                    <Typography
                        variant={"subtitle2"}
                        sx={{
                            fontWeight: "bold",
                            color: theme.palette.text.primary,
                            minWidth: 40,
                        }}
                    >
                        {dollarBalance}
                    </Typography>
                </Button>
            </Link>
        </Tooltip>
    );
};

export default AppNavbarBalance;
