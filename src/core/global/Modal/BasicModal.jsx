import React from "react";
import { Modal, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #222",
    boxShadow: 24,
};

const BasicModal = ({ open, handleClose, width = 400, disableOutSideClick = false, children, ...rest }) => {
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={!disableOutSideClick ? handleClose : () => false}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                {...rest}
            >
                <Paper sx={{ ...style, width: width }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 2,
                            pt: 2,
                            pb: 1,
                        }}
                    >
                        <Typography id='basic-modal-title' variant='h6' component='h2'>
                            Basic Modal Header
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>{children}</Box>
                </Paper>
            </Modal>
        </React.Fragment>
    );
};

export default BasicModal;
