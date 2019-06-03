const { 
  buildRelatedPosts,
  buildTags,
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
