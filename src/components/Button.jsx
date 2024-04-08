import "../index.css"

function Button({value, handleClick, style}) {

    let styleType = "primary";

    if (value === "DEL" || value === "RESET") {
        styleType = "secondary"
    } else if (value === "=") {
        styleType = "tertiary";
    }

    console.log(style.primary.initial);

    return (
        <button 
            className="button" 
            onClick={handleClick} 
            value={value}
            style={style[styleType].initial}
            >{value}
        </button>
    )
}

export default Button;