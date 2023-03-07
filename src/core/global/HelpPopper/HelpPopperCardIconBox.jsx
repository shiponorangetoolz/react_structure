import { useTheme, styled } from "@emotion/react";
import { OndemandVideo } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const HelpPopperCardIconBox = ({ children, Icon }) => {
    const theme = useTheme();

    return (
        <Box>
            {children}
            <Stack
                direction={"row"}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridColumnGap: "35px",
                    gridRowGap: "10px",
                    flexWrap: "wrap",
                    marginTop: "12px",
                }}
            >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Stack key={item}>
                        <OndemandVideo color={"secondary"} fontSize='large' />
                        <Typography
                            variant='tooltip'
                            sx={{ textAlign: "center", color: theme.palette.action.active, marginTop: "4px" }}
                        >
                            Videos
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};

export default HelpPopperCardIconBox;
