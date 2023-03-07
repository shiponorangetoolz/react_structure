import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../views/layout/AppLayout/AppLayout";
import Login from "../views/authUser/components/Login";
import Register from "../views/authUser/components/Register";
import AuthLayout from "../views/layout/AuthLayout/AuthLayout";
import NoMatch from "../core/global/NoMatch/NoMatch";
import Dashboard from "../views/dashboard/components/Dashboard";
import RegisterVerification from "../views/authUser/components/RegisterVerification";
import Forgot from "../views/authUser/components/Forgot";
import ForgotVerification from "../views/authUser/components/ForgotVerification";
import ForgotPasswordSet from "../views/authUser/components/ForgotPasswordSet";
import Clients from "../views/clients/components/Clients";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/agency' element={<AuthLayout />}>
                <Route index element={<Navigate to='login' replace={true} />} />
                <Route path='login' element={<Login />} />
                <Route path='forgot' element={<Forgot />} />
                <Route path='forgot/verification' element={<ForgotVerification />} />
                <Route path='password/set' element={<ForgotPasswordSet />} />
                <Route path='register' element={<Register />} />
                <Route path='register/verification' element={<RegisterVerification />} />
            </Route>

            <Route path='/' element={<AppLayout />}>
                <Route index element={<Navigate to='dashboard' replace={true} />} />
                <Route path='agency/dashboard' element={<Dashboard />} />
                <Route path='agency/clients' element={<Clients />} />
            </Route>

            <Route path='*' element={<NoMatch />} />
        </Routes>
    );
};

export default AppRouter;
