import React from "react";
import ThemingLayout from "../../../../views/layout/ThemingLayout";
import Box from "@mui/material/Box";
import Loader from "../../../asset/images/Gif/loader.gif";

const PageSkeletonLoader = () => {
    return (
        <ThemingLayout>
            <div>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <img src={Loader} alt={"loader"} />
                    {/*<CircularProgress />*/}
                </Box>
            </div>
        </ThemingLayout>
    );
};

export default PageSkeletonLoader;
