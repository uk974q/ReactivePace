import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuAccordion from "./MenuAccordion"
import { useState } from "react"

const Menu = () => {
    const {resId} = useParams()
    const {details, hotelInfo} = useRestaurantMenu(resId)
    const [index, setIndex] = useState(0)

    return(
        <div className="my-3 flex flex-col mx-auto w-1/4">
            <h1 className="font-bold text-4xl ml-2">{hotelInfo?.name}</h1>
            
            {Object.keys(details).map((category,i) => (
                <MenuAccordion key={category} keyIndex={i} handler={(keyIndex) => setIndex(keyIndex)} category={category} details={details} toggle={i == index ? true : false}/>
            ))}
        </div>
    )
}

export default Menu