import { Navigate } from "react-router-dom"
import { useUserStore } from "../stores/useUserStore"

export const PublicRoute = ({element}) => {
    const currentUser = useUserStore(state => state.currentUser)
    return currentUser ? <Navigate to={"/"}/> : element
}