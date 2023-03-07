import React from "react";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import AppNavbarProfile from "./AppNavbarProfile";

const AppNavbarRight = () => {
    return (
        <Stack direction={"row"} spacing={2}>
            <Divider orientation={"vertical"} flexItem />

            <AppNavbarProfile />
        </Stack>
    );
};

export default AppNavbarRight;
