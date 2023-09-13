import React from 'react';
import Layout from '../components/layout/layout';
import about from '../assets/about-us.png'

const Aboutpage= ()=> {
    return ( 
        <Layout title={"About- Ecommerce app"}>
            <div className='d-flex'>
                <img src={about}
                    alt='about page'
                    style={{width:'40%', marginLeft:'5%' , marginTop:'6%',marginBottom:'0.5%'}}/>
                <h1 style={{marginTop:'28%',marginLeft:'1%', color:'#ff2929' , paddingRight:'9%' , fontSize:'80px'}}>
                    ABOUT
                    <div style={{float:'right',marginTop:'1%', color:'#ff2929', fontSize:'20px'}}>This is an E-commerce web application developed by Akshit Sharma. This project's main purpose is to show case my skills and eligibilities.</div></h1>
                
            </div>
        </Layout>
     );
}

export default Aboutpage