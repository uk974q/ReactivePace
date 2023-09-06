import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
    let user = useContext(UserContext)
    let cartItems = useSelector((store) => store.cart.items)
    // console.log("CartItems", cartItems)
    return (
        <div className="flex justify-between p-2 shadow">
            <div><i className="las la-utensils"></i><span>Reactive Delivery</span></div>
            <div>
                <ul className="flex gap-4">
                    <li className="hover:text-blue-400"><Link to={"/"}>Home</Link></li>
                    <li className="hover:text-blue-400"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="hover:text-blue-400"><Link to={"/about"}>About Us</Link></li>
                    <li className="hover:text-blue-400"><Link to={"/contact"}>Contact</Link></li>
                    <li className="hover:text-blue-400"><Link to={"/cart"}>Cart - {cartItems.length}</Link></li>
                    <li className="hover:text-blue-400"><Link to={"/contact"}>{user.loggedUser} - {user.role}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header