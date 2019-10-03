module.exports = {
    siteMetadata:{
        title: "Hacktober Fest",
        description: "Celebrate Hacktoberfest, CEK Style",
        logo: "/images/logo.png"
    },
    plugins:[
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-yaml`,
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "contents",
                path: `${__dirname}/contents/`
            }
        },
        "gatsby-plugin-react-helmet"
    ]
}
