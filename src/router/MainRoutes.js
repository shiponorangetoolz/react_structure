import AppLayout from "../views/layout/AppLayout/AppLayout";
import routeLink from "../helper/constants/routeLink";
import Dashboard from "../views/dashboard/components/Dashboard";
import Clients from "../views/clients/components/Clients";
import { Navigate } from "react-router-dom";

const MainRoutes = {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "",
            element: <Dashboard element={<Navigate to={routeLink.dashboard.to} replace={true} />} />,
            key: routeLink.dashboard.hidden_key,
        },
        {
            path: routeLink.dashboard.path,
            element: <Dashboard />,
            key: routeLink.dashboard.hidden_key,
        },
        {
            path: routeLink.clients.path,
            element: <Clients />,
            key: routeLink.clients.hidden_key,
        },
    ],
};

export default MainRoutes;
