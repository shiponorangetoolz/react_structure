import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { styled } from "@mui/material/styles";
import { Box, useTheme } from "@mui/material";

const ThemColorPicker = ({ color, onChange }) => {
    const theme = useTheme();
    const [isShowColorPicker, setShowColorPicker] = useState(false);

    const handleShowColorPicker = () => setShowColorPicker(true);
    const handleCloseColorPicker = () => setShowColorPicker(false);

    const ColorBox = styled(Box)(({ theme }) => ({
        position: "relative",
        zIndex: isShowColorPicker ? 18 : 1,
        height: 30,
        width: 100,
        backgroundColor: color,
        cursor: "pointer",
        padding: theme.spacing(1),
        "& .sketch-picker": {
            position: "relative",
            top: "20px",
            left: "-124px",
        },
    }));

    const ColorHideBox = styled(Box)(() => ({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 16,
    }));

    return (
        <Box
            position='relative'
            sx={{
                p: 0.5,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: theme.palette.action.disabled,
                borderRadius: 1,
            }}
        >
            <ColorBox onClick={handleShowColorPicker}>
                {isShowColorPicker ? <SketchPicker color={color} onChange={onChange} /> : ""}
            </ColorBox>
            {isShowColorPicker && <ColorHideBox onClick={handleCloseColorPicker} />}
        </Box>
    );
};

export default ThemColorPicker;
