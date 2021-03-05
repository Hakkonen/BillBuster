import React from "react"
import SiteLine from "./SiteLine"
import LateralLine from "./LateralLine"

function AboutPage(props) {
    return (
        <div className="about-page">
            <SiteLine x1={20} y1={0} x2={20} y2={850} />
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/5) + 25} x2={20} y2={(props.height/5) + 25} />
            <div 
                className="about-page-header"
                style={{top: `${props.height/5}px`}}
            >
                <p className="text-bg">ABOUT</p>
            </div>
            <LateralLine x1={-props.width + (props.width/1.2)} y1={(props.height/3) + 11} x2={20} y2={(props.height/3) + 11} />
            <div 
                className="about-page-text"
                style={{top: `${props.height/3}px`}}
            >
                <p className="text-bg">
                    Bill Buster is a web app
                </p>
            </div>
        </div>
    )
}

export default AboutPage