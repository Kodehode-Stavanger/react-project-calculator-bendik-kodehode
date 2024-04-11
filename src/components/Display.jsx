import "../index.css"

function Display({input, style}) {
    return (
        <div style={{backgroundColor: style.backgroundColor}} className="outputContainer">
            <p className="outputText" style={{color: style.color}}>{input.length ? input.join("") : "0"}</p>
        </div>
    )
}

export default Display;