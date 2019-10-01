import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import style from "../styles/bloglist.module.css"

const Item = ({image, link, title, date, description, sem, department}) => {
    return(
        <div className={style.item}>
            <div className={style.image}>
                <Img fluid={image} alt={title}/>
            </div>
            <div className={style.content}>
                <h2>
                    <Link to={link}>{title}</Link>
                </h2>
                <p className={style.batch}>
                    <span>{department}</span>, 
                    <span>{sem}</span><sup>th</sup> Sem
                </p>
                <p className={style.date}>{date}</p>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}

export default() => {
    const query = useStaticQuery(graphql `
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/data/"}}) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            date(formatString: "DD MMMM YY")
                            description
                            title
                            department
                            sem
                            image{
                                childImageSharp {
                                    fluid(maxWidth: 600){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `);

    const blogItems = [];

    query.allMarkdownRemark.edges.forEach(function(item,index){
        blogItems.push(
            <Item title={item.node.frontmatter.title} date={item.node.frontmatter.date} description={item.node.frontmatter.description} link={item.node.fields.slug} image={item.node.frontmatter.image.childImageSharp.fluid} key={item.node.id} department={item.node.frontmatter.department} sem={item.node.frontmatter.sem}/>
        )
    })

    return (
        <React.Fragment>
            {blogItems}
        </React.Fragment>
    )
}
