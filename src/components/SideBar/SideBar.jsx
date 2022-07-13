import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/product" >Product</Link>
        </li>
        <li>
          <Link to="/category" >Category</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar