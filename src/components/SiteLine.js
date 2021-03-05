import React from "react"

function SiteLine(props) {
    return (
        <span>
            <svg className="site-line">
                <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} style={{stroke: "rgb(255,255,255)", strokeWidth: "1"}} />
            </svg>
        </span>
    )
}

export default SiteLine