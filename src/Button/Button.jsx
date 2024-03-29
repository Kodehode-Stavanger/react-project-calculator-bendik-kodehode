function Button({value, handleClick}) {
    return (
        <button onClick={handleClick} value={value}>{value}</button>
    )
}

export default Button;