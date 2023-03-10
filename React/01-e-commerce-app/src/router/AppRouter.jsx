import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { ECommerceRoutes } from "../e-commerce/routes/ECommerceRoutes";
import { PrivateRoute } from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/*" element={
          <PrivateRoute>
            <ECommerceRoutes/>
          </PrivateRoute>
        }/>
        <Route path="/*" element={<ECommerceRoutes/>}/>
      </Routes>
    </>
  )
}

