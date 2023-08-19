import Card from "./Card"
import { useEffect, useState } from "react"
import ShimmerUICard from "./ShimmerUICard"
import { SWIGGY_RESTAURANTS_API } from "../utils/constants"

const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [cardList, setCardList] = useState([])
    
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
        let cards = responseList.map(el => (<Card resData={el} key={el.info.id} />))
        setCardList(cards)
    }

    const filterTopList = () => {
        let filteredList = restaurants.filter(el => el.info.avgRating > 4)
        let cards = filteredList.map(el => (<Card resData={el} key={el.info.id} />))
        setCardList(cards)
    }

    const filterByText = (text) => {
        let filteredList = restaurants.filter(el => el.info.name.toLowerCase().includes(text.toLowerCase()))
        let cards = filteredList.map(el => (<Card resData={el} key={el.info.id} />))
        setCardList(cards)
    }

    return (
        <div className="body-container">
            <div className="search-container">
                <input type="search" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
                <button onClick={() => {filterByText(searchText)}}>Search</button>
            </div>
            <div className="filter">
                <button className="btn btn-filter" onClick={() => filterTopList()}>Filter Top Rated</button>
            </div>
            {!cardList.length && <ShimmerUICard />}
            {
                cardList.length >= 1 && 
                <div className="card-layout">
                    {cardList}
                </div>
            }
        </div>
    )
}

export default Body