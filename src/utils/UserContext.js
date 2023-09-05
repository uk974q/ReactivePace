import { createContext } from "react";

const UserContext = createContext({
    loggedUser : "Default User",
    role: "Admin"
})

export default UserContext