import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import HelpPopperCardIconBox from "./HelpPopperCardIconBox";

const HelpPopperInnerCardItem = ({ children, title, subtitle }) => {
    // logo and close show
    // const footer = isFooter !== undefined ? isFooter : false;

    const theme = useTheme();
    return (
        <Box>
            {children}
            <Box>
                <Stack direction={"row"} sx={{ display: "block" }}>
                    <Divider
                        textAlign='left'
                        sx={{
                            mt: theme.spacing(1.5),

                            color: theme.palette.text.primary,
                            "&:before": {
                                display: "none",
                            },
                            "&:after": {
                                borderTopColor: theme.palette.action.active,
                                marginTop: "4px",
                            },
                            "& span": {
                                paddingLeft: "0",
                            },
                        }}
                    >
                        <Typography variant='subtitle1' color={theme.palette.text.primary}>
                            {title}
                        </Typography>
                    </Divider>
                </Stack>
                {subtitle && (
                    <Typography
                        className='popper__inner_card_subtitle'
                        sx={{ display: "block", color: theme.palette.action.active }}
                        variant='tooltip'
                    >
                        {subtitle}
                    </Typography>
                )}
                <HelpPopperCardIconBox />
            </Box>
        </Box>
    );
};

export default HelpPopperInnerCardItem;
