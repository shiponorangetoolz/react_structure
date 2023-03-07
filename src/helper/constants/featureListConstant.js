import { BusinessCenter, Leaderboard, QrCode, SocialDistance, Star } from "@mui/icons-material";
import LibraryIcon from "../../core/global/Icons/LibraryIcon";
import React from "react";

export const featureList = [
    {
        id: 21,
        name: "Review Generator",
        icon: <Star color={"action"} fontSize={"small"} />,
    },
    {
        id: 22,
        name: "Social",
        icon: <SocialDistance color={"action"} fontSize={"small"} />,
    },
    {
        id: 23,
        name: "QR Code",
        icon: <QrCode color={"action"} fontSize={"small"} />,
    },
    {
        id: 24,
        name: "GMB",
        icon: <BusinessCenter color={"action"} fontSize={"small"} />,
    },
    {
        id: 25,
        name: "Lead Manage",
        icon: <Leaderboard color={"action"} fontSize={"small"} />,
    },
    {
        id: 26,
        name: "Library",
        icon: <LibraryIcon color={"action"} fontSize={"small"} />,
    },
];
