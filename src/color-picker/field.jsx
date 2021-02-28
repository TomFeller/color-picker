import React, {useContext} from "react";
import {ColorPickerContext} from "./main";

export const Field = () => {
    const { backgroundColor, setChosenHue} = useContext(ColorPickerContext);

    const onFieldChange = (e) => {
        const {value} = e.target;
        const str = "hsl(0, ";
        const valid = e.target.value.includes(str)
        if (valid) {
            const updatedValue = (
                value.replace(str, "")
                    .replace(")", "")
                    .split(",")
                    .map(item => parseInt(item.replace("%", "")))
            );
            setChosenHue(updatedValue);
        }
    }

    return (
        <input value={backgroundColor}
               onChange={onFieldChange}/>
    )
};
