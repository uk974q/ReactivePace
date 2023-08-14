import Card from "./Card"
import { useEffect, useState } from "react"
import ShimmerUICard from "./ShimmerUICard"

const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    let cardList = restaurants?.map(el => (<Card resData={el} key={el.info.id} />))

    function filterTopList(){
        let filteredList = responseList.filter(el => el.info.avgRating > 4.5)
        setRestaurants(filteredList)
        cardList = restaurants.map(el => (<Card resData={el} key={el.info.id} />))
    }

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        res = await res.json()
        let responseList = (res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurants(responseList)
    }

    return (
        <div className="body-container">
            <div className="filter">
                <button className="btn btn-filter" onClick={() => filterTopList()}>Filter Top Rated</button>
            </div>
            {!restaurants.length && <ShimmerUICard />}
            {
                restaurants.length > 1 && 
                <div className="card-layout">
                    {cardList}
                </div>
            }
        </div>
    )
}

export default Body