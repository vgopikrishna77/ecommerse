import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Signup() {
   // console.log(process.env.REACT_APP_BACKEND_URL)
   const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')

    
    function signUp(){
        const user={name,email,password,mobile}
        console.log(user)
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,user).then((res)=>
        {console.log(res);
            if(res.status===201){
                console.log(res.data);
                navigate('/')
                
            }
            else if( res.status===400) {
                console.log("user initiated");
                console.log(res.data);
                navigate('/')
                
            } else {
                console.log("error entered");
                
            }
        }).catch((err)=>console.log(err ))
    }

    
    return (
        <div className='signup-container'>
            <div className='form-group'>
                <label>Name</label>
                <input value={name}
                 onChange={(e)=>setName(e.target.value)}/>

            </div>
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
            <div className='form-group'>
                <label>mobile</label>
                <input value={mobile}
                 onChange={(e)=>setMobile(e.target.value)}/>

            </div>
            <button onClick={signUp}>submit</button>

        </div>
    )
}

export default Signup;
