import "./styles.scss"
import React, { useEffect, useState } from "react"
import { render } from "react-dom"

import AboutPage from "./components/AboutPage"
import BillCost from "./components/BillCost"
import BillPeriod from "./components/BillPeriod"
import HousemateQuantity from "./components/HousemateQuantity"
import Housemate from "./components/Housemate"

function App() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)
    const [ billCost, setBillCost ] = useState(250)
    const [ billPeriod, setBillPeriod ] = useState(30)
    const [ housemateCount, setHousemateCount ] = useState(2)
    const [ housemates, setHousemates ] = useState({
        hOne: {
            key: 0,
            name: "HOUSEMATE ONE",
            period: 0,
            owing: 0
        },
    })

    return (
        <div className="app-container dark">
            
            <div className="splash-page sticky">
                <div className="left-col">

                </div>
                <div className="middle-col">
                    <p className="logo">
                        BILL BUSTER
                    </p>
                </div>
                <div className="right-col">
                    <svg  className="arrow">
                        <line x1="20" y1="150" x2="20" y2="800" style={{stroke: "rgb(255,0,0)", strokeWidth: "1"}} />
                        <line x1="20" y1="150" x2="27" y2="160" style={{stroke: "rgb(255,0,0)", strokeWidth: "1"}} />
                        <line x1="20" y1="150" x2="13" y2="160" style={{stroke: "rgb(255,0,0)", strokeWidth: "1"}} />
                    </svg>
                    
                    <p className="swipe">
                        Swipe
                    </p>
                </div>
            </div>

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
                housemateCount={housemateCount}
                setHousemateCount={setHousemateCount}
            />

            <Housemate 
                height={height} width={width} 
                key={housemates.hOne.key}
                housemates={housemates}
                setHousemates={setHousemates}
            />
        </div>
    )
}

render(<App />, document.getElementById("root"))