const path = require('path')

const component = path.resolve('src/templates/PageTemplate.js')

/**
 * Iterate over an array of posts and create
 * a page for each one.
 * @param {function} createPage
 * @param {Object}   content
 * @param {Object}   content.options
 * @param {Array}    content.posts
 */
module.exports = (createPage, { options, posts }) =>
  posts.forEach(post => createPage({
    path: post.path,
    component,
    context: {
      options,
      post,
    },
  }))
