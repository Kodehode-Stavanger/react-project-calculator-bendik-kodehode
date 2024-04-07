import { useState } from "react";
import "../index.css";

function ToggleThemes() {
    const [currentTheme, setCurrentTheme] = useState("default")

    function handleThemeChange(e) {
        console.log("themechange: ", e.target.value);
        setCurrentTheme(e.target.value)
    }

    return (
        <div className="themeWrapper">
            <div className="labelContainer">
                <label htmlFor="default">1</label>
                <label htmlFor="light">2</label>
                <label htmlFor="dark">3</label>
            </div>
            <div className="inputContainer">
                <input 
                    type="radio" 
                    id="dark" 
                    name="theme" 
                    value="default" 
                    checked={currentTheme === "default"}
                    onChange={handleThemeChange}/>
                <input 
                    type="radio" 
                    id="light" 
                    name="theme" 
                    value="light"
                    onChange={handleThemeChange}/>
                <input 
                    type="radio" 
                    id="fancy" 
                    name="theme" 
                    value="dark"
                    onChange={handleThemeChange}/>
            </div>
        </div>
    )
}

export default ToggleThemes;