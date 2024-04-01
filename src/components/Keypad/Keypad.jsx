import { useContext } from "react";
import { CalcContext } from "../../App";
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
    const {input, setInput, setResult} = useContext(CalcContext);

    function handleClick(e) {
        // console.log(e.target.value);
        let pressedKey = e.target.value;

        if (parseInt(pressedKey) || pressedKey === "0") {
            console.log("Number!");
        }

        switch (pressedKey) {
            case "+":
                console.log("Plus!");
                break;
            case "-":
                console.log("Minus!");
                break;
            case "x":
                console.log("Times!");
                pressedKey = "*";
                break;
            case "/": 
                console.log("Split!");
                break;
            case "DEL":
                break;
            case "RESET":
                setInput([]);
                setResult(0);
                return;
        }

        setInput(i => [...i, pressedKey]);
        setResult(input)
        console.log(input);


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