import React from "react";
import { Check } from "@mui/icons-material";
import { Box, Grid, IconButton, styled, Typography } from "@mui/material";
import Styles from "../../../core/global/Integration/Integration.module.css";
import CoreButton from "../Button/CoreButton";
import Switch from "@mui/material/Switch";

const ItemBox = styled(Box)(({ theme }) => ({
    border: "1px solid rgba(148, 157, 178, 0.12)",
    "& .MuiButton-root svg": {},
}));

const CoreIntegrationItem = ({
    integrationIcon,
    integrationName,
    integrationDescription,
    coreIntegrationHandle,
    isConnected,
    isActive,
    btnText,
    btnIcon,
    color,
    children,
}) => {
    return (
        <ItemBox p={3} spacing={3}>
            <Grid container className={Styles.integration_item__header}>
                <Grid item lg={6} md={6} sm={6}>
                    <IconButton sx={{ p: 0 }}>
                        <img src={integrationIcon} alt={integrationName} />
                    </IconButton>
                    <Typography variant='subtitle1'>{integrationName}</Typography>
                </Grid>

                <Grid item lg={6} md={6} sm={6} textAlign='right' className={Styles.connect_button_grid}>
                    {isActive ? (
                        <div>
                            <CoreButton
                                disableRipple
                                startIcon={isConnected && <Check />}
                                className={Styles.connect_button}
                                variant={"contained"}
                                size={"small"}
                                color={color} //  ? "success" : "info"
                            >
                                {isConnected ? (
                                    <>
                                        {btnIcon} {btnText}
                                    </>
                                ) : (
                                    "Connect"
                                )}
                            </CoreButton>
                            <Switch checked={isConnected} onChange={() => coreIntegrationHandle()} />
                        </div>
                    ) : (
                        <div />
                    )}
                </Grid>
            </Grid>
            {
                <Typography maxWidth={"217px"} variant='body2' color={"text.secondary"}>
                    {integrationDescription}
                </Typography>
            }

            {children}
        </ItemBox>
    );
};

export default CoreIntegrationItem;
