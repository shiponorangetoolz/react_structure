import NoMatch from "../core/global/NoMatch/NoMatch";
import React from "react";

const PublicRoutes = [
    {
        path: "*",
        element: <NoMatch />,
    },
];

export default PublicRoutes;
