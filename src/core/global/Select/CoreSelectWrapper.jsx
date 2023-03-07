import React from "react";
import { styled } from "@mui/material/styles";
import { FormControl, InputLabel, Select } from "@mui/material";

const FormControlStyled = styled(FormControl)(() => ({
    width: "100%",
    "& .MuiInputLabel-root": {
        // top: "-8px"
    },
}));

const CoreSelectWrapper = ({ value = "", onChange, label = "label", children, ...rest }) => {
    return (
        <FormControlStyled fullWidth size={"small"}>
            <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
            <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={value}
                label={label}
                onChange={onChange}
                {...rest}
            >
                {children}
            </Select>
        </FormControlStyled>
    );
};

export default CoreSelectWrapper;
