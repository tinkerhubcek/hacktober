import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import NavLinks from "./navlinks.js"

export default () => {
    const query = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    logo
                }
            }
        }
    `)
    return(
        <nav>
            <div className="image">
                <img src={query.site.siteMetadata.logo} alt="Logo"/>
            </div>
            <div className="links">
                <NavLinks />
            </div>
        </nav>
    )
}
