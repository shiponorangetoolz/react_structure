import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./CustomSwitch.css";

const Android12Switch = styled(Switch)(({ theme, checked }) => ({
    padding: 12,
    width: "106px",
    height: "56px",
    "@media screen and (max-width: 1366px)": {
        width: "94px",
        height: "48px",
    },
    "& .MuiSwitch-switchBase": {
        top: 7,
        left: 7,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
        left: 37,
        "@media screen and (max-width: 1366px)": {
            left: "33px !important",
        },

        "& .MuiSwitch-thumb": {
            // backgroundColor: theme.palette.success.contrastText,
            color: theme.palette.success.contrastText,
        },
        "& +.MuiSwitch-track": {
            backgroundColor: theme.palette.success.main,
            opacity: 1,
        },
    },
    "& .MuiSwitch-track": {
        backgroundColor: theme.palette.action.disabled,
        borderRadius: 30,
        opacity: 1,
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 16,
            height: 16,
        },
        "&:before": {
            content: '"Active"',
            left: 12,
            fontSize: 13,
            letterSpacing: 0.16,
            color: theme.palette.success.contrastText,
            paddingLeft: 10,
            "@media screen and (max-width: 1366px)": {
                fontSize: "12px",
            },
        },
        "&:after": {
            content: '"Deactive"',
            right: 12,
            fontSize: 13,
            letterSpacing: 0.16,
            color: theme.palette.text.secondary,
            paddingRight: 63,
            "@media screen and (max-width: 1366px)": {
                fontSize: "12px",
                paddingRight: 58,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: 24,
        height: 24,
        top: 7,
        left: -12,
        "@media screen and (max-width: 1366px)": {
            width: 16,
            height: 16,
        },
    },
}));

export default function CustomSwitch({
    checkedStatusId,
    rowId,
    checked,
    onChange,
    label = "",
    labelPlacement = "start",
    ...rest
}) {
    return (
        <FormGroup className={checked ? "checked_switch" : "unchecked_switch"}>
            <FormControlLabel control={<Android12Switch checked={checked} {...rest} />} label={label} />
        </FormGroup>
    );
}
