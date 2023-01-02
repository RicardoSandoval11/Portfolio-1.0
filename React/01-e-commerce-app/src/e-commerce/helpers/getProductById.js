import { products } from "../data/e-commerce"


export const getProductsById = (id) => {
    
    return products.find(product => product.id === id);
}