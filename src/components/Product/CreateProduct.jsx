import { TextField, OutlinedInput, InputAdornment, FormLabel, MenuItem, Button, Switch } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL, FILE_PATH } from '../../api/Config'
import { getCategoryAction } from '../../redux/Actions/CategoryAction'
import { createProductAction } from '../../redux/Actions/ProductActions'
import { uploadAction } from '../../redux/Actions/UploadActions'

const CreateProduct = () => {
    const [productName, setProductName] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState("")
    const [sku, setSku] = useState()
    const [description, setDescription] = useState()
    const [summary, setSummary] = useState()
    const [isSLider, setIsSlider] = useState(false)
    const [coverPhoto, setCoverPhoto] = useState()
    const [productPicture, setProductPicture] = useState([])

    const { categories } = useSelector((state) => state.category)
    const dispatch = useDispatch()


    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const uploadImage = (e) => {
        dispatch(uploadAction(e))
    }

    const createProduct = async () => {
        fetch(`${BASE_URL}Product/add`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: productName,
                price: price,
                description: description,
                summary: summary,
                sku: sku,
                categoryId: category,
                coverPhoto: coverPhoto,
                isSlider: isSLider,
                productPicture: productPicture
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
        })
    }

    const fileUploadHandler = async (event) => {
        // setCoverPhoto(event.target.files[0])
        const formData = new FormData();

        formData.append('Image', event.target.files[0])

        try {
            const res = await axios.post(`${BASE_URL}Product/uploadcover`, formData);
            setCoverPhoto(res.data.message)
        } catch (ex) {
            console.log(ex);
        }
    }

    const multiplePicture = async (event) => {
        let myImageList = []
        let imageList = {
            photoUrl : ""
        }
        for (let i = 0; i < event.target.files.length; i++) {
            let formData = new FormData();
            formData.append("Image", event.target.files[i])
            let res = await axios.post(`${BASE_URL}product/uploadimages`, formData)
            imageList = {
                photoUrl: res.data.message
            }
            myImageList.push(imageList)
        }

        setProductPicture(myImageList);

    }
    console.log(productPicture);

    useEffect(() => {
        dispatch(getCategoryAction())
    }, [dispatch, coverPhoto])



    return (
        <div className='container  my-5'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <TextField fullWidth id="outlined-basic" onChange={(e) => setProductName(e.target.value)} label="Name" variant="outlined" />
                        </div>
                        <div className="col-lg-4 my-2">
                            <OutlinedInput
                                id="outlined-basic"
                                label="SKU"
                                onChange={(e) => setPrice(e.target.value)}
                                endAdornment={<InputAdornment position="end">₼</InputAdornment>}
                                aria-describedby="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className="col-lg-4 my-2">
                            <TextField fullWidth
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={category}
                                onChange={handleChange}
                            >
                                {
                                    categories &&
                                    categories.map((cat) => (
                                        <MenuItem value={cat.id} key={cat.id}>
                                            {cat.name}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        </div>
                        <div className="col-lg-4 my-2">
                            <TextField fullWidth id="outlined-basic" onChange={(e) => setSku(e.target.value)} label="SKU" variant="outlined" />
                        </div>

                        <div className="col-lg-12 my-2">
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Summary"
                                multiline
                                rows={4}
                                onChange={(e) => setSummary(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 my-2">
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-12 my-2">
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                    onChange={fileUploadHandler}
                                />
                            </Button>

                            <div className="row">
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src={`${FILE_PATH}${coverPhoto}`} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 my-2">
                            <Button
                                variant="contained"
                                component="label"
                                color='success'
                                onClick={() => createProduct()}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                         
                            <div className="row">
                                {
                                    productPicture &&
                                    productPicture.map((picture) => (
                                        <div className="col-lg-3">
                                            <img className='img-fluid' src={`${FILE_PATH}${picture.photoUrl}`} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                    multiple
                                    onChange={multiplePicture}
                                />
                            </Button>
                        </div>

                        <div className="col-lg-12">
                            <FormLabel component="legend"> Is slider
                                <Switch onChange={(e) => setIsSlider(!isSLider)} />
                            </FormLabel>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct