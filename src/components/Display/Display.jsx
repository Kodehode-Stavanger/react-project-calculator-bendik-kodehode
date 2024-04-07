import style from "./Display.module.css"

function Display({input, result}) {
    return (
        <div>
            <p className={style.output}>{input[0] > 0 ? input.join("") : "0"}</p>
            {/* <p>{toShow}</p> */}
        </div>
    )
}

export default Display;