import DashboardIcon from "@mui/icons-material/Dashboard";
import RateReviewIcon from "@mui/icons-material/RateReview";
import React from "react";
import routeLink from "../../../../helper/constants/routeLink";

export const sidebarMenu = [
    {
        id: 1,
        name: routeLink.dashboard.name,
        location: routeLink.dashboard.to,
        key: routeLink.dashboard.hidden_key,
        icon: (color = "inherit", size = "small") => <DashboardIcon color={color} fontSize={"small"} />,
    },
    {
        id: 2,
        name: routeLink.clients.name,
        location: routeLink.clients.to,
        key: routeLink.clients.hidden_key,
        icon: (color = "inherit", size = "small") => <RateReviewIcon color={color} fontSize={"small"} />,
    },
];
