import { useEffect, useState } from "react"
import { SWIGGY_MENU_API } from "./constants"
import MenuItem from "../components/MenuItem"

const useRestaurantMenu = (resId) => {
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
                    let keyPrefix = responseList.length
                    console.log("Response",responseList)
                    responseList?.forEach((el,i) => {
                        let info = el.card.info
                        console.log("Info",info)
                        let key = keyPrefix + "_"+info.id+"_"+i
                        items.push(<MenuItem key={key} name={info.name} />)
                    })
                }
            })
            
        }
        setDetails(items) 
    }
    return {details,hotelInfo}
}

export default useRestaurantMenu