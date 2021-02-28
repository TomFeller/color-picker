import React, {useContext} from "react";
import {ColorPickerContext} from "./main";

export const Sample = () => {
    const {backgroundColor} = useContext(ColorPickerContext);

    return (
        <div className="sample"
             style={{backgroundColor: backgroundColor}}/>
    )
};
