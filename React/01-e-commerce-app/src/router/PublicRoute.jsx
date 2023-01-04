import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"


export const PublicRoute = () => {

    const {logged} = useContext(AuthContext);

  return (!logged)
    ?children
    : <Navigate to="/products"/>
}

export default PublicRoute
