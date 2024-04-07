import style from "./Button.module.css"

function Button({value, handleClick}) {
    return (
        <button className={style.button} onClick={handleClick} value={value}>{value}</button>
    )
}

export default Button;