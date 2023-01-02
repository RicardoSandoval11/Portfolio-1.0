import { products } from "../data/e-commerce";

export const getProductsByType = ( type ) => {

    const validType = ['female', 'male'];
    if ( !validType.includes(type) ){
        throw new Error(`${type} is not a valid type`);
    }

    return products.filter(product => product.type === type);
}