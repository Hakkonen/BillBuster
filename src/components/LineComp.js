import React from "react"

function LineComp(props) {
    return (
        <div>
            <svg  
                className="arrow"
                style={{height: `${props.height}%`}}
            >
                <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(255,255,255)", strokeWidth: "1"}} />
            </svg>

            <svg 
                className="arrow-connector"
                style={{height: "2px"}}
            >
                <line x1="20" y1="0" x2="20" y2="300" style={{stroke: "rgb(255,255,255)", strokeWidth: "1"}} />
                <line x1={-props.width/3} y1="0" x2="20" y2="0" style={{stroke: "rgb(255,255,255)", strokeWidth: "1"}} />
            </svg>

            {/* <svg  
                className="arrow"
                style={{height: props.height/2 + "%"}}
            >
                <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(255,255,255)", strokeWidth: "1"}} />
            </svg> */}
        </div>
    )
}

export default LineComp