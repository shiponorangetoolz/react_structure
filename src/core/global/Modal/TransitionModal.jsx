import React from "react";
import { Backdrop, Fade, Modal, Paper } from "@mui/material";
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

const TransitionModal = ({ open, handleClose, width = 400, disableOutSideClick = false, children, ...rest }) => {
    return (
        <React.Fragment>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={!disableOutSideClick ? handleClose : () => false}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                {...rest}
            >
                <Fade in={open}>
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
                </Fade>
            </Modal>
        </React.Fragment>
    );
};

export default TransitionModal;
