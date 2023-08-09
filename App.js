import React from "react"
import ReactDOM  from "react-dom/client"

let heading = React.createElement("h2",{id:"title"},"This is the child")
let root = ReactDOM.createRoot(document.getElementById("root"))
console.log("Root",root)
root.render(heading)