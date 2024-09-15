import { Navigate } from "react-router-dom"
import { useUserStore } from "../../stores/useUserStore"

export const ProtectedAdminRoute = ({children}) => {
    const currentUser = useUserStore(state => state.currentUser)   
    return currentUser.role === "admin" ? children : <Navigate to="/" />;
}

