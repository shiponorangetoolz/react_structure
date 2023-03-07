import AuthLayout from "../views/layout/AuthLayout/AuthLayout";
import Login from "../views/authUser/components/Login";
import Register from "../views/authUser/components/Register";
import Forgot from "../views/authUser/components/Forgot";
import ForgotVerification from "../views/authUser/components/ForgotVerification";
import ForgotPasswordSet from "../views/authUser/components/ForgotPasswordSet";
import RegisterVerification from "../views/authUser/components/RegisterVerification";
import routeLink from "../helper/constants/routeLink";

const AuthenticationRoutes = {
    path: "/",
    element: <AuthLayout />,
    children: [
        {
            path: routeLink.login.path,
            element: <Login />,
        },
        {
            path: routeLink.forgot.path,
            element: <Forgot />,
        },
        {
            path: routeLink.forgotVerification.path,
            element: <ForgotVerification />,
        },

        {
            path: routeLink.passwordSet.path,
            element: <ForgotPasswordSet />,
        },
        {
            path: routeLink.register.path,
            element: <Register />,
        },
        {
            path: routeLink.registerVerification.path,
            element: <RegisterVerification />,
        },
    ],
};

export default AuthenticationRoutes;
