import React from "react";
import { SvgIcon } from "@mui/material";

const ActivityLogIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M4.5 21q-.625 0-1.063-.438T3 19.5v-15q0-.625.438-1.063T4.5 3h5.125q.125-.875.8-1.438T12 1q.9 0 1.575.563.675.562.8 1.437H19.5q.625 0 1.063.438T21 4.5v15q0 .625-.438 1.063T19.5 21Zm0-1.5h15v-15h-15v15ZM7 17h6.825v-1.5H7Zm0-4.25h10v-1.5H7ZM7 8.5h10V7H7Zm5-4.425q.35 0 .613-.263t.263-.613q0-.35-.263-.613-.263-.261-.613-.261t-.613.263q-.263.263-.263.613t.263.613q.263.263.613.263ZM4.5 19.5v-15 15Z' />
        </SvgIcon>
    );
};

export default ActivityLogIcon;
