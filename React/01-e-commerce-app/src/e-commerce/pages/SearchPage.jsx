import { useEffect, useState } from "react";
import { products } from '../data/e-commerce';
import { Link } from "react-router-dom";


export const SearchPage = () => {

    const [inputValue, setInputValue] = useState("");

    const [ProductsSearched, setProductsSearched] = useState(products);

    const onInputChange = (event) => {
        setInputValue(event.target.value);

    }

    const filterProducts = (event) => {
        return setProductsSearched(products.filter(product => product.product.includes(event.target.value)));
    }

    /*useEffect(() =>{
        
        return () => {
            setProductsSearched(products.filter(product => product.product.includes(inputValue)));
        }

    }
        
        ,[inputValue]);*/


  return (
    <>
      <div className="container">
        <div className="row d-flex">
            <form action="" className="d-flex justify-content-start mt-2">
                <div className="form-group col-lg-6 d-flex">
                    <input 
                        type="text" 
                        className="form-control mx-2" 
                        placeholder="Search a product"
                        name="searchText"
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => {
                            onInputChange(event);
                            filterProducts(event);
                        }}
                    />
                </div>
            </form>
        </div>
        <div 
            className='row d-flex justify-content-center flex-wrap'
        >
            {
                ProductsSearched.map(({id, product, category, price}) => (
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

