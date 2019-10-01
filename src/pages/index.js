import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import BlogList from "../components/list.js"
import style from "../styles/intro.module.css"

export default ({data}) => {
    return(
        <Layout>
            <div className={style.intro}>
                <div className="container">
                    <img src={data.site.siteMetadata.logo} alt="Logo"/>
                    <h1>{data.site.siteMetadata.title}</h1>
                    <p>{data.site.siteMetadata.description}</p>
                </div>
            </div>
            <div className="blog-list container">
                <BlogList />
            </div>
        </Layout>
    )
}


export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                logo
            }
        }
    }
`
