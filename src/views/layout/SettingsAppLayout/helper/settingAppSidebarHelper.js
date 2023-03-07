import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import PaymentsIcon from "@mui/icons-material/Payments";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import routeLink from "../../../../helper/constants/routeLink";
import { AccountBalanceWallet, Construction, SettingsApplications } from "@mui/icons-material";

export const settingAppSidebar = [
    {
        id: 70,
        name: "Settings",
        location: "",
        icon: (color = "inherit", size = "small") => <SettingsIcon color={"inherit"} fontSize={"small"} />,
        subMenu: [
            {
                id: 701,
                name: routeLink.account_settings.name,
                key: routeLink.account_settings.hidden_key,
                location: routeLink.account_settings.to,
                icon: (color = "inherit", size = "small") => (
                    <ManageAccountsIcon color={"inherit"} fontSize={"small"} />
                ),
            },
            {
                id: 702,
                name: routeLink.agency_settings.name,
                key: routeLink.agency_settings.hidden_key,
                location: routeLink.agency_settings.to,
                icon: (color = "inherit", size = "small") => <LocationCityIcon color={"inherit"} fontSize={"small"} />,
            },
            {
                id: 703,
                name: routeLink.white_level_settings.name,
                key: routeLink.white_level_settings.hidden_key,
                location: routeLink.white_level_settings.to,
                icon: (color = "inherit", size = "small") => <DashboardIcon color={"inherit"} fontSize={"small"} />,
            },
            {
                id: 704,
                name: routeLink.system_email.name,
                key: routeLink.system_email.hidden_key,
                location: routeLink.system_email.to,
                icon: (color = "inherit", size = "small") => <EmailIcon color={"inherit"} fontSize={"small"} />,
            },
            {
                id: 705,
                name: routeLink.email_provider.name,
                key: routeLink.email_provider.hidden_key,
                location: routeLink.email_provider.to,
                icon: (color = "inherit", size = "small") => <EmailIcon color={"inherit"} fontSize={"small"} />,
            },
            {
                id: 706,
                name: routeLink.smsProvider.name,
                key: routeLink.smsProvider.hidden_key,
                location: routeLink.smsProvider.to,
                icon: (color = "inherit", size = "small") => <MessageIcon color={"inherit"} fontSize={"small"} />,
            },

            {
                id: 707,
                name: routeLink.agency_staff.name,
                key: routeLink.agency_staff.hidden_key,
                location: routeLink.agency_staff.to,
                icon: (color = "inherit", size = "small") => <PeopleIcon color={"inherit"} fontSize={"small"} />,
            },
            {
                id: 708,
                name: routeLink.agencyBilling.name,
                key: routeLink.agencyBilling.hidden_key,
                location: routeLink.agencyBilling.to,
                icon: (color = "inherit", size = "small") => <PaymentsIcon color={"inherit"} fontSize={"small"} />,
            },
            {
                id: 709,
                name: routeLink.clientPayments.name,
                key: routeLink.clientPayments.hidden_key,
                location: routeLink.clientPayments.to,
                icon: (color = "inherit", size = "small") => <PaymentsIcon color={"inherit"} fontSize={"small"} />,
            },

            // {
            //     id: 710,
            //     name: "Revenue Model",
            //     location: "/settings/revenue-model",
            //     icon: (color = "inherit", size = "small") => <PaymentsIcon color={"inherit"} fontSize={"small"} />,
            // },
            // {
            //     id: 711,
            //     name: "Package Pricing",
            //     location: "/settings/package-pricing",
            //     icon: (color = "inherit", size = "small") => <BusinessCenter color={"inherit"} fontSize={"small"} />,
            // },

            {
                id: 710,
                name: routeLink.settings_balance.name,
                location: routeLink.settings_balance.to,
                key: routeLink.settings_balance.hidden_key,
                icon: (color = "inherit", size = "small") => (
                    <AccountBalanceWallet color={"inherit"} fontSize={"small"} />
                ),
            },
            {
                id: 716,
                name: routeLink.priceSettings.name,
                key: routeLink.priceSettings.hidden_key,
                location: routeLink.priceSettings.to,
                icon: (color = "inherit", size = "small") => (
                    <SettingsApplications color={"inherit"} fontSize={"small"} />
                ),
            },
            // {
            //     id: 711,
            //     name: routeLink.privacy_policy.name,
            //     key: routeLink.privacy_policy.hidden_key,
            //     location: routeLink.privacy_policy.to,
            //     icon: (color = "inherit", size = "small") => <PrivacyTipIcon color={"inherit"} fontSize={"small"} />,
            // },
            {
                id: 712,
                name: routeLink.general_settings.name,
                location: routeLink.general_settings.to,
                key: routeLink.general_settings.hidden_key,
                icon: (color = "inherit", size = "small") => <Construction color={"inherit"} fontSize={"small"} />,
            },
        ],
    },
];
