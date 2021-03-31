import React from "react"

function Results(props) {
    return (
        <div className="results-page">
            <div className="left-col">
                <p className="hover square">6</p>
            </div>

            <div className="middle-col">
                <div
                    className="middle-col-header"
                    style={{height: "80%"}}
                >
                    <p>RESULTS</p>
                </div>

                {/* <div className="results-list">
                    {props.results}
                </div> */}
            </div>

            <div className="right-col">
                <svg  
                    className="arrow"
                    style={{height: "40%"}}
                >
                    <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(0,0,0)", strokeWidth: "1"}} />
                </svg>

                <svg 
                    className="arrow-connector"
                    style={{height: "2px"}}
                >
                    <line x1="20" y1="0" x2="20" y2="300" style={{stroke: "rgb(0,0,0)", strokeWidth: "1"}} />
                    <line x1={-props.width/3} y1="0" x2="20" y2="0" style={{stroke: "rgb(0,0,0)", strokeWidth: "1"}} />
                </svg>

                <svg  
                    className="arrow"
                    style={{height: "7.5%"}}
                >
                    <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(0,0,0)", strokeWidth: "1"}} />
                </svg>

                <svg  className="arrow">
                    <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(0,0,0)", strokeWidth: "1"}} />
                </svg>
            </div>
        </div>
    )
}

export default Results