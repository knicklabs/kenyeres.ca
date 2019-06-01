const { createPagesForWPContent } = require('./src_node/utils')
const { fetchWPContent } = require('./src_node/api')

exports.createPages = ({ graphql, actions: { createPage } }) =>
  fetchWPContent(graphql)
    .then(content => createPagesForWPContent(createPage, content))
    .catch(err => console.log(err))
