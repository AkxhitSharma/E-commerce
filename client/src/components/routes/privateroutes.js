import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../spinner";

export default function Privateroute(){
    const [ok,setOk]=useState(false)
    const [auth]=useAuth()
    

    useEffect(()=>{
        const autocheck=async()=>{
            const res = await axios.get('/api/auth/test');
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token){autocheck()}
    },[auth.token])

    return ok?<Outlet/>:<Spinner/>
}