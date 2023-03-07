import React from "react";
import { Link } from "react-router-dom";

const CoreLink = ({ to = "/", children = "", ...rest }) => {
    const style = {
        textDecoration: "inherit",
        color: "inherit",
    };

    if (to === "") {
        return children;
    } else {
        return (
            <Link to={to} style={style} {...rest}>
                {children}
            </Link>
        );
    }
};

export default CoreLink;
