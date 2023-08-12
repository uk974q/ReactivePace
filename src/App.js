import React from "react"
import ReactDOM  from "react-dom/client"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"

const ReactFunctionalComponent = () => (
    <div className="container">
        <Header />
        <Body />
    </div>
)
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ReactFunctionalComponent/>)