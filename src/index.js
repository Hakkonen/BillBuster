import "./styles.scss"
import React, { useEffect, useState } from "react"
import { render } from "react-dom"

import AboutPage from "./components/AboutPage"
import BillCost from "./components/BillCost"
import BillPeriod from "./components/BillPeriod"
import HousemateQuantity from "./components/HousemateQuantity"
import Housemate from "./components/Housemate"
import HousematesDB from "./components/HousematesDB"

function App() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)
    const [ billCost, setBillCost ] = useState(250)
    const [ billPeriod, setBillPeriod ] = useState(30)
    const [ housemateCount, setHousemateCount ] = useState(0)
    const [ person, setPerson ] = useState([])
    const [ housemateEl, setHousemateEl ] = useState([])

    const handleHousemates = () => {
        console.log(housemateCount)
        let newHousemates = []
        for(let i = 0; i < housemateCount; i++) {
            let newHousemate = {
                key: i, name: `HOUSEMATE ${i}`, stay: 0, owes: 0
            }
            newHousemates.push(newHousemate)
        }
        console.log("new: ", newHousemates)
        setPerson(newHousemates)
    }

    // When housemate quant is changed create new array of objects
    useEffect(() => {
        handleHousemates()
    }, [housemateCount])

    useEffect(() => {
        console.log("persons: ", person)
        // setHousemateEl(person.map(p => <Housemate 
        //     height={height} width={width}
        //     key={p.key}
        //     person={p}
        //     setPerson={setPerson}
        //     handleChange={handleChange}
        // />))
    }, [person])

    useEffect(() => {
        console.log("EL: ", housemateEl)
    }, [housemateEl])

    // Updates housemate data
    const handleChange = (e, key) => {
        let input = e.target.value
        const re = /^[0-9\b]+$/;
        if (input === '' || re.test(input)) {
            if(input.length > 1 && input.charAt(0) === "0") {
                // do nothing
            } else {
                setPerson(person.map(person => 
                        person.key === key
                        ? {...person, stay: e.target.value}
                        : person
                    ))
                
            }
        }
    }

    const peopleEl = person.map(p => <Housemate 
        height={height} width={width}
        key={p.key}
        person={p}
        setPerson={setPerson}
        handleChange={handleChange}
    />)

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
                handleHousemates={handleHousemates}
            />

            {peopleEl == 0 ? null : peopleEl}
        </div>
    )
}

render(<App />, document.getElementById("root"))