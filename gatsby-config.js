module.exports = {
    siteMetadata:{
        title: "Meenhacks",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        logo: "/images/logo.png"
    },
    plugins:[
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
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
