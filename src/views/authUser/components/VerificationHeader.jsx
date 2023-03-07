import React from "react";
import Styles from "../styles/VerificationHeader.module.css";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const VerificationHeader = ({ imgIcon, subHeading, heading, email }) => {
    return (
        <Box className={Styles.verification_header}>
            <img className={Styles.img_icon} src={imgIcon} alt={"color full email icon"} />
            <Typography variant={"body1"} sx={{ mt: "24px", mb: "8px" }}>
                {subHeading}
            </Typography>
            <Typography variant={"h4"} color={"primary"} sx={{ mb: "8px" }}>
                {heading}
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"}>
                {"We've emailed a 6-digit confirmation code to "}
                <Typography variant={"body2"} color={"text.primary"} component={"strong"}>
                    {email}
                </Typography>
                {" .Please enter the code in below box to verify your email."}
            </Typography>
        </Box>
    );
};

export default VerificationHeader;
