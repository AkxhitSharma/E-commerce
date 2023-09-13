import React, { useEffect, useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom';

const Spinner =()=>{

    const[time,setTime]=useState(5)
    const navigate = useNavigate()
    const location= useLocation()
    
    useEffect(()=>{
        const interval=setInterval(() => setTime((prev)=> prev-1), 1000)
        time===0 && navigate('/login' , {
            state: location.pathname
        })
        return ()=>clearInterval(interval)
        
    },[time,navigate,location])
    return(
            <div style={{position:'absolute' , top:'45%',left:'48%',width:'auto'}}>
                <div className="spinner-grow text-danger" role="status"></div>
                <div style={{marginTop:'1%',marginLeft:'-35%'}} className="">Please Log in continue...</div>
            </div>
    )
}
export default Spinner