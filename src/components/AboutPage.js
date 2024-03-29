import React from "react"
import LineComp from "./LineComp"

function AboutPage(props) {
    
    return (
        <div className="about-page">
            <div className="left-col">
                <p className="hover square" style={{marginTop: "18vh"}}>1</p>
            </div>
            <div className="middle-col">
                <p 
                    className="middle-col-header"
                    style={{height: "49.5%"}}
                >
                    ABOUT
                </p>
                <p 
                    className="middle-col-text"
                    style={{height: "6%"}}
                >
                    <span className="limit-width">Bill Buster is a web app designed to help divvy the cost of living together. Simply input the cost of the bill, the bill period, the number of housemates, their stay period, and their respective share of the cost will be calculated.</span>
                </p>
            </div>
            <div className="right-col">

                {/* <LineComp height={25} width={props.width} /> */}

                <svg  
                    className="arrow"
                    style={{height: "25%"}}
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

                {/* Text */}
                <svg  
                    className="arrow"
                    style={{height: "29%"}}
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

                <svg  className="arrow">
                    <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(0,0,0)", strokeWidth: "1"}} />
                </svg>
            </div>
        </div>
    )
}

export default AboutPage