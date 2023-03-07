import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, maxWidth, width }) => ({
    width: width,
    maxWidth: maxWidth,
    '&.MuiTooltip-popper[data-popper-placement*="top"]': {
        "& .MuiTooltip-tooltip": {
            marginBottom: "8px",
        },
    },
    '&.MuiTooltip-popper[data-popper-placement*="bottom"]': {
        "& .MuiTooltip-tooltip": {
            marginTop: "8px",
        },
    },
    '&.MuiTooltip-popper[data-popper-placement*="left"]': {
        "& .MuiTooltip-tooltip": {
            marginRight: "8px",
        },
    },
    '&.MuiTooltip-popper[data-popper-placement*="right"]': {
        "& .MuiTooltip-tooltip": {
            marginLeft: "8px",
        },
    },

    [`& .${tooltipClasses.arrow}`]: {
        // color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: theme.palette.common.black,
        lineHeight: "14px !important",
        maxWidth: maxWidth,
    },
}));

export default function CoreTooltip({ title = "", placement = "top", width = "auto", maxWidth = "auto", children }) {
    return (
        <>
            <BootstrapTooltip title={title} maxWidth={maxWidth} width={width} placement={placement}>
                {children}
            </BootstrapTooltip>
        </>
    );
}
