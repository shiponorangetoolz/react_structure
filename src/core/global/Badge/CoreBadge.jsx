import React from "react";
import { Badge } from "@mui/material";

const CoreBadge = (color = "secondary", badgeContent = 0, children, ...rest) => {
    return (
        <Badge color='secondary' badgeContent={badgeContent} {...rest}>
            {children}
        </Badge>
    );
};

export default CoreBadge;
