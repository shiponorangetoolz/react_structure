import { Box, Divider, Typography } from "@mui/material";
import CoreButton from "../Button/CoreButton";
import Styles from "./CoreCardHeader.module.css";

export const CoreCardHeader = ({
    color,
    subTitleVariant = "body1",
    title,
    subTitle,
    isButtonShow,
    buttonText,
    buttonIcon,
    btnCallBack,
    children = "",
}) => {
    const isBtnShow = () => {
        if (isButtonShow === undefined) {
            return false;
        }

        return isButtonShow;
    };

    const btnTextShow = () => {
        if (buttonText === undefined) {
            return "";
        }

        return buttonText;
    };

    const btnIconShow = () => {
        if (buttonIcon === undefined) {
            return "";
        }

        return buttonIcon;
    };

    const isRightBtnShow = () => {
        if (isBtnShow()) {
            const btnText = btnTextShow();
            const btnIcon = btnIconShow();

            return (
                <CoreButton color={color} variant={"contained"} size={"large"} onClick={() => btnCallBack()}>
                    {btnIcon} {btnText}
                </CoreButton>
            );
        }
    };

    return (
        <>
            <Box className={`${Styles.card__header} ${Styles.hasRightBtn}`}>
                <Box>
                    <Typography variant='h6'>{title}</Typography>
                    <Typography variant={subTitleVariant} color='text.secondary'>
                        {subTitle}
                    </Typography>
                </Box>

                {isRightBtnShow()}
                {children}
            </Box>
            <Divider />
        </>
    );
};
