import React from "react"
import ReactDOM  from "react-dom/client"

// let heading = React.createElement("h2",{id:"title"},"This is the child")

const reactHeadingElement = <h2 id="title" className="title-name">This is a React Element</h2> 

const ReactFunctionalComponent = () => (
    <div className="container">
        {reactHeadingElement}
    </div>
)
let root = ReactDOM.createRoot(document.getElementById("root"))
// console.log("Root",root)
root.render(<ReactFunctionalComponent/>)