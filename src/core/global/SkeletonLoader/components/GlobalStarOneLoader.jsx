import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../asset/lotties/starone_loader.json";

const GlobalStarOneLoader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={500} width={400} />
        </div>
    );
};

export default GlobalStarOneLoader;
