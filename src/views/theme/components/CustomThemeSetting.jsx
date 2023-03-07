import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Card, CardContent, FormControl, Grid, RadioGroup, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ColorPaletteItem from "./ColorPaletteItem";

import BrandingColorItem from "./BrandingColorItem";
import { getThemingColorPalette } from "../helpers/themingUtility";
import { themePaletteList } from "../helpers/themingConstant";
import { ColorModeContext } from "../../layout/ThemingLayout";
import { AGENCY_ROLE_ADMIN_VIEW } from "../../../helper/constants/coreConstant";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../../../core/global/Button/LoadingButton";
import { clearUpdateThemeColorPallet, getThemeColorPallet, updateThemeColorPallet } from "../reducers/themeSlice";

const CustomThemeSetting = () => {
    const colorMode = useContext(ColorModeContext);
    const { roleName } = useSelector((state) => state.user);
    const { isUpdating, isUpdated } = useSelector((state) => state.theme);

    const [selectedThemePalette, setSelectedThemePalette] = useState(themePaletteList[0]);
    const [copyThemePalette, setCopyThemePalette] = useState(themePaletteList[0]);
    const dispatch = useDispatch();

    useEffect(() => {
        const themePalette = getThemingColorPalette();
        if (themePalette !== null) {
            setSelectedThemePalette(themePalette);
            setCopyThemePalette(themePalette);
        }
    }, []);

    const handleThemePaletteSelect = (themePalette) => {
        setSelectedThemePalette(themePalette);
    };

    // Handle Save Theme Palette
    const handleSavePalette = () => {
        setCopyThemePalette(selectedThemePalette);
        dispatch(updateThemeColorPallet(selectedThemePalette));
    };

    useEffect(() => {
        dispatch(getThemeColorPallet());
    }, []);

    // Handle Theme Palette after save success
    useEffect(() => {
        if (isUpdated) {
            colorMode.onChangeThemePalette(selectedThemePalette);
            setTimeout(() => {
                dispatch(clearUpdateThemeColorPallet());
            }, 2000);
        }
    }, [isUpdated]);

    const handleCancelPaletteChange = () => {
        setSelectedThemePalette(copyThemePalette);
    };

    const onChangeThemePaletteColorManually = (color, name) => {
        setSelectedThemePalette({ ...selectedThemePalette, [name]: color.hex });
    };

    const onResetColor = (colorName) => {
        setSelectedThemePalette({
            ...selectedThemePalette,
            [colorName]: copyThemePalette[colorName],
        });
    };

    return (
        <Box>
            <Grid container spacing={2} sx={{ textAlign: "left" }}>
                <Grid item md={5} xl={4} lg={5} xs={5}>
                    <Card sx={{ height: "100%", pb: 2, boxShadow: 0, overflow: "unset" }}>
                        <CardContent>
                            <Typography variant='h6'>Branding Color</Typography>
                        </CardContent>
                        <Divider />

                        <BrandingColorItem
                            title={"Primary Color"}
                            name={"primary"}
                            color={selectedThemePalette.primary}
                            onChange={onChangeThemePaletteColorManually}
                            onResetColor={onResetColor}
                        />
                        <BrandingColorItem
                            title={"Secondary Color"}
                            name={"secondary"}
                            color={selectedThemePalette.secondary}
                            onChange={onChangeThemePaletteColorManually}
                            onResetColor={onResetColor}
                        />
                        <BrandingColorItem
                            title={"Error Color"}
                            name={"error"}
                            color={selectedThemePalette.error}
                            onChange={onChangeThemePaletteColorManually}
                            onResetColor={onResetColor}
                        />
                        <BrandingColorItem
                            title={"Info Color"}
                            name={"info"}
                            color={selectedThemePalette.info}
                            onChange={onChangeThemePaletteColorManually}
                            onResetColor={onResetColor}
                        />
                        <BrandingColorItem
                            title={"Success Color"}
                            name={"success"}
                            color={selectedThemePalette.success}
                            onChange={onChangeThemePaletteColorManually}
                            onResetColor={onResetColor}
                        />
                    </Card>
                </Grid>

                <Grid item xl={8} md={7} lg={7} xs={7}>
                    <Card sx={{ minWidth: 400, height: "100%", pb: 2, boxShadow: 0 }}>
                        <CardContent>
                            <Typography variant='h6'>Theme</Typography>
                        </CardContent>
                        <Divider />

                        <FormControl id='theme-radio-buttons-group-label'>
                            <RadioGroup
                                aria-labelledby='theme-radio-buttons-group-label'
                                value={selectedThemePalette.name ? selectedThemePalette.name : "default theme"}
                                name='radio-buttons-group'
                            >
                                <Stack direction={"row"} alignItems={"center"} flexWrap={"wrap"} sx={{ p: 2 }}>
                                    {themePaletteList.map((item) => (
                                        <ColorPaletteItem
                                            key={item.id}
                                            colorPalette={item}
                                            handleThemePaletteSelect={handleThemePaletteSelect}
                                        />
                                    ))}
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </Card>
                </Grid>
            </Grid>

            {roleName !== AGENCY_ROLE_ADMIN_VIEW && (
                <Stack spacing={2} direction='row' justifyContent={"flex-end"} mt={3}>
                    <Button onClick={handleCancelPaletteChange} variant={"outlined"} color={"secondary"}>
                        Cancel
                    </Button>
                    <LoadingButton
                        color={"primary"}
                        loadingText={"Updating..."}
                        isLoading={isUpdating}
                        variant={"contained"}
                        onClick={handleSavePalette}
                    >
                        Save
                    </LoadingButton>
                </Stack>
            )}
        </Box>
    );
};

export default CustomThemeSetting;
