import React, { useState } from "react"
import SiteLine from "./SiteLine"
import LateralLine from "./LateralLine"

function BillPeriod(props) {
    function inputDays(e) {
        let output = e.target.value
        const re = /^[0-9\b]+$/;
        if (output === '' || re.test(output)) {
            props.setBillPeriod(output)
        }
        console.log(props.billPeriod)
    }

    return (
        <div className="bill-period-page">
            {/* Page line */}
            <SiteLine x1={20} y1={0} x2={20} y2={850} />

            {/* Page header line */}
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/10 * 2) + 50} x2={20} y2={(props.height/10 * 2) + 50} />

            {/* Page header */}
            <div
                className="bill-period-page-header"
                style={{top: `${props.height/10 * 2}px`}}
            >
                <p>BILL PERIOD</p>
            </div>

            {/* Period line */}
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/10 * 3) + 50} x2={20} y2={(props.height/10 * 3) + 50} />

            {/* Bill period input */}
            <div
                className="bill-period-page-input"
                style={{top: `${props.height/10 * 3 + 20}px`}}
            >
                <input 
                    type="text" 
                    value={props.billPeriod} 
                    // onFocus={e => e.target.select()}
                    onChange={e => inputDays(e)} 
                    maxLength="3"
                />
                <p className="days">DAYS</p>
            </div>
        </div>
    )
}

export default BillPeriod