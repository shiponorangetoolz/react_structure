import React, { useEffect, useState } from "react";
import { Editor as TinyMce } from "@tinymce/tinymce-react";
import { useTheme } from "@mui/material/styles";
import { showErrorSnackbar } from "../Snackbars/reducers/snackbarSlice";
import { useDispatch } from "react-redux";

const editorTheme = {
    dark: {
        skin: "oxide-dark",
        css: "dark",
    },
    light: {
        skin: "oxide",
        css: "default",
    },
};

const TinyMceEditorPlainText = ({ apiKey, value, onChange, height = 200, maxCharacter, onBlur }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [tinyTheme, setTinyTheme] = useState(theme.palette.mode === "dark" ? editorTheme.dark : editorTheme.light);
    const [isShowEditor, setShowEditor] = useState(true);

    useEffect(() => {
        if (isShowEditor === false) return;
        setTinyTheme(theme.palette.mode === "dark" ? editorTheme.dark : editorTheme.light);
        setShowEditor((prevState) => !prevState);
        setTimeout(() => setShowEditor((prevState) => !prevState), 50);
    }, [theme.palette.mode]);

    const handleOnBlur = (newValue, editor) => {
        if (onBlur) onBlur();
    };

    const onEditorChange = (newValue, editor) => {
        const text = editor.getContent({ format: "text" });
        const length = text.length;

        if (maxCharacter && length > maxCharacter) {
            // setLength(length);
            dispatch(showErrorSnackbar(`Max Character Limit ${maxCharacter}`));
            onChange(text.slice(0, maxCharacter));
            return false;
        }

        onChange(text);
    };

    return (
        <>
            {isShowEditor && (
                <TinyMce
                    apiKey={apiKey}
                    init={{
                        selector: "textarea",
                        auto_focus: true,
                        placeholder: "Type here...",
                        height: height,
                        menubar: false,
                        statusbar: true,
                        toolbar_mode: "wrap",
                        branding: false,
                        plugins: "help",
                        toolbar: "undo redo | + personalizeTag",
                        icons: "material",
                        skin: tinyTheme.skin,
                        content_css: tinyTheme.css,
                        content_style: "body { font-family: Lato, Helvetica, Arial, sans-serif; font-size:14px; }",

                        // ## personalize tag add functionality
                        setup: function (editor) {
                            // editor.on("blur", function (e) {
                            //     e.preventDefault();
                            //     e.blurEventOff = true;
                            // });
                            editor.ui.registry.addSplitButton("personalizeTag", {
                                text: "Personalize Tag",
                                // icon: "info",
                                tooltip: "Select your personalize tag",
                                onAction: function () {
                                    editor.insertContent("");
                                },
                                onItemAction: function (api, value) {
                                    editor.insertContent(value);
                                },
                                fetch: function (callback) {
                                    const items = [
                                        {
                                            type: "choiceitem",
                                            text: "Name",
                                            value: "&nbsp;[[name]]",
                                        },
                                        {
                                            type: "choiceitem",
                                            text: "Phone",
                                            value: "&nbsp;[[phone]]",
                                        },
                                        {
                                            type: "choiceitem",
                                            text: "Url",
                                            value: "&nbsp;[[url]]",
                                        },
                                    ];
                                    callback(items);
                                },
                            });
                        },
                    }}
                    value={value}
                    onEditorChange={onEditorChange}
                    onBlur={handleOnBlur}
                />
            )}
        </>
    );
};

export default TinyMceEditorPlainText;
