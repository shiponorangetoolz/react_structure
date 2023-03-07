import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import FavIcon from "../../asset/images/Logo/earn5fav.png";

function MetaTagHead({ subTitle = "" }) {
    const [agencyInfo, setAgencyInfo] = useState({});
    const { agencySettingData } = useSelector((state) => state.agencySetting);

    useEffect(() => {
        if (agencySettingData) {
            setAgencyInfo(agencySettingData);
        }
    }, [agencySettingData]);

    return (
        <Helmet>
            <meta charSet='utf-8' />

            {subTitle ? (
                <title>{subTitle}</title>
            ) : agencyInfo.company_name ? (
                <title>{agencyInfo.company_name}</title>
            ) : (
                ""
            )}

            {agencyInfo.fav_icon ? (
                <link id='favicon' rel='icon' href={agencyInfo.fav_icon} type='image/x-icon' />
            ) : (
                <link id='favicon' rel='icon' href={FavIcon} type='image/x-icon' />
            )}

            {agencyInfo.keyword && <meta name='keywords' content={agencyInfo.keyword} />}
            {agencyInfo.company_name && <meta name={"author"} content={agencyInfo.company_name} />}

            {agencyInfo.description && <meta name='description' content={agencyInfo.description} />}
            {agencyInfo.web_site_url && <link rel='canonical' href={agencyInfo.web_site_url} />}
        </Helmet>
    );
}

export default MetaTagHead;
