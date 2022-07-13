import { TextField, FormControl, Button, Avatar } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-4 m-auto">
                <Avatar className='m-auto'>H</Avatar>
                    <FormControl className='my-2' fullWidth>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField className='my-2' id="outlined-basic" type='password' label="Password" variant="outlined" />
                    </FormControl>
                    <FormControl fullWidth>
                        <Button className='my-2' variant="contained" color="primary">
                            Success
                        </Button>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Login