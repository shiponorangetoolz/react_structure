import React from "react";
import { styled } from "@mui/material/styles";
import { Checkbox, FormControlLabel } from "@mui/material";

const FormControlLabelStyled = styled(FormControlLabel)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
        fontSize: "18px",
    },
}));

const CoreCheckbox = ({
    color = "primary",
    label = "",
    defaultChecked = false,
    labelPlacement = "end",
    onChange,
    ...rest
}) => {
    return (
        <FormControlLabelStyled
            control={<Checkbox color={color} defaultChecked={defaultChecked} />}
            label={label}
            labelPlacement={labelPlacement}
            onChange={onChange}
            {...rest}
        />
    );
};

export default CoreCheckbox;
