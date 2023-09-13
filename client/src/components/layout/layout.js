import React from 'react'
import Footer from './footer'
import Header from './header'
import {Helmet} from 'react-helmet'

const Layout = (prop)=>{
    return(
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="description" content={prop.description} />
                <meta name="keywords" content={prop.keywords}/>
                <title>{prop.title}</title>
            </Helmet>
            <Header />
            <main style={{minHeight:'82.7vh'}}>
                {prop.children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultprop={
    description: "This is a MERN stack application",
    keywords: " mern, mongodb, expressjs, reactjs, nodejs"
}

export default Layout