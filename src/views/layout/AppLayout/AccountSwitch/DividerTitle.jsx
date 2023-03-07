import React from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { styled, useTheme } from "@mui/material/styles";

const DividerStyle = styled(Divider)(({ theme }) => ({
    my: theme.spacing(1.5),
    color: theme.palette.text.primary,
    "&:before": {
        display: "none",
    },
    "&:after": {
        borderTopColor: theme.palette.action.active,
        marginTop: "4px",
    },
    "& span": {
        paddingLeft: "0",
    },
}));

const DividerTitle = ({ title }) => {
    return (
        <DividerStyle textAlign='left'>
            <Typography variant={"badge"} sx={{ p: 0 }}>
                {title}
            </Typography>
        </DividerStyle>
    );
};

export default DividerTitle;
