import { useState } from "react";
import "../index.css"

function Button({value, handleClick, style}) {
        const [hover, setHover] = useState(false)
        const [active, setActive] = useState(false)

    let styleType = "primary";

    if (value === "DEL" || value === "RESET") {
        styleType = "secondary"
    } else if (value === "=") {
        styleType = "tertiary";
    }

    // console.log(style[styleType].hover);

    return (
        <button 
            className="button" 
            onClick={handleClick} 
            value={value}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            style={
                active
                    ? style[styleType].active
                    : hover
                    ? style[styleType].hover
                    : style[styleType].initial
            }
            >{value}
        </button>
    )
}

export default Button;