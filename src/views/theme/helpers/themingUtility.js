import { darkModePalette, lightModePalette } from "./themingConstant";

export const rgbaConverter = ({ r = 0, g = 0, b = 0, a = 1 }) => {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const saveThemingColorPalette = (colorPalette) => {
    const jsonColorPalette = JSON.stringify(colorPalette);
    localStorage.setItem("selected_color_palette", jsonColorPalette);
};

export const getThemingColorPalette = () => {
    const data = localStorage.getItem("selected_color_palette");
    return JSON.parse(data);
};

export const handleSaveThemeMode = (mode) => {
    localStorage.setItem("mood", mode);
};

export const handleGetThemeMode = () => {
    const mode = localStorage.getItem("mood");
    if (mode) {
        return mode;
    } else {
        return "light";
    }
};

export const saveThemeByMode = () => {
    localStorage.getItem("theme_mood_palette");
};

export const getThemeByMode = (theme) => {
    if (theme === "dark") {
        return darkModePalette;
    } else {
        return lightModePalette;
    }
};
