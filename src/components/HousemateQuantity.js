import React from "react"

function HousemateQuantity(props) {
    function setHousemates(e) {
        let input = e.target.value
        const re = /^[0-9\b]+$/;
        if (input === '' || re.test(input)) {
            if(input.length > 1 && input.charAt(0) === "0") {
                // do nothing
            } else {
                props.setHousemateCount(input)
            }
        }
    }

    return (
        <div className="housemate-quantity">
            <div className="left-col">
                <p className="hover square" style={{marginTop: "18vh"}}>4</p>
            </div>

            <div className="middle-col">
                <div
                    className="middle-col-header"
                    style={{height: "60%"}}
                >
                    <p>NUMBER OF<br></br>HOUSEMATES</p>
                </div>

                <div 
                    className="housemates-input"
                    style={{height: "7.5%"}}
                >
                    <input
                        type="text"
                        value={props.housemateCount}
                        onChange={e => setHousemates(e)}
                        maxLength="1"
                        placeholder="2"
                    >
                    </input>
                    {/* <p className="people">PEOPLE</p> */}
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

export default HousemateQuantity