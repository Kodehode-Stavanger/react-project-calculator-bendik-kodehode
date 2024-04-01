import { useContext, useState } from "react";
import { CalcContext } from "../../App";
import style from "./Display.module.css"

function Display() {

    const {result} = useContext(CalcContext);

    return (
        <div>
            <p>{result}</p>
        </div>
    )
}

export default Display;