import React from "react"
import Layout from "../components/layout"
import BlogList from "../components/blog-list"

export default () => {
    const seo = {
        title: "Blog",
        description: "Blog of Meenachil hacks"
    }
    return(
        <Layout seo={seo}>
            <div className="container">
                <BlogList />
            </div>
        </Layout>
    )
}
