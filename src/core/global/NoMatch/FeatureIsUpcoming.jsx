import React from "react";
import { Box, Paper } from "@mui/material";
import FeatureImage from "../../asset/images/Vectors/multi-guy.svg";
import EmptyPage from "../EmptyComponent/EmptyPage";

const FeatureIsUpcoming = () => {
    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    minHeight: "calc(100vh - 200px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <EmptyPage img={FeatureImage} title={"Upcoming Feature..."} subTitle={"We are working on it."} />
                </Box>
            </Paper>
        </>
    );
};

export default FeatureIsUpcoming;
