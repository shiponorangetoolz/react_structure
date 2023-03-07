import React, { useEffect, useState } from "react";
import TransitionWarningAlert from "../../core/global/Alert/TransitionWarningAlert";
import routeLink from "../../helper/constants/routeLink";
import { useSelector } from "react-redux";

const SettingWarning = () => {
    const { agencySettingData } = useSelector((state) => state.agencySetting);

    const [isWarningShow, setIsWarningShow] = useState(true);

    useEffect(() => {
        if (agencySettingData) {
            if (agencySettingData.company_name && agencySettingData.company_logo) {
                setIsWarningShow(false);
            } else {
                setIsWarningShow(true);
            }
        }
    }, [agencySettingData]);

    return (
        <>
            {isWarningShow && (
                <TransitionWarningAlert
                    title={"Complete all of your settings. "}
                    link={routeLink.account_settings.to}
                    linkTitle={"Go to Settings"}
                />
            )}
        </>
    );
};

export default SettingWarning;
