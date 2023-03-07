import React from "react";
import { Box, FormControlLabel, Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColorBoxWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    "& .MuiBox-root:first-of-type": {
        borderTopLeftRadius: 4,
    },
    "& .MuiBox-root:last-of-type": {
        borderTopRightRadius: 4,
    },
}));

const ColorBox = styled(Box)(() => ({
    height: 62,
    width: 50,
}));

const RadioButtonWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: 40,
    width: 250,
    borderColor: theme.palette.text.disabled,
    borderWidth: "0 1px 1px 1px",
    borderStyle: "solid",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    "& .MuiFormControlLabel-root": {
        marginLeft: 4,
    },
}));

const ColorPaletteItem = ({ colorPalette, handleThemePaletteSelect }) => {
    return (
        <Box m={1}>
            <ColorBoxWrapper>
                <ColorBox sx={{ backgroundColor: colorPalette.primary }} />
                <ColorBox sx={{ backgroundColor: colorPalette.secondary }} />
                <ColorBox sx={{ backgroundColor: colorPalette.error }} />
                <ColorBox sx={{ backgroundColor: colorPalette.info }} />
                <ColorBox sx={{ backgroundColor: colorPalette.success }} />
            </ColorBoxWrapper>

            <RadioButtonWrapper>
                <FormControlLabel
                    sx={{ textTransform: "capitalize" }}
                    value={colorPalette.name}
                    control={<Radio />}
                    label={colorPalette.name}
                    onChange={() => handleThemePaletteSelect(colorPalette)}
                />
            </RadioButtonWrapper>
        </Box>
    );
};

export default ColorPaletteItem;
