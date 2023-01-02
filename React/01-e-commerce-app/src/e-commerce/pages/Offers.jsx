import { Link } from "react-router-dom";
import { getOfferProducts } from "../helpers/getOfferProducts";
import 'animate.css';

export const Offers = () => {

  const products = getOfferProducts();

  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <div className="row d-flex justify-content-center flex-wrap mx-1">
              {
                products.map(product => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={product.id}>
                      <div className="card">
                        <div className="card-img">
                            <img src={`assets/products/${product.id}.jpg`} className="card-img-top" alt="" />
                        </div>
                          <div className="card-body">
                              <div className="card-title">
                              <p className="h3">{product.product}</p>
                              </div>
                              <ul className="list-group list-group-flush">
                                  <li className="list-group-item">Category: {product.category}</li>
                                  <li className="list-group-item">Offer: {product.price}</li>
                              </ul>
                          </div>
                          <div className="card-footer">
                            <Link 
                                className="btn btn-primary"
                                to={`/product/${product.id}`}
                            >
                                See more..
                            </Link>
                          </div>
                      </div>
                  </div>
                ))
              }
          </div>
        </div>
    </>
  )
}
