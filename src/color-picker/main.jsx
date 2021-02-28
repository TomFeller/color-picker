import React, {useState} from "react";
import {Picker} from "./picker";
import {Sample} from "./sample";
import {Field} from "./field";
import "./color-picker.scss";

export const ColorPickerContext = React.createContext({
    chosenHue: null,
    setChosenHue: null,
    backgroundColor: null
})

const Main = () => {
    const [chosenHue, setChosenHue] = useState([0, 0]);

    const provider = {
        chosenHue,
        setChosenHue,
        backgroundColor: `hsl(0, ${chosenHue[0]}%, ${chosenHue[1]}%)`
    };

    return (
        <ColorPickerContext.Provider value={provider}>
            <div className="color-picker">
                <section className="picker">
                    <Picker />
                </section>
                <section className="sample">
                    <Sample/>
                </section>
                <section className="field">
                    <Field/>
                </section>
            </div>
        </ColorPickerContext.Provider>
    )
};

export default Main;


