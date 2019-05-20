const fetchOss = graphql => graphql(`
  query {
    allWordpressWpOss(filter: {status: { eq: "publish" } }) {
      nodes {
        path
        slug
        title
        type
      }
    }
  }
`).then(({ data: { allWordpressWpOss: { nodes } } }) => nodes)

const fetchPages = graphql => graphql(`
  query {
    allWordpressPage(filter: {status: { eq: "publish" } }) {
      nodes {
        content
        path
        slug
        type
        title
      }
    }
  }
`).then(({ data: { allWordpressPage: { nodes } } }) => nodes)

const fetchTalks = graphql => graphql(`
  query {
    allWordpressWpTalks(filter: {status: { eq: "publish" } }) {
      nodes {
        path
        slug
        title
        type
      }
    }
  }
`).then(({ data: { allWordpressWpTalks: { nodes } } }) => nodes)

module.exports = {
  fetchOss,
  fetchPages,
  fetchTalks
}
