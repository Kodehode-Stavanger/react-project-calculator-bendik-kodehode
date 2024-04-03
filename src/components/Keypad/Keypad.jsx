import { useContext, useState } from "react";
import { CalcContext } from "../../App";
import Button from "../Button/Button";
import style from "./Keypad.module.css"

function Keypad() {
    const {input, setInput, result, setResult} = useContext(CalcContext);

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

    function handleClick(e) {
        let pressedKey = e.target.value;

        if (parseInt(pressedKey) || pressedKey === "0") {
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

        // If an operator is pressed
        if (operators.includes(pressedKey)) {
            // const operatorPos = input.findIndex(e => operators.includes(e))
            // If input already contains operator
            if (input.some(e => operators.includes(e))) {
                console.log("Already includes operator!");
                // const firstNum = input.slice(0, operatorPos).join("");
                // const secondNum = input.slice((operatorPos + 1)).join("");
                // setCalc(c => ({...c, num1: firstNum, num2: secondNum }))


                // const result = compute(num1, num2, operator)
                // setInput([`${result}`]);
            }
            // setCalc(c => ({...c, operator: pressedKey}));
        }

        switch (pressedKey) {
            case ".":
                if (input.includes(".")) return;
                break;

            case "=":
                // if (input.includes())
                if (checkForOperator()) {
                    setInput([getResult()])
                }
                // console.log(eval("25+25"));
                pressedKey = "";
                console.log("getResult: ", getResult());
                // const results = getResult()
                // setInput(i => {[...i, getResult()]})
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