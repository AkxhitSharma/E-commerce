import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Cookies from 'js-cookie';

const Login= ()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const [auth,setAuth]= useAuth()
    
    const loginUser=(e)=>{

        e.preventDefault()
            axios.post("/api/auth/login",{
                email :  email, password:password
            }).then((res)=>{
                console.log("data is ", res.data)
                Cookies.set('authtoken',`${res.data.token}`,{expires:3 ,  path: ''})
                setAuth({
                    ...auth,
                    token:res.data.token
                })
                navigate(location.state||'/')

            })
            
    }


    return(
        <Layout title='LogIn - Ecommerce App'>
            <div className='register'>
                <h1 style={{color:'#ff2929', fontSize:'60px',marginTop:'9%', marginBottom:'2%'}}>Log In</h1>
                <form onSubmit={loginUser} className='p-4 test-start'>
                    <div className="mb-3">
                       <input type="email" placeholder='Enter your Email' value={email} required onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder='Enter your Password' value={password} required onChange={(e)=>{setpassword(e.target.value)}} className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary bg-danger border-0">Log In</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login;