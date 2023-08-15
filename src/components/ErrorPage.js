import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error = useRouteError()
    console.log("Error",error)
    return(
        <div>
            <h1>Oops I am too lazy to create a fancy page. But this is 404. Trust Me. Fix your route or code</h1>
        </div>
    )
}

export default ErrorPage