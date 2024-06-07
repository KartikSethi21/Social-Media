import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Passwordeye = () => {
    const [showPassword,setShowPassword]=useState(false);
    const handleShowPassword=(e)=>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }
  return (
    <div>
        {
            showPassword ? <BsEyeSlash onClick={handleShowPassword}/>:<BsEye onClick={handleShowPassword}/>
        }
    </div>
  )
}

export default Passwordeye;