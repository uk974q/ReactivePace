import { IMAGE_CDN } from "../utils/constants"

const MenuItem = ({name,src}) => {
    return(
        <div className="flex h-14 my-2 items-center border-black border-2 rounded-lg p-2">
            <img src={IMAGE_CDN + src} className="h-full mx-2"></img>
            <li>{name}</li>
        </div>
    )
}
export default MenuItem