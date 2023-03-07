import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const NoDataFoundFeature = ({ img = "", title = "", subTitle = "", children = "" }) => {
    return (
        <Paper
            elevation={0}
            sx={{ p: 3, maxWidth: "600px", width: "100%", margin: "0 auto", textAlign: "center", mt: 3 }}
        >
            <Box
                sx={{
                    maxWidth: "363px",
                    width: "100%",
                    margin: "0 auto",
                    "@media screen and (min-width: 16px)": {
                        maxWidth: "170px",
                    },
                }}
            >
                {img && <img src={img} width='100%' />}
            </Box>
            <Typography variant='h3' color='info.main'>
                {title}
            </Typography>
            <Typography variant={"h6"} color='text.secondary' sx={{ padding: "8px 0 24px 0" }}>
                {subTitle}
            </Typography>
            {children}
        </Paper>
    );
};

export default NoDataFoundFeature;
