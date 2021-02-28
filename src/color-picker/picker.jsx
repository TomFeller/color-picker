import React, {useContext} from "react";
import classNames from "classnames";
import {ColorPickerContext} from "./main";
import "./color-picker.scss";

export const Picker = () => {
    const length = 101;
    let array = [];

    const {chosenHue, setChosenHue} = useContext(ColorPickerContext);

    for (let l = 0; l < length; l++) {
        for (let s = 0; s < length; s++) {
            array.push([s, l])
        }
    }

     const renderPixel = (item, index) => {
        const s = item[0];
        const l = item[1];
        const active = s === chosenHue[0] && l === chosenHue[1];
        const hsl = `hsl(0, ${s}%, ${l}%`;
        return (
            <div key={index}
                 className={classNames("pixel", {active})}
                 onClick={() => setChosenHue([s, l])}
                 style={{backgroundColor: active ? "#000" : hsl}}/>
        )
    }

    return (
        <div className="picker">
            {array.map(renderPixel)}
        </div>
    )
}


