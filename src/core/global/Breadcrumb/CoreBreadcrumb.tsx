import React from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { NavigateNext } from "@mui/icons-material";
import MetaTagHead from "../MetaTagHead/MetaTagHead";

type AppProps = {
    pageInfo: {
        title: string;
        breadcrumbs: {
            name: string;
            path: string;
        }[];
    };
};

const CoreBreadcrumb: React.FC<AppProps> = ({ pageInfo }: AppProps) => {
    const { title, breadcrumbs } = pageInfo;

    const handleClick = (e: any) => {
        console.log("for this function next time we track our path change event");
    };

    return (
        <Box sx={{ pb: 3 }}>
            <Typography variant={"h5"}>{title}</Typography>
            <Breadcrumbs separator={<NavigateNext fontSize='small' />} aria-label='breadcrumb'>
                {breadcrumbs.map((item, index) =>
                    breadcrumbs.length === index + 1 ? (
                        <Typography fontWeight={"bold"} key='3' color='text.primary'>
                            {item.name}
                        </Typography>
                    ) : (
                        <Link
                            key={item.name}
                            underline={item.path ? "hover" : "none"}
                            color={"inherit"}
                            component={RouterLink}
                            to={item.path}
                            onClick={handleClick}
                            style={{ cursor: item.path ? "pointer" : "default" }}
                        >
                            {item.name}
                        </Link>
                    )
                )}
            </Breadcrumbs>

            <MetaTagHead subTitle={pageInfo.title} />
        </Box>
    );
};

export default CoreBreadcrumb;
