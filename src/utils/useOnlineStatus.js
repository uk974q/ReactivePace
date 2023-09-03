import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [isOnline,setIsOnline] = useState(true)

    useEffect(() => {
        window.addEventListener("online", function(){
            setIsOnline(true)
        })   
        window.addEventListener("offline", function(){
            setIsOnline(false)
        })
    }, [])
    return isOnline

}

export default useOnlineStatus