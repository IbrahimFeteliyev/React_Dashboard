import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsAction } from '../../redux/Actions/ProductActions';
import { Link } from 'react-router-dom';
import { FILE_PATH } from '../../api/Config';
const Product = () => {
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])


    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 my-4">
                    <Link to="/product/create">
                        <button className='btn btn-outline-success'>Create</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    products &&
                    products.map((product) => (
                        <div key={product.id} className="col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className='img-fluid' style={{ height: 200 }} src={`${FILE_PATH}${product.coverPhoto}`} alt="" />
                                    <h5>{product.name}</h5>
                                </div>
                                <div className="card-footer">
                                    <div className="row text-center">
                                        <div className="col-lg-6">
                                            <button className='btn btn-outline-danger w-100'>Delete</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to={`/product/update/${product.id}`}>
                                                <button className='btn btn-outline-warning w-100'>Edit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Product