import { useState } from "react"

const User = ({name}) => {
    const [admin, setAdmin] = useState(false)
    return(
        <div className="user-card">
            <h2>{name} - {admin ? "Admin" : "User"}</h2>
            <h3>India</h3>
            <h3>xyz@react.com</h3>
        </div>
    )
}

export default User