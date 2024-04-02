import { useContext, useState } from "react";
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
    const {input, setInput, result, setResult} = useContext(CalcContext);

    function handleClick(e) {
        // console.log(e.target.value);
        let pressedKey = e.target.value;
        const operators = ["+", "-", "/", "*"];
        const equation = {
            num1: 0,
            num2: 0,
            operator: "",
        }

        let {num1, num2, operator} = equation;

        function compute(a, b, operator) {
            const computing = {
                '+': (x, y) => x + y,
                '-': (x, y) => x - y,
                'x': (x, y) => x * y,
                '/': (x, y) => x / y,
            };
            if (operator in operators) {
                return computing[operator](parseFloat(a), parseFloat(b));
            } else {
                setResult("Error 402")
                return;
            }
        }

        if (parseInt(pressedKey) || pressedKey === "0") {
        }

        if (operators.includes(pressedKey)) {
            operator = pressedKey;
            const operatorPos = input.findIndex(e => operators.includes(e))
            num1 = input.slice(0, operatorPos).join("");
            num2 = input.slice((operatorPos + 1)).join("");
            console.log("operator: ", operator);
            console.log("num1: ", num1);
            console.log("num2: ", num2);
            // setResult(equation.num1 + )
        }

        switch (pressedKey) {
            case ".":
                if (input.includes(".")) return;
                break;
            case "=":
                // if (input.includes())
                compute(input)
                // setResult()
                break;
            case "DEL":
                setInput(i => i.slice(0, -1));
                return;

            case "RESET":
                setInput([]);
                setResult("");
                return;
        }
        if (pressedKey) setInput(i => [...i, pressedKey]);
        // console.log("input: ", input);
    }

    return (
        <div className={style.container}>
            {keys.map((e, i) => 
                <Button 
                    handleClick={e => handleClick(e)} 
                    value={e} 
                    key={i}/>
            )}
        </div>
    )
}

export default Keypad;