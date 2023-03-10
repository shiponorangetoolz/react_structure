export const themePaletteList = [
    {
        id: 1,
        name: "default theme",
        primary: "#6438BC",
        secondary: "#00B4D8",
        error: "#FF686B",
        info: "#20A4F3",
        success: "#45B854",
    },
    {
        id: 2,
        name: "orange",
        primary: "#E74645",
        secondary: "#FB7756",
        error: "#FACD60",
        info: "#FDFA66",
        success: "#1AC0C6",
    },
    {
        id: 3,
        name: "purple",
        primary: "#540D6E",
        secondary: "#EE4266",
        error: "#FFD23F",
        info: "#3BCEAC",
        success: "#0EAD69",
    },
    {
        id: 4,
        name: "pastal",
        primary: "#22577A",
        secondary: "#38A3A5",
        error: "#57CC99",
        info: "#80ED99",
        success: "#C7F9CC",
    },
    {
        id: 5,
        name: "dark green",
        primary: "#1A4301",
        secondary: "#245501",
        error: "#538D22",
        info: "#73A942",
        success: "#AAD576",
    },
    {
        id: 6,
        name: "french plum",
        primary: "#880E4F",
        secondary: "#FF9800",
        error: "#2196F3",
        info: "#4A148C",
        success: "#009357",
    },
    {
        id: 7,
        name: "naples yellow",
        primary: "#F9DE59",
        secondary: "#E8A628",
        error: "#F98365",
        info: "#C33124",
        success: "#A1DFFB",
    },
    {
        id: 8,
        name: "dark blue",
        primary: "#012E67",
        secondary: "#9CACBF",
        error: "#2B6684",
        info: "#032E42",
        success: "#01839D",
    },
];

const other = {
    outlinedBorder: "rgba(148, 157, 178, 0.12)",
};

export const darkModePalette = {
    mode: "dark",
    common: {
        black: "#000",
        white: "#fff",
    },
    background: {
        paper: "#161C24",
        default: "#212B36",
    },
    text: {
        primary: "#FFFFFF",
        secondary: "rgba(255,255,255,0.6)",
        disabled: "rgba(255,255,255,0.38)",
    },
    primary: {
        main: "#6438BC", // default

        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main and palette.action.hover,
        containedHoverBackground: "#462784",
        contrastText: "#fff",
    },
    secondary: {
        main: "#00B4D8",
        contrastText: "#fff",
    },
    error: {
        main: "#FF686B",
        contrastText: "#fff",
    },
    warning: {
        main: "#FF7F11",
        contrastText: "#fff",
    },
    info: {
        main: "#20A4F3",
        contrastText: "#fff",
    },
    success: {
        main: "#45B854",
        contrastText: "#fff",
    },
    other: other,
    action: {
        active: "rgba(255, 255, 255, 0.9)",
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.03,
        selected: "rgba(255, 255, 255, 0.8)",
        selectedOpacity: 0.08,
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
    },
};

export const lightModePalette = {
    mode: "light",
    common: {
        black: "#000",
        white: "#fff",
    },
    background: {
        paper: "#FFFFFF",
        default: "#F9FAFB",
    },
    text: {
        primary: "#03060B",
        secondary: "rgba(3, 6, 11, 0.5)",
        disabled: "rgba(3, 6, 11, 0.2)",
    },
    primary: {
        main: "#6438BC", // default
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main and palette.action.hover,
        contrastText: "#fff",
    },
    secondary: {
        main: "#00B4D8",
        contrastText: "#fff",
    },
    error: {
        main: "#FF686B",
        contrastText: "#fff",
    },
    warning: {
        main: "#FF7F11",
        contrastText: "#fff",
    },
    info: {
        main: "#20A4F3",
        contrastText: "#fff",
    },
    success: {
        main: "#45B854",
        contrastText: "#fff",
    },
    other: other,
    action: {
        active: "#949DB2",
        hover: "rgba(100, 56, 188, 0.04)",
        hoverOpacity: 0.03,
        selected: "rgba(28, 15, 19, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(3, 6, 11, 0.26)",
        disabledBackground: "rgba(3, 6, 11, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(28, 15, 19, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
    },
};

export const typographyObj = {
    htmlFontSize: 16,
    fontFamily: ["Lato", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "96px",
        lineHeight: "112px",
        letterSpacing: "0",
    },
    h2: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "3.75rem",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
    },
    h3: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "48px",
        lineHeight: "60px",
        letterSpacing: "0",
    },
    h4: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "48px",
        letterSpacing: "0.25px",
    },
    h5: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: 1.334,
        letterSpacing: "0em",
    },
    h6: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "30px",
        letterSpacing: "0.15px",
    },
    subtitle1: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "1rem",
        lineHeight: 1.75,
        letterSpacing: "0.00938em",
    },
    subtitle2: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.1px",
    },
    body1: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "28px",
        letterSpacing: "0.15px",
    },
    body2: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
    },
    button: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 500,
        fontSize: "15px",
        lineHeight: "26px",
        letterSpacing: "0.46px",
        textTransform: "capitalizes",
        borderRadius: "4px",
    },
    caption: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "0.4px",
    },
    overline: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "1px",
        textTransform: "uppercase",
    },
    avatarLetter: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "20px",
        letterSpacing: "0.14px",
    },
    inputLevel: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "12px",
        letterSpacing: "0.15px",
    },
    helperText: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "14px",
        letterSpacing: "0.4px",
    },
    inputText: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
    },
    tooltip: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: "10px",
        lineHeight: "14px",
        letterSpacing: "0",
    },
    badge: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: "0.14px",
    },
    TableHeader: {
        fontFamily: ["Lato", "Helvetica Neue", "sans-serif"].join(","),
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "24px",
        letterSpacing: "0.17px",
    },
};
