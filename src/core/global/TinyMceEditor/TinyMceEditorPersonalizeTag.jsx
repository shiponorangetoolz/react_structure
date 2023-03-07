import React, { useEffect, useState } from "react";
import { Editor as TinyMce } from "@tinymce/tinymce-react";
import { useTheme } from "@mui/material/styles";

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

const TinyMceEditorPersonalizeTag = ({ apiKey, value, onChange, height = 200 }) => {
    const theme = useTheme();
    const [tinyTheme, setTinyTheme] = useState(theme.palette.mode === "dark" ? editorTheme.dark : editorTheme.light);
    const [isShowEditor, setShowEditor] = useState(true);

    useEffect(() => {
        if (isShowEditor === false) return;
        setTinyTheme(theme.palette.mode === "dark" ? editorTheme.dark : editorTheme.light);
        setShowEditor((prevState) => !prevState);
        setTimeout(() => setShowEditor((prevState) => !prevState), 50);
    }, [theme.palette.mode]);

    return (
        <>
            {isShowEditor && (
                <TinyMce
                    apiKey={apiKey}
                    init={{
                        selector: "textarea",
                        placeholder: "Type here...",
                        height: height,
                        menubar: false,
                        statusbar: true,
                        toolbar_mode: "sliding",
                        elementpath: false,
                        branding: false,
                        plugins: "lists advlist help",
                        toolbar:
                            "undo redo | + personalizeTag | bold italic underline | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | strikethrough bullist numlist | help",
                        advlist_bullet_styles: "square",
                        advlist_number_styles: "lower-alpha",
                        icons: "material",
                        skin: tinyTheme.skin,
                        content_css: tinyTheme.css,
                        content_style: "body { font-family: Lato, Helvetica, Arial, sans-serif; font-size:14px; }",

                        // ## personalize tag add functionality
                        setup: function (editor) {
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
                    onEditorChange={onChange}
                />
            )}
        </>
    );
};

export default TinyMceEditorPersonalizeTag;
