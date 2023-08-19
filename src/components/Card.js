import { Link } from "react-router-dom"
import { IMAGE_CDN } from "../utils/constants"
const Card = ({resData}) => {
    const {id, cloudinaryImageId, avgRating, name, cuisines, areaName} = resData.info
    return(
        <Link to={"restaurants/"+id}>
            <div className="card" >
                <img src={IMAGE_CDN + cloudinaryImageId}></img>
                <div className="ratings">
                    <i className="las la-star"></i>
                    <span>{avgRating}</span>
                </div>
                <div className="card-info">
                    <h1 className="card-title">{name}</h1>
                    <p>{cuisines.join(", ")}</p>
                    <p>{areaName}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card