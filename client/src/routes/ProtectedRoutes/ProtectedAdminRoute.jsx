import { useContext } from "react"
import { UserContext } from "../../userContext/UserContext"
import { Navigate } from "react-router-dom"

export const ProtectedAdminRoute = ({children}) => {
    const users = useContext(UserContext)   
    const isAdmin = users.isAdmin === true

   return isAdmin ? children : <Navigate to="/" />;
}