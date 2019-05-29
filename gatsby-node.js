const { createPagesForPosts } = require('./src_node/utils')
const { fetchAllPosts, fetchSiteInfo } = require('./src_node/api')

exports.createPages = ({ graphql, actions: { createPage } }) =>
  Promise.all([
      fetchAllPosts(graphql),
      fetchSiteInfo(graphql),
    ])
    .then(([posts, siteInfo]) => createPagesForPosts(createPage, posts, siteInfo))
    .catch(err => console.log(err))
