import { Link } from "react-router-dom"
import { IMAGE_CDN } from "../utils/constants"
const Card = ({resData}) => {
    const {id, cloudinaryImageId, avgRating, name, cuisines, areaName} = resData.info
    return(
        <Link to={"restaurants/"+id}>
            <div className="w-full h-[85%] relative rounded-sm bg-gray-50 p-2 hover:bg-gray-400">
                <img className="w-full h-3/4 opacity-75 rounded-sm" src={IMAGE_CDN + cloudinaryImageId}></img>
                <div className="flex items-center absolute top-2 ml-2 text-yellow-400 font-bold">
                    <i className="las la-star"></i>
                    <span>{avgRating}</span>
                </div>
                <div className="">
                    <h1 className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-bold">{name}</h1>
                    <p>{cuisines.join(", ")}</p>
                    <p>{areaName}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card