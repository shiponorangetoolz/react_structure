const Color = require("color");

export const changeToOutlinedHoverBackground = (color, fade = 0.08) => {
    const colorRgb = new Color(color);
    return colorRgb.fade(1 - fade).toString();
};

export const changeToOutlinedRestingBackground = (color, fade = 0.5) => {
    const colorRgb = new Color(color);
    return colorRgb.fade(1 - fade).toString();
};
