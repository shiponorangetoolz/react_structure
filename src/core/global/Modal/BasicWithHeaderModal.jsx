import React from "react";
import { Divider, Modal, Paper, Stack, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";

const PaperStyle = styled(Paper)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #222",
    boxShadow: 24,
}));

const BasicWithHeaderModal = ({
    modalTitle = "",
    open,
    onClose,
    width = 700,
    disableOutSideClick = false,
    children,
    ...rest
}) => {
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={!disableOutSideClick ? onClose : () => false}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                {...rest}
            >
                <PaperStyle sx={{ width: width, border: 0, boxShadow: "none" }}>
                    <Stack
                        direction={"row"}
                        justifyContent='space-between'
                        alignContent='center'
                        sx={{ padding: "24px 24px 16px 24px" }}
                    >
                        <Typography variant='h6' color='text.primary'>
                            {modalTitle}
                        </Typography>
                        <IconButton onClick={onClose}>
                            <Close fontSize={"medium"} />
                        </IconButton>
                    </Stack>
                    <Divider />

                    <Box>{children}</Box>
                </PaperStyle>
            </Modal>
        </React.Fragment>
    );
};

export default BasicWithHeaderModal;
