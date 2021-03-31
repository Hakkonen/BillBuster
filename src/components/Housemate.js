import React, { useEffect, useState } from "react"
// import BillPeriod from "./BillPeriod"

function Housemate(props) {
    const [ stayLimit, setStayLimit ] = useState(false)

    // Checks if person's stay has been inputted as higher than total bill length. Red effect is applied in JSX.
    useEffect(() => {
        if(props.person.stay > props.billPeriod) {
            setStayLimit(true)
        } else {
            setStayLimit(false)
        }
    }, [props.person.stay])

    return (
        <div className="housemate">
            <div className="left-col">
                <p className="hover square" style={{marginTop: "18vh"}}>5</p>
            </div>

            <div className="middle-col">
                <div
                    className="middle-col-header"
                    style={{height: "60%"}}
                >
                    <p>{props.person.name} STAY</p>
                </div>
                
                <div 
                    className="housemate-input"
                    style={{height: "7.5%"}}
                >
                    <input
                        id={"Stay_Input_" + props.person.key}
                        type="text"
                        name="period"
                        value={props.person.stay}
                        onChange={e => props.handleChange(e, props.person.key)}
                        maxLength="3"
                        placeholder="30"
                        style={{color: stayLimit ? "red" : "#000"}}
                    ></input>
                    <p className="days">DAYS</p>
                </div>
            </div>

            <div className="right-col">
                <svg  
                    className="arrow"
                    style={{height: "30%"}}
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
                    style={{height: "20%"}}
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

export default Housemate