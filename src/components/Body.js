import Card from "./Card"
import { responseList } from "../utils/mockData"
import { useState } from "react"




const Body = () => {
    const [restaurants, setRestaurants] = useState(responseList)
    let cardList = restaurants.map(el => (<Card resData={el} key={el.info.id} />))

    function filterTopList(){
        let filteredList = responseList.filter(el => el.info.avgRating > 4.5)
        setRestaurants(filteredList)
        cardList = restaurants.map(el => (<Card resData={el} key={el.info.id} />))
    }


    return (
        <div className="body-container">
            <div className="filter">
                <button className="btn btn-filter" onClick={() => filterTopList()}>Filter Top Rated</button>
            </div>
            <div className="card-layout">
                {cardList}
            </div>
        </div>
    )
}

export default Body