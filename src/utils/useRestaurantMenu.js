import { useEffect, useState } from "react"
import { SWIGGY_MENU_API } from "./constants"
import MenuItem from "../components/MenuItem"

const useRestaurantMenu = (resId) => {
    const [details, setDetails] = useState({})
    const [hotelInfo, setHotelInfo] = useState([])

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async() => {
        const data = await fetch(SWIGGY_MENU_API + resId)
        const res = await data.json()
        const menuData = res.data.cards
        // let items = []
        let obj = {}
        for(let i=0; i< menuData.length; i++){
            let hotelDetails =  menuData[i]?.card?.card?.info
            if(hotelDetails){
                setHotelInfo(hotelDetails)
            }
            let cardList = menuData[i]?.groupedCard?.cardGroupMap?.REGULAR
            console.log("Response first",cardList)
            // let obj = {}
            cardList?.cards?.forEach(el => {
                let itemCategory = el?.card?.card?.title
                let responseList = el?.card?.card?.itemCards
                if(responseList){
                    obj[itemCategory] = []
                    let keyPrefix = responseList.length
                    // console.log("Response",card)
                    responseList?.forEach((el,i) => {
                        let info = el.card.info
                        // console.log("Info",info)
                        let key = keyPrefix + "_"+info.id+"_"+i
                        obj[itemCategory].push(<MenuItem key={key} name={info.name} src={info.imageId} action={true}/>)
                    })
                }
            })
            
        }
        setDetails(obj) 
    }
    return {details,hotelInfo}
}

export default useRestaurantMenu