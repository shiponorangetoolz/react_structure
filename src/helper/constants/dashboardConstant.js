import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import BarChartIcon from "@mui/icons-material/BarChart";
import React from "react";

export const CHART_TYPE_GRAPH = "CHART_TYPE_GRAPH";
export const CHART_TYPE_BAR = "CHART_TYPE_BAR";

export const chartTab = [
    {
        title: "Graph",
        icon: <LegendToggleIcon />,
        type: CHART_TYPE_GRAPH,
    },
    {
        title: "BarChart",
        icon: <BarChartIcon />,
        type: CHART_TYPE_BAR,
    },
];
