import React from "react"
import ReactDOM  from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import Menu from "./components/Menu"

const ReactFunctionalComponent = () => (
    <div className="container">
        <Header />
        <Outlet />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <ReactFunctionalComponent />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <Menu />
            }
        ],
        errorElement: <ErrorPage />
    },
    
])


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)