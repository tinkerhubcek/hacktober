import React from "react"
import Navbar from "./navbar.js"
import Head from "./head.js"
import Seo from "./seo.js"
import Footer from "./footer.js"

export default ({children, seo}) => {
    return(
        <div className="wrapper">
            <Seo {...seo}/>
            <Head />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
