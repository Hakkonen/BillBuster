import "./styles.scss"
import React, { useEffect, useState } from "react"
import { render } from "react-dom"

import AboutPage from "./components/AboutPage"
import BillCost from "./components/BillCost"
import BillPeriod from "./components/BillPeriod"
import HousemateQuantity from "./components/HousemateQuantity"
import Housemate from "./components/Housemate"
import Results from "./components/Results"
import ResultRow from "./components/ResultRow"

function App() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)
    const [ billCost, setBillCost ] = useState(250)
    const [ billPeriod, setBillPeriod ] = useState(30)
    const [ housemateCount, setHousemateCount ] = useState(2)
    const [ person, setPerson ] = useState([])
    const [ results, setResults ] = useState()

    // Converts housemate index to name
    function intToName(i) {
        let names = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"]
        return names[i]
    }

    // Repopulates HM array
    const handleHousemates = () => {
        let newHousemates = []
        for(let i = 0; i < housemateCount; i++) {
            let newHousemate = {
                key: i, name: `HOUSEMATE ${intToName(i)}`, stay: 30, owes: 0, ratio: 0
            }
            newHousemates.push(newHousemate)
        }
        setPerson(newHousemates)
    }

    // When housemate quant is changed create new array of objects
    useEffect(() => {
        handleHousemates()
    }, [housemateCount])

    // // Listens for housemate stay period
    // // If there are no housemates present for entire stay reduce bill length to longest stay period to compensate for bill split ratio
    // useEffect(() => {
    //     console.log("person: ", person)
    //     console.log("bill length: ", billPeriod)
    //     let longestStay = 0
    //     for(const p of person) {
    //         console.log(p.stay)
    //         // Set longest stay
    //         if(p.stay > longestStay){ longestStay = p.stay }
    //     }
    //     // If longest stay is less than bill period, reduce bill period to stay length
    //     if(billPeriod > longestStay) {
    //         setBillPeriod(longestStay)
    //     }
    // }, [person])

    // // Console log updated bill period
    // useEffect(() => {
    //     console.log("New bill period: ", billPeriod)
    // }, [billPeriod])

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

    // The actual algorithm
    const BillBuster = (billCost, billLength, people) => {
        // Add up the total stay period
        let totalStayDays = 0
        for(const p of people) {
            totalStayDays = parseInt(totalStayDays + parseInt(p.stay))
        }
        console.log("total stay days: ", totalStayDays)

        // Figure out per diem
        const perDiem = billCost/billLength
        console.log("perDiem: ", perDiem)

        // Calculate stay percentage for each housemate, which gives the total percentage to pay for the bill
        for(const p of people) {
            p.ratio = p.stay / totalStayDays * 100
            console.log(p.name + ", ratio: " + p.ratio + "%")
        }

        // Map person object to housemates to avoid mutation
        let housemates = people.map(person => ({...person}))

        // Calculate each person's percent share of bill
        for(const p of housemates) {
            p.owes = parseFloat(billCost * p.ratio / 100)
            console.log(p.owes)
        }
        
        // Return result
        let resultList = []
        for(const p of housemates) {
            resultList.push(<ResultRow 
                key={p.key}
                name={p.name}
                owes={p.owes}
                width={width}
                height={height}
            />)
        }

        setResults(resultList)
    }

    // Handles results calculations
    useEffect(() => {
        BillBuster(billCost, billPeriod, person)
    }, [person])

    const peopleEl = person.map(p => <Housemate 
        height={height} width={width}
        key={p.key}
        person={p}
        setPerson={setPerson}
        handleChange={handleChange}
        BillBuster={BillBuster}
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

            <Results
                height={height} width={width} 
                quantity={housemateCount}
                results={results}
            />

            {results}

            <div className="spacer"></div>
        </div>
    )
}

render(<App />, document.getElementById("root"))