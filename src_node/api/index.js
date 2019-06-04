const { GatsbyImageSharpFixed } = require('gatsby-image')
const { 
  buildRelatedPosts,
  removeUnlinkedPosts 
} = require('./utils')

exports.fetchWPContent = graphql => graphql(`
  query {
    allWordpressWpOss(filter: {status: { eq: "publish" } }) {
      nodes {
        date
        path
        slug
        title
        type
        wordpress_id
        acf {
          lanuage
          supported
          repository
          repository_url
          package_manager
          package_url
          description
        }
      }
    }
    allWordpressPage(filter: {status: { eq: "publish" } }) {
      nodes {
        acf {
          posts {
            wordpress_id
          }
        }
        content
        date
        path
        slug
        type
        title
        wordpress_id
        yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_metadesc
          yoast_wpseo_canonical
          yoast_wpseo_twitter_title
          yoast_wpseo_twitter_description
          yoast_wpseo_twitter_image {
            source_url
          }
          yoast_wpseo_facebook_title
          yoast_wpseo_facebook_description
          yoast_wpseo_facebook_image {
            source_url
          }
        }
        featured_media {
          alt_text
          source_url
          localFile {
            childImageSharp {
              fixed(width: 400, height: 400) {
                tracedSVG
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
    allWordpressPost(filter: { status: { eq: "publish" } }) {
      nodes {
        content
        date
        path
        slug
        tags {
          name
          slug
          wordpress_id
        }
        title
        type
        wordpress_id
        yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_metadesc
          yoast_wpseo_canonical
          yoast_wpseo_twitter_title
          yoast_wpseo_twitter_description
          yoast_wpseo_twitter_image
          yoast_wpseo_facebook_title
          yoast_wpseo_facebook_description
          yoast_wpseo_facebook_image
        }
      }
    }
    allWordpressWpTalks(filter: {status: { eq: "publish" } }) {
      nodes {
        date
        path
        slug
        title
        type
        wordpress_id
        acf {
          date
          location
          description
          video_url
          event_url
          slides_url
          sample_code_url
        }
      }
    }
    allWordpressTag {
      nodes {
        wordpress_id
        name
        slug
      }
    }
    allWordpressWpApiMenusMenusItems {
      nodes {
        description
        name
        slug
        items {
          classes
          description
          order
          wordpress_id
          target
          title
          url
        }
      }
    }
    wordpressSiteMetadata {
      description
      name
      url
      home
    }
  }
`).then(({
  data: {
    allWordpressWpOss: { nodes: oss },
    allWordpressPage: { nodes: pages },
    allWordpressPost: { nodes: posts },
    allWordpressWpTalks: { nodes: talks },
    allWordpressTag: { nodes: tags },
    allWordpressWpApiMenusMenusItems: { nodes: menus },
    wordpressSiteMetadata: siteInfo,
  }
}) => ({
  options: {
    ...siteInfo,
    menus,
  },
  posts: removeUnlinkedPosts(
    buildRelatedPosts([
      ...oss,
      ...pages,
      ...posts,
      ...talks,
    ])
  ),
}))
