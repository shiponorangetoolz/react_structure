import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./CustomSwitchOnOff.css";
import { useState } from "react";

const Android12Switch = styled(Switch)(({ theme, checked }) => ({
    padding: 12,
    width: "89px",
    height: "56px",
    "@media screen and (max-width: 1366px)": {
        height: "48px",
        width: "79px",
    },
    "& .MuiSwitch-switchBase": {
        top: 7,
        left: 7,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
        left: 20,
        "@media screen and (max-width: 1366px)": {
            left: 17,
        },

        "& .MuiSwitch-thumb": {
            // backgroundColor: theme.palette.success.contrastText,
            color: theme.palette.success.contrastText,
        },
        "& +.MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
        },
    },
    "& .MuiSwitch-track": {
        backgroundColor: theme.palette.grey["300"],
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
            content: '"ON"',
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
            content: '"OFF"',
            right: -17,
            fontSize: 13,
            letterSpacing: 0.16,
            color: theme.palette.text.secondary,
            paddingRight: 63,
            "@media screen and (max-width: 1366px)": {
                fontSize: "12px",
                right: -20,
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

export default function CustomSwitch({ checked = false, onChange, label = "", labelPlacement = "start", ...rest }) {
    const [checkedStatus, setCheckedStatus] = useState(false);

    const handleCheckedStatus = (id) => {
        setCheckedStatus(!checkedStatus);
    };
    return (
        <FormGroup className={checkedStatus ? "checkedOn_switch" : "uncheckedOff_switch"}>
            <FormControlLabel
                control={<Android12Switch checked={checkedStatus} onChange={handleCheckedStatus} />}
                label={label}
                {...rest}
            />
        </FormGroup>
    );
}
