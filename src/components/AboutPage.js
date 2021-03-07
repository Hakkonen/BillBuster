import React from "react"
import SiteLine from "./SiteLine"
import LateralLine from "./LateralLine"

function AboutPage(props) {
    
    return (
        <div className="about-page">
            {/* Page line */}
            <SiteLine x1={20} y1={0} x2={20} y2={850} />
            {/* Connector line */}
            <LateralLine x1={-props.width + (props.width/1.2)} y1={props.height/10 * 2} x2={20} y2={props.height/10 * 2} />
            {/* Header line */}
            <div 
                id="about"
                className="about-page-header"
                style={{top: `${(props.height/10 * 1.7)}px`}}
            >
                <p>ABOUT</p>
            </div>
            {/* Connector line */}
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/3) + 25} x2={20} y2={(props.height/3) + 25} />
            {/* About text */}
            <div 
                className="about-page-text"
                style={{top: `${props.height/3.7}px`}}
            >
                <p>
                    Bill Buster is a web app designed to help divvy the cost of living together. Simply input the cost of the bill, the bill period, the number of housemates, their stay period, and their respective share of the cost.
                </p>
            </div>
        </div>
    )
}

export default AboutPage