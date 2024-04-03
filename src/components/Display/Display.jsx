import { useContext } from "react";
import { CalcContext } from "../../App";
import style from "./Display.module.css"

function Display() {

    const {input, result} = useContext(CalcContext);

    // console.log("displayInput: ", input);
    // let toShow = "0";
    // if (input[0]) toShow = input;
    // if (result.length) {
    //     toShow = result;
    //     console.log("Results ran!");
    // }

    return (
        <div>
            <p>{input[0] > 0 ? input.join("") : "0"}</p>
            {/* <p>{toShow}</p> */}
        </div>
    )
}

export default Display;