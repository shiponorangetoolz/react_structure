import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const EmptyPage = ({ img = "", title = "", subTitle = "", children = null }) => {
    return (
        <Paper
            elevation={0}
            sx={{ p: 3, maxWidth: "496px", width: "100%", margin: "0 auto", textAlign: "center", mt: 3 }}
        >
            <Typography variant='h5' color='text.primary'>
                {title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ padding: "8px 0 24px 0" }}>
                {subTitle}
            </Typography>
            <Box
                sx={{
                    maxWidth: "496px",
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                {img && <img src={img} width='100%' />}
            </Box>
            {children}
        </Paper>
    );
};

export default EmptyPage;
