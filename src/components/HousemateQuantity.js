import React, { useState } from "react"
import SiteLine from "./SiteLine"
import LateralLine from "./LateralLine"

function HousemateQuantity(props) {
    return (
        <div className="housemate-quantity">
            <SiteLine x1={20} y1={0} x2={20} y2={850} />

            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/10 * 2) + 37} x2={20} y2={(props.height/10 * 2) + 37} />
            <div 
                className="housemate-quantity-header"
                style={{top: `${props.height/10 * 2}px`}}
            >
                <p>NUMBER OF HOUSEMATES</p>
            </div>

            
        </div>
    )
}

export default HousemateQuantity