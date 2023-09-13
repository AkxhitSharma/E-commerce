import {useState , useContext, createContext, useEffect} from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'


const Authcontext = createContext()


const Authprovider=({children})=>{

    const [auth,setAuth] = useState({
        token:''
    })

    axios.defaults.headers.common['Authorization']=auth?.token
    useEffect(()=>{
        console.log(Cookies.get('authtoken'))
        const data = Cookies.get('authtoken')
        if(data){
            setAuth({...auth,token:data})
        }
        
        //eslint-disable-next-line
    },[])

    return(
        <Authcontext.Provider value={[auth,setAuth]}>
            {children}
        </Authcontext.Provider>
    )
}

const useAuth = ()=>useContext(Authcontext)

export {useAuth,Authprovider}