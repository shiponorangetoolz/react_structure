import React, { useEffect, useState } from "react";
import { Box, FormControl, InputAdornment, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import BasicDrawer from "../../../core/global/Drawer/BasicDrawer";
import ClientForm from "./ClientForm";
import CoreButton from "../../../core/global/Button/CoreButton";
import { useDispatch, useSelector } from "react-redux";
import { clearFormSubmitSuccess, createClient, filterBySearch } from "../reducers/clientSlice";
import { AGENCY_ROLE_ADMIN_VIEW } from "../../../helper/constants/coreConstant";

const ClientHeader = () => {
    const dispatch = useDispatch();
    const { roleName } = useSelector((state) => state.user);
    const { isFormSubmitSuccess } = useSelector((state) => state.client);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearch = (value) => {
        setSearch(value);
        dispatch(filterBySearch(value));
    };

    const toggleDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen);

    const handleSubmitClient = (data) => {
        dispatch(createClient(data));
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    useEffect(() => {
        if (isFormSubmitSuccess) {
            toggleDrawerOpen();
            dispatch(clearFormSubmitSuccess());
        }
    }, [isFormSubmitSuccess]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gridGap: `${roleName === AGENCY_ROLE_ADMIN_VIEW ? "0px" : "24px"}`,
                    p: 3,
                }}
            >
                <FormControl>
                    <TextField
                        size='small'
                        type={"search"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Search fontSize='small' color={"action"} />
                                </InputAdornment>
                            ),
                            position: "end",
                        }}
                        placeholder='Search Client'
                        value={search}
                        onChange={(event) => {
                            handleSearch(event.target.value);
                        }}
                    />
                </FormControl>
                {roleName === AGENCY_ROLE_ADMIN_VIEW ? (
                    <div />
                ) : (
                    <CoreButton
                        variant={"contained"}
                        size={"large"}
                        color={"secondary"}
                        startIcon={<Add />}
                        onClick={toggleDrawerOpen}
                    >
                        Create Client
                    </CoreButton>
                )}
            </Box>

            <BasicDrawer open={isDrawerOpen} title={"Create Client"} toggleDrawer={toggleDrawerOpen}>
                <ClientForm handleDrawerClose={handleDrawerClose} handleSubmitClient={handleSubmitClient} />
            </BasicDrawer>
        </>
    );
};

export default ClientHeader;
