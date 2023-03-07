import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GlobalStarOneLoader from "../../core/global/SkeletonLoader/components/GlobalStarOneLoader";

const GlobalLayoutLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { accountSetting } = useSelector((state) => state.accountSetting);

    useEffect(() => {
        if (accountSetting) {
            setLoading(false);
        }
    }, [accountSetting]);

    if (loading) {
        return <GlobalStarOneLoader />;
    }
    return children;
};

export default GlobalLayoutLoader;
