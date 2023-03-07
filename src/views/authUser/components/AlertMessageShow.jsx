import React from "react";
import { Alert } from "@mui/lab";

const AlertMessageShow = ({ error }) => {
    if (!error) {
        return "";
    }
    if (typeof error === "string") {
        return <Alert severity='error'>{error}</Alert>;
    } else if (typeof error === "object") {
        const arrayError = [];
        for (const errName in error) {
            arrayError.push(error[errName]);
        }

        return (
            <>
                {arrayError.map((item, index) => (
                    <Alert key={index} severity='error'>
                        {item}
                    </Alert>
                ))}
            </>
        );
    }

    return <div></div>;
};

export default AlertMessageShow;
