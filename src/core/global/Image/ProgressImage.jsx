import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

const StyledImage = styled("img")({
    maxWidth: "100%",
    // height: "auto",
    "&.img_loading": {
        filter: "blur(10px)",
        clipPath: "inset(0)",
    },
    "&.img_loaded": {
        filter: "blur(0px)",
        transition: "filter 0.5s linear",
    },
});

const ProgressImage = ({ placeholderSrc = "", src = "", alt = "", className = "", ...rest }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    const [isImageLoad, setImageLoading] = useState(false);

    useEffect(() => {
        const img = new Image();

        img.src = src;
        img.onload = () => {
            setImgSrc(src);
            setImageLoading(true);
        };
    }, [src]);

    return (
        <StyledImage
            src={imgSrc}
            alt={alt || ""}
            className={className + " " + (!isImageLoad ? "img_loading" : "img_loaded")}
            {...rest}
        />
    );
};

export default ProgressImage;
