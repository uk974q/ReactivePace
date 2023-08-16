import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo"><i className="las la-utensils"></i><span>Reactive Delivery</span></div>
            <div className="links">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header