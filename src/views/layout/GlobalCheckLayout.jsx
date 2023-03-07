import React, { useCallback, useEffect, useRef } from "react";
import { clearStorageWhenLogOut } from "../../helper/utility/clearStorageWhenLogOut";
import { attemptLogout, attemptRefreshToken } from "../authUser/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CookieService from "../../services/cookie/cookie.service";
import routeLink from "../../helper/constants/routeLink";

const GlobalCheckLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Global window logout function
    window.handleLogOut = () => {
        clearStorageWhenLogOut();
        dispatch(attemptLogout());
        navigate(routeLink.login.to);
        console.log("hit ==> window.handleLogOut ==>");
    };

    const intervalRef = useRef();
    const getToken = useCallback(() => {
        if (CookieService.checkCookie(process.env.REACT_APP_ACCESS_TOKEN)) {
            dispatch(attemptRefreshToken());
        }
    }, []);

    // Trigger API to get a new token before token gets expired.
    useEffect(() => {
        // 6 minutes interval as our token will expire after 7 minutes.
        const interval = setInterval(() => getToken(), 1000 * 60 * 30);
        intervalRef.current = interval;
        return () => clearInterval(interval);
    }, [getToken]);

    return null;
};

export default GlobalCheckLayout;
