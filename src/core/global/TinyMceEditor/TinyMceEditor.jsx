import React, { useEffect, useState } from "react";
import { Editor as TinyMce } from "@tinymce/tinymce-react";
import { useTheme } from "@mui/material/styles";
import { requests } from "../../../services/http.service";

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

const TinyMceEditor = ({ apiKey, placeholder = "Type here...", value, onChange, height = 200 }) => {
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
                        placeholder: placeholder,
                        height: height,
                        menubar: false,
                        statusbar: true,
                        toolbar_mode: "sliding",
                        elementpath: false,
                        branding: false,
                        plugins: "lists advlist link image help",
                        toolbar:
                            "undo redo | blocks | + formatselect | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | link image | alignleft aligncenter alignright alignjustify | bullist numlist | help",
                        advlist_bullet_styles: "square",
                        advlist_number_styles: "lower-alpha",
                        skin: tinyTheme.skin,
                        content_css: tinyTheme.css,
                        content_style: "body { font-family: Lato, Helvetica, Arial, sans-serif; font-size:14px; }",

                        paste_data_images: true,
                        file_browser_callback_types: "image",
                        images_upload_handler: (blobInfo, progress) =>
                            new Promise((resolve, reject) => {
                                const data = new FormData();
                                const reader = new FileReader();
                                data.append("image", blobInfo.blob(), blobInfo.filename());
                                requests
                                    .post(
                                        process.env.REACT_APP_API_URL_MAIN_AGENCY_SERVER + "api/v1/help/upload/image",
                                        data
                                    )
                                    .then((res) => {
                                        resolve(res.data.location);
                                    })
                                    .catch(function (err) {
                                        reject(err);
                                    });
                                reader.readAsDataURL(blobInfo.blob());
                            }),
                    }}
                    value={value}
                    onEditorChange={(newText) => onChange(newText)}
                />
            )}
        </>
    );
};

export default TinyMceEditor;
