import React from "react";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import ThemColorPicker from "./ThemColorPicker";
import ReplayIcon from "@mui/icons-material/Replay";

const BrandingColorItem = ({ title, name, color, onChange, onResetColor }) => {
    return (
        <Stack direction={"row"} gap={"50px"} mx={2} mt={2}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: 160,
                }}
            >
                <Typography variant='subtitle1'>{title}</Typography>
                <Tooltip title='Customize your theme color palette manually'>
                    <IconButton size={"small"}>
                        <HelpTwoToneIcon fontSize={"small"} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: 120,
                }}
            >
                <ThemColorPicker color={color} onChange={(color) => onChange(color, name)} />
                <IconButton size={"small"} sx={{ ml: 2 }} onClick={() => onResetColor(name)}>
                    <ReplayIcon fontSize={"medium"} />
                </IconButton>
            </Box>
        </Stack>
    );
};

export default BrandingColorItem;
