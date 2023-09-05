import React, { lazy, Suspense } from "react"
import ReactDOM  from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
// import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import Menu from "./components/Menu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))
const Cart = lazy(() => import("./components/Cart"))

const ReactFunctionalComponent = () => (
    <Provider store={appStore}>
        <UserContext.Provider value = {{loggedUser : "Actual User"}}>
            <div className="container">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    </Provider>
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
                element: <Suspense fallback={<div>Loading......</div>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Suspense fallback={<div>Loading....</div>}><Cart /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <Menu />
            },
        ],
        errorElement: <ErrorPage />
    },
    
])


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)