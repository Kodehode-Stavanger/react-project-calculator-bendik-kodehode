import "../index.css"

function Button({value, handleClick}) {
    return (
        <button className="button" onClick={handleClick} value={value}>{value}</button>
    )
}

export default Button;