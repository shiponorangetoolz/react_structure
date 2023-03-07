import { Accordion, styled } from "@mui/material";
import React from "react";

const AccordionStyle = styled(Accordion)(() => ({
    boxShadow: "none !important",
    "& .MuiAccordionSummary-root": {
        paddingLeft: "0",
    },
    "& .MuiAccordionSummary-content": {
        margin: "0 !important",
    },
    "& .card__header": {},
    "& .circleAddNewIcon": {
        borderRadius: "50px",
    },
}));

const CoreAccordion = AccordionStyle;

export default CoreAccordion;
