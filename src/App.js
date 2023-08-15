import React from "react"
import ReactDOM  from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"

const ReactFunctionalComponent = () => (
    <div className="container">
        <Header />
        <Body />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <ReactFunctionalComponent />,
        errorElement: <ErrorPage />
    },
    {
        path:"/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)