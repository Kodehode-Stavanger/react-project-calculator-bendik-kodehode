import { useState } from "react";
import "../index.css";

function ToggleThemes({ currentTheme, setCurrentTheme, style }) {

    function handleThemeChange(e) {
        console.log(e.target.value);
        setCurrentTheme(e.target.value)
    }

    return (
        <div className="themeWrapper">
            <p className="themeTitle" style={{color: style.color}}>THEME</p>
            <div className="themeContainer">
                <div className="labelContainer">
                    <label  htmlFor="default" style={{color: style.color}}>1</label>
                    <label htmlFor="light" style={{color: style.color}}>2</label>
                    <label htmlFor="dark" style={{color: style.color}}>3</label>
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
                        checked={currentTheme === "light"}
                        onChange={handleThemeChange}/>
                    <input 
                        type="radio" 
                        id="fancy" 
                        name="theme" 
                        value="dark"
                        checked={currentTheme === "dark"}
                        onChange={handleThemeChange}/>
                </div>
            </div>
        </div>
    )
}

export default ToggleThemes;