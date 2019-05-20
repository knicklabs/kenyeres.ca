module.exports = {
  siteMetadata: {
    title: `Nickolas Kenyeres`,
    description: `Nickolas Kenyeres is a full-stack software developer with more than 10 years of experience. He specializes in JavaScript and React application development.`,
    author: `@knicklabs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'wp.kenyeres.ca',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/talks",
          "/*/*/oss",
        ],
        searchAndReplaceContentUrls: {
          sourceUrl: "https://wp.kenyeres.ca",
          replacementUrl: process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://www.kenyeres.ca",
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
