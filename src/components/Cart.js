import { useDispatch, useSelector } from "react-redux"
import MenuItem from "./MenuItem"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const dispatchAction = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    console.log("Cart ITems", cartItems.map((el,i) => el.name))
    return (
        <div className="my-3 flex flex-col mx-auto w-1/4">
            <button disabled={!cartItems.length} onClick={() => dispatchAction(clearCart())} className="p-2 bg-red-600 text-white rounded disabled:bg-slate-400 disabled:text-white  disabled:cursor-not-allowed">Clear Cart</button>
            {!(cartItems?.length)  && <div className="my-3 font-bold mx-auto">Cart is empty. Quick. Add something. </div>}
            {cartItems?.map((el,i) => (
                <MenuItem key={el.name+"-"+i} name={el.name} src={el.src} action={false} />
            ))}
        </div>
    )
}
export default Cart