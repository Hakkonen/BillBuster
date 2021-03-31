import React from "react"

function BillPeriod(props) {
    function inputDays(e) {
        let output = e.target.value
        const re = /^[0-9\b]+$/;
        if (output === '' || re.test(output)) {
            if(output.length > 1 && output.charAt(0) === "0") {
                // do nothing
            } else {
                props.setBillPeriod(output)
            }
        }
    }

    return (
        <div className="bill-period-page">
            <div className="left-col">
                <p className="hover square" style={{marginTop: "18vh"}}>3</p>
            </div>

            <div className="middle-col">
                <div
                    className="middle-col-header"
                    style={{height: "60%"}}
                >
                    <p>BILL PERIOD</p>
                </div>

                
                <div
                    className="bill-period-page-input"
                    style={{height: "7%"}}
                >
                    <input 
                        type="text" 
                        value={props.billPeriod} 
                        onChange={e => inputDays(e)} 
                        maxLength="3"
                        placeholder="30"
                    />
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
                
                {/* Input */}
                <svg  
                    className="arrow"
                    style={{height: "19.5%"}}
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

export default BillPeriod