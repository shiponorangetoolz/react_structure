import React, { useEffect, useState } from "react";
import { Box, Chip, TextField } from "@mui/material";
import Styles from "./inputChip.module.css";

const InputChip = ({ handleSelectedTag, resetInputTags, fullWidth = true, label, size = "small", ...rest }) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedItem, setSelectedItem] = useState([]);
    console.log("selectedItem", selectedItem);
    // after change the selected tags
    useEffect(() => {
        if (handleSelectedTag) {
            handleSelectedTag(selectedItem);
        }
    }, [selectedItem]);

    // when reset the input tags form
    useEffect(() => {
        if (resetInputTags) {
            setSelectedItem([]);
        }
    }, [resetInputTags]);

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            const newSelectedItem = [...selectedItem];
            const duplicatedValues = newSelectedItem.indexOf(event.target.value.trim());

            if (duplicatedValues !== -1) {
                setInputValue("");
                return;
            }

            if (!event.target.value.replace(/\s/g, "").length) return;

            newSelectedItem.push(event.target.value.trim());
            setSelectedItem(newSelectedItem);
            setInputValue("");
        }

        if (selectedItem.length && !inputValue.length && event.key === "Backspace") {
            setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
        }
    }

    const handleDelete = (item) => () => {
        const newSelectedItem = [...selectedItem];
        newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
        setSelectedItem(newSelectedItem);
    };

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleInputBlur() {
        setInputValue("");
    }

    return (
        <div className={Styles.custom__chip__wrapper}>
            <TextField
                label={label}
                fullWidth={fullWidth}
                size={size}
                multiline
                rows={1}
                InputProps={{
                    className: Styles.chip_wrap,
                    startAdornment: selectedItem.map((item) => (
                        <Box key={item}>
                            <Chip
                                tabIndex={-1}
                                label={item}
                                sx={{ my: 1, ml: 0, mr: 1 }}
                                onDelete={handleDelete(item)}
                            />
                        </Box>
                    )),
                }}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                {...rest}
            />
        </div>
    );
};

export default InputChip;
