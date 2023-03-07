import React, { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import {
    getThemeByMode,
    getThemingColorPalette,
    handleGetThemeMode,
    handleSaveThemeMode,
} from "../theme/helpers/themingUtility";
import Box from "@mui/material/Box";
import { typographyObj } from "../theme/helpers/themingConstant";

export const ColorModeContext = createContext({});

const themeMode = handleGetThemeMode();
const themeModePalette = getThemeByMode(themeMode);

const ThemingLayout = ({ children }) => {
    const [mode, setMode] = useState(themeMode);
    const [currentThemeModePalette, setCurrentThemeModePalette] = useState(themeModePalette);
    const [currentThemePalette, setCurrentThemePalette] = useState(null);

    useEffect(() => {
        const themePalette = getThemingColorPalette();
        if (themePalette !== null) {
            setCurrentThemePalette(themePalette);
        }
    }, []);

    useEffect(() => {
        handleSaveThemeMode(mode);
        const themeModePalette = getThemeByMode(mode);
        setCurrentThemeModePalette(themeModePalette);
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            onChangeThemePalette: (colorPalette) => {
                setCurrentThemePalette(colorPalette);
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    ...currentThemeModePalette,
                    ...(currentThemePalette !== null && {
                        primary: {
                            main: currentThemePalette.primary,
                            contrastText: "#fff",
                        },
                        secondary: {
                            main: currentThemePalette.secondary,
                            contrastText: "#fff",
                        },
                        error: {
                            main: currentThemePalette.error,
                            contrastText: "#fff",
                        },
                        info: {
                            main: currentThemePalette.info,
                            contrastText: "#fff",
                        },
                        success: {
                            main: currentThemePalette.success,
                            contrastText: "#fff",
                        },
                    }),
                },
                typography: typographyObj,
            }),
        [mode, currentThemeModePalette, currentThemePalette]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        bgcolor: "background.default",
                        color: "text.primary",
                        minHeight: "100vh",
                    }}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemingLayout;
