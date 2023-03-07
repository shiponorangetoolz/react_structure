import React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";

const PopHoverMenuItem = ({ name, icon, onClick }) => {
    const theme = useTheme();

    return (
        <MenuItem
            // key={setting.name}
            onClick={onClick}
            sx={{
                pt: "6px",
                color: theme.palette.text.primary,
                "& .MuiSvgIcon-root": {
                    color: theme.palette.action.active,
                    marginRight: theme.spacing(2),
                },
            }}
        >
            {icon}
            <Typography variant={"body2"}>{name}</Typography>
        </MenuItem>
    );
};

export default PopHoverMenuItem;
