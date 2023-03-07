import { Box, Divider, Typography } from "@mui/material";
import Styles from "./CoreCardHeaderWidthLeftChild.module.css";

const CoreCardHeaderWithLeftChild = ({ subTitleVariant = "body1", title, children, subTitle = "" }) => {
    return (
        <>
            <Box className={`${Styles.card__header} ${Styles.hasRightBtn}`}>
                <Box>
                    <Typography
                        variant='h6'
                        sx={{
                            "@media screen and (max-width: 1366px)": {
                                fontSize: "16px",
                            },
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography variant={subTitleVariant} color='text.secondary'>
                        {subTitle}
                    </Typography>
                </Box>
                <Box>{children}</Box>
            </Box>
            <Divider />
        </>
    );
};

export default CoreCardHeaderWithLeftChild;
