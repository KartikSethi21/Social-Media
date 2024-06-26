import React, { useEffect, useState } from 'react'
import "./Register.css"
import { Avatar, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Actions/User';
import { useAlert } from 'react-alert';
function Register() {

    const [name,setName]=useState(" ");
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState("");
    const [avatar,setAvatar]=useState("");
    const dispatch=useDispatch();

    const alert=useAlert();

    const {loading,error}=useSelector((state)=>state.user);

    const submitHandler=async(e)=>{
        e.preventDefault();
        // console.log(name,email,password,avatar);
        dispatch(registerUser(name,email,password,avatar));
    };


      const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setAvatar(Reader.result);
          }
        };
      };

      useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type:'clearErrors'});
        }
      },[dispatch,error,alert]);


  return (
    <div className='register'>
        <form  className='registerForm' onSubmit={submitHandler}>

        <Typography variant='h3' style={{padding:"2vmax"}}>
                Social App
                </Typography>

                <Avatar src={avatar} alt="User" sx={{height:"10vmax",width:"10vmax"}}/>

                <input type="file" accept='image/*' onChange={handleImageChange} />

                <input
                 type="text"
                 name={name} 
                className='registerInputs'
                placeholder='Name'
                required
                onChange={(e)=>setName(e.target.value)} />

                <input
                  type="email"
                  placeholder='Email'
                  className='registerInputs'
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value) }
                />
                <input  type="password"
                  placeholder='Password'
                  className='registerInputs'
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
    
                  <Link to="/">
                   <Typography>
                   Already Signed up ? Login Now 
                   </Typography>
                   </Link>

                <Button disabled={loading} type='submit'>
                    Sign up</Button>
        </form>
    </div>
  )
}

export default Register