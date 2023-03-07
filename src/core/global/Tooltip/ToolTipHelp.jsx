import React from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";

const ToolTipHelp = ({ title, placement = "top", arrow = false, color = "action" }) => {
    return (
        <Tooltip title={title} placement={placement} arrow={arrow}>
            <HelpIcon fontSize='small' color={color} />
        </Tooltip>
    );
};

export default ToolTipHelp;
