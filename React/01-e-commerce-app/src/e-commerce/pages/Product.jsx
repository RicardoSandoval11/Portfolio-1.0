import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductsById } from "../helpers/getProductById";
import 'animate.css';

export const Product = () => {

    const { productId } = useParams();
    const navigate = useNavigate();

    const product = getProductsById(productId);

    if (!product) {
      return <Navigate to="/login"/>
    }

    const onReturn = () => {
      navigate(-1);
    }

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-around flex-wrap mt-4">
          <div className="col-12 col-sm-12 col-md-4 col-lg-3">
            <img src={`/assets/products/${product.id}.jpg`} alt="" className="rounded animate__animated animate__fadeInLeft"/>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 data mt-1">
            <p className="h2 text-start text-primary">
              {product.product.toUpperCase()}
            </p>
            <ul>
              <li>Type: {product.type}</li>
              <li>Category: {product.category}</li>
              <li>Price: {product.price}</li>
            </ul>
            <button 
              className="btn btn-link"
              onClick={onReturn}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


