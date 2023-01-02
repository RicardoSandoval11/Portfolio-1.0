import { NavBar } from "../../ui/components/NavBar"
import { Routes, Route, Navigate } from "react-router-dom";
import { FemaleClothesPage } from "../pages/FemaleClothesPage";
import { MaleClothesPage } from "../pages/MaleClothesPage";
import { Offers } from "../pages/Offers";
import { Product } from "../pages/Product";
import { SearchPage } from "../pages/SearchPage";


export const ECommerceRoutes = () => {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="female" element={<FemaleClothesPage/>}/>
        <Route path="male" element={<MaleClothesPage/>}/>
        <Route path="offers" element={<Offers/>}/>
        <Route path="product/:productId" element={<Product/>}/>
        <Route path="search" element={<SearchPage/>}/>
        <Route path="/*" element={<Navigate to="login"/>}/>
      </Routes>
    </>
  )
}

