import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const Menu = () => {
    const {resId} = useParams()
    const {details, hotelInfo} = useRestaurantMenu(resId)
    
    return(
        <div className="menu-container">
            <h1>{hotelInfo?.name}</h1>
            <img src=""></img>
            <ul className="menu-items">
                {details}
            </ul>
        </div>
    )
}

export default Menu