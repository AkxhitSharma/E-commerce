import React,{useState} from 'react';
import Layout from '../../components/layout/layout';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/auth';
import Cookies from 'js-cookie';

const SignUp= ()=>{
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')
    const [phone,setphone]=useState('')
    const [auth,setAuth]= useAuth()
    const navigate = useNavigate()

    const signupuser=(e)=>{
        e.preventDefault()
        if(password.length < 8){
            const passerror = document.createElement('div');
            passerror.className="chek"  ;
            passerror.innerText='password should be atleast 8 characters long'
            if(!document.querySelector('.chek')){
                document.getElementById('pass').appendChild(passerror)
            }
            return
        }
        
        if(confirmpassword === password){
            axios.post("/api/auth/register",{
                name:name , email :  email   , mobile:phone    , password:password
            }).then((res)=>{
                console.log("data is ", res)
                Cookies.set('authtoken',`${res.data.token}`,{expires:3 ,  path: ''})
                setAuth({
                    ...auth,
                    token:res.data.token
                })
                navigate('/dashboard')

            })
            

        }else{
            const passerror = document.createElement('div');
            passerror.className="chek"  ;
            passerror.innerText='Input does not matches password input'
            if(!document.querySelector('.chek')){
                document.getElementById('confirmpass').appendChild(passerror)
            }
        }
    }

    const check=()=>{
        if(document.querySelector('.chek')){
            const alertpass = document.querySelector('.chek')
            if(document.getElementById('confirmpass').children.length >=2){
                document.getElementById('confirmpass').removeChild(alertpass)
            }else{
                document.getElementById('pass').removeChild(alertpass)
            }
            
        }
    }

    return(
        <Layout title='SignUp - Ecommerce App'>
            <div className='register'>
                <h1 style={{color:'#ff2929', fontSize:'60px',marginTop:'5%', marginBottom:'2%'}}>Sign Up</h1>
                <form className='p-4 test-start' onSubmit={signupuser}>
                    <div className="mb-3">
                        <input type="name" placeholder='Enter your Full Name' value={name} required onChange={(e)=>{setname(e.target.value)}} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder='Enter your Email' value={email} required onChange={(e)=>{setemail(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3" id='pass' onClick={check}>
                        <input type="password" placeholder='Enter your Password' value={password} required onChange={(e)=>{setpassword(e.target.value)}} className="form-control" id="password" />
                    </div>
                    <div className="mb-3" id='confirmpass' onClick={check}>
                        <input type="password" placeholder='confirm your Password' value={confirmpassword} required onChange={(e)=>{setconfirmpassword(e.target.value)}} className="form-control" id="confirmpassword" />
                    </div>
                    <div className="mb-4">
                        <input type="phone" placeholder='Enter your Mobile Number' value={phone} onChange={(e)=>{setphone(e.target.value)}} className="form-control" id="phone" />
                    </div>
                    <button type="submit" className="btn btn-primary bg-danger border-0">Sign Up</button>
                </form>

            </div>
        </Layout>
    )
}

export default SignUp;