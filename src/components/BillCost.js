import React, { useState } from "react"
import SiteLine from "./SiteLine"
import LateralLine from "./LateralLine"

function BillCost(props) {
    function toCurrency(e) {
        // Removes shit that isn't an integer and extra zeroes
        // and that goddam dollar sign
        let input = e.target.value
        let processedInput = input.substring(1)
        let output
        if (processedInput.length > 1) {
            if (processedInput.charAt(0) == 0) {
                output = processedInput.substring(1)
            } else {
                output = processedInput
            }
        } else {
            output = processedInput
        }
        
        const re = /^[0-9\b]+$/;
        if (output === '' || re.test(output)) {
            props.setBillCost(output)
        }
        console.log(props.billCost)
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
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/10 * 3) + 50} x2={20} y2={(props.height/10 * 3) + 50} />
            
            {/* Bill cost input */}
            <div 
                className="bill-cost-input"
                style={{top: `${props.height/10 * 3 + 20}px`}}
            >
                <input 
                    type="text" 
                    value={"$" + props.billCost} 
                    // onFocus={e => e.target.select()}
                    onChange={e => toCurrency(e)} 
                    maxLength="5"
                />
            </div>
        </div>
    )
}

export default BillCost