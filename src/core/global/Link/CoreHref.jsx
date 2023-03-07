import React from "react";
import { Link } from "@mui/material";

const CoreHref = ({ href = "/", children = "", ...rest }) => {
    const style = {
        textDecoration: "inherit",
        color: "inherit",
    };

    return (
        <Link href={href} style={style} {...rest}>
            {children}
        </Link>
    );
};

export default CoreHref;
