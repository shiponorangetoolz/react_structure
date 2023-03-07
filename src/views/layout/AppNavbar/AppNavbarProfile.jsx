import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import logo from "../../../core/asset/images/Avatar/default_avatar.jpg";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { AccountCircle, Logout } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { attemptLogout } from "../../authUser/reducers/userSlice";
import PopHoverMenuItem from "../../../core/global/Menu/PopHoverMenuItem";
import PopHoverMenu from "../../../core/global/Menu/PopHoverMenu";
import { clearStorageWhenLogOut } from "../../../helper/utility/clearStorageWhenLogOut";
import routeLink from "../../../helper/constants/routeLink";

const settings = [
    {
        name: "Account",
        path: "/settings/account",
        icon: <AccountCircle />,
    },
];

const AppNavbarProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { accountSetting } = useSelector((state) => state.accountSetting);

    const [profileData, setProfileData] = useState({});
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const handleGoToSelectPage = (path) => {
        handleCloseUserMenu();
        navigate(path);
    };

    const handleLogOut = () => {
        handleCloseUserMenu();

        clearStorageWhenLogOut();
        dispatch(attemptLogout());
        navigate(routeLink.login.to);
    };

    useEffect(() => {
        if (accountSetting) {
            setProfileData(accountSetting);
        }
    }, [accountSetting]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt='logo' src={profileData.profile_image || logo} />
                </IconButton>
                <Typography variant={"subtitle2"} sx={{ fontWeight: "bold" }} mx={1}>
                    {profileData.first_name || " "} {profileData.last_name || " "}
                </Typography>
                <IconButton onClick={handleOpenUserMenu}>
                    <ArrowDropDownIcon />
                </IconButton>
            </Box>

            <PopHoverMenu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                    <PopHoverMenuItem
                        key={setting.name}
                        name={setting.name}
                        icon={setting.icon}
                        onClick={() => handleGoToSelectPage(setting.path)}
                    />
                ))}

                <Divider />
                <PopHoverMenuItem name={"Log out"} icon={<Logout />} onClick={handleLogOut} />
            </PopHoverMenu>
        </>
    );
};

export default AppNavbarProfile;
