import { useContext } from "react";
import { DisplayContext } from "../App";
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
    const [display, setDisplay] = useContext(DisplayContext);

    function handleClick(e) {
        // console.log(e.target.value);
        if (parseInt(e.target.value)) {
            console.log("Number!");
            return;
        } else if (e.target.value === "0") {
            console.log("Zero!");
            return;
        }
        switch (e.target.value) {
            case "+":
                console.log("Plus!");
                break;
            case "-":
                console.log("Minus!");
                break;
            case "x":
                console.log("Times!");
                break;
            case "/":
                console.log("Split!");
                break;
        }
    }

    return (
        <div className={style.container}>
            {keys.map((e, i) => 
                <Button 
                    handleClick={(e) => {handleClick(e)}} 
                    value={e} 
                    key={i}/>
            )}
        </div>
    )
}

export default Keypad;