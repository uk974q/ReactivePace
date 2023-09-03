import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between p-2 shadow">
            <div><i className="las la-utensils"></i><span>Reactive Delivery</span></div>
            <div>
                <ul className="flex gap-4">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header