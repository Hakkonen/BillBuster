import React, { useState } from "react"

function BillCost(props) {
    const [ billCostLength , setBillCostLength ] = useState(4)

    function toCurrency(e) {
        let input = e.target.value
        const re = /^[.0-9\b]+$/
        // Limits whole int length to 4
        let intLen = 0
        for(let i = 0; i < input.length; i++) {
            if(input[i] !== ".") {
                intLen += 1
            } else {
                break
            }
        }
        if(intLen <= 4) {
            if (input === '' || re.test(input)) {
                // Allow prop update if conditions are met
                
                // Test for decimal and limit places to two
                if(input.includes(".")) {
                    let decimalIndex = input.indexOf(".")
                    // if (string - decimalIndex) <= 2 then continue
                    if(!(input.length - decimalIndex <= 3)) {
                        // console.log("No good")
                        input = input.slice(0, (decimalIndex + 3))
                    }
                }
                
                if(input.charAt(0) !== "0") {
                    props.setBillCost(input)
                    // If first digit is 0 and second is decimal continue
                } else if (input.charAt(0) === "0" && input.charAt(1) == ".") {
                    props.setBillCost(input)
                // If length is 1 and first digit is 0 continue
                } else if (input.charAt(0) === "0" && input.length == 1) {
                    props.setBillCost(input)
                } 
            }
            // Set billcost length  
            // TODO: Make that fucking decimal count in length
            setBillCostLength(input.length)
        }
    }

    return (
        <div className="bill-cost-page">
            <div className="left-col">
            <p className="hover square" style={{marginTop: "18vh"}}>2</p>
            </div>

            <div className="middle-col">
                <p 
                        className="middle-col-header"
                        style={{height: "60%"}}
                    >
                        BILL COST
                </p>
                <div 
                    className="bill-cost-input"
                    style={{height: "9.5%"}}
                >
                    <span className="dollar">$</span>
                    <input 
                        type="text"
                        value={props.billCost} 
                        placeholder={1.23}
                        style={{width: billCostLength + "ch"}}
                        // onKeyDown={e => {if(e.target.value.length > 6) e.target.value = e.target.value.slice(0, 6)}}
                        onChange={e => toCurrency(e)} 
                    />
                </div>
            </div>

            <div className="right-col">
                <svg  
                    className="arrow"
                    style={{height: "30%"}}
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
                
                {/* Input */}
                <svg  
                    className="arrow"
                    style={{height: "19.5%"}}
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
        
        // <div className="bill-cost-page">
            
        //     <SiteLine x1={20} y1={0} x2={20} y2={850} />

            
        //     <LateralLine x1={-props.width + (props.width/1.2)} y1={props.height/10 * 2} x2={20} y2={props.height/10 * 2} />

            
        //     <div 
        //         className="bill-cost-page-header"
        //         style={{top: `${props.height/10 * 1.45}px`}}
        //     >
        //         <p>
        //             BILL COST
        //         </p>
        //     </div>

            
        //     <LateralLine x1={-props.width + (props.width/1.5)} y1={(props.height/10 * 3) + 50} x2={20} y2={(props.height/10 * 3) + 50} />
            
            
        //     <div 
        //         className="bill-cost-input"
        //         style={{top: `${props.height/10 * 3 + 20}px`}}
        //     >
        //         <span className="dollar">$</span>
        //         <input 
        //             type="number"
        //             TODO: Change text to number and stick $ div that hangs on to left of number
        //             step=".01"
        //             value={props.billCost} 
        //             placeholder={100}
        //             style={{width: props.billCost.length + "ch"}}
        //             onFocus={e => e.target.select()}
        //             onKeyDown={e => {if(e.target.value.length > 6) e.target.value = e.target.value.slice(0, 6)}}
        //             onChange={e => toCurrency(e)} 
        //         />
        //     </div>
        // </div>
    )
}

export default BillCost