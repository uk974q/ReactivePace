import { IMAGE_CDN } from "../utils/constants"

const MenuItem = ({name,src}) => {
    return(
        <div className="grid my-2 border-black border-2 rounded-lg p-2 grid-cols-4 col-span-1 gap-1 items-center">
            <img src={IMAGE_CDN + src} className="w-1/2 h-full mx-2"></img>
            <li className="col-span-2">{name}</li>
            <i className="col-span-1 las la-cart-plus text-center text-blue-600 cursor-pointer hover:text-red-400"></i>
        </div>
    )
}
export default MenuItem