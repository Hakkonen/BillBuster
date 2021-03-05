import "./styles.scss"
import React, { useEffect, useState } from "react"
import { render } from "react-dom"

import SiteLine from "./components/SiteLine"
import LateralLine from "./components/LateralLine"
import AboutPage from "./components/AboutPage"

function App() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)

    useEffect(() => {
        console.log(width, height)
    })

    return (
        <div className="app-container dark">
            
            {/* Splash scroll page */}
            <div className="splash-page sticky">
                {/* Logo */}
                <p className="splash-page-logo">BILL<br></br>BUSTER</p>
                
                {/* Swipe */}
                <p className="swipe">
                    Swipe
                </p>

                <span className="arrow">
                    {/* Arrow SVG */}
                    <svg className="less-sticky">
                        <line x1="20" y1="150" x2="20" y2="1000" style={{stroke: "rgb(255,0,0)", strokeWidth: "1"}} />
                        <line x1="20" y1="150" x2="27" y2="160" style={{stroke: "rgb(255,0,0)", strokeWidth: "1"}} />
                        <line x1="20" y1="150" x2="13" y2="160" style={{stroke: "rgb(255,0,0)", strokeWidth: "1"}} />
                    </svg>
                </span>
            </div>

            <div className="page-spacer"></div>

            {/* <div className="about-page">
                <SiteLine x1={20} y1={0} x2={20} y2={850} />
                <LateralLine x1={-width + (width/1.2)} y1={(height/5) + 25} x2={20} y2={(height/5) + 25} />
                <div 
                    className="about-page-header"
                    style={{top: `${height/5}px`}}
                >
                    <p className="text-bg">ABOUT</p>
                </div>
                <LateralLine x1={-width + (width/1.2)} y1={(height/3) + 11} x2={20} y2={(height/3) + 11} />
                <div 
                    className="about-page-text"
                    style={{top: `${height/3}px`}}
                >
                    <p className="text-bg">
                        Bill Buster is a web app
                    </p>
                </div>
            </div> */}

            <AboutPage height={height} width={width} />

            <div className="bill-cost-page">

            </div>
        </div>
    )
}

render(<App />, document.getElementById("root"))