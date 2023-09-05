import { useDispatch } from "react-redux"
import { IMAGE_CDN } from "../utils/constants"
import { addCart, removeCart } from "../utils/cartSlice"

const MenuItem = ({name,src,action}) => {
    const dispatchAction = useDispatch()
    const addHandler = () => {
        dispatchAction(addCart({name, src}))
    }
    const removeHandler = () => {
        dispatchAction(removeCart(name))
    }
    return(
        <div className="grid my-2 border-black border-2 rounded-lg p-2 grid-cols-4 col-span-1 gap-1 items-center">
            <img src={IMAGE_CDN + src} className="w-1/2 h-full mx-2"></img>
            <li className="col-span-2">{name}</li>
            {action ? 
                (<i onClick={addHandler} className="col-span-1 las la-cart-plus text-center text-blue-600 cursor-pointer hover:text-red-400"></i>) :
                (<i onClick={removeHandler} className="col-span-1 las la-trash-alt text-center text-blue-600 cursor-pointer hover:text-red-400"></i>) 
            }

        </div>
    )
}
export default MenuItem