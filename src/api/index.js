const fetchOss = graphql => graphql(`
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

const fetchPages = graphql => graphql(`
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

const fetchPosts = graphql => graphql(`
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

const fetchTalks = graphql => graphql(`
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

module.exports = {
  fetchOss,
  fetchPages,
  fetchPosts,
  fetchTalks
}
