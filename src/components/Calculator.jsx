import { useState } from "react";
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
        try {
            const result = computing[operator](parseFloat(a), parseFloat(b))
            return result;
        } catch (error) { 
            console.error("Error: ", error.message)
        }
    }

    const checkForOperator = () => {
        const index = input.findIndex(e => operators.includes(e));
        // Find index returns "-1" if no results
        return {
            exists: index !== -1,
            operator: index !== -1 ? input[index] : null
        };
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

    const removeLastEntry = () => {
        setInput(i => i.filter((_, index) => index < i.length - 1))
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
                exists ? setInput([getResult()]) : setInput(["Missing operator"])
                try {
                    console.log(undefinedVariable.property);
                } catch (error) {
                    console.error('Error:', error.message);
                }
                return;

            case "DEL":
                removeLastEntry();
                return;

            case "RESET":
                setInput([]);
                setResult("");
                return;
        }

        if (input[0] === "0") return;

        if (pressedKey) setInput(i => [...i, pressedKey]);
    }

    return (
        <>
            <div className="titleContainer">
                <h2>calc</h2>
                <ToggleThemes/>
            </div>
            <div className="contentContainer">
                <Display input={input}/>
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