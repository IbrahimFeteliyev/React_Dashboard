import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateCategory from '../components/Category/CreateCategory'
import UpdateCategory from '../components/Category/UpdateCategory'
import CreateProduct from '../components/Product/CreateProduct'
import UpdateProduct from '../components/Product/UpdateProduct'
import Auth from '../pages/Auth'
import CategoryScreen from '../pages/CategoryScreen'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import ProductScreen from '../pages/ProductScreen'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/product' element={<ProductScreen />} />
        <Route path='/category' element={<CategoryScreen />} />
        <Route path='/product/create' element={<CreateProduct />} />
        <Route path='/product/update/:id' element={<UpdateProduct />} />
        <Route path='/category/update/:id' element={<UpdateCategory />} />
        <Route path='/category/create' element={<CreateCategory />} />
    </Routes>
  )
}

export default MyRouter