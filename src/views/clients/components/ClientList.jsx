import React, { useEffect, useState } from "react";
import Styles from "../styles/Clients.module.css";
import DataTable from "react-data-table-component";
import TableSkeletonLoader from "../../../core/global/SkeletonLoader/components/TableSkeletonLoader";
import { Box, FormControl, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import PopHoverCommonMenu from "../../../core/global/Menu/PopHoverCommonMenu";
import PopHoverCommonMenuItem from "../../../core/global/Menu/PopHoverCommonMenuItem";
import BasicDrawer from "../../../core/global/Drawer/BasicDrawer";
import ClientForm from "./ClientForm";
import InfoModal from "../../../core/global/Modal/InfoModal";
import WarningModalContent from "../../../core/global/WarningModalContent/WarningModalContent";
import warningLogo from "../../../core/asset/images/Icons/warning-logo.svg";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
    clearUpdateFormSubmitSuccess,
    deleteClient,
    filterByStatus,
    getClientsData,
    updateClient,
    updateClientStatus,
} from "../reducers/clientSlice";
import { AGENCY_ROLE_ADMIN_VIEW, WHO_WILL_PAY__FREE } from "../../../helper/constants/coreConstant";

import Avatar from "@mui/material/Avatar";
import FilterListIcon from "@mui/icons-material/FilterList";
import CustomSwitch from "../../../core/global/Switch/CustomSwitch";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NoClientImage from "../../../core/asset/images/Vectors/no-client.svg";
import EmptyPage from "../../../core/global/EmptyComponent/EmptyPage";

const statusList = [
    {
        label: "All",
        value: null,
    },
    {
        label: "Active",
        value: true,
    },
    {
        label: "Inactive",
        value: false,
    },
];

const ClientList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { roleName } = useSelector((state) => state.user);
    const { clientList, page, perPage, total, loading, isEditFormSubmitSuccess, filters } = useSelector(
        (state) => state.client
    );
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const [clientEditOpen, setClientEditOpen] = useState(false);
    const [clientDeleteModalOpen, setClientDeleteModalOpen] = useState(false);
    const [statusModalOpen, setStatusModalOpen] = useState(false);
    const [selectedClientObj, setSelectedClientObj] = useState(null);

    // ## All Menu handler function
    const handleOpenDeleteModal = () => setClientDeleteModalOpen(true);
    const handleCloseDeleteModal = () => setClientDeleteModalOpen(false);
    const handleOpenFilterMenu = (event) => setAnchorElFilter(event.currentTarget);
    const handleCloseFilterMenu = () => setAnchorElFilter(null);

    const handleClientEditDrawerClose = () => setClientEditOpen(false);
    const handleOpenEditModal = () => setClientEditOpen(true);

    const handleSubmitEditClient = (data) => {
        dispatch(updateClient(data));
    };

    // ## handle status change
    const handleOpenStatusModal = (row) => {
        if (AGENCY_ROLE_ADMIN_VIEW !== roleName) {
            setSelectedClientObj(row);
            setStatusModalOpen(true);
        }
    };

    const handleCloseStatusModal = () => setStatusModalOpen(false);

    const handleStatusChange = (row) => {
        dispatch(
            updateClientStatus({
                uid: row.uid,
                status: Number(!row.status),
            })
        );
        handleCloseStatusModal();
    };

    const handleDeleteClient = (row) => {
        dispatch(deleteClient({ uid: row.uid }));
        setClientDeleteModalOpen(false);
    };

    useEffect(() => {
        if (isEditFormSubmitSuccess) {
            setClientEditOpen(false);
            dispatch(clearUpdateFormSubmitSuccess());
        }
    }, [isEditFormSubmitSuccess]);

    const Columns = [
        {
            minWidth: "240px",
            name: (
                <Typography className='truncate' color='text.primary' variant='TableHeader'>
                    Clients info
                </Typography>
            ),
            selector: (row) => {
                return (
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <Avatar src={row.profile_image}>{row.first_name ? row.first_name.charAt(0) : ""}</Avatar>
                        <Box sx={{ width: "100%", maxWidth: "164px" }}>
                            <Typography className='truncate global__table__body__font' variant={"body1"}>
                                {row.first_name ? row.first_name + " " : ""}
                                {row.last_name ? row.last_name : ""}
                            </Typography>
                            <Typography
                                className='truncate global__table__body__font'
                                variant={"body2"}
                                sx={{ color: theme.palette.action.active }}
                            >
                                {row.email || ""}
                            </Typography>
                            <Typography
                                className='truncate global__table__body__font'
                                variant={"body2"}
                                sx={{ color: theme.palette.action.active }}
                            >
                                {row.phone || ""}
                            </Typography>
                        </Box>
                    </Stack>
                );
            },
        },
        {
            minWidth: "142px",
            name: (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Typography className='truncate' color='text.primary' variant='TableHeader'>
                        Status
                    </Typography>
                    <IconButton size={"small"} onClick={handleOpenFilterMenu}>
                        <FilterListIcon color={"action"} />
                    </IconButton>
                </Box>
            ),
            selector: (row) => {
                return (
                    <CustomSwitch
                        rowId={row.uid}
                        onClick={() => handleOpenStatusModal(row)}
                        on={"active"}
                        off={"deactive"}
                        checked={row.status}
                    />
                );
            },
        },
        {
            minWidth: "80px",
            maxWidth: "120px",
            omit: Boolean(AGENCY_ROLE_ADMIN_VIEW === roleName), // For hide omit will be true and show omit will be false
            name: (
                <Typography className='truncate' color='text.primary' variant='TableHeader'>
                    Actions
                </Typography>
            ),
            selector: (row) => {
                const [anchorElAction, setAnchorElAction] = useState(null);

                const handleOpenActionMenu = (event) => setAnchorElAction(event.currentTarget);
                const handleCloseActionMenu = () => setAnchorElAction(null);

                return (
                    <>
                        <IconButton onClick={(e) => handleOpenActionMenu(e)}>
                            <MoreVertIcon />
                        </IconButton>
                        {/* ## Edit and Delete Menu view ## */}
                        <PopHoverCommonMenu
                            elevation={4}
                            anchorEl={anchorElAction}
                            open={Boolean(anchorElAction)}
                            onClose={handleCloseActionMenu}
                        >
                            <PopHoverCommonMenuItem
                                name='Edit'
                                icon={<EditIcon />}
                                onClick={() => {
                                    setSelectedClientObj(row);
                                    handleCloseActionMenu();
                                    handleOpenEditModal();
                                }}
                            />

                            <PopHoverCommonMenuItem
                                name='Delete'
                                icon={<DeleteIcon />}
                                onClick={() => {
                                    setSelectedClientObj(row);
                                    handleCloseActionMenu();
                                    handleOpenDeleteModal();
                                }}
                            />
                        </PopHoverCommonMenu>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        dispatch(getClientsData({ page: page, per_page: perPage, extra: { ...filters } }));
    }, [filters, dispatch]);

    const onChangePerPage = (perPage, newPage) => {
        dispatch(getClientsData({ page: newPage, per_page: perPage, extra: { ...filters } }));
    };

    const onChangePage = (newPage) => {
        dispatch(getClientsData({ page: newPage, per_page: perPage, extra: { ...filters } }));
    };

    // filters actions
    const handleFilterClientStatus = (status) => {
        dispatch(filterByStatus(status));
    };

    return (
        <Box
            className={`${Styles.table} client_table`}
            sx={{
                "& .rdt_TableHeadRow": {
                    backgroundColor: theme.palette.other.outlinedBorder,
                },
                "& .rdt_TableBody": {
                    "& .rdt_TableRow": {
                        borderBottomColor: "rgba(148, 157, 178, 0.24)",
                        backgroundColor: theme.palette.background.paper,
                    },
                },
                "& .rdt_Pagination": {
                    backgroundColor: theme.palette.background.paper,
                },
            }}
        >
            <DataTable
                theme={theme.palette.mode === "dark" ? "dark" : ""}
                persistTableHead
                columns={Columns}
                data={clientList}
                pagination={true}
                paginationServer
                progressPending={loading && !clientList[0]}
                progressComponent={<TableSkeletonLoader columns={Columns} numberOfRows={10} />}
                noDataComponent={
                    <EmptyPage
                        img={NoClientImage}
                        title={"No Client Found!"}
                        subTitle={
                            "Look like you don't have any clients. Click on Create Client button to create a new client and generate revenue."
                        }
                    />
                }
                // paginationPerPage={}
                paginationTotalRows={total}
                paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
                onChangeRowsPerPage={onChangePerPage}
                onChangePage={onChangePage}
            />

            {/* ## Active and Inactive Menu view ## */}
            <PopHoverCommonMenu
                elevation={4}
                anchorEl={anchorElFilter}
                open={Boolean(anchorElFilter)}
                onClose={handleCloseFilterMenu}
            >
                {statusList.map((statusItem) => (
                    <PopHoverCommonMenuItem
                        key={statusItem.label}
                        name={statusItem.label}
                        onClick={() => {
                            handleCloseFilterMenu();
                            handleFilterClientStatus(statusItem.value);
                        }}
                    />
                ))}
            </PopHoverCommonMenu>

            <BasicDrawer open={clientEditOpen} title={"Update Client"} toggleDrawer={handleClientEditDrawerClose}>
                <ClientForm
                    isEditMood={true}
                    clientData={selectedClientObj}
                    handleDrawerClose={handleClientEditDrawerClose}
                    handleSubmitClient={handleSubmitEditClient}
                />
            </BasicDrawer>

            <InfoModal open={clientDeleteModalOpen} width='480px' onClose={handleCloseDeleteModal}>
                <WarningModalContent
                    logo={warningLogo}
                    title={"Warning"}
                    subTitle={"Are you Sure to delete"}
                    subTitleSpan={"Client?"}
                    content={"If you delete this data, you’ll not be able to recover it again."}
                    buttonName={"Delete"}
                    onConfirm={() => handleDeleteClient(selectedClientObj)}
                    onClose={handleCloseDeleteModal}
                />
            </InfoModal>

            <InfoModal open={statusModalOpen} width='480px' onClose={handleCloseStatusModal}>
                <WarningModalContent
                    logo={warningLogo}
                    title={"Warning"}
                    subTitle={`Are you sure to`}
                    subTitleSpan={`${selectedClientObj?.status ? "Inactive" : "Active"} Client?`}
                    buttonName={"Update"}
                    onConfirm={() => handleStatusChange(selectedClientObj)}
                    onClose={handleCloseStatusModal}
                />
            </InfoModal>
        </Box>
    );
};

export default ClientList;
