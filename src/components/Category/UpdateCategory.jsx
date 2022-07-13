import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/Config'

const UpdateCategory = () => {

    const [categoryList, setCategoryList] = useState([])
    const [categoryName, setCategoryName] = useState()


    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getData = async () => {
        let data = await fetch(`${BASE_URL}category/getbyid/${id}`).then(res => res.json()).then(data => setCategoryList(data.message))

    }
    console.log(categoryList);

    const updateCategory = async () => {
        fetch(`${BASE_URL}Category/updatecategory/${id}`, {
            method: "PUT",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: categoryName,

            })
        }).then(res => res.json()).then(res => {
            console.log(res)
            navigate("/category")
        })
    }


    useEffect(() => {
        getData()
    }, [dispatch])




    return (
        <div>

            <input defaultValue={categoryList.name}  type="text" onChange={(e) => setCategoryName(e.target.value)} />

            <button onClick={() => updateCategory()}>Edit</button>
        </div>
    )
}

export default UpdateCategory