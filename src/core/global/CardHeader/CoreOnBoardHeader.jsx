import { Box, Divider, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Styles from "./CoreOnboardHeader.module.css";
import { useTheme } from "@mui/material/styles";
import ToolTipHelp from "../Tooltip/ToolTipHelp";

export const CoreOnBoardHeader = ({ title, subTitle, isCloseButtonShow = true, helpText = "" }) => {
    const theme = useTheme();

    return (
        <>
            <Box className={`${Styles.card__header} ${Styles.hasRightBtn}`}>
                <Box className={Styles.heaer__top}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant='h6'>{title}</Typography>
                        <ToolTipHelp title={helpText} />
                    </Stack>
                    <Typography variant={"body2"} color='text.secondary'>
                        {subTitle}
                    </Typography>
                </Box>
                {isCloseButtonShow && (
                    <Box className={Styles.colse__icon} sx={{ backgroundColor: theme.palette.background.default }}>
                        <ClearIcon sx={{ color: theme.palette.action.active }} />
                    </Box>
                )}
            </Box>
            <Divider />
        </>
    );
};
