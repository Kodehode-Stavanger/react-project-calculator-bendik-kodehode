import { useState } from "react";
import "../index.css";
import Display from "./Display";
import Button from "./Button";
import ToggleThemes from "./ToggleThemes";
import { themes } from "../assets/themes";

function Calculator() {
    const [input, setInput] = useState([]);
    const [currentTheme, setCurrentTheme] = useState("default");

    const { backgroundColor, primaryFontColor, keypadStyle, displayStyle, themeToggle, buttonStyle } = themes[currentTheme]

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

    function handleClick(e) {
        let pressedKey = e.target.value;
        if (operators.includes(pressedKey)) {
            // Overwrite if previous is operator
            if (operators.includes(input[input.length - 1])) {
                setInput(i => [...i.slice(0, -1), pressedKey]);
                return;
            }
        }

        switch (pressedKey) {
            case ".":
                if (input.includes(".")) return;
                break;

            case "=":
                const { exists } = checkForOperator();
                if (exists) setInput([getResult()]);
                return;

            case "DEL":
                setInput(i => i.filter((_, index) => index < i.length - 1))
                return;

            case "RESET":
                setInput([]);
                return;
        }

        if ((pressedKey === "0" && !input.length) || (operators.includes(pressedKey) && !input.length)) return;

        // Add key to input
        if (pressedKey) setInput(i => [...i, pressedKey]);
    }

    return (
        <div className="backgroundContainer" style={{backgroundColor: backgroundColor}}>
            <div className="wrapper">
                <div className="titleContainer">
                    <h2 style={primaryFontColor}>calc</h2>
                    <ToggleThemes currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} style={themeToggle}/>
                </div>
                <div className="contentContainer">
                    <Display input={input} style={displayStyle}/>
                    <div className="keypad" style={keypadStyle} >
                        {keys.map((e, i) => 
                            <Button 
                                handleClick={e => handleClick(e)}
                                style={buttonStyle}
                                value={e} 
                                key={i}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;