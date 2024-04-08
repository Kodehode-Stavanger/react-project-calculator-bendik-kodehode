import "../index.css"

function Display({input}) {
    return (
        <div>
            <p className="output">{input[0] > 0 ? input.join("") : "0"}</p>
            {/* <p>{toShow}</p> */}
        </div>
    )
}

export default Display;