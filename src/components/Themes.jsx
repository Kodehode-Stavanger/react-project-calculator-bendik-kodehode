import { useState } from "react";
import "../index.css";

function Themes() {
    const [currentTheme, setCurrentTheme] = useState("dark")

    function handleThemeChange(e) {
        setCurrentTheme(e.target.value)
    }

    return (
        <div className="themeWrapper">
            <div className="labelContainer">
                <label htmlFor="dark">1</label>
                <label htmlFor="light">2</label>
                <label htmlFor="fancy">3</label>
            </div>
            <div className="inputContainer">
                <input 
                    type="radio" 
                    id="dark" 
                    name="theme" 
                    value="dark" 
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
                    value="fancy"
                    onChange={handleThemeChange}/>
            </div>
        </div>
    )
}

export default Themes;