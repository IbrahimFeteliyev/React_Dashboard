import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCategoryAction } from '../../redux/Actions/CategoryAction';

const CreateCategory = () => {

  const navigate = useNavigate()

  const [categoryName, setCategoryName] = useState();
  const dispatch = useDispatch()
  const createCat = () => {
    dispatch(createCategoryAction(categoryName))
    navigate("/category")
  }
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-6 my-2">
          <TextField fullWidth id="outlined-basic" onChange={(e) => setCategoryName(e.target.value)} label="Category name" variant="outlined" />
        </div>

      </div>
      <div className="row">
        <div className="col-lg-6 my-2">
          <Button
            fullWidth
            variant="contained"
            component="label"
            color='success'
            onClick={() => createCat()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateCategory