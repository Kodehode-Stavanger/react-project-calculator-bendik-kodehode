import { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import style from "./Calculator.module.css";

function Calculator() {
    const [input, setInput] = useState([]);
    const [result, setResult] = useState("");

    const operators = ["+", "-", "/", "*"];
    const keys = [
        7, 8, 9, "DEL",
        4, 5, 6, "+",
        1, 2, 3, "-",
        ".", 0, "/", "x",
        "RESET", "="
    ]

    function compute(a, b, operator) {
        const computing = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            '/': (x, y) => x / y,
            'x': (x, y) => x * y,
        };
        if (operator in computing) {
            return computing[operator](parseFloat(a), parseFloat(b));
        } else {
            setResult("Error")
            return;
        }
    }

    const checkForOperator = () => {
        const index = input.findIndex(e => operators.includes(e));
        if (index !== -1) {
            return {
                exists: true,
                operator: input[index]
            };
        } else return {
            exists: false,
            operator: null
        }
    }
    
    const getResult = () => {
        const {exists, operator} = checkForOperator();
        if (exists) {
            const operatorPos = input.findIndex(e => e === operator);
            const firstNum = input.slice(0, operatorPos).join("");
            const secondNum = input.slice((operatorPos + 1)).join("");
            return compute(firstNum, secondNum, operator);
        }
    }

    function handleClick(e) {
        let pressedKey = e.target.value;

        if (parseInt(pressedKey) || pressedKey === "0") {
        }
        


        // If an operator is pressed
        if (operators.includes(pressedKey)) {
            // If input already contains operator
            if (input.some(e => operators.includes(e))) {

            }
        }

        switch (pressedKey) {
            case ".":
                if (input.includes(".")) return;
                break;

            case "=":
                if (checkForOperator()) {
                    setInput([getResult()])
                }
                pressedKey = "";
                break;

            case "DEL":
                setInput(i => i.slice(0, -1));
                return;

            case "RESET":
                setInput([]);
                setResult("");
                return;
        }
        console.log("input: ", input);

        if (input[0] === "0") {
            console.log("input[0]");
            pressedKey = "";
        }

        if (pressedKey) setInput(i => [...i, pressedKey]);
    }

    return (
        <div className={style.container}>
            <Display input={input} result={result}/>
            <div className={style.keypad}>
                {keys.map((e, i) => 
                    <Button 
                        handleClick={e => handleClick(e)} 
                        value={e} 
                        key={i}/>
                )}
            </div>
        </div>
    )
}

export default Calculator;