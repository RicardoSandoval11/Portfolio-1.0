import { getProductsByType } from "../helpers/getProductsByCategory";
import { Link } from "react-router-dom";
import 'animate.css';


export const ProductsList = ({ type }) => {

    const products = getProductsByType(type);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center flex-wrap">
                    {
                        products.map(({id, product, category, price}) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 mx-2 animate__animated animate__fadeIn" key={id}>
                                <div className="card">
                                    <div className="card-img">
                                        <img src={`assets/products/${id}.jpg`} className="card-img-top" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                        <p className="h3">{product}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Category: {category}</li>
                                            <li className="list-group-item">Price: {price}</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <Link 
                                            className="btn btn-primary"
                                            to={`/product/${id}`}
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

