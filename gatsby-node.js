const { createPagesForPosts } = require('./src_node/utils')
const { fetchAllPosts } = require('./src_node/api')

exports.createPages = ({ graphql, actions: { createPage } }) =>
  fetchAllPosts(graphql).then(createPagesForPosts.bind(this, createPage))
