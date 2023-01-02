import { products } from "../data/e-commerce";

export const getOfferProducts = ( ) => {

    return products.filter(product => product.isOffer);
}