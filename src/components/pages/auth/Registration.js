import {Button,TextField , Box, Alert, FormControlLabel, Checkbox} from '@mui/material';
//import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Registration = ()=>{
    const [error,setError]=useState({
        status:false,
        msg:"",
        type:""
});
//const navigate=useNavigate();

    const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const actualData={
    username:data.get('username'),
    email:data.get('email'),
    password:data.get('password'),
    password_confirmation:data.get('password_confirmation'),
    tc:data.get('tc'),
    }

    if(actualData.username && actualData.email && actualData.password && actualData.tc !==null){
        if(actualData.password=== actualData.password_confirmation){
            console.log(actualData);
            document.getElementById('register-form').reset();
            setError({status:'true', msg:'Registration Successfully' , type:'success'});
            //navigate('/login');
        }else{
            setError({status:'true', msg:'Password and confirmed pasword does not matched' , type:'error'});
        }
   

    }else{
    setError({status:'true', msg:'All fields are required' , type:'error'});
    }
    }
    return <>
    <Box component='form' noValidate sx={{mt:1}} id="register-form" onSubmit={handleSubmit}>
    <TextField margin='normal' required fullWidth id='username' name='username' label='UserName' />
    <TextField margin='normal' required fullWidth id='email' name='email' label='Email-Id' />
    <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
    <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
    <FormControlLabel control={<Checkbox  value='agree'  color='primary' name='tc' id='tc'/>}label="I agree to terms and conditions"/>
    <Box textAlign='center'>
        <Button type='submit' varient='contained' sx={{mt:3,mb:2,px:5,fontWeight:'bold',backgroundColor: '#728FCE', color:'black'}}>Register</Button>
    </Box>
   
    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </>
}

export default Registration;