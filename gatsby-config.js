module.exports = {
  siteMetadata: {
    title: `Nickolas Kenyeres`,
    description: `Nickolas Kenyeres is a full-stack software developer with more than 10 years of experience. He specializes in JavaScript and React application development.`,
    author: `@knicklabs`,
  },
  plugins: [
    // A Gatsby plugin for styled-components with built-in server-side 
    // rendering support.
    `gatsby-plugin-styled-components`,

    // This plugin intercepts all local links that have not been created in React 
    // using gatsby-link, and replaces their behavior with that of the gatsby-link 
    // navigate.
    // See: https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/
    `gatsby-plugin-catch-links`,

    // React Helmet is a component which lets you control your document head using 
    // their React component. With this plugin, attributes you add in their component
    // will get added to the static HTML pages Gatsby builds.
    // See: https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
    `gatsby-plugin-react-helmet`,

    // Sets the lang attribute on the HTML tag
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },

    // Source plugin for sourcing data into your Gatsby application from your 
    // local filesystem.
    // See: https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Source plugin for pulling data into Gatsby from WordPress sites using the 
    // WordPress REST API.
    // See: https://www.gatsbyjs.org/packages/gatsby-source-wordpress/
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'wp.kenyeres.ca',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "/*/*/menus",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/talks",
          "/*/*/oss",
          "**/tags",
        ],
        searchAndReplaceContentUrls: {
          sourceUrl: "https://wp.kenyeres.ca",
          replacementUrl: process.env.NODE_ENV === 'development' 
            ? "http://localhost:8000" 
            : "https://www.kenyeres.ca",
        },
      },
    },

    // Creates ImageSharp nodes from image types that are supported by the 
    // Sharp image processing library and provides fields in their GraphQL 
    // types for processing your images in a variety of ways including resizing, 
    // cropping, and creating responsive images.
    // See: https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
    `gatsby-transformer-sharp`,

    // Exposes several image processing functions built on the Sharp image 
    // processing library.
    // See: https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
    `gatsby-plugin-sharp`,

    // The web app manifest (part of the PWA specification) enabled by this 
    // plugin allows users to add your site to their home screen on most 
    // mobile browsers.
    // See: https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
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
