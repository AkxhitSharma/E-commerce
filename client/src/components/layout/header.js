import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../../context/auth';



const Header =()=> {
    const [auth,setAuth]=useAuth()
    const handlelogout=()=>{
        setAuth({
            ...auth,
            token:''
        })
        Cookies.remove('authtoken')
    }
    return ( 
        <div className="bg-danger text-light p-2 text-center w-100 ">
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to='/' className="navbar-brand text-light"> E-commerce App</Link>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link text-light'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link text-light' >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category' className='nav-link text-light' >Category</NavLink>
                        </li>
                        {
                            !auth.token?(
                                <>
                                    <li className="nav-item">
                                        <NavLink to='/Signup' className='nav-link text-light' >SignUp</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/Login' className='nav-link text-light' >Login</NavLink>
                                    </li>
                                </>
                            ):(
                                <>
                                    <li className="nav-item">
                                        <NavLink to='/' onClick={handlelogout} className='nav-link text-light' >LogOut</NavLink>
                                    </li>
                                </>
                            )
                        }
                        <li className="nav-item">
                            <NavLink to='/cart' className='nav-link text-light' >Cart (0)</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
     );
}

export default Header;