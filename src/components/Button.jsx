import "../index.css"

function Button({value, handleClick, style}) {
    console.log(style);

    return (
        <button style={{backgroundColor: "#EAE3DB"}} className="button" onClick={handleClick} value={value}>{value}</button>
    )
}

export default Button;