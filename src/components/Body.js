import Card from "./Card"
import { responseList } from "../utils/mockData"

const cardList = responseList.map(el => (<Card resData={el} key={el.info.id} />))


const Body = () => {
    return (
        <div className="body-container">
            Search
            <div className="card-layout">
                {cardList}
            </div>
        </div>
    )
}

export default Body