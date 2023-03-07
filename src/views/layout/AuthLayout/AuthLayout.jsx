import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Styles from "./AuthLayout.module.css";
import { useTheme } from "@mui/material/styles";
import Logo from "../../../core/asset/images/Logo/earn5_login_logo.png";
import PublicLayout from "../PublicLayout";
import { useState } from "react";
import CoreHref from "../../../core/global/Link/CoreHref";
import ProgressImage from "../../../core/global/Image/ProgressImage";

const AuthLayout = () => {
  const theme = useTheme();


  const [companyInfo, setCompanyInfo] = useState({
    company_name: "Earn5 Star",
    company_logo: Logo,
    description:
      "Keep your reputation intact with Business Review Central. Create your account today and manage your reviews."
  });

  return (
    <Box className={Styles.auth_layout_container}>
      <Box
        className={Styles.auth_layout_left}
        sx={{
          [theme.breakpoints.up("lg")]: {
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
          },
          [theme.breakpoints.down("lg")]: {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary
          }
        }}
      >
        <ProgressImage
          placeholderSrc={""}
          src={companyInfo.company_logo}
          className={Styles.company_logo}
          alt={"company_logo"}
        />

        <Box className={Styles.auth_layout_content}>
          <Typography variant={"h3"} color={"inherit"}>
            {companyInfo.company_name}
          </Typography>
          <Typography className={Styles.company_description} variant={"body1"} color={"inherit"}>
            {companyInfo.description}
          </Typography>
        </Box>
      </Box>

      <Box className={Styles.auth_layout_right}>
        {/* Auth layout children component */}
        <PublicLayout>
          <Outlet />
        </PublicLayout>
      </Box>
    </Box>
  );
};

export default AuthLayout;
