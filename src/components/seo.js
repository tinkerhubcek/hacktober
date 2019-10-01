import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default ({title, description}) => {
    const query = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                    description
                    logo
                }
            }
        }
    `)

    const _title = title || query.site.siteMetadata.title;
    const _description = description || query.site.siteMetadata.description;

    return(
        <Helmet>
            <title>{_title}</title>
            <meta name="description" content={_description}/>
        </Helmet>
    )
}
