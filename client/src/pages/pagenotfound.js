import React from 'react';
import Layout from '../components/layout/layout';

const Pagenotfound= ()=> {
    return ( 
        <Layout title={'404'}>
            <h1 style={{position:'absolute',top:'30%',left:'40%', color:'#ff2929' , paddingRight:'10%' , fontSize:'150px'}}>404</h1>
            <h2 style={{position:'absolute',top:'53%',left:'31%', color:'#ff2929' , paddingRight:'10%' , fontSize:'30px'}}>Page you are looking for does not exist !!!</h2>
        </Layout>
     );
}

export default Pagenotfound