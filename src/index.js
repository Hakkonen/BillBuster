import "./styles.scss"
import React, { useEffect, useState } from "react"
import { render } from "react-dom"

import AboutPage from "./components/AboutPage"
import BillCost from "./components/BillCost"
import BillPeriod from "./components/BillPeriod"
import HousemateQuantity from "./components/HousemateQuantity"

function App() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)
    const [ billCost, setBillCost ] = useState(10)
    const [ billPeriod, setBillPeriod ] = useState(30)

    useEffect(() => {
        // console.log(width, height)
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

            <AboutPage height={height} width={width} />

            <BillCost 
                billCost={billCost} 
                setBillCost={setBillCost}
                height={height} width={width} 
            />

            <BillPeriod
                billPeriod={billPeriod}
                setBillPeriod={setBillPeriod}
                height={height} width={width} 
            />

            <HousemateQuantity
                height={height} width={width} 
            />
        </div>
    )
}

render(<App />, document.getElementById("root"))