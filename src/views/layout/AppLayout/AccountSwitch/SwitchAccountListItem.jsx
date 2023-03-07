import React from "react";
import { Person } from "@mui/icons-material";
import compressString from "../../../../helper/utility/compressString";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SwitchAccountListItem = ({ clientData, handleSwitchAccount }) => {
    const theme = useTheme();

    return (
        <Stack
            direction={"row"}
            spacing={2}
            onClick={() => handleSwitchAccount(clientData)}
            sx={{
                cursor: "pointer",
                px: 2,
                py: 1,
                "&:hover": {
                    background: theme.palette.background.default,
                    borderRadius: 8,
                    pl: 2.25,
                    transition: "0.2s",
                },
            }}
        >
            <Person fontSize='small' color={"action"} />
            <Typography variant={"body2"} color={"text.secondary"}>
                {compressString(
                    clientData.first_name || clientData.last_name
                        ? clientData.first_name + " " + clientData.last_name
                        : clientData.email,
                    18
                )}
            </Typography>
        </Stack>
    );
};

export default SwitchAccountListItem;
