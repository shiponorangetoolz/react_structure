import React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormControlLabelStyled = styled(FormControlLabel)(({ theme }) => ({
    marginLeft: 0,
    "& .MuiTypography-root": {
        color: theme.palette.text.secondary,
    },
}));

const CoreSwitch = ({ checked = false, onChange, label = "", labelPlacement = "start", ...rest }) => {
    return (
        <FormControlLabelStyled
            control={<Switch checked={checked} onChange={onChange} />}
            label={label}
            labelPlacement={labelPlacement}
            {...rest}
        />
    );
};

export default CoreSwitch;
