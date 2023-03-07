import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hasAuthenticatedUser from "../../helper/utility/hasAuthenticateUser";
import { useDispatch } from "react-redux";
import { getThemingColorPalette } from "../theme/helpers/themingUtility";
import { getThemeColorPallet } from "../theme/reducers/themeSlice";
import routeLink from "../../helper/constants/routeLink";

const PrivateLayout = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // get account and agency company information
    useEffect(() => {
        if (!hasAuthenticatedUser()) {
            navigate(routeLink.login.to);
        }
    }, []);

    // GET themePalette color if localStorage has no color palette save
    useEffect(() => {
        const themePalette = getThemingColorPalette();
        if (!themePalette) {
            dispatch(getThemeColorPallet());
        }
    }, []);

    return (
        <React.Fragment>
            {/* ## After load account setting data and package data then show the Onboard view ## */}

            {children}
        </React.Fragment>
    );
};

export default PrivateLayout;
