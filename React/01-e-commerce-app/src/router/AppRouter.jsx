import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { ECommerceRoutes } from "../e-commerce/routes/ECommerceRoutes";
import { NavBar } from "../ui/components/NavBar";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/*" element={<ECommerceRoutes/>}/>
      </Routes>
    </>
  )
}

