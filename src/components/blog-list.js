import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import style from "../styles/bloglist.module.css"
import {Link} from "gatsby"

const Item = ({image, link, title, date, description}) => {
    return(
        <div className={style.blogitem}>
            <div className={style.image}>
                <Img fluid={image} alt={title}/>
            </div>
            <div className={style.content}>
                <h2>
                    <Link to={link}>{title}</Link>
                </h2>
                <p className={style.date}>{date}</p>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}

export default() => {
    const query = useStaticQuery(graphql `
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            date(formatString: "DD MMMM YY")
                            description
                            title
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
            <Item title={item.node.frontmatter.title} date={item.node.frontmatter.date} description={item.node.frontmatter.description} link={item.node.fields.slug} image={item.node.frontmatter.image.childImageSharp.fluid} key={item.node.id}/>
        )
    })

    return (
        <React.Fragment>
            {blogItems}
        </React.Fragment>
    )
}
