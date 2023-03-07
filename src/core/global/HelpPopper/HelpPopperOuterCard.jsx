import { Close, Image } from "@mui/icons-material";
import { Box, Divider, IconButton, Popover, styled, useTheme } from "@mui/material";

import Avatar from "../../asset/images/Logo/Avatar.png";

const PopoverNew = styled(Popover)(({ theme }) => ({
    "& .MuiPaper-root": {
        maxWidth: 240,
        width: "100%",
        boxShadow: "1px 2px 2px -1px rgb(0 0 0 / 20%), -4px -4px 6px -4px rgb(0 0 0 / 20%)",
        padding: 16,
        borderRadius: "4px",
    },
}));

const HelpPopperOuterCard = ({ id, open, anchorEl, onClose, children, logo }) => {
    const theme = useTheme();

    const image = logo !== undefined ? logo : "";

    // logo and close show
    return (
        <PopoverNew
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Box sx={{ zIndex: "999", position: "relative" }}>
                <Image
                    className='help__popper_logo'
                    src={Avatar}
                    sx={{ maxWidth: "73px", height: "auto", objectFit: "cover" }}
                />
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        padding: 0,
                    }}
                >
                    <Close
                        fontSize='small'
                        sx={{
                            color: "#949DB2",
                            background: "#F9FAFB",
                            borderRadius: "100px",
                            width: "28px",
                            height: "28px",
                            cursor: "pointer",
                        }}
                    />
                </IconButton>

                <Divider sx={{ mt: theme.spacing(2) }} />
                {children}
            </Box>
        </PopoverNew>
    );
};

export default HelpPopperOuterCard;
