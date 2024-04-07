import { useState } from "react";
// import style from "./Calculator.module.css";
import "../index.css";
import Display from "./Display";
import Button from "./Button";
import ToggleThemes from "./ToggleThemes";

function Calculator() {
    const [input, setInput] = useState([]);
    const [result, setResult] = useState("");

    const operators = ["+", "-", "/", "x"];
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
            setInput("Invalid Operator")
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

        // Overwrite selected operator
        if (operators.includes(pressedKey)) {
            if (operators.includes(input[input.length - 1])) {
                setInput(prevInput => [...prevInput.slice(0, -1), pressedKey]);
                return;
            }
        }

        switch (pressedKey) {
            case ".":
                if (input.includes(".")) return;
                break;

            case "=":
                const { exists } = checkForOperator();
                if (exists) {
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

        if (input[0] === "0") {
            console.log("input[0]");
            pressedKey = "";
        }

        if (pressedKey) setInput(i => [...i, pressedKey]);
    }

    return (
        <>
            <div className="titleContainer">
                <h2>calc</h2>
                <ToggleThemes/>
            </div>
            <div className="contentContainer">
                <Display input={input} result={result}/>
                <div className="keypad">
                    {keys.map((e, i) => 
                        <Button 
                            handleClick={e => handleClick(e)} 
                            value={e} 
                            key={i}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Calculator;