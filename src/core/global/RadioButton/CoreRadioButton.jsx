import React from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

const RadioFormControlLabelStyled = styled(FormControlLabel)(() => ({
    "& .MuiSvgIcon-root": {
        fontSize: "20px",
    },
}));

const CoreRadioButton = ({
    color = "primary",
    checked = false,
    value = "",
    onChange,
    label = "",
    labelPlacement = "end",
    ...rest
}) => {
    return (
        <RadioFormControlLabelStyled value={value} control={<Radio checked={checked} color={color} />} label={label} />
    );
};

export default CoreRadioButton;
