import { useEffect, useState } from "react"
import MenuItem from "./MenuItem"
import { useParams } from "react-router-dom"
import { SWIGGY_MENU_API } from "../utils/constants"

const Menu = ({name}) => {
    const {resId} = useParams()
    console.log("Name",name)
    const [details, setDetails] = useState([])
    const [hotelInfo, setHotelInfo] = useState([])
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async() => {
        console.log("Switgg",SWIGGY_MENU_API)
        const data = await fetch(SWIGGY_MENU_API + resId)
        const res = await data.json()
        const menuData = res.data.cards
        let items = []
        for(let i=0; i< menuData.length; i++){
            let hotelDetails =  menuData[i]?.card?.card?.info
            if(hotelDetails){
                setHotelInfo(hotelDetails)
            }
            let cardList = menuData[i]?.groupedCard?.cardGroupMap?.REGULAR
            cardList?.cards?.forEach(el => {
                let responseList = el?.card?.card?.itemCards
                if(responseList){
                    console.log("Response",responseList)
                    responseList?.forEach(el => {
                        let info = el.card.info
                        console.log("Info",info)
                        items.push(<MenuItem key={info.id} name={info.name} />)
                    })
                }
            })
            
        }
        setDetails(items) 
    }

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