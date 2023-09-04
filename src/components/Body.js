import Card, { withVegNonVeg } from "./Card"
import { useEffect, useState } from "react"
import ShimmerUICard from "./ShimmerUICard"
import { SWIGGY_RESTAURANTS_API } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [cardList, setCardList] = useState([])
    const isOnline = useOnlineStatus()

    const RestaurantCardWithType = withVegNonVeg(Card)
    
    useEffect(() => {
        fetchData()
    },[])
    console.log("Rendered")

    const fetchData = async () => {
        let res = await fetch(SWIGGY_RESTAURANTS_API)
        res = await res.json()
        console.log("Fetched")
        let cardData = res.data.cards
        let responseList = []
        for(let i=0; i< cardData.length; i++){
            let data = cardData[i].card?.card?.gridElements?.infoWithStyle?.restaurants
            if(data && data.length > responseList.length){
                console.log("Index",i)
                responseList = data
            }
        }
        setRestaurants(responseList)
        console.log("Response",responseList)
        let cards = responseList.map(el => el.info.veg ? (<RestaurantCardWithType resData={el} key={el.info.id}/>) : (<Card resData={el} key={el.info.id} />))
        setCardList(cards)
    }

    const filterTopList = () => {
        let filteredList = restaurants.filter(el => el.info.avgRating > 4.3)
        let cards = filteredList.map(el => el.info.veg ? (<RestaurantCardWithType resData={el} key={el.info.id}/>) : (<Card resData={el} key={el.info.id} />))
        setCardList(cards)
    }

    const filterByText = (text) => {
        let filteredList = restaurants.filter(el => el.info.name.toLowerCase().includes(text.toLowerCase()))
        let cards = filteredList.map(el => el.info.veg ? (<RestaurantCardWithType resData={el} key={el.info.id}/>) : (<Card resData={el} key={el.info.id} />))
        setCardList(cards)
    }

    return (
        <div>
            {
            !isOnline ? (<div>You are offline</div>) : 
                <div className="pt-2 mx-2">
                    <div className="flex justify-between mb-3">
                        <div>
                            <input className="border-2 border-black" type="search" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
                            <button className="bg-blue-400 p-1 w-15 rounded ml-2 cursor-pointer" onClick={() => {filterByText(searchText)}}>Search</button>
                        </div>
                        <button className="bg-yellow-300 p-1 w-15 rounded cursor-pointer" onClick={() => filterTopList()}>Filter Top Rated</button>
                    </div>
                    {!cardList.length && <ShimmerUICard />}
                    {
                        cardList.length >= 1 && 
                        <div className="grid gap-1 grid-cols-5">
                            {cardList}
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Body