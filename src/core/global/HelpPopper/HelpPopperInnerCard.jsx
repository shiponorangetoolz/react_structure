import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HelpPopperInnerCardItem from "./HelpPopperInnerCardItem";
import { useTheme } from "@mui/material/styles";

const HelpPopperInnerCard = ({ children, isFooter }) => {
    const footer = isFooter !== undefined ? isFooter : false;
    const theme = useTheme();
    return (
        <Box
            sx={{ mt: theme.spacing(2), p: theme.spacing(2), pt: "4px", background: theme.palette.background.default }}
        >
            {children}
            <Box>
                <HelpPopperInnerCardItem
                    subtitle={'Get started with these tools below or see <a href="#">whats new</a>'}
                    title={"Resource Center"}
                />
                <HelpPopperInnerCardItem title={"Support"} />

                <Divider sx={{ paddingTop: "16px" }} />

                <Typography align='center' variant='subtitle2' sx={{ paddingTop: "16px" }} color='primary'>
                    Instant Need Help?
                </Typography>

                <Typography
                    sx={{ display: "flex", justifyContent: "center" }}
                    variant='tooltip'
                    color={theme.palette.text.primary}
                >
                    Call: +12345678901
                </Typography>
            </Box>
        </Box>
    );
};

export default HelpPopperInnerCard;
