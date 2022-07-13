import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getCategoryAction } from '../../redux/Actions/CategoryAction';

const Category = () => {

  const { categories } = useSelector((state) => state.category)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction())
  }, [])

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-4 my-4">
          <Link to="/category/create">
            <button className='btn btn-outline-success'>Create</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {
          categories &&
          categories.map((cat) => (
            <div key={cat.id} className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {cat.name}
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="row text-center">
                    <div className="col-lg-6">
                      <button className='btn btn-outline-danger w-100'>Delete</button>
                    </div>
                    <div className="col-lg-6">
                    <Link to={`/category/update/${cat.id}`}>
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

export default Category