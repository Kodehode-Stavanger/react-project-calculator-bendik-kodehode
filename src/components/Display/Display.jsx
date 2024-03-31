import { useContext, useState } from "react";
import { DisplayContext } from "../App";
import style from "./Display.module.css"

function Display() {

    const [display, setDisplay] = useContext(DisplayContext);

    return (
        <div>
            <p>{display}</p>
        </div>
    )
}

export default Display;