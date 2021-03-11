import React from "react"

function ResultRow(props) {
    return (
        <div className="results-row">
            <div className="left-col"></div>
            <div className="middle-col">
                <div  className="results-list">
                    <p>
                        <span className="name">{props.name}</span>
                        <br></br>
                        ${props.owes.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="right-col">
                <svg  
                    className="arrow"   
                    style={{height: "32%"}}
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
            </div>
        </div>
        
        // <div className='results-row'>
        //     <span className="name">{props.name}</span>
        //     <br></br>
        //     ${props.owes.toFixed(2)}
        // </div>
    )
}

export default ResultRow