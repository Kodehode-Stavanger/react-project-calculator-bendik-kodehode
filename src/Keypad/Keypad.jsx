import Button from "../Button/Button";
import style from "./Keypad.module.css"

function Keypad() {
    const keys = [
        7, 8, 9, "DEL",
        4, 5, 6, "+",
        1, 2, 3, "-",
        ".", 0, "/", "x",
        "RESET", "="
    ]

    return (
        <div className={style.container}>
            {keys.map((e, i) => {
                return <Button value={e} key={i}/>
            })}
        </div>
    )
}

export default Keypad;