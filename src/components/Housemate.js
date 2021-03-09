import React, { useState } from "react"

function Housemate(props) {
    // const handleChange = (e) => {
    //     let input = e.target.value
    //     const re = /^[0-9\b]+$/;
    //     if (input === '' || re.test(input)) {
    //         if(input.length > 1 && input.charAt(0) === "0") {
    //             // do nothing
    //         } else {
    //             // props.setPerson({...props.housemates, hOne: {
    //             //     ...props.housemates.hOne, period: e.target.value
    //             // }})
    //             let inputPerson = props.person
    //             console.log(inputPerson)
    //             props.setPerson(person.map(person => 
    //                     person.key === props.key
    //                     ? {...person, stay: e.target.value}
    //                     : person
    //                 ))
    //             console.log(props.person)
    //         }
    //     }
    // }

    return (
        <div className="housemate">
            <div className="left-col"></div>

            <div className="middle-col">
                <div
                    className="middle-col-header"
                    style={{height: "30%"}}
                >
                    <p>{props.person.name} STAY</p>
                </div>
                
                <div className="housemate-input">
                    <input
                        type="text"
                        name="period"
                        value={props.person.stay}
                        onChange={e => props.handleChange(e, props.person.key)}
                        maxLength="3"
                        placeholder="30"
                    ></input>
                    <p className="days">DAYS</p>
                </div>
            </div>

            <div className="right-col">
                <svg  
                    className="arrow"
                    style={{height: "15%"}}
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

                <svg  
                    className="arrow"
                    style={{height: "34.5%"}}
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

                <svg  className="arrow">
                    <line x1="20" y1="0" x2="20" y2="900" style={{stroke: "rgb(255,255,255)", strokeWidth: "1"}} />
                </svg>
            </div>
        </div>
    )
}

export default Housemate