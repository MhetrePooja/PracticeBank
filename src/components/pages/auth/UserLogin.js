import {Button,TextField , Box, Alert} from '@mui/material';
import { useState } from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin=()=>{
    const [error,setError]=useState({
                                    status:false,
                                    msg:"",
                                    type:""
    });
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData={
            username:data.get('username'),
            password:data.get('password')
        }
        console.log(actualData);
        axios.post("https://reqres.in/api/login",{actualData})
        .then(result=>{console.log(result)})
        .catch(err=>{console.log(err)})
       
        if(actualData.username && actualData.password){
             console.log(actualData);
             document.getElementById('login-form').reset();
             setError({status:'true', msg:'Login Successfully' , type:'success'});
             //navigate('/dashboard');

        }else{
             setError({status:'true', msg:'All fields are required' , type:'error'});
        }
    }
    return <>
    <Box component='form' noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
    <TextField margin='normal' required fullWidth id='username' name='username' label='UserName' />
    <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
    <Box textAlign='center'>
        <Button type='submit' varient='contained' sx={{mt:3,mb:2,px:5,fontWeight:'bold',backgroundColor: '#728FCE', color:'black'}}>Login</Button>
    </Box>
    <NavLink to='/'>Forget Password ? </NavLink>
    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </>

}
export default UserLogin;