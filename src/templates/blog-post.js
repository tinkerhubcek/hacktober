import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import style from "../styles/blog.module.css"

export default ({data}) => {
    let seo = {
        title: data.markdownRemark.frontmatter.title,
        description: data.markdownRemark.frontmatter.description
    }
    return(
        <Layout seo={seo}>
            <div className={style.intro}>
                <div className="container">
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                    <p>{data.markdownRemark.frontmatter.date}</p>
                </div>
            </div>
            <div className="container">
                <div className={style.post} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            id
            frontmatter{
                title
                date(formatString: "DD MMMM YY")
                description
            }
        }
    }
`
