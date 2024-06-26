import React, { useEffect, useState } from 'react'
import "./UpdateProfile.css"
import { Avatar, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { loadUser, updateProfile } from '../../Actions/User';
import Loader from '../Loader/Loader';

function UpdateProfile() {
    const {loading,error,user}=useSelector((state)=>state.user);
    const {loading:updateLoading,error:updateError,message}=useSelector((state)=>state.like);

    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email);
    const [avatar,setAvatar]=useState("");
    const [avatarPrev,setAvatarPrev]=useState(user.avatar.url);
    // console.log(name,email,avatar);
    
    const dispatch=useDispatch();

    const alert=useAlert();


    const submitHandler=async(e)=>{
       e.preventDefault();
       await dispatch(updateProfile(name,email,avatar));
       dispatch(loadUser());
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setAvatarPrev(Reader.result);
            setAvatar(Reader.result);
          }
        };
      };

      useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type:'clearErrors'});
        }
        if(updateError){
            alert.error(error);
            dispatch({type:'clearErrors'});
        }
        if(message){
            alert.success(message);
            dispatch({type:'clearMessage'});
        }
      },[dispatch,error,alert,updateError,message]);


  return (
    loading ? <Loader/>:(
    <div className='updateProfile'>
        <form action="" className='updateProfileForm' onSubmit={submitHandler}>

        <Typography variant='h3' style={{padding:"2vmax"}}>
                Social App
                </Typography>

                <Avatar src={avatarPrev} alt="User"
                sx={{height:"10vmax",width:"10vmax"}}
                />

                <input type="file" accept='image/*' onChange={handleImageChange} />

                <input
                  type="text"
                  value={name} 
                  className='updateProfileInputs'
                  placeholder='Name'
                  required
                  onChange={(e)=>setName(e.target.value)} />

                <input
                  type="email"
                  placeholder='Email'
                  className='updateProfileInputs'
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value) }
                />
    

                <Button disabled={updateLoading} type='submit'>
                    Update
                    </Button>
        </form>
    </div>
    )
  )
}

export default UpdateProfile;