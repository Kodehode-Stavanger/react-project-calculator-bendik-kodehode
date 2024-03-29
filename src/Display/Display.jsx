import { useState } from "react";
import style from "./Display.module.css"

function Display() {
    const [display, setDisplay] = useState("0");

    return (
        <div>
            <p>{display}</p>
        </div>
    )
}

export default Display;