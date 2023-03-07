import React, { useEffect } from "react";
import { Box, Paper } from "@mui/material";
import CoreBreadcrumb from "../../../core/global/Breadcrumb/CoreBreadcrumb";
import { clientPageInfo } from "../../../helper/constants/pageInfo";
import Styles from "../styles/Clients.module.css";
import "../styles/Clients.css";
import ClientHeader from "./ClientHeader";
import ClientList from "./ClientList";
import { useDispatch } from "react-redux";
import { resetFilter } from "../reducers/clientSlice";

const Clients = () => {
    const dispatch = useDispatch();

    // unsubscribe or reset state
    useEffect(() => {
        return () => dispatch(resetFilter());
    }, []);

    return (
        <Box className={`clients_container ${Styles.container}`}>
            <CoreBreadcrumb pageInfo={clientPageInfo} />

            <Paper sx={{ p: 0, mb: 3 }} elevation={0}>
                <ClientHeader />
                <ClientList />
            </Paper>
        </Box>
    );
};

export default Clients;
