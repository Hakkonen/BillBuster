// import "./styles.css"
import "./styles.scss"
import React, { useState } from "react"
import { render } from "react-dom"

import { getUsers } from "./common/usersAPI";

getUsers().then(json => console.log(json));

function App() {
    const [ state, setState ] = useState("Click me!")

    return <button onClick={() => setState("Clicked!")}>{state}</button>
}

render(<App />, document.getElementById("root"))