import "../index.css"

function Display({input, style}) {

    return (
        <div>
            <p 
                className="output" 
                style={style}>
                    {input[0] > 0 ? input.join("") : "0"}</p>
        </div>
    )
}

export default Display;