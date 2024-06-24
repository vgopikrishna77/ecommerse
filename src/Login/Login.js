import React from 'react'
import './Login.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
   async function loginuser(){
        const user={email,password}
        //console.log(user)
      const response= await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,user)
    console.log(response)
    if(response.status===200){
        navigate('/')
        localStorage.setItem("userRole",response.data.role)
        localStorage.setItem("userId",response.data.userId)
    }
}

    return (
        <div className='login-container'>
             <div className='form-group'>
                <label>Email</label> 
                <input value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>

            </div>
            <div className='form-group'>
                <label>password</label> 
                <input value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>

            </div>
            <button onClick={loginuser}>Login</button>
        </div>
    )
}

