const { 
  buildRelatedPosts, 
  flattenPosts, 
  removeUnlinkedPosts 
} = require('./utils')

// Fetch all posts of the `oss` type.
const fetchAllOss = graphql => graphql(`
  query {
    allWordpressWpOss(filter: {status: { eq: "publish" } }) {
      nodes {
        path
        slug
        title
        type
        wordpress_id
      }
    }
  }
`).then(({ data: { allWordpressWpOss: { nodes } } }) => nodes)

// Fetch all pages.
const fetchAllPages = graphql => graphql(`
  query {
    allWordpressPage(filter: {status: { eq: "publish" } }) {
      nodes {
        acf {
          posts {
            wordpress_id
          }
        }
        content
        path
        slug
        type
        title
        wordpress_id
      }
    }
  }
`).then(({ data: { allWordpressPage: { nodes } } }) => nodes)

// Fetch all posts.
const fetchAllPosts = graphql => graphql(`
  query {
    allWordpressPost(filter: { status: { eq: "publish" } }) {
      nodes {
        content
        path
        slug
        title
        type
        wordpress_id
      }
    }
  }
`).then(({ data: { allWordpressPost: { nodes } } }) => nodes)

// Fetch all posts of the `talks` type.
const fetchAllTalks = graphql => graphql(`
  query {
    allWordpressWpTalks(filter: {status: { eq: "publish" } }) {
      nodes {
        path
        slug
        title
        type
        wordpress_id
      }
    }
  }
`).then(({ data: { allWordpressWpTalks: { nodes } } }) => nodes)

const postTypesApi = {
  fetchAllOss,
  fetchAllPages,
  fetchAllPosts,
  fetchAllTalks,
}

/**
 * Fetch all posts of all types.
 * @param  {function} graphql
 * @return {Array}
 */
exports.fetchAllPosts = graphql =>
  Promise
    .all(Object.keys(postTypesApi).map(method => postTypesApi[method](graphql)))
    .then(flattenPosts)
    .then(buildRelatedPosts)
    .then(removeUnlinkedPosts)

exports.fetchSiteInfo = graphql => graphql(`
  query {
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
`)
.then(({ data: { allWordpressWpApiMenusMenusItems: { nodes: menus }, wordpressSiteMetadata } } ) => ({
  ...wordpressSiteMetadata,
  menus: menus.map(menu => ({
    ...menu,
    items: menu.items.sort((a, b) => a.order - b.order),
  }))
}))
