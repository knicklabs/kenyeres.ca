const path = require('path')

const api = require('./src/api')

const DEFAULT_TYPE = 'page'
const getPageTemplate = (type = DEFAULT_TYPE) => `src/templates/${type}Template.js`

exports.createPages = ({ graphql, actions: { createPage } }) => Promise.all(
  Object.keys(api).map(method => api[method](graphql))
).then((...postSets) => postSets.forEach(
  postSet => postSet.forEach(
    posts => posts.filter(( { path }) => !!path).forEach(post => createPage({
      path: post.path,
      component: path.resolve(getPageTemplate(post.type)),
      context: {
        post,
      }
    }))
  )
))
