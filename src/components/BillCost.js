import React, { useState } from "react"
import SiteLine from "./SiteLine"
import LateralLine from "./LateralLine"

function BillCost(props) {
    const limit = 1000;
    const prefix = '$';

    function toCurrency(e) {
        let input = e.target.value
        const re = /^[.0-9\b]+$/
        if (input === '' || re.test(input)) {
            console.log(input)
            console.log(input.length)
            // Allow prop update if conditions are met
            // Check if first number is 0

            // Test for decimal and limit places to two
            if(input.includes(".")) {
                let decimalIndex = input.indexOf(".")
                // if (string - decimalIndex) <= 2 then continue
                if(!(input.length - decimalIndex <= 3)) {
                    console.log("No good")
                    input = input.slice(0, (decimalIndex + 3))
                }
            }
            
            if(input.charAt(0) !== "0") {
                props.setBillCost(input)
                // If first digit is 0 and second is decimal continue
            } else if (input.charAt(0) === "0" && input.charAt(1) == ".") {
                props.setBillCost(input)
                console.log("Updated: ", props.billCost)
            // If length is 1 and first digit is 0 continue
            } else if (input.charAt(0) === "0" && input.length == 1) {
                props.setBillCost(input)
                console.log("Updated: ", props.billCost)
            } else {
                console.log("No bueno")
            }
        }
        

        console.log("Updated: ", props.billCost)
    }

    return (
        <div className="bill-cost-page">
            {/* Page line */}
            <SiteLine x1={20} y1={0} x2={20} y2={850} />

            {/* Connector line */}
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/10 * 2) + 50} x2={20} y2={(props.height/10 * 2) + 50} />

            {/* Header */}
            <div 
                className="bill-cost-page-header"
                style={{top: `${props.height/10 * 2}px`}}
            >
                <p>
                    BILL COST
                </p>
            </div>

            {/* Bill cost line */}
            <LateralLine x1={-props.width + (props.width/1.5)} y1={(props.height/10 * 3) + 50} x2={20} y2={(props.height/10 * 3) + 50} />
            
            {/* Bill cost input */}
            <div 
                className="bill-cost-input"
                style={{top: `${props.height/10 * 3 + 20}px`}}
            >
                <span className="dollar">$</span>
                <input 
                    type="number"
                    // TODO: Change text to number and stick $ div that hangs on to left of number
                    // step=".01"
                    value={props.billCost} 
                    placeholder={100}
                    // style={{width: props.billCost.length + "ch"}}
                    // onFocus={e => e.target.select()}
                    onKeyDown={e => {if(e.target.value.length > 6) e.target.value = e.target.value.slice(0, 6)}}
                    onChange={e => toCurrency(e)} 
                />
            </div>
        </div>
    )
}

export default BillCost